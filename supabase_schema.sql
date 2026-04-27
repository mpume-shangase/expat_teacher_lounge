-- Profiles table (extends auth.users)
create table if not exists profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  full_name text,
  avatar_url text,
  role text default 'free' check (role in ('free', 'premium', 'admin')),
  stripe_customer_id text unique,
  subscription_status text default 'inactive',
  subscription_plan text,
  subscription_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- Hub content tables
create table if not exists countries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  flag_emoji text,
  is_active boolean default true,
  order_index integer default 0,
  created_at timestamptz default now()
);

create table if not exists hub_sections (
  id uuid primary key default gen_random_uuid(),
  country_id uuid references countries(id) on delete cascade,
  title text not null,
  slug text not null,
  description text,
  order_index integer default 0,
  icon text,
  created_at timestamptz default now()
);

create table if not exists hub_articles (
  id uuid primary key default gen_random_uuid(),
  section_id uuid references hub_sections(id) on delete cascade,
  title text not null,
  slug text not null,
  content text,
  last_updated timestamptz default now(),
  is_published boolean default true,
  order_index integer default 0,
  created_at timestamptz default now()
);

create table if not exists user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  article_id uuid references hub_articles(id) on delete cascade,
  completed_at timestamptz default now(),
  unique(user_id, article_id)
);

-- RLS Policies
alter table profiles enable row level security;
alter table user_progress enable row level security;
alter table countries enable row level security;
alter table hub_sections enable row level security;
alter table hub_articles enable row level security;

-- Profiles: users can read and update their own
create policy "Users can view own profile"
  on profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update using (auth.uid() = id);

-- Countries: everyone can read active countries
create policy "Anyone can view active countries"
  on countries for select using (is_active = true);

-- Hub sections: everyone can read
create policy "Anyone can view hub sections"
  on hub_sections for select using (true);

-- Hub articles: everyone can read published articles
create policy "Anyone can view published articles"
  on hub_articles for select using (is_published = true);

-- User progress: users manage their own
create policy "Users can view own progress"
  on user_progress for select using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on user_progress for insert with check (auth.uid() = user_id);

create policy "Users can delete own progress"
  on user_progress for delete using (auth.uid() = user_id);

-- Seed Qatar as first country
insert into countries (name, slug, flag_emoji, is_active, order_index)
values ('Qatar', 'qatar', '🇶🇦', true, 1)
on conflict (slug) do nothing;

-- Seed Qatar hub sections
do $$
declare qatar_id uuid;
begin
  select id into qatar_id from countries where slug = 'qatar';

  insert into hub_sections (country_id, title, slug, description, order_index, icon) values
    (qatar_id, 'Teaching Qualifications', 'qualifications', 'Requirements to teach in Qatar by nationality and qualification type', 1, '🎓'),
    (qatar_id, 'Document Attestation', 'attestation', 'Complete guide to getting your documents attested for Qatar', 2, '📋'),
    (qatar_id, 'Immigration & Visa', 'immigration', 'Residence permit, QID, and immigration procedures', 3, '🛂'),
    (qatar_id, 'Interview Preparation', 'interview-prep', 'How to prepare for international school interviews in Qatar', 4, '💼'),
    (qatar_id, 'Housing & Accommodation', 'housing', 'Neighbourhoods, compounds, and finding accommodation in Doha', 5, '🏠'),
    (qatar_id, 'Cost of Living', 'cost-of-living', 'Salary benchmarks, expenses, and financial planning for Qatar', 6, '💰'),
    (qatar_id, 'School System', 'school-system', 'Understanding Qatar''s international school landscape', 7, '🏫'),
    (qatar_id, 'First 90 Days', 'first-90-days', 'Everything you need to do in your first three months in Doha', 8, '📅')
  on conflict do nothing;
end $$;

-- Seed Document Attestation Articles
do $$
declare
  section_id uuid;
begin
  select hs.id into section_id
  from hub_sections hs
  join countries c on c.id = hs.country_id
  where c.slug = 'qatar' and hs.slug = 'attestation';

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values
  (
    section_id,
    'What is document attestation and why do you need it?',
    'what-is-attestation',
    'Document attestation is the process of verifying that your qualifications and personal documents are genuine and recognised by the Qatari government. Every teacher working in Qatar must have their documents attested before they can obtain a residence permit or begin teaching officially.

The attestation chain typically works as follows: your documents are first verified by the issuing institution (your university or government department), then authenticated by your country''s foreign affairs department (FCDO in the UK, DIRCO in South Africa, Global Affairs Canada for Canadian citizens), and finally legalised by the Qatari embassy in your home country.

This process takes time — typically six to twelve weeks from start to finish — and must be completed before you can apply for your Qatar ID. Starting early is not optional. It is essential.',
    1
  ),
  (
    section_id,
    'The attestation process for UK teachers',
    'uk-attestation',
    'UK teachers must complete a three-step attestation process before their documents are recognised in Qatar.

Step 1 — University verification: Contact your university''s registry department and request an official letter confirming your degree. Some universities provide apostille services directly. Budget two to four weeks for this step.

Step 2 — FCDO legalisation: Submit your degree certificate and university letter to the UK Foreign, Commonwealth and Development Office (FCDO) for legalisation. This can be done by post or through an approved agent. Current processing time is approximately three weeks. Fee: approximately £30-50 per document.

Step 3 — Qatari Embassy legalisation: Submit your FCDO-legalised documents to the Embassy of Qatar in London. Address: 1 South Audley Street, London W1K 1NB. Current fee: approximately £30 per document. Processing time: five to ten working days.

Documents required: degree certificate, teaching qualification, DBS certificate (Enhanced), birth certificate, marriage certificate if applicable.',
    2
  ),
  (
    section_id,
    'The attestation process for South African teachers',
    'south-african-attestation',
    'South African teachers follow a similar attestation chain to UK teachers, with some important differences in the government departments involved.

Step 1 — SAQA verification: The South African Qualifications Authority (SAQA) must verify your qualification. Submit your degree certificate to SAQA for evaluation. Processing time: four to six weeks. This step is mandatory and cannot be skipped.

Step 2 — DIRCO authentication: Submit your SAQA-verified documents to the Department of International Relations and Cooperation (DIRCO) in Pretoria for authentication. Address: OR Tambo Building, 460 Soutpansberg Road, Rietondale, Pretoria. Processing time: approximately two weeks.

Step 3 — Qatari Embassy legalisation: Submit your DIRCO-authenticated documents to the Embassy of Qatar in Pretoria. Address: 1077 Arcadia Street, Hatfield, Pretoria. Current fee: approximately R500 per document. Processing time: five to ten working days.

Important note for South African teachers: Begin this process at least four months before your intended start date. The SAQA step alone can take six weeks during busy periods.',
    3
  )
  on conflict do nothing;
end $$;
