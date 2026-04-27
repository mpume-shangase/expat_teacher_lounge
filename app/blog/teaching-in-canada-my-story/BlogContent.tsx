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
            src="/images/Edwina_picture_on_the_coach.png" 
            alt="Hero background" 
            fill 
            className="object-cover opacity-30 object-top" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,11,20,0.92)] to-[rgba(10,11,20,0.7)]" />
        </div>
        
        <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="bg-brand-gold text-brand-deep text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Canada</span>
            <span className="text-white/50 text-sm font-body">April 2026 • 12 min read</span>
          </motion.div>
          
          <h1 className="font-display font-black text-4xl md:text-[46px] lg:text-[52px] text-white leading-[1.15] mb-6">
            How I Got a Teaching Job in Canada from Qatar — And How the Whole Thing Moved Faster Than I Ever Expected
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
               className="border-l-4 border-brand-gold pl-[20px] italic text-[19px] text-gray-500 dark:text-gray-400 font-body mb-[40px] leading-relaxed"
             >
               "I had a vague 5-year plan to eventually end up in Canada. But when an email landed in my inbox about an online recruitment drive focused on New Brunswick, that timeline collapsed into fewer than 12 months."
             </motion.blockquote>

             {/* OPENING PARAGRAPHS */}
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-[40px]">
               <p>Canada is often viewed as the ultimate 'end goal' for many international teachers — fantastic standard of living, strong public education system, and a clear pathway to permanent residency and citizenship. But the process has a reputation for being impossibly slow, highly competitive, and riddled with confusing point-based systems.</p>
               <p>My journey from a busy international school in Doha, Qatar, to a permanent teaching role in New Brunswick, Canada happened differently. Thanks to a targeted provincial recruitment drive, I received a job offer, provincial nomination, work visa, and PR application within a truly dizzying timeframe.</p>
               <p>If you're looking at Canada as your next destination but feel overwhelmed by Express Entry, PNPs, and WES attestations, this is exactly how I navigated the process — and the mistakes I nearly made along the way.</p>
             </motion.div>

             {/* SECTION HEADING 1 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-12 mb-6">
               1. Finding the loophole: Provincial Recruitment Drives
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Most teachers assume their only route to Canada is entering the general Express Entry pool, hoping their points (CRS score) are high enough to get drawn, waiting months or years, moving to Canada without a job, and hoping they can find work once they land.</p>
               <p>I took the opposite approach: The employer-driven route. Several Canadian provinces — particularly the Atlantic provinces (New Brunswick, Nova Scotia, Newfoundland and Labrador, and Prince Edward Island) — have critical teacher shortages. To fill them, their provincial governments host targeted, invitation-only online recruitment drives specifically for international teachers.</p>
             </motion.div>

             <TipBox label="THE STRATEGY" variant="tip">
               Stop randomly sending CVs to Canadian school boards from abroad. Instead, actively monitor provincial immigration websites for "International Recruitment Events". When an education-focused event is announced, submit your profile immediately.
             </TipBox>

             {/* SECTION HEADING 2 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               2. The interview that changed everything
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>After registering for a New Brunswick online recruitment event, I received an invitation for an interview with an Anglophone school district. The interview wasn't just with a principal; it was with district-level HR and immigration officials who could facilitate the entire visa process.</p>
               <p>Canadian teaching interviews are intensely focused on pedagogy, inclusive education, and First Nations perspectives. They didn't ask me about where I got my degree; they asked me how I would differentiate a lesson for an undiagnosed neurodivergent student, and how I've decolonised my curriculum in previous roles.</p>
             </motion.div>

             <CheckList items={[
               "Familiarise yourself with Universal Design for Learning (UDL), standard in Canadian schools",
               "Understand the concept of 'inclusion' as policy, not just a buzzword",
               "Be prepared to discuss working with EAL (English as an Additional Language) students",
               "Highlight any experience you have in rural or culturally diverse settings"
             ]} />

             {/* SECTION HEADING 3 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               3. The job offer and the NB PNP
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Within a week, I had a formal job offer. Because this was a targeted recruitment drive, the job offer immediately allowed me to apply for the New Brunswick Provincial Nominee Program (NB PNP). A provincial nomination gives you a massive 600-point boost in the federal Express Entry system — effectively guaranteeing that you will be drawn for Permanent Residency in the next round.</p>
               <p>But the real magic of the employer-driven PNP is the Work Permit Support Letter. This letter allowed me to apply for a closed work permit, meaning I could move to Canada and start working months before my Permanent Residency was actually finalized.</p>
             </motion.div>

             {/* MID ARTICLE CTA */}
             <CTABox 
               title="Want the exact Canada roadmap?"
               body="Join Premium to access the full Canada Relocation Hub, including a detailed breakdown of the New Brunswick Pathway, certification guides, and interview prep tailored for Canadian school boards."
               buttons={[
                 { text: "Join Premium — $15/month", href: "/pricing", type: "solid" }
               ]}
             />

             {/* SECTION HEADING 4 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               4. The WES evaluation nightmare
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>The only thing that nearly derailed my timeline was WES (World Education Services). To teach in Canada and apply for PR, you need an Educational Credential Assessment (ECA) to prove your foreign degrees are equivalent to Canadian ones.</p>
               <p>Getting your university to send physical, sealed transcripts securely across the world to Canada, while you are living in Qatar, is a logistical nightmare. Start this process the absolute second you consider moving to Canada.</p>
             </motion.div>

             <TipBox label="WARNING" variant="warning">
               Do not request a standard WES evaluation. You must request a WES ECA specifically for IRCC (Immigration, Refugees and Citizenship Canada). If you get the standard one, it will be rejected by the government.
             </TipBox>

             {/* SECTION HEADING 5 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               5. Certification and "Local Context"
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Each Canadian province manages its own teacher certification. In New Brunswick, getting certified as a foreign teacher required a mountain of paperwork including degree syllabi, a statement of professional standing from every country I had ever taught in (yes, the UK, South Africa, and Qatar), and an RCMP criminal record check.</p>
               <p>Once certified, you are typically granted an Interim Certificate. You will likely be required to complete specific university courses — usually in Canadian History or Local Context legislation — to upgrade to a permanent teaching license.</p>
             </motion.div>

             {/* SECTION HEADING 6 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               6. The two-week visa miracle
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Because I was applying with a PNP nomination and a Work Permit Support Letter, my work visa application was expedited. I completed my biometrics in Doha, submitted the medical exam (which they are incredibly strict about), and received my passport back with a visa stamp in exactly 14 days.</p>
               <p>I flew out of Doha on a Tuesday, landed in Toronto, went through immigration (where they printed my actual work permit at the border), and took a connecting flight to Fredericton, New Brunswick.</p>
             </motion.div>

             {/* SECTION HEADING 7 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[26px] text-gray-900 dark:text-white mt-16 mb-6">
               7. The reality of arriving
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Teaching in Canada is fundamentally different from teaching in an international school in the Middle East. You leave behind the tax-free salary, the housing allowance, and the compounded expat bubble.</p>
               <p>What you trade it for is a strong union, an excellent pension plan, reasonable working hours, air quality you don't have to check on an app, and a clear path to citizenship for your family. Six months after I landed on a work permit, my Permanent Residency was approved. The 5-year vague plan had become reality.</p>
             </motion.div>

             <CTABox 
               title="Ready to start your Canadian journey?"
               body="Stop guessing which immigration pathway works for teachers. Get the exact step-by-step guides inside the Canada Relocation Hub, available exclusively to premium members."
               buttons={[
                 { text: "Join the Lounge", href: "/pricing", type: "solid" },
                 { text: "Book a coaching session", href: "/coaching", type: "ghost" }
               ]}
             />

             {/* TAG LIST */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="flex flex-wrap gap-[8px] my-[32px]">
               {["Canada", "New Brunswick", "Teaching abroad", "Immigration", "PNP", "Express Entry", "International teacher"].map((tag, i) => (
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
                
                {/* Widget 1 — Hub Entry */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-[#13151f] border-2 border-brand-gold rounded-[16px] p-[24px] shadow-sm relative overflow-hidden group hover:border-[#FACC15] transition-colors">
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                     <span className="text-3xl">🇨🇦</span>
                     <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg">Canada Hub</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-[13px] font-body mb-5 leading-relaxed relative z-10">
                    Get access to the step-by-step Canada pathway, including provincial guides, certification checklists, and immigration timelines.
                  </p>
                  <a href="/hub/canada" className="relative z-10 block text-center w-full bg-brand-deep hover:bg-brand-blue text-white font-bold py-2.5 rounded-lg text-sm transition-colors shadow-sm">
                    Enter the Hub
                  </a>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-gold rounded-full opacity-[0.15] blur-2xl group-hover:bg-[#FACC15] transition-colors"></div>
                </motion.div>
                
                {/* Widget 2 — About Edwina */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-[24px]">
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

                {/* Widget 3 — Categories */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-[24px]">
                  <div className="font-display font-bold text-[16px] text-gray-900 dark:text-white mb-[16px]">Categories</div>
                  <ul className="space-y-[12px] font-body text-[13px]">
                    <li className="flex justify-between border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] pb-[12px] last:border-0 last:pb-0">
                       <a href="/hub/canada" className="text-brand-blue font-medium hover:underline">Canada</a>
                       <span className="text-gray-400 font-bold text-[11px] bg-gray-100 dark:bg-[#1a1b26] px-2 py-0.5 rounded-full">(1)</span>
                    </li>
                    <li className="flex justify-between border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] pb-[12px] last:border-0 last:pb-0">
                       <a href="/hub/qatar" className="text-brand-blue font-medium hover:underline">Qatar</a>
                       <span className="text-gray-400 font-bold text-[11px] bg-gray-100 dark:bg-[#1a1b26] px-2 py-0.5 rounded-full">(1)</span>
                    </li>
                    {["Career", "Immigration", "Finance"].map((cat, i) => (
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
