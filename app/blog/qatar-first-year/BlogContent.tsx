"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TipBox } from "@/components/blog/TipBox";
import { VideoEmbed } from "@/components/blog/VideoEmbed";
import { CTABox } from "@/components/blog/CTABox";
import { CheckList } from "@/components/blog/CheckList";

export default function BlogContent() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#0a0b14] overflow-hidden">
      
      {/* SECTION 1 — HERO */}
      <section className="relative w-full min-h-[50vh] bg-[#0a0b14] flex flex-col justify-center py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Edwina_Teaching.png" 
            alt="Hero background" 
            fill 
            className="object-cover opacity-20" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,11,20,0.92)] to-[rgba(10,11,20,0.85)]" />
        </div>
        
        <div className="relative z-10 max-w-[780px] mx-auto text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="bg-brand-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Qatar</span>
            <span className="text-white/50 text-sm font-body">April 2026 • 9 min read</span>
          </motion.div>
          
          <h1 className="font-display font-black text-4xl md:text-[52px] text-white leading-[1.1] mb-6">
            {"My First Year in Qatar: What I Wish I Knew Before Moving".split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block mr-3" 
                initial={{ y: 40, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: i * 0.06, duration: 0.6, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8, duration: 0.8 }} 
            className="text-white/40 text-xs font-body italic"
          >
            This post contains affiliate links. We may earn a small commission at no extra cost to you.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — MAIN CONTENT AREA */}
      <section className="py-[80px] px-6 md:px-12 max-w-[1100px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-[64px]">
          
          {/* LEFT COLUMN — Article body */}
          <div className="w-full lg:max-w-[720px] flex-shrink-0">
             
             {/* INTRO PULL QUOTE */}
             <motion.blockquote
               initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }}
               className="border-l-4 border-[#FCCB52] pl-[20px] italic text-[19px] text-gray-500 dark:text-gray-400 font-body mb-[40px] leading-relaxed"
             >
               "After 18 years of international teaching and relocations across three countries, I thought I knew what I was doing. Qatar still surprised me. Here's the honest version — the things nobody tells you until you're already there."
             </motion.blockquote>

             {/* OPENING PARAGRAPHS */}
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-[40px]">
               <p>When my family and I made the decision to move to Qatar, I had already navigated moves across South Africa, the UK, and back again. I had a system. I had spreadsheets. I had a checklist for my checklist. And yet, within the first 72 hours of landing in Doha, I realised that Qatar operates on its own set of rules entirely — and knowing them in advance would have saved me weeks of stress, confusion, and more than a few panicked WhatsApp messages to other expat teachers.</p>
               <p>This post is everything I wish someone had sat me down and told me before I boarded that flight. If you're planning to teach in Qatar, or you've just accepted an offer and the reality is starting to sink in — read this first.</p>
             </motion.div>

             {/* VIDEO EMBED 1 */}
             <VideoEmbed src="https://www.youtube.com/embed/vvwkkC0Xl6U?si=YtvmqVyNFFEfXXBZ" caption="Watch: Our experience moving to Qatar — the honest version" />

             {/* SECTION HEADING 1 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-12 mb-6">
               1. The immigration process is a marathon, not a sprint
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>The first thing every teacher needs to understand is that Qatar's immigration process runs on Qatar's timeline — not yours, not your school's, and definitely not the timeline your contract implies. The Residence Permit (RP) and Qatar ID (QID) process involves medical tests, fingerprinting, document attestation, and a series of government appointments that can take anywhere from three to eight weeks after arrival.</p>
               <p>What this means practically is that you will arrive, you will start teaching, and you will spend weeks in a bureaucratic holding pattern where you technically cannot do certain things — open a bank account, get a SIM card on a proper plan, sign a lease — until your QID is issued.</p>
             </motion.div>

             <TipBox label="WHAT I'D DO DIFFERENTLY" variant="tip">
               Start your document attestation process at least three months before your departure date. The attestation chain — university, government department, FCDO or DIRCO, then Qatari embassy — takes longer than schools typically warn you. I've created a free checklist that walks you through every step.
             </TipBox>

             <CheckList items={[
               "Book your medical appointment as soon as your school PRO gives you the go-ahead",
               "Bring three sets of passport photos to every government appointment — you will always need more than you think",
               "Keep your medical clearance slip safe — losing it causes significant delays",
               "Download the Metrash2 app before you arrive — it handles most government services digitally",
               "Ask your school exactly what the PRO handles versus what you handle yourself"
             ]} />

             {/* SECTION HEADING 2 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               2. Housing is not what the contract describes
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Most international school contracts in Qatar include a housing allowance or school-provided accommodation. What the contract rarely tells you is what the neighbourhood is like, what the actual apartment condition is, and how far you'll be from school, shops, and the places you'll actually spend your time.</p>
               <p>I've spoken to teachers who arrived to find their 'furnished accommodation' meant a mattress on the floor and a kettle. I've also spoken to teachers in genuinely beautiful compounds with pools and gyms. The range is enormous — and it almost entirely depends on which school you're joining and how much you pushed back during contract negotiation.</p>
             </motion.div>

             <TipBox label="IMPORTANT" variant="warning">
               Never sign a contract without asking specifically: What area is the accommodation in? Is it on a school compound or private rental? What does 'furnished' include? Can I see photos? Schools are not always forthcoming with this information unless you ask directly.
             </TipBox>

             <VideoEmbed src="https://www.youtube.com/embed/unz1Bkdb_Pk?si=DEPHQPQ9j_Ju-FEV" caption="Watch: A real look at accommodation options in Qatar for expat teachers" />

             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
                <p>The areas most expat teachers end up in are Al Waab, Ain Khaled, Maamoura, and the Pearl — each with very different vibes, commute times, and price points. If you're choosing your own accommodation, your allowance will go further in areas like Ain Khaled, but you'll pay a premium for the Pearl or West Bay Lagoon.</p>
             </motion.div>

             {/* SECTION HEADING 3 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               3. The heat is not a metaphor
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Qatar's summer heat — May through September — is not the kind of heat you acclimatise to. It is the kind of heat that fundamentally changes how you live. Temperatures regularly hit 45°C with high humidity. Outdoor activities become largely impossible between 11am and 5pm. Most of your social life, exercise, and errands will happen either early morning, late evening, or entirely indoors.</p>
               <p>This sounds manageable until you're living it and realise that your children cannot play outside, your dog needs early morning walks before 7am, and the mall becomes your primary social venue for three months of the year. It is an adjustment — a real one — and families with children and pets need to factor this in seriously before accepting a contract.</p>
             </motion.div>

             <TipBox label="PRACTICAL TIP" variant="tip">
               Most expat teachers use the summer months to travel — many contracts include flights home or a travel allowance. Plan your summers out of Qatar and you'll find the lifestyle genuinely manageable. The cooler months from October to April are genuinely beautiful, and you'll wonder why anyone lives anywhere else.
             </TipBox>

             <VideoEmbed src="https://www.youtube.com/embed/MGi8RInOEOI?si=4QhdljSQbtVveQ45" caption="Watch: Family life in Qatar — what the first months actually look like" />

             {/* SECTION HEADING 4 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               4. Your salary looks different on paper than in your account
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Qatar is tax-free. That part is true. But what catches many teachers off-guard is the gap between their gross contractual salary and what actually lands in their bank account each month once deductions, accommodation arrangements, and allowance structures are accounted for.</p>
               <p>Some schools pay a basic salary plus allowances — housing, transport, utilities — as separate line items. Others roll everything into one number. The way these are structured affects your take-home significantly, especially if accommodation is deducted from payroll rather than provided directly.</p>
               <p>
                 The benchmark numbers as a guide for international school teachers in Qatar:{" "}
                 <span className="inline-block bg-[#3739DB] text-[#FCCB52] font-bold px-[14px] py-[4px] rounded-[6px] mx-1 my-1 align-middle leading-snug">
                   QAR 12,000–20,000/month
                 </span>{" "}
                 for classroom teachers depending on experience and school tier, with senior and leadership roles ranging considerably higher. Always negotiate — the first offer is rarely the ceiling.
               </p>
             </motion.div>

             {/* SECTION HEADING 5 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               5. Community is everything — find yours fast
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Qatar can feel isolating in the first few months, particularly if you've arrived mid-term or your school cohort is small. The expat teacher community in Doha is genuinely warm and well-connected, but it doesn't find you — you have to find it.</p>
               <p>Facebook groups are your best starting point. Search for your school name, 'Expat teachers Qatar,' and 'Doha families' groups — these communities are where you'll find everything from furniture for sale to visa advice to which GP to use. Beyond Facebook, your school community will be your primary social world, so invest in those relationships early.</p>
             </motion.div>

             <CheckList items={[
               "Join your school's staff WhatsApp group before you arrive if possible",
               "Attend every staff social event in your first term — you won't regret it",
               "Find the Facebook group for your specific school or housing compound",
               "Connect with other international teachers across schools through community events",
               "Get to know your PRO — they are an invaluable resource for navigating everything"
             ]} />

             {/* SECTION HEADING 6 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               6. Banking takes longer than you expect
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>You cannot open a Qatari bank account without your QID. Your QID takes weeks. This means you will arrive with whatever cash and international cards you brought, and you will need to make them last longer than you planned. Most schools pay into an account once it's set up, which means your first month's salary is often delayed.</p>
               <p>The most commonly used banks among expat teachers are QNB (Qatar National Bank) and Commercial Bank. Both have English-language services and reasonable online banking. The process is straightforward once your QID is in hand — it's just the waiting period that catches people off-guard.</p>
             </motion.div>

             <TipBox label="FINANCIAL TIP" variant="tip">
               Arrive with at least two months of living expenses in accessible funds — cash or a{" "}
               <a href="https://wise.com/invite/dic/nompumelelos1" target="_blank" rel="sponsored noopener noreferrer" className="text-brand-blue hover:underline font-semibold relative z-10">
                 Wise card
               </a>{" "}
               loaded with USD. Don't rely on your employer advancing salary; not all schools will. Wise is particularly useful in Qatar as it gives you access to multiple currencies and avoids the fees that local ATMs charge on foreign cards — and you can set up your account before you leave home so it's ready the moment you land.
             </TipBox>

             {/* SECTION HEADING 7 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               7. The document attestation rabbit hole is real
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>This deserves its own section because it is the thing that causes the most stress for teachers arriving in Qatar, and almost all of that stress is preventable with the right preparation.</p>
               <p>To work in Qatar as a teacher, your qualifications need to be attested through a chain of government bodies — typically your university, your country's foreign affairs department (FCDO in the UK, DIRCO in South Africa), and then the Qatari embassy in your home country. Each step takes time, each step costs money, and if you miss a step or do them in the wrong order, you start again.</p>
               <p>I've created a free step-by-step checklist specifically for UK and South African teachers going through this process — it includes exact costs, realistic timeframes, and the addresses of every office you'll need to visit or contact.</p>
             </motion.div>

             <CTABox 
               title="Get the free Qatar documentation checklist"
               body="Step-by-step attestation guide for UK and South African teachers — with exact costs, timeframes, and office addresses included."
               buttons={[
                 { text: "Download free checklist", href: "https://drive.google.com/file/d/1ugj0TeUoQ7Z6zT8QaW6QcQdu5Y4l99xJ/view?usp=sharing", type: "solid" },
                 { text: "Get immigration checklist", href: "https://drive.google.com/file/d/1UMgNsJjvVQzCXEMbJAYksE3BGLnTU_z8/view?usp=sharing", type: "ghost" }
               ]}
             />

             {/* THE HONEST SUMMARY */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               The honest summary
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Qatar is one of the most financially rewarding places to teach in the world. The schools are well-resourced, the lifestyle — outside of the summer months — is genuinely good, and the expat community is warm and welcoming. But it rewards preparation. The teachers who struggle in their first year are almost always the ones who arrived without a clear picture of what the immigration process, housing, and financial setup actually look like on the ground.</p>
               <p>I built Expat Teacher's Lounge because when I was navigating this, I had to piece together information from Facebook groups, outdated blog posts, and corridor conversations with colleagues who'd been there longer. You shouldn't have to do that. Everything I've learned — from contract negotiation to the QID process to which neighbourhoods to live in — is in the resources I've put together for you.</p>
               <p>If you're planning a move to Qatar and want to talk through your specific situation — your contract, your timeline, your family setup — my 1-on-1 coaching sessions are available for exactly this. Sometimes you just need someone who's lived it to talk you through it.</p>
             </motion.div>

             <CTABox 
               title="Ready to plan your Qatar move properly?"
               body="Browse the full suite of Qatar resources — from free checklists to the complete school guide — or book a 1-on-1 session."
               buttons={[
                 { text: "Browse Qatar resources", href: "/products", type: "solid" },
                 { text: "Book a session", href: "/coaching", type: "ghost" }
               ]}
             />

             {/* TAG LIST */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="flex flex-wrap gap-[8px] my-[32px]">
               {["Qatar", "Teaching abroad", "International school", "Expat life", "Doha", "Teacher relocation", "First year abroad", "Immigration"].map((tag, i) => (
                 <span key={i} className="text-[12px] bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.04)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-full px-[12px] py-[4px] font-body text-gray-700 dark:text-gray-300">
                   {tag}
                 </span>
               ))}
             </motion.div>

             <hr className="border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] my-8" />

             {/* AUTHOR BIO */}
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="flex flex-col sm:flex-row gap-[16px] bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.03)] rounded-[12px] p-[24px] border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)]">
               <div className="flex-shrink-0">
                  <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden bg-brand-blue flex items-center justify-center">
                    <span className="text-white font-bold absolute z-0 text-lg">ES</span>
                    <Image src="/images/Edwina_headshot.png" alt="Edwina Shangase" fill className="object-cover object-top relative z-10" />
                  </div>
               </div>
               <div>
                  <div className="font-bold text-[15px] font-body text-gray-900 dark:text-white">Edwina Shangase</div>
                  <div className="text-brand-blue text-[12px] font-body mb-[10px] font-medium tracking-wide">Founder, Expat Teacher&apos;s Lounge · 18 years international teaching</div>
                  <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-[1.6] font-body">
                    South African international teacher who has lived and worked in the UK, Qatar, and Canada. I built Expat Teacher&apos;s Lounge because the resources I needed when I moved didn't exist. Everything on this platform is built from lived experience — not scraped from the internet.
                  </p>
               </div>
             </motion.div>

          </div>

          {/* RIGHT COLUMN — Sidebar */}
          <div className="w-full lg:w-[300px] flex-shrink-0 relative">
             <div className="sticky top-[100px] space-y-[24px]">
                
                {/* Widget 1 — About Edwina */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-[24px]">
                  <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                    <Image src="/images/Edwina_headshot.png" alt="Edwina Shangase" fill className="object-cover object-top" />
                  </div>
                  <div className="font-display font-bold text-[16px] text-gray-900 dark:text-white">Edwina Shangase</div>
                  <div className="text-gray-500 dark:text-gray-400 text-[12px] font-body mb-[10px]">Founder · 18 years international teaching</div>
                  <p className="text-gray-500 dark:text-gray-400 text-[13px] font-body mb-[16px] leading-relaxed">
                    South African teacher who has lived and worked in the UK, Qatar, and Canada.
                  </p>
                  <a href="/about" className="text-brand-blue text-[13px] font-medium hover:underline flex items-center">
                    Read my story <span className="ml-1">→</span>
                  </a>
                </motion.div>

                {/* Widget 2 — Free Resources */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-[24px]">
                  <div className="font-display font-bold text-[16px] text-gray-900 dark:text-white mb-[14px]">Free Qatar guides</div>
                  <div className="space-y-4">
                    <a href="https://drive.google.com/file/d/1ugj0TeUoQ7Z6zT8QaW6QcQdu5Y4l99xJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-start gap-[8px] group">
                      <span className="bg-[#E1F5EE] text-[#0F6E56] text-[10px] font-bold px-[8px] py-[2px] rounded-full flex-shrink-0 mt-0.5">Free</span>
                      <span className="text-brand-blue text-[13px] font-medium group-hover:underline leading-snug">Qatar Documentation Checklist</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1UMgNsJjvVQzCXEMbJAYksE3BGLnTU_z8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-start gap-[8px] group">
                      <span className="bg-[#E1F5EE] text-[#0F6E56] text-[10px] font-bold px-[8px] py-[2px] rounded-full flex-shrink-0 mt-0.5">Free</span>
                      <span className="text-brand-blue text-[13px] font-medium group-hover:underline leading-snug">Qatar Immigration Checklist</span>
                    </a>
                  </div>
                </motion.div>

                {/* Widget 3 — Email Signup */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.3 }} className="bg-brand-deep rounded-[16px] p-[24px]">
                  <div className="font-display font-bold text-[16px] text-white">Get more guides</div>
                  <div className="text-white/65 text-[13px] font-body mb-[16px] mt-1">Relocation intel straight to your inbox.</div>
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      required 
                      className="w-full bg-white/12 text-white placeholder:text-white/40 border border-transparent focus:border-white/30 rounded-[8px] p-[10px_14px] text-[13px] outline-none" 
                    />
                    <button type="submit" className="w-full bg-[#FCCB52] text-[#3739DB] font-bold rounded-[8px] p-[10px] text-[13px] hover:bg-yellow-400 transition-colors">
                      Subscribe
                    </button>
                  </form>
                </motion.div>

                {/* Widget 4 — Categories */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.4 }} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-[24px]">
                  <div className="font-display font-bold text-[16px] text-gray-900 dark:text-white mb-[16px]">Categories</div>
                  <ul className="space-y-[12px] font-body text-[13px]">
                    <li className="flex justify-between border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] pb-[12px] last:border-0 last:pb-0">
                       <a href="#" className="text-brand-blue font-medium hover:underline">Qatar</a>
                       <span className="text-gray-400 font-bold text-[11px] bg-gray-100 dark:bg-[#1a1b26] px-2 py-0.5 rounded-full">(1)</span>
                    </li>
                    {["Canada", "Career", "Immigration", "Finance"].map((cat, i) => (
                      <li key={i} className="flex justify-between border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] pb-[12px] last:border-0 last:pb-0">
                         <span className="text-gray-400 dark:text-gray-500">{cat}</span>
                         <span className="text-gray-400/50 dark:text-gray-600 text-[11px]">soon</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

             </div>
          </div>

        </div>
      </section>

    </div>
  );
}
