-- ============================================================
-- RLS HARDENING MIGRATION
-- In Supabase: SQL Editor → New Query → paste this entire file → Run
-- ============================================================

-- Enable RLS on every table (idempotent)
alter table profiles      enable row level security;
alter table user_progress enable row level security;
alter table countries     enable row level security;
alter table hub_sections  enable row level security;
alter table hub_articles  enable row level security;

-- ── profiles ────────────────────────────────────────────────────────────────

drop policy if exists "Users can view own profile"   on profiles;
drop policy if exists "Users can insert own profile" on profiles;
drop policy if exists "Users can update own profile" on profiles;

create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);

-- Trigger already handles INSERT, but be explicit at the RLS layer too
create policy "Users can insert own profile"
  on profiles for insert
  with check (auth.uid() = id);

-- Users can update display fields only.
-- role / subscription_status / stripe_customer_id are locked by a trigger below.
create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

-- Trigger: prevent any client from self-promoting role or subscription.
-- auth.uid() is NULL when called by the service role (webhooks), so
-- the Stripe webhook can still update role/subscription without restriction.
create or replace function block_role_escalation()
returns trigger
language plpgsql
security invoker
as $$
begin
  if auth.uid() is not null then
    if new.role               is distinct from old.role
    or new.subscription_status is distinct from old.subscription_status
    or new.subscription_plan   is distinct from old.subscription_plan
    or new.stripe_customer_id  is distinct from old.stripe_customer_id then
      raise exception 'Permission denied: cannot modify subscription or role fields directly.';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_block_role_escalation on profiles;
create trigger trg_block_role_escalation
  before update on profiles
  for each row execute function block_role_escalation();

-- ── user_progress ────────────────────────────────────────────────────────────

drop policy if exists "Users can view own progress"   on user_progress;
drop policy if exists "Users can insert own progress" on user_progress;
drop policy if exists "Users can update own progress" on user_progress;
drop policy if exists "Users can delete own progress" on user_progress;

create policy "Users can view own progress"
  on user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete own progress"
  on user_progress for delete
  using (auth.uid() = user_id);

-- ── hub content (read-only for everyone; writes only via service role) ────────

drop policy if exists "Anyone can view active countries"   on countries;
drop policy if exists "Anyone can view hub sections"       on hub_sections;
drop policy if exists "Anyone can view published articles" on hub_articles;
-- Remove any leftover blanket-deny policies from a previous attempt
drop policy if exists "No client writes on countries"    on countries;
drop policy if exists "No client writes on hub_sections" on hub_sections;
drop policy if exists "No client writes on hub_articles" on hub_articles;

create policy "Anyone can view active countries"
  on countries for select
  using (is_active = true);

create policy "Anyone can view hub sections"
  on hub_sections for select
  using (true);

create policy "Anyone can view published articles"
  on hub_articles for select
  using (is_published = true);

-- ── subscription_status constraint ───────────────────────────────────────────

alter table profiles
  drop constraint if exists profiles_subscription_status_check;

alter table profiles
  add constraint profiles_subscription_status_check
  check (subscription_status in ('inactive', 'active', 'cancelled', 'past_due'));
