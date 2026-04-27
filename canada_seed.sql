-- Add Canada as second country
insert into countries (name, slug, flag_emoji, is_active, order_index)
values ('Canada', 'canada', '🇨🇦', true, 2)
on conflict (slug) do nothing;

-- Add Canada hub sections
do $$
declare canada_id uuid;
begin
  select id into canada_id from countries where slug = 'canada';

  insert into hub_sections
    (country_id, title, slug, description, order_index, icon)
  values
    (canada_id, 'Overview', 'overview',
     'Why Canada, school system types, salary ranges and what to expect',
     1, '🍁'),
    (canada_id, 'Provincial Guide', 'provincial-guide',
     'All 10 provinces and 3 territories — certification requirements, processing times and key differences',
     2, '🗺️'),
    (canada_id, 'The New Brunswick Pathway', 'new-brunswick-pathway',
     'A first-hand account of the NB international recruitment drive, PNP, and Express Entry — by someone who did it in 2025',
     3, '⭐'),
    (canada_id, 'Teacher Certification', 'teacher-certification',
     'How to get your international teaching qualification recognised in Canada',
     4, '🎓'),
    (canada_id, 'Immigration Pathways', 'immigration',
     'Work permits, PNP streams, Express Entry and permanent residency options for teachers',
     5, '🛂'),
    (canada_id, 'Document Requirements', 'documents',
     'Complete checklist of every document needed for certification, PNP and Express Entry',
     6, '📋'),
    (canada_id, 'Interview Preparation', 'interview-prep',
     'How to prepare for Canadian school district interviews — including international recruitment drives',
     7, '💼'),
    (canada_id, 'Cost of Living by Province', 'cost-of-living',
     'Salary vs expenses comparison across Canadian provinces',
     8, '💰'),
    (canada_id, 'First 90 Days in Canada', 'first-90-days',
     'SIN, banking, healthcare card, school registration and settling in',
     9, '📅')
  on conflict do nothing;
end $$;

-- Seed Canada hub articles
do $$
declare
  overview_id uuid;
  provincial_id uuid;
  nb_id uuid;
  cert_id uuid;
  immigration_id uuid;
  docs_id uuid;
  interview_id uuid;
  col_id uuid;
  first90_id uuid;
  canada_id uuid;
begin
  select id into canada_id from countries where slug = 'canada';
  select id into overview_id from hub_sections
    where country_id = canada_id and slug = 'overview';
  select id into provincial_id from hub_sections
    where country_id = canada_id and slug = 'provincial-guide';
  select id into nb_id from hub_sections
    where country_id = canada_id and slug = 'new-brunswick-pathway';
  select id into cert_id from hub_sections
    where country_id = canada_id and slug = 'teacher-certification';
  select id into immigration_id from hub_sections
    where country_id = canada_id and slug = 'immigration';
  select id into docs_id from hub_sections
    where country_id = canada_id and slug = 'documents';
  select id into interview_id from hub_sections
    where country_id = canada_id and slug = 'interview-prep';
  select id into col_id from hub_sections
    where country_id = canada_id and slug = 'cost-of-living';
  select id into first90_id from hub_sections
    where country_id = canada_id and slug = 'first-90-days';

-- ─── OVERVIEW ARTICLES ───────────────────────────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    overview_id,
    'Why teach in Canada? An honest overview',
    'why-teach-in-canada',
    E'Canada is one of the most sought-after destinations for international teachers — and for good reason. The combination of competitive salaries, universal healthcare, a clear pathway to permanent residency, and one of the highest quality-of-life rankings in the world makes it a genuinely compelling destination for teachers who want more than just a contract.

Unlike the Gulf States where tax-free salaries are offset by the temporary nature of residency, Canada offers something more valuable for long-term planning: a pathway to stay permanently. Teachers who arrive on a work permit can transition to permanent residency through provincial nominee programmes and Express Entry — and many do.

**The Canadian school system**

Canada has no national education system. Education is a provincial responsibility, which means each of the ten provinces and three territories operates its own curriculum, sets its own teacher certification requirements, and hires through its own school districts. This is the most important thing to understand before you begin your research — what applies in Ontario does not apply in British Columbia, and what applies in New Brunswick does not apply in Alberta.

The school year typically runs from September to June. Schools are divided into elementary (Kindergarten to Grade 5 or 6), middle school (Grades 6 to 8), and high school (Grades 9 to 12), though the exact breakdown varies by province.

**Salary ranges**

Canadian teacher salaries are set by collective agreements negotiated between teachers unions and provincial governments. As a general guide:

- Entry level (0-3 years experience): CAD $45,000 - $55,000
- Mid-career (5-10 years): CAD $60,000 - $75,000
- Experienced (10+ years): CAD $80,000 - $95,000
- Senior/Leadership: CAD $95,000 - $110,000+

These figures vary significantly by province. Alberta and British Columbia tend to pay the highest salaries. New Brunswick and Prince Edward Island are at the lower end but offset this with significantly lower cost of living.

**Healthcare**

All permanent residents and most work permit holders qualify for provincial healthcare coverage. This covers doctor visits, hospital stays, and most medical procedures at no direct cost. Private dental and vision are typically not covered and most school districts include these as part of the benefits package.',
    1
  ),
  (
    overview_id,
    'The Canadian school landscape — public, Catholic, and private',
    'canadian-school-landscape',
    E'Understanding the Canadian school landscape is essential before you begin your job search. Unlike Qatar or the UAE where the distinction is primarily between government and international schools, Canada has a more nuanced system.

**Publicly funded schools**

The vast majority of Canadian schools are publicly funded and operate under provincial curriculum. These schools hire through school district offices rather than individual schools. As an international teacher your first point of contact is the district human resources department, not individual principals.

**Catholic school boards**

In most provinces, Catholic school boards operate alongside public boards and receive government funding. These schools follow the same provincial curriculum but may incorporate religious education. International teachers of any faith can apply — being Catholic is not always a requirement, though some boards preference it for certain roles.

**Independent and private schools**

Independent schools in Canada operate outside the public system and set their own fees. They often pay above the public school rate and may have more flexibility in hiring international teachers. However they typically have more rigorous expectations around curriculum delivery and extracurricular involvement.

**French-language schools**

Every province has French-language schools serving francophone communities. These schools teach entirely in French and require teachers to be fluent. New Brunswick is Canada''s only officially bilingual province, and the Francophone school districts there are distinct from the Anglophone districts.',
    2
  );

-- ─── PROVINCIAL GUIDE ARTICLES ───────────────────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    provincial_id,
    'Provincial comparison — certification, processing times and key differences',
    'provincial-comparison',
    E'Every province in Canada has its own teacher certification body. This means your international teaching qualification must be assessed separately depending on which province you intend to teach in. The requirements, processing times, and documents needed vary significantly.

**Ontario**
Certification body: Ontario College of Teachers (OCT)
Processing time: 3-6 months
Key requirement: Degree plus a recognised teaching qualification. Ontario is one of the more rigorous provinces for international certification — they assess both your degree and your teacher training separately.
Notable: Ontario has the largest teacher job market in Canada but also the most competitive. The Greater Toronto Area in particular has a significant oversupply of certified teachers.

**British Columbia**
Certification body: BC Teacher Certification Branch
Processing time: 2-4 months
Key requirement: Degree plus a recognised teaching qualification. BC has recently streamlined its process for internationally trained teachers.
Notable: High demand for teachers in rural and northern communities. Vancouver is expensive — rural BC offers much better value.

**Alberta**
Certification body: Alberta Teacher Certification
Processing time: 2-3 months
Key requirement: Degree plus teaching qualification. Alberta pays among the highest teacher salaries in Canada.
Notable: Strong oil economy means higher cost of living in Calgary and Edmonton, but rural Alberta is very affordable.

**New Brunswick**
Certification body: New Brunswick Department of Education
Processing time: 1-2 months
Key requirement: Degree plus recognised teaching qualification. WES evaluation strongly recommended. IELTS results an advantage for non-native English speakers.
Notable: New Brunswick actively recruits international teachers and runs international recruitment drives. The NB PNP Critical Worker Stream provides a fast pathway to permanent residency for certified teachers. See the New Brunswick Pathway section for the full firsthand account.

**Nova Scotia**
Certification body: Nova Scotia Department of Education
Processing time: 2-3 months
Key requirement: Degree plus recognised teaching qualification.
Notable: Growing demand for teachers, particularly in HRM (Halifax Regional Municipality). More affordable than Ontario or BC.

**Prince Edward Island**
Certification body: PEI Department of Education
Processing time: 1-2 months
Key requirement: Degree plus teaching qualification.
Notable: Smallest province, smallest job market. Strong community feel. PEI PNP has a teacher stream.

**Manitoba**
Certification body: Manitoba Teacher Certification
Processing time: 2-4 months
Key requirement: Degree plus teaching qualification.
Notable: Winnipeg has a growing international community. Rural Manitoba has significant teacher shortages.

**Saskatchewan**
Certification body: Saskatchewan Professional Teachers Regulatory Board
Processing time: 2-3 months
Key requirement: Degree plus recognised teaching qualification.
Notable: High demand in rural areas. Regina and Saskatoon are affordable cities.

**Quebec**
Certification body: Ministere de l Education
Processing time: 3-6 months
Key requirement: Degree plus teaching qualification plus French language proficiency. Quebec is effectively a separate system — teaching in Quebec requires French and the process is significantly more complex for Anglophone teachers.
Notable: Not recommended as a first destination for international teachers without French fluency.

**Newfoundland and Labrador**
Certification body: Newfoundland Teacher Certification
Processing time: 2-3 months
Key requirement: Degree plus recognised teaching qualification.
Notable: Teacher shortages in rural areas. St John''s is an affordable, welcoming city.

**Territories (Yukon, Northwest Territories, Nunavut)**
All three territories have teacher certification bodies and process applications in 1-3 months. Salaries are significantly higher than provinces — often 20-30% above provincial rates — but cost of living is also higher and positions are in remote communities. These are excellent options for adventurous teachers who want to accelerate their savings.',
    1
  ),
  (
    provincial_id,
    'WES evaluation — what it is and why you need it',
    'wes-evaluation',
    E'World Education Services (WES) is a non-profit organisation that evaluates international educational credentials for use in Canada and the United States. If you are an internationally trained teacher applying for Canadian teacher certification, a WES evaluation is strongly recommended and in some provinces required.

**What WES does**

WES assesses your international degree and teaching qualification and produces an equivalency statement that tells Canadian institutions — school districts, certification bodies, immigration authorities — exactly how your credentials compare to the Canadian equivalent. For a South African teaching degree, for example, WES would confirm that your qualification is equivalent to a Canadian Bachelor of Education.

**Why it matters for teachers specifically**

When Edwina applied for the New Brunswick international recruitment drive in 2025, she included her WES evaluation in her application. She believes this was one of the key factors that differentiated her application from others — it showed the recruiters that she had already done the groundwork and was serious about her Canadian move.

"I actually thought the recruitment drive was a scam when my friend sent me the link," Edwina says. "But I thought, what do I have to lose? When I applied I made sure to upload my WES evaluation and my IELTS results. I think this is what showed the recruiters that I was serious about my Canada relocation journey."

**How to apply for WES**

1. Go to wes.org and create an account
2. Select Canada as your destination country
3. Choose the type of evaluation (ECA — Educational Credential Assessment — for immigration purposes)
4. Pay the fee (approximately CAD $220)
5. Request your university to send transcripts directly to WES
6. WES contacts your institution to verify

Processing time: 7-11 weeks standard, 3-5 weeks rush

**Documents required**
- Official university transcripts sent directly from your institution to WES
- Degree certificate
- Teaching qualification certificate
- Identity documents

Start your WES evaluation as early as possible — before you apply for any job or certification. It takes time and you will need it at multiple stages of the Canadian pathway.',
    2
  );

-- ─── NEW BRUNSWICK PATHWAY (FLAGSHIP SECTION) ────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    nb_id,
    'The New Brunswick story — how I went from Qatar to Canada in one year',
    'nb-personal-story',
    E'This is the story of how I moved from teaching in Doha, Qatar to a permanent teaching position in New Brunswick, Canada — in under twelve months. It is a first-hand account of a pathway that not many people know exists, and one that moved faster than I ever expected.

I am sharing this not to make it sound easy — it was not easy — but because when I was going through it, I could not find anyone who had done exactly this and written it down clearly. This is what I wish I had been able to read.

**How it started — the link that looked like a scam**

In 2025, a friend sent me a link to a New Brunswick international teacher recruitment drive. My first reaction was that it was a scam. International teaching recruitment drives that come to the Gulf exist, but many of them are low-quality affairs run by agencies with questionable schools attached to them.

But I thought about it. What did I have to lose by applying? Nothing except an hour of my time.

So I applied — and I made sure to apply properly. I uploaded my WES evaluation (World Education Services credential assessment) and my IELTS results alongside my teaching portfolio. I believed then, and I believe now, that this is what separated my application from the pile. It showed the recruiters that I was not casually interested. I had already done the groundwork. I was ready.

I was selected for the interview.

**The interview — Grand Hyatt Hotel, Doha**

The New Brunswick Department of Education sent a recruitment team to Doha in 2025. The interviews were held at the Grand Hyatt Hotel — an in-person panel interview conducted by representatives from the Anglophone South School District.

I was one of only two teachers selected from the interview process.

I want to let that sink in, not to boast, but because I want you to understand what proper preparation does. There were other candidates. I had done the WES. I had the IELTS. I had prepared specifically for a Canadian school interview, not a generic international school interview. Those things matter.

**Step 1 — New Brunswick Teacher Certification**

After passing the interview and receiving a conditional offer from the Anglophone South School District, I began the NB Teacher Certification process.

New Brunswick requires internationally trained teachers to apply for an eligibility letter from the New Brunswick Department of Education. This is not the same as full certification — it is a letter confirming that your qualifications meet the requirements to teach in the province.

Documents I submitted:
- WES evaluation (Educational Credential Assessment)
- University transcripts
- South African teaching qualification certificate
- IELTS results
- Identity documents
- Proof of teaching experience (reference letters and employment records)

Processing time: 1-2 months

My South African teaching qualification was assessed and recognised. The eligibility letter confirmed I met the requirements to teach Middle School (Grades 6-8) in New Brunswick.

**Step 2 — New Brunswick PNP Critical Worker Stream**

With my eligibility letter in hand, I applied to the New Brunswick Provincial Nominee Programme under the Critical Worker Stream.

The NB PNP Critical Worker Stream is designed for workers in occupations that New Brunswick has identified as critical to the province''s economy and public services. Teaching is one of these occupations — and having both a job offer and an eligibility letter from NB Teacher Certification puts you in an extremely strong position.

The application requires:
- Job offer letter from a New Brunswick school district
- NB Teacher Certification eligibility letter
- WES evaluation
- IELTS results
- Proof of qualifications and experience
- Identity and immigration documents

Processing time: 2-4 weeks

I received my nomination certificate within this window. The speed surprised me — but New Brunswick is genuinely motivated to bring qualified teachers into the province and the process reflects that.

**Step 3 — Express Entry and the 600 points**

A Provincial Nominee Programme nomination adds 600 points to your Express Entry Comprehensive Ranking System (CRS) score.

To understand why this matters: Express Entry is Canada''s primary pathway to permanent residency for skilled workers. Your CRS score determines whether you receive an Invitation to Apply (ITA) for permanent residency. Without a provincial nomination, teachers from South Africa or Qatar would typically have CRS scores in the 400-480 range — not enough to receive an ITA in most draws.

With 600 additional points from the NB PNP nomination, my total CRS score was high enough to receive an ITA in the very next Express Entry draw after I submitted my nomination.

I submitted my permanent residency application after receiving the ITA.

**Step 4 — Work permit and study permits**

While the permanent residency application was in process, I applied for a work permit to be able to begin teaching in September. I also applied for my children''s study permits in the same application.

Processing time: 2 weeks.

This was faster than almost anyone I spoke to expected. I attribute this partly to the completeness of our application — every document was in order, every form was filled correctly, and the supporting documentation from the school district and NB PNP was included.

**The result**

I arrived in New Brunswick in July 2026 to begin my position with the Anglophone South School District. My children began school in September. We are settled.

The entire process from application to arrival took under twelve months.

**What made this pathway work**

Looking back, several things made this pathway move as quickly as it did:

The WES evaluation was done early. I had it before I applied for the recruitment drive.

The IELTS was done. For a South African teacher who has taught in English-medium schools for 18 years, IELTS is a formality — but having the results on paper mattered.

The job offer was from a school district, not a private school. District employment carries more weight in the PNP process than private school employment.

The eligibility letter from NB Teacher Certification was specific. It confirmed not just that I was qualified, but which grade levels and subjects I was certified to teach.

I submitted complete applications. Every time. No missing documents, no follow-up requests, no delays caused by gaps in paperwork.',
    1
  ),
  (
    nb_id,
    'The NB international recruitment drive — how to find it and apply',
    'nb-recruitment-drive',
    E'New Brunswick runs international teacher recruitment drives periodically to address teacher shortages in the province. These drives bring NB school district representatives to international locations to interview and select teachers directly.

**How to find the recruitment drive**

The recruitment drive is advertised through the New Brunswick Department of Education website (www2.gnb.ca) and through the Anglophone school district websites. It is also shared through international teacher Facebook groups and LinkedIn communities.

The honest truth is that these drives are not heavily marketed internationally — which is why many teachers miss them or, like Edwina, initially dismiss them as scams when they come across them through informal channels.

**Where to look:**
- New Brunswick Department of Education website
- Anglophone South School District website (AnglophonesSD.ca)
- Facebook group: "Teaching Jobs Canada"
- Facebook group: "International Teachers Canada"
- LinkedIn: search "New Brunswick teacher recruitment"

**What the application typically requires**
- Current CV/resume formatted for Canadian school applications
- WES evaluation (strongly recommended — include it even if not required)
- IELTS or equivalent English proficiency results
- Teaching qualification certificates
- Reference letters from current and previous employers
- Brief personal statement explaining your interest in New Brunswick specifically

**How to prepare your application**

Include your WES evaluation even if the advertisement does not specifically require it. Edwina''s experience suggests this is a significant differentiator — it signals to recruiters that you are serious and that you have already invested in the Canadian pathway.

Research New Brunswick specifically before applying. Know the curriculum (New Brunswick follows the Atlantic Canada common curriculum framework), know the school districts (Anglophone South, Anglophone East, Anglophone North, Francophone South, Francophone North), and be able to articulate why New Brunswick specifically appeals to you.

**Interview format**

The 2025 recruitment drive was held in-person at the Grand Hyatt Hotel in Doha. Candidates were interviewed by a panel from the Anglophone South School District. The format was a formal panel interview covering teaching philosophy, classroom management, curriculum knowledge, and motivation for moving to New Brunswick.

Prepare as you would for any senior teaching position interview — not a casual international school chat. These are professional educators hiring for the provincial school system.',
    2
  ),
  (
    nb_id,
    'NB PNP Critical Worker Stream — the fast track to permanent residency',
    'nb-pnp-critical-worker',
    E'The New Brunswick Provincial Nominee Programme (NB PNP) Critical Worker Stream is one of the fastest pathways to Canadian permanent residency available to international teachers with a job offer in New Brunswick.

**What is the NB PNP Critical Worker Stream?**

The Critical Worker Stream is designed for workers in occupations that New Brunswick has identified as essential to the province. Teaching is included in this category — and the combination of a provincial teacher shortage and active international recruitment makes certified teachers with NB job offers strong candidates.

**Eligibility requirements**

To apply under the Critical Worker Stream you need:
- A valid job offer from a New Brunswick employer (school district)
- NB Teacher Certification eligibility letter
- Intention to live and work in New Brunswick permanently
- Language proficiency (IELTS or equivalent)
- WES credential evaluation

**The application process**

1. Receive your NB Teacher Certification eligibility letter
2. Confirm your job offer is in place
3. Submit your NB PNP Critical Worker Stream application online at www2.gnb.ca
4. Pay the application fee
5. Submit all supporting documents

**Processing time: 2-4 weeks**

This is significantly faster than most immigration pathways. New Brunswick processes these applications quickly because they are actively trying to attract qualified teachers.

**What you receive**

If approved you receive a Provincial Nomination Certificate. This certificate:
- Confirms New Brunswick is nominating you for permanent residency
- Adds 600 points to your Express Entry CRS score
- Enables you to apply for a work permit while your PR application is processed

**The 600 points explained**

Under Canada''s Express Entry system, a provincial nomination adds 600 points to your Comprehensive Ranking System (CRS) score. This is a game-changer.

Most internationally trained teachers without a provincial nomination have CRS scores between 420-480 — below the threshold for most Express Entry draws. With 600 additional points your score exceeds 1000, which is higher than any draw cut-off in Express Entry history. This effectively guarantees an Invitation to Apply in the next draw.

**After receiving the nomination**

You have 60 days to accept the nomination in your Express Entry profile and create or update your profile. Once accepted, IRCC (Immigration, Refugees and Citizenship Canada) will issue an ITA (Invitation to Apply) for permanent residency.

Submit your permanent residency application with all required documents within 60 days of receiving the ITA.',
    3
  ),
  (
    nb_id,
    'Work permit and study permits — what we submitted and how long it took',
    'work-permit-study-permits',
    E'While the permanent residency application was being processed, a work permit was needed to begin teaching in September. Children also needed study permits to attend school in New Brunswick.

**Applying together in one application**

The work permit and children''s study permits were submitted in the same application package. This is the recommended approach — IRCC processes linked family applications together, which is more efficient than submitting them separately.

**Work permit type**

The work permit applied for was an employer-specific (closed) work permit tied to the Anglophone South School District. This is the standard type for teachers with a provincial nomination and a specific job offer.

Required documents for the work permit:
- Passport (valid for at least the duration of intended stay plus 6 months)
- NB PNP nomination certificate
- Job offer letter from Anglophone South School District
- NB Teacher Certification eligibility letter
- WES evaluation
- IELTS results
- Photographs meeting IRCC specifications
- Completed IMM forms (IRCC work permit application forms)
- Application fee payment

**Children''s study permits**

Each child required a separate study permit application submitted as part of the same package:
- Child''s passport
- Child''s birth certificate
- Parent''s work permit application (to demonstrate the family connection)
- Letter of acceptance from the school (obtained from the school district before submission)
- Photographs
- Completed IMM forms for each child
- Application fee per child

**Processing time: 2 weeks**

The applications were approved and permits issued within 2 weeks. This is faster than the standard processing time — which IRCC publishes on their website and fluctuates — and is attributed to the completeness of the application and the strength of the supporting documentation from the NB PNP nomination.

**Tips for a fast work permit process**

Complete every form fully. Leave nothing blank — if something does not apply, write "not applicable" rather than leaving the field empty.

Include a cover letter. A clear, organised cover letter summarising the application, listing all enclosed documents, and explaining the timeline helps officers process the application efficiently.

Use a document checklist. IRCC provides official checklists for each application type on their website. Print it, check every item, and include the completed checklist with your submission.

Submit biometrics early. If you have not given biometrics to IRCC before, do this as soon as you receive your biometric instruction letter — it is a required step and delays the application if left too late.',
    4
  );

-- ─── TEACHER CERTIFICATION ARTICLES ─────────────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    cert_id,
    'How international teaching qualifications are assessed in Canada',
    'international-qualification-assessment',
    E'Canada does not have a national teacher certification body. Each province has its own regulatory authority that assesses applications from internationally trained teachers independently. This means the recognition process varies depending on which province you apply to.

**The general assessment process**

All provinces follow a broadly similar process:

1. You submit your teaching qualification certificates and transcripts to the provincial certification body
2. The body assesses your qualifications against provincial standards
3. They may request additional documents or information
4. They issue either full certification or a conditional/provisional certificate

**What they are looking for**

Provincial certification bodies assess whether your teaching qualification meets three broad criteria:

Academic preparation: Does your degree meet the minimum requirements? Most provinces require a minimum three or four-year degree.

Professional preparation: Does your teacher training cover the areas required by the province? This includes curriculum studies, practicum hours, and subject specialisation.

Subject area coverage: Are you trained to teach the subjects and grade levels you are applying for?

**The role of WES**

A WES evaluation translates your international qualifications into Canadian equivalencies and makes the assessment process faster and clearer for certification bodies. Most provinces strongly recommend it. Some effectively require it in practice even if they do not state it as a mandatory requirement.

**South African qualifications specifically**

South African teaching qualifications — the PGCE (Postgraduate Certificate in Education) and the four-year B.Ed — are generally well-recognised in Canada. The B.Ed in particular maps closely to the Canadian B.Ed and is typically assessed as equivalent.

Edwina''s South African teaching qualification was assessed and recognised by New Brunswick Teacher Certification. Her eligibility letter was issued within 1-2 months of submitting her complete application.',
    1
  );

-- ─── IMMIGRATION ARTICLES ────────────────────────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    immigration_id,
    'Immigration pathways for international teachers — an overview',
    'immigration-overview',
    E'Canada offers several immigration pathways relevant to internationally trained teachers. The right pathway depends on your situation, the province you are targeting, and whether you have a job offer.

**Pathway 1 — Provincial Nominee Programme (PNP) + Express Entry**

This is the fastest pathway to permanent residency for teachers with a job offer in a province that actively recruits international teachers. New Brunswick, Nova Scotia, Prince Edward Island, Manitoba, and Saskatchewan all have streams relevant to teachers.

How it works:
1. Secure a job offer in the province
2. Obtain provincial teacher certification (or eligibility letter)
3. Apply to the provincial PNP stream
4. Receive nomination certificate (+600 points for Express Entry)
5. Create or update Express Entry profile
6. Receive ITA and apply for permanent residency

Timeline: 6-18 months from job offer to PR, depending on province and processing times.

**Pathway 2 — Express Entry without PNP**

Without a provincial nomination, teachers must rely on their base CRS score. Most internationally trained teachers without Canadian experience score between 420-480 CRS points. Express Entry draws for the Federal Skilled Worker program have been cutting off at 480-510 in recent years, meaning many teachers would not receive an ITA without a provincial nomination.

This pathway is slower and less predictable but does not require a job offer first.

**Pathway 3 — Work permit then PR**

Many teachers arrive in Canada on an employer-specific work permit tied to a job offer, work for one to two years to gain Canadian experience, and then apply for permanent residency with improved CRS scores (Canadian work experience adds significant points) or through a provincial nominee programme.

This is a common pathway for teachers who secure positions through international recruitment drives.

**Pathway 4 — International Mobility Programme**

Some teachers enter Canada under the International Mobility Programme, which allows certain categories of workers to receive work permits without a Labour Market Impact Assessment (LMIA). Teachers whose spouse is a Canadian citizen or permanent resident may also be eligible for an open work permit.

**The work permit**

Regardless of which PR pathway you pursue, you will likely need a work permit to begin teaching before your permanent residency is processed. Employer-specific work permits tied to school district job offers are the standard type for internationally recruited teachers.',
    1
  );

-- ─── DOCUMENT REQUIREMENTS ───────────────────────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    docs_id,
    'Complete document checklist for the NB pathway',
    'nb-document-checklist',
    E'This is the complete list of documents required across all stages of the New Brunswick teacher pathway — from the recruitment drive application to your work permit and permanent residency application.

**Stage 1 — Recruitment drive application**
- Current CV formatted for Canadian school applications
- WES evaluation (ECA — Educational Credential Assessment)
- IELTS or equivalent English proficiency results (minimum Band 6.5 overall)
- Teaching qualification certificate(s)
- University degree certificate(s)
- University transcripts
- Reference letters (minimum 2 — from current principal and one other)
- Personal statement (why New Brunswick, why you are ready to move)

**Stage 2 — NB Teacher Certification eligibility letter**
- WES evaluation
- University transcripts (official copies)
- Teaching qualification certificate
- IELTS results
- Proof of teaching experience (reference letters, employment contracts, payslips)
- Identity documents (passport copy)
- Completed NB Teacher Certification application form

**Stage 3 — NB PNP Critical Worker Stream**
- Completed NB PNP application form
- Job offer letter from NB school district (on official letterhead, signed)
- NB Teacher Certification eligibility letter
- WES evaluation
- IELTS results
- Passport (bio data page)
- Current immigration status documents (if applicable)
- Proof of qualifications
- Application fee payment confirmation

**Stage 4 — Work permit**
- Passport (valid for duration of permit plus 6 months)
- NB PNP nomination certificate
- Job offer letter
- NB Teacher Certification eligibility letter
- WES evaluation
- IELTS results
- Photographs (IRCC specifications)
- Completed IMM 1295 (Application for Work Permit Made Outside Canada)
- Completed IMM 5645 (Family Information form)
- Application fee payment

**Stage 5 — Children''s study permits (per child)**
- Child''s passport
- Child''s birth certificate
- Letter of acceptance from Canadian school
- Parent''s work permit application reference
- Photographs
- Completed IMM 1294 (Application for a Study Permit Made Outside Canada)
- Application fee per child

**Stage 6 — Permanent residency (Express Entry)**
- Passport
- WES evaluation
- IELTS results
- NB PNP nomination certificate
- Police clearance certificates (all countries lived in for 6+ months in past 10 years)
- Medical examination results (from IRCC-approved panel physician)
- Proof of funds (if applicable)
- Employment records
- Completed Express Entry profile and IMM forms
- Application fee

**Important notes**

Police clearance certificates must be obtained from every country you have lived in for six months or more in the past ten years. For South African teachers who have lived in Qatar and the UK, this means certificates from South Africa, Qatar, and the UK. Start these early — they take time and have limited validity windows.

Medical examinations must be done by an IRCC-approved panel physician. Find the list at www.canada.ca/en/immigration-refugees-citizenship.

All documents not in English or French must be accompanied by certified translations.',
    1
  );

-- ─── INTERVIEW PREP ARTICLES ─────────────────────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    interview_id,
    'How to prepare for a Canadian school district interview',
    'canadian-interview-prep',
    E'Canadian school district interviews are more formal and structured than most international school interviews. They are typically conducted by a panel of two to four people including a district HR representative, a principal, and often a curriculum consultant or department head.

**What Canadian interviewers are looking for**

Canadian school districts prioritise several qualities that may differ from what international schools in the Gulf or Asia emphasise:

Inclusive education: Canadian schools have a strong commitment to inclusive education — teaching all students, including those with learning differences, in mainstream classroom settings. You will almost certainly be asked about your experience with differentiation, IEPs (Individual Education Plans), and supporting students with diverse learning needs.

Curriculum knowledge: Be familiar with the provincial curriculum before your interview. For New Brunswick, review the Atlantic Canada common curriculum framework. Know the outcomes-based approach that most Canadian provinces use.

Classroom community: Canadian school culture emphasises building a positive, safe, and inclusive classroom community. Questions about classroom management in Canada tend to focus on restorative practices rather than disciplinary approaches.

Collaboration: Canadian teachers are expected to work collaboratively with colleagues, learning support teachers, and parents. Questions about professional collaboration are standard.

**Common interview questions**

Describe your approach to differentiated instruction.
How do you support students with Individual Education Plans in your classroom?
Tell us about a time you collaborated with a colleague to improve student outcomes.
How do you build relationships with families in your school community?
What does inclusive education mean to you in practice?
Describe a lesson that did not go as planned and what you did about it.
Why do you want to teach in New Brunswick specifically?

**The New Brunswick recruitment drive interview specifically**

Edwina''s interview at the Grand Hyatt Hotel in Doha in 2025 was a formal panel interview conducted by representatives from the Anglophone South School District. She prepared specifically for a Canadian public school interview rather than a generic international school interview.

"I researched the New Brunswick curriculum, I understood the district''s priorities, and I could speak to inclusive education from genuine experience," she says. "I did not treat it like an international school interview. I treated it like applying for a position in a professional public school system — because that is exactly what it was."

**Practical preparation steps**

Research the specific school district before your interview. Visit the district website, understand their strategic priorities, and be able to reference specific aspects of their approach.

Prepare STAR format answers (Situation, Task, Action, Result) for all behavioural questions.

Know the provincial curriculum. Download the curriculum documents for your grade level and subject area from the provincial government website.

Prepare questions to ask the panel. Good questions include: What professional development opportunities are available for new teachers? How does the district support internationally trained teachers in their first year? What does the school community look like in terms of cultural diversity?',
    1
  );

-- ─── COST OF LIVING ARTICLES ─────────────────────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    col_id,
    'Cost of living in New Brunswick — what teachers actually spend',
    'nb-cost-of-living',
    E'New Brunswick is one of the most affordable provinces in Canada, which is a significant advantage for teachers who are building financial stability after an international move.

**Housing**

Moncton, Dieppe, and Riverview — the tri-community area where most Anglophone South School District teachers live — offer some of the most affordable housing in any Canadian city.

Rental costs (2025-2026 estimates):
- 1-bedroom apartment: CAD $1,200 - $1,600/month
- 2-bedroom apartment: CAD $1,500 - $2,000/month
- 3-bedroom house: CAD $1,800 - $2,400/month
- 3-bedroom house purchase: CAD $250,000 - $380,000

Compare this to Toronto (average rent for a 2-bedroom: CAD $2,800+) or Vancouver (CAD $3,200+) and the advantage of New Brunswick becomes clear.

**Transportation**

New Brunswick has limited public transportation outside Moncton city limits. Most teachers find a car essential, particularly for reaching schools in suburban or rural areas.

- Used car purchase: CAD $8,000 - $20,000
- Car insurance: CAD $150 - $250/month (New Brunswick has private car insurance)
- Fuel: approximately CAD $1.50-1.70/litre

**Groceries and everyday expenses**

Grocery costs in Moncton are significantly lower than in major Canadian cities:
- Weekly groceries for a family of 3-4: approximately CAD $200 - $280
- Dining out (family meal): CAD $60 - $100

**Teacher salary in New Brunswick**

New Brunswick teacher salaries are set by collective agreement. As of 2025:
- Entry level (Category 4, 0 years experience): approximately CAD $47,000/year
- With 10 years experience: approximately CAD $68,000/year
- Maximum (Category 6, maximum experience): approximately CAD $83,000/year

International teachers are placed on the salary grid based on their years of verified teaching experience and their educational qualifications. Years taught internationally count toward experience placement.

**The financial reality**

New Brunswick salaries are lower than Ontario or BC, but the cost of living is proportionally lower. A teacher earning CAD $68,000 in Moncton has a significantly higher disposable income than a teacher earning CAD $85,000 in Toronto once housing, tax, and cost of living are factored in.',
    1
  );

-- ─── FIRST 90 DAYS ARTICLES ──────────────────────────────────────

  insert into hub_articles
    (section_id, title, slug, content, order_index)
  values (
    first90_id,
    'Your first 90 days in New Brunswick — the complete setup guide',
    'nb-first-90-days',
    E'The first 90 days in New Brunswick involve a significant amount of administrative setup. Here is the complete list of what needs to be done, in the approximate order it should be done.

**Week 1 — Immediate priorities**

Social Insurance Number (SIN): Apply for your SIN at a Service Canada location as soon as you arrive. You need your SIN before you can be paid. Bring your work permit and passport. Processing is usually same-day.

New Brunswick Health Card: Register for the New Brunswick Medicare Card at a ServiceNB office. Bring your work permit, passport, and proof of address. There is a three-month waiting period for coverage — arrange private health insurance to cover this gap. Many school districts provide bridging coverage for new employees.

Bank account: Open a Canadian bank account within the first week. Major banks in Moncton include TD Canada Trust, RBC, Scotiabank, BMO, and CIBC. Bring your passport, work permit, and a proof of address (your lease or a utility bill).

Bring your Wise card for the first weeks — you will need to pay for things before your Canadian account is fully functional and your first paycheque arrives.

**Week 2-3 — Secondary priorities**

Driver''s licence: If you plan to drive (and in New Brunswick you almost certainly will) visit a ServiceNB location to exchange your international or home country licence for a New Brunswick licence. Requirements vary by country of origin.

Vehicle: If you need a car, this is the time to start looking. Facebook Marketplace and AutoTrader.ca are the most commonly used platforms in New Brunswick.

School registration for children: Contact the school district to register your children. Bring their study permits, birth certificates, immunisation records, and previous school reports. The district will assess their grade placement and language support needs.

Phone and internet: Major carriers in New Brunswick include Bell, Rogers, and Eastlink. Eastlink is a Maritime-specific provider with competitive rates. Expect to pay CAD $60-80/month for a phone plan and CAD $70-100/month for home internet.

**Month 1-3 — Ongoing setup**

Tax file: Keep all your income documents from arrival. Canadian tax returns are filed in the spring for the previous year. As a new arrival you will file a Canadian tax return for your first partial year.

Professional development: Connect with your school district''s new teacher support programme. Most districts have mentoring and induction programmes for internationally trained teachers.

Community: Moncton has an active expat community and a growing international population. Facebook groups including "New Moncton Residents" and "International Teachers New Brunswick" are good starting points.

**Immunisation records for children**

New Brunswick schools require up-to-date immunisation records for all students. If your children were immunised in South Africa or Qatar, obtain official immunisation records before leaving and have them translated if necessary. The school district public health nurse will review these on registration.',
    1
  );

end $$;
