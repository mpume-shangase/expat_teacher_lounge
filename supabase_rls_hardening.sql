-- ============================================================
-- RLS HARDENING MIGRATION
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- 1. Tighten the profiles table constraints
-- Ensure subscription_status only holds known values
alter table profiles
  drop constraint if exists profiles_subscription_status_check;

alter table profiles
  add constraint profiles_subscription_status_check
  check (subscription_status in ('inactive', 'active', 'cancelled', 'past_due'));

-- 2. Drop any existing conflicting policies before recreating
drop policy if exists "Users can view own profile"    on profiles;
drop policy if exists "Users can update own profile"  on profiles;
drop policy if exists "Users can insert own profile"  on profiles;

-- 3. Profiles — strict per-user isolation
--    SELECT: only your own row
create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);

--    INSERT: only your own row (mirrors the SECURITY DEFINER trigger but
--    adds belt-and-suspenders at the RLS layer)
create policy "Users can insert own profile"
  on profiles for insert
  with check (auth.uid() = id);

--    UPDATE: only your own row, AND you cannot promote yourself to admin/premium
--    (role and subscription changes must go through the service-role webhook)
create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id)
  with check (
    auth.uid() = id
    and role = (select role from profiles where id = auth.uid())
    and subscription_status = (select subscription_status from profiles where id = auth.uid())
    and subscription_plan is not distinct from (select subscription_plan from profiles where id = auth.uid())
  );

-- 4. user_progress — drop and recreate to be explicit
drop policy if exists "Users can view own progress"   on user_progress;
drop policy if exists "Users can insert own progress" on user_progress;
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

-- 5. Lock down hub content — anon reads are fine but no one can write
--    via the client (all writes happen through the service role)
drop policy if exists "Anyone can view active countries"   on countries;
drop policy if exists "Anyone can view hub sections"       on hub_sections;
drop policy if exists "Anyone can view published articles" on hub_articles;

create policy "Anyone can view active countries"
  on countries for select
  using (is_active = true);

create policy "Anyone can view hub sections"
  on hub_sections for select
  using (true);

create policy "Anyone can view published articles"
  on hub_articles for select
  using (is_published = true);

-- Explicitly deny all writes from authenticated users on content tables
-- (service role bypasses RLS, so webhooks/admin still work)
create policy "No client writes on countries"
  on countries for all
  using (false)
  with check (false);

create policy "No client writes on hub_sections"
  on hub_sections for all
  using (false)
  with check (false);

create policy "No client writes on hub_articles"
  on hub_articles for all
  using (false)
  with check (false);

-- ============================================================
-- Verify RLS is enabled on every table (idempotent)
-- ============================================================
alter table profiles      enable row level security;
alter table user_progress enable row level security;
alter table countries     enable row level security;
alter table hub_sections  enable row level security;
alter table hub_articles  enable row level security;
