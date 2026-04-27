"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { TipBox } from "@/components/blog/TipBox";
import { CTABox } from "@/components/blog/CTABox";
import { CheckList } from "@/components/blog/CheckList";

export default function BlogContent() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#0a0b14] overflow-hidden">
      
      {/* SECTION 1 — HERO */}
      <section className="relative w-full min-h-[55vh] bg-[#0a0b14] flex flex-col justify-center py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Edwina_picture_on_the_coach.png" 
            alt="Hero background" 
            fill 
            className="object-cover opacity-[0.25]" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,11,20,0.90)] to-[rgba(55,57,219,0.25)]" />
        </div>
        
        <div className="relative z-10 max-w-[780px] mx-auto text-center flex flex-col items-center mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="bg-brand-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Career</span>
            <span className="text-white/50 text-sm font-body">April 2026 · 11 min read</span>
          </motion.div>
          
          <h1 className="font-display font-black text-4xl md:text-[52px] text-white leading-[1.1] mb-6">
            {"How I Built a Business While Teaching Full-Time in Qatar — And How You Can Too".split(" ").map((word, i) => (
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
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE BANNER */}
      <div className="w-full bg-[rgba(252,203,82,0.08)] border-b border-[rgba(252,203,82,0.2)] dark:bg-[rgba(252,203,82,0.03)] dark:border-[rgba(252,203,82,0.1)]">
        <div className="container mx-auto px-6 max-w-[1100px] text-center text-[13px] text-gray-500 dark:text-gray-400 py-[10px] font-body">
          This post contains affiliate links for Wise and Hostinger. If you sign up using my links I may earn a small commission at no extra cost to you. I only recommend tools I have personally used.
        </div>
      </div>

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
               "I was teaching full-time in Doha, managing a family relocation, and building a business from scratch. Nobody told me it was possible. Nobody told me how. This is both the story and the framework."
             </motion.blockquote>

             {/* OPENING */}
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-[64px]">
               <p>When I arrived in Qatar, I had one income stream. A salary — a good one, tax-free, with housing and benefits. By most measures I was doing well. But I had watched too many colleagues finish their contracts, fly home, and discover that years of international teaching hadn't built the kind of financial foundation they expected. The salary was great. The savings were less impressive. And there was no plan B.</p>
               <p>I decided to change that. Not by quitting teaching — I love teaching and I have no intention of stopping. But by using what I already had — 18 years of hard-won knowledge about international teaching, relocation, and career navigation — and turning it into something that could earn money independently of my contract.</p>
               <p>What followed was two years of building Expat Teacher's Lounge alongside a full teaching workload in Doha. This post is the honest account of what I did, what I got wrong, and the framework I would use if I were starting from scratch today. If you are an international teacher who wants to build income streams that survive the end of your contract — this is for you.</p>
             </motion.div>

             {/* PART 1 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[32px] md:text-[36px] text-gray-900 dark:text-white mb-6">
               Part 1: How I actually built this — the honest version
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-10">
               <p>Let me be clear about what building a business while teaching full-time actually looks like. It does not look like a Pinterest vision board. It looks like marking until 9pm and then spending an hour on a product. It looks like planning content on a Saturday morning before your family wakes up. It looks like Googling things you don't understand at midnight because there is no IT department, no marketing team, and no one to ask.</p>
             </motion.div>

             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-12 mb-4">
               The idea came from frustration, not inspiration
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-10">
               <p>Every time I moved country, I went through the same exhausting process of piecing together information from Facebook groups, outdated forums, and colleagues who had been there longer. By the time I was in Qatar, I had done this enough times that I could see the pattern clearly — the information international teachers needed existed, but it was scattered, unverified, and buried under noise.</p>
               <p>I started building what I wished had existed. A structured, honest, experience-based resource for international teachers navigating career moves. No recruitment agenda. No generic advice. Just the real information, organised properly.</p>
             </motion.div>

             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-12 mb-4">
               The first product took three months
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>My first digital product was a simple checklist — the Qatar document attestation guide that I now offer for free as a lead magnet. At the time I thought it was a paid product. It took me three months of evenings and weekends to research, write, design, and publish it. I made almost nothing from it initially.</p>
               <p>What it did do was teach me the process. How to structure information clearly. How to design something that looked professional. How to set up a Stan Store listing. How to write a product description. Those skills compounded. The next product took six weeks. The one after that took two.</p>
             </motion.div>

             <TipBox label="KEY LESSON" variant="tip">
               Your first product will take longer than you expect and earn less than you hope. Do it anyway. You are not building a product — you are building the skill of building products. The second one is always faster and better.
             </TipBox>

             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-12 mb-4">
               What actually made money
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-[64px]">
               <p>The honest answer is that the combination of free resources and paid products worked better than either alone. The free Qatar checklists built my email list and established my credibility. Teachers who downloaded the free guides trusted me enough to buy the paid tools. Teachers who bought the tools booked coaching sessions.</p>
               <p>The coaching sessions were the highest-margin income stream by far — no production cost, no delivery infrastructure, just time and expertise. If I were starting again today I would launch the coaching offer first, use it to understand exactly what teachers needed, and then build the products around those conversations.</p>
               <p>The website — Expat Teacher's Lounge — was the platform that held all of it together. Having a professional home for the brand made everything else more credible. A Stan Store link in a bio is fine for starting out. A proper website signals that this is a real business.</p>
             </motion.div>


             {/* PART 2 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[32px] md:text-[36px] text-gray-900 dark:text-white mb-6">
               Part 2: The framework any international teacher can follow
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-12">
               <p>Here is the process I would follow if I were starting from zero today. This is not theory — it is what I actually did, reorganised into the order I wish I had done it.</p>
             </motion.div>

             {/* STEP 1 */}
             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-12 mb-4">
               Step 1 — Identify your knowledge asset
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Every international teacher has a knowledge asset. It is the accumulated understanding of something specific — a country's immigration process, a curriculum system, a school type, a subject specialism, a career transition, a relocation process — that took years to acquire and that other people would pay to shortcut.</p>
               <p>The question is not 'do I have anything worth selling?' You do. The question is 'which part of what I know is most painful for other people not to have?' That is where you start.</p>
             </motion.div>
             <CheckList items={[
               "What questions do colleagues ask you repeatedly?",
               "What do you know about your host country that took you a long time to figure out?",
               "What mistakes did you make in your first year that others could avoid?",
               "What do you understand about contracts, schools, or systems that most teachers don't?",
               "What would you have paid for before your first international move?"
             ]} />

             {/* STEP 2 */}
             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-16 mb-4">
               Step 2 — Build your platform
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Before you can sell anything you need somewhere to sell it from. This does not need to be complicated or expensive at the beginning — but it does need to be yours. A social media profile is not a platform. A platform is something you own and control, that exists independently of any algorithm.</p>
               <p>The simplest starting point is a website. I built the first version of Expat Teacher's Lounge on Hostinger — it is affordable, straightforward to set up, and gives you everything you need to start: a domain, hosting, a blog, and pages for your products and services. For teachers who want to build a content-driven business without a technical background, it is the most accessible entry point I have found.</p>
             </motion.div>

             {/* HOSTINGER CTA BOX */}
             <motion.div initial={{ scale: 0.97, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: 0.1 }} className="rounded-[16px] p-8 my-10 text-white flex flex-col md:flex-row gap-6 items-start md:items-center bg-gradient-to-br from-[#1C91D7] to-[#3739DB] shadow-lg">
               <div className="text-[48px] leading-none flex-shrink-0">🌐</div>
               <div className="flex-1 text-center md:text-left">
                 <h3 className="font-display font-bold text-[20px] text-white mb-2">Build your platform on Hostinger</h3>
                 <p className="text-white/75 text-[14px] leading-[1.7] font-body mb-5">Hostinger gives you everything you need to launch your teaching brand online — domain, hosting, website builder, and blog. It is where I started building Expat Teacher's Lounge, and it is the most accessible option I recommend to teachers building their first online presence.</p>
                 <a href="https://www.hostinger.com?REFERRALCODE=MPUMES" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-white text-[#3739DB] font-bold rounded-[8px] py-[12px] px-[24px] mb-2 hover:bg-gray-100 transition-colors text-sm shadow-md">
                   Get started with Hostinger →
                 </a>
                 <div className="text-white/50 text-[11px] font-body mt-2">Affiliate link — I earn a small commission if you sign up, at no cost to you</div>
               </div>
             </motion.div>

             {/* STEP 3 */}
             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-16 mb-4">
               Step 3 — Create your first product
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Your first product should solve one specific problem for one specific person. Not a comprehensive guide to everything. One problem. One solution. Priced accessibly — between $5 and $20 — so the barrier to purchase is low and you can start building a track record of sales.</p>
               <p>For most international teachers, the most logical first product is a checklist, guide, or toolkit based on something you have already navigated. Your Qatar documentation process. Your UAE visa journey. Your New Zealand teacher registration pathway. You have already done the research — you just need to organise it clearly and present it professionally.</p>
               <p>Do not wait until it is perfect. A useful product that exists earns more than a perfect product that is still in your Google Drive.</p>
             </motion.div>
             <TipBox label="WHAT I BUILT FIRST" variant="tip">
               My first products were Qatar-specific checklists — the documentation guide and the immigration checklist. They are now free lead magnets that build my email list. Start with what you know best, price it accessibly, and refine as you go.
             </TipBox>

             {/* STEP 4 */}
             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-16 mb-4">
               Step 4 — Sort your money infrastructure
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>This is the part most people leave until it becomes a problem. As an international teacher building a business, you will almost certainly be earning money in one currency, living in another, and potentially banking in a third. Without the right tools, you will lose a significant percentage of every transaction to bank fees and poor exchange rates.</p>
               <p>The tool I use and recommend to every expat teacher entrepreneur is Wise. It gives you local bank account details in multiple currencies — so you can receive payments in USD, GBP, EUR, or AED without international transfer fees — and a debit card you can use anywhere in the world at the real exchange rate. When I was in Qatar, Wise meant I could receive income from international customers, pay for business tools priced in USD, and send money home to South Africa without the fees that traditional banks charge.</p>
               <p>Setting up your Wise account before you launch anything means you are ready to receive your first payment the moment it arrives — without the delay and frustration of trying to set up banking infrastructure under pressure.</p>
             </motion.div>

             {/* WISE CTA BOX */}
             <motion.div initial={{ scale: 0.97, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: 0.1 }} className="rounded-[16px] p-8 my-10 text-white flex flex-col md:flex-row gap-6 items-start md:items-center bg-gradient-to-br from-[#0ea5b5] to-[#0d8a9a] shadow-lg">
               <div className="text-[48px] leading-none flex-shrink-0">💸</div>
               <div className="flex-1 text-center md:text-left">
                 <h3 className="font-display font-bold text-[20px] text-white mb-2">Manage your money across borders with Wise</h3>
                 <p className="text-white/75 text-[14px] leading-[1.7] font-body mb-5">Wise gives international teacher entrepreneurs local bank details in multiple currencies, a real exchange rate on every transfer, and a debit card that works worldwide. It is how I receive business income, pay for tools, and send money home — without losing money to bank fees on every transaction.</p>
                 <a href="https://wise.com/invite/dic/nompumelelos1" target="_blank" rel="sponsored noopener noreferrer" className="inline-block bg-white text-[#0d8a9a] font-bold rounded-[8px] py-[12px] px-[24px] mb-2 hover:bg-gray-100 transition-colors text-sm shadow-md">
                   Open your Wise account →
                 </a>
                 <div className="text-white/50 text-[11px] font-body mt-2">Affiliate link — I earn a small commission if you sign up, at no cost to you</div>
               </div>
             </motion.div>

             {/* STEP 5 */}
             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-16 mb-4">
               Step 5 — Build your audience before you need it
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>The biggest mistake I see teacher entrepreneurs make is building the product before building the audience. They spend months creating something and then have no one to sell it to. The sequence should be reversed — build the audience first, understand exactly what they need, then build the product.</p>
               <p>For international teachers, the audience-building tools that work best are a combination of content (blog posts, YouTube videos, Instagram reels) and email. Social media builds awareness. Email builds relationship. And relationship is what converts a follower into a customer.</p>
               <p>You do not need a large audience to start earning. I made my first sales with fewer than 500 email subscribers. What you need is the right audience — people who are specifically planning or navigating an international teaching move and who trust you because your content has been genuinely useful to them.</p>
             </motion.div>
             <TipBox label="START HERE" variant="tip">
               Pick one platform and one content format and commit to it for six months before adding another. For international teachers, YouTube performs exceptionally well — search intent is high, the audience is global, and video builds trust faster than any other format. A single useful video about your host country's immigration process can drive traffic for years.
             </TipBox>

             {/* STEP 6 */}
             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-16 mb-4">
               Step 6 — Build systems so the business runs without you
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>The goal is not to create a second full-time job. The goal is to build systems that earn money independently of your daily effort. This means automating your email sequences, setting up your product delivery so it happens without your involvement, and creating content that continues to drive traffic long after you publish it.</p>
               <p>When I was teaching in Qatar, I had automated email sequences that delivered free resources, followed up with product recommendations, and onboarded new subscribers — all while I was in the classroom. The business was working while I was working. That is the model to build toward.</p>
             </motion.div>
             <CheckList items={[
               "Set up automated email delivery for every free resource download",
               "Create a welcome sequence for new subscribers (minimum 3 emails)",
               "Ensure all paid products deliver automatically on purchase",
               "Schedule social content in advance — do not post manually every day",
               "Build a content calendar so you always know what you are publishing next"
             ]} />


             {/* PART 3 */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[32px] md:text-[36px] text-gray-900 dark:text-white mt-[80px] mb-6">
               Part 3: What building a business alongside teaching actually looks like
             </motion.h2>

             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-10 mb-4">
               The reality of the time commitment
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>I want to be honest about this because most content about building online businesses glosses over it. In the first year, I spent approximately eight to ten hours per week on the business. That is one evening per weekday and a few hours on weekends. It is not nothing. It requires discipline and it requires saying no to things.</p>
               <p>What made it sustainable was treating those hours as non-negotiable — the same way I treated my marking load or my lesson planning. The business got its hours whether I felt like it or not. Motivation is unreliable. Schedule is not.</p>
               <p>By the second year, as systems were in place and content was compounding, the active time requirement dropped. Existing content kept driving traffic. Automated sequences kept converting subscribers. I was spending closer to four to five hours per week maintaining and growing rather than building from scratch.</p>
             </motion.div>

             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-12 mb-4">
               The financial reality
             </motion.h3>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>I will not give you specific revenue numbers because they are not the point and they are not representative. What I will say is that the income from Expat Teacher's Lounge started small — genuinely small, enough for a nice dinner — and grew consistently over eighteen months to the point where it represented a meaningful secondary income alongside my teaching salary.</p>
               <p>The compounding nature of content-driven income is what makes it worth the effort. A blog post I wrote two years ago still drives traffic today. A free resource I created eighteen months ago still adds subscribers to my email list every week. The work you do now keeps earning long after you have stopped doing it.</p>
               <p>That is the fundamental difference between a salary and a content business. Your salary stops the moment your contract ends. Your content does not.</p>
             </motion.div>

             <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[24px] text-gray-900 dark:text-white mt-12 mb-4">
               What I would do differently
             </motion.h3>
             <CheckList items={[
               "Start the coaching offer first — it requires no product to build and teaches you exactly what people need",
               "Build the email list from day one — do not wait until you have something to sell",
               "Invest in the website earlier — a professional platform builds credibility faster than any social media presence",
               "Collaborate with other international teacher creators — the community is genuinely supportive",
               "Document the journey publicly — people buy from people they have followed, not from strangers"
             ]} />


             {/* FINAL CTA SECTION */}
             <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="font-display font-bold text-[32px] md:text-[36px] text-gray-900 dark:text-white mt-[80px] mb-6">
               Ready to start building?
             </motion.h2>
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="space-y-6 font-body text-[17px] text-gray-700 dark:text-gray-300 leading-[1.8] mb-8">
               <p>Everything I have described in this post is possible for any international teacher with a genuine knowledge asset and the willingness to show up consistently. You do not need a technical background. You do not need a large following. You need to start.</p>
               <p>If you want to talk through your specific situation — what you know, what you could build, and how to fit it around a full teaching workload — that is exactly what my coaching sessions are for. I have helped teachers at every stage of this process, and the conversation that helps most is always the first one.</p>
             </motion.div>

             <CTABox 
               title="Start building your teaching business"
               body="Book a strategy session to map out your knowledge asset, your first product, and your income plan — or browse the free resources to start your research today."
               buttons={[
                 { text: "Book a strategy session", href: "/coaching", type: "solid" },
                 { text: "Browse free resources", href: "/products", type: "ghost" }
               ]}
             />

             {/* TAG LIST */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="flex flex-wrap gap-[8px] my-[32px]">
               {["International teacher", "Side income", "Teacher entrepreneur", "Financial freedom", "Teaching abroad", "Passive income", "Expat business", "Hostinger", "Wise"].map((tag, i) => (
                 <span key={i} className="text-[12px] bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.04)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-full px-[12px] py-[4px] font-body text-gray-700 dark:text-gray-300">
                   {tag}
                 </span>
               ))}
             </motion.div>

             <hr className="border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] my-8" />

             {/* AUTHOR BIO */}
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="flex flex-col sm:flex-row gap-[16px] bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.03)] rounded-[12px] p-[24px] border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)]">
               <div className="flex-shrink-0">
                  <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden flex items-center justify-center">
                    <Image src="/images/Edwina_headshot.png" alt="Edwina Shangase" fill className="object-cover object-top relative z-10" />
                  </div>
               </div>
               <div>
                  <div className="font-bold text-[15px] font-body text-gray-900 dark:text-white">Edwina Shangase</div>
                  <div className="text-brand-blue text-[12px] font-body mb-[10px] font-medium tracking-wide">Founder, Expat Teacher&apos;s Lounge · 18 years international teaching</div>
                  <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-[1.6] font-body">
                    South African international teacher who has lived and worked in the UK, Qatar, and Canada. I built Expat Teacher&apos;s Lounge alongside a full teaching career because I believe international teachers deserve both great careers and financial freedom. Everything here is built from lived experience.
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

                {/* Widget 2 — Featured Products */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-[24px]">
                  <div className="font-display font-bold text-[16px] text-gray-900 dark:text-white mb-[16px]">Tools to start your journey</div>
                  <div className="space-y-[12px]">
                    <a href="https://buy.stripe.com/5kQ4grbuF1z42pC1c6c3m01" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center group">
                      <span className="text-brand-blue text-[13px] font-medium group-hover:underline">Personal Goal Assessment</span>
                      <span className="text-[#0F6E56] font-bold text-[11px] bg-[#E1F5EE] px-[6px] py-[2px] rounded-md">$6.00</span>
                    </a>
                    <a href="https://buy.stripe.com/3cI6ozfKV1z43tGaMGc3m02" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center group">
                      <span className="text-brand-blue text-[13px] font-medium group-hover:underline">Country Comparison Tool</span>
                      <span className="text-[#0F6E56] font-bold text-[11px] bg-[#E1F5EE] px-[6px] py-[2px] rounded-md">$7.99</span>
                    </a>
                    <a href="https://buy.stripe.com/14A8wHeGR7Xs2pC9ICc3m00" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center group">
                      <span className="text-brand-blue text-[13px] font-medium group-hover:underline flex-1">Market Overview 2025</span>
                      <span className="text-[#0F6E56] font-bold text-[11px] bg-[#E1F5EE] px-[6px] py-[2px] rounded-md ml-2">$5.99</span>
                    </a>
                  </div>
                </motion.div>

                {/* Widget 3 — Affiliate Tools */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-[24px]">
                  <div className="font-display font-bold text-[16px] text-gray-900 dark:text-white mb-[16px]">Tools I use and recommend</div>
                  <div className="space-y-[16px]">
                    {/* Card 1 — Wise */}
                    <div className="flex flex-col gap-2 p-[12px] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] rounded-[12px] border border-[rgba(0,0,0,0.04)] dark:border-[rgba(255,255,255,0.04)]">
                      <div className="flex items-center gap-3 mb-1">
                         <div className="w-[40px] h-[40px] rounded-full bg-[#0ea5b5] flex-shrink-0 flex items-center justify-center text-white text-lg">💸</div>
                         <div>
                            <div className="font-semibold text-[14px] text-gray-900 dark:text-white leading-none">Wise</div>
                            <div className="text-gray-500 dark:text-gray-400 text-[12px] leading-tight mt-[6px]">Multi-currency accounts for expat entrepreneurs</div>
                         </div>
                      </div>
                      <a href="https://wise.com/invite/dic/nompumelelos1" target="_blank" rel="sponsored noopener noreferrer" className="text-[#0ea5b5] font-semibold text-[13px] hover:underline mt-1">Open free account →</a>
                    </div>
                    
                    {/* Card 2 — Hostinger */}
                    <div className="flex flex-col gap-2 p-[12px] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] rounded-[12px] border border-[rgba(0,0,0,0.04)] dark:border-[rgba(255,255,255,0.04)]">
                      <div className="flex items-center gap-3 mb-1">
                         <div className="w-[40px] h-[40px] rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center text-white text-lg">🌐</div>
                         <div>
                            <div className="font-semibold text-[14px] text-gray-900 dark:text-white leading-none">Hostinger</div>
                            <div className="text-gray-500 dark:text-gray-400 text-[12px] leading-tight mt-[6px]">Affordable website hosting for teacher brands</div>
                         </div>
                      </div>
                      <a href="https://www.hostinger.com?REFERRALCODE=MPUMES" target="_blank" rel="sponsored noopener noreferrer" className="text-brand-blue font-semibold text-[13px] hover:underline mt-1">Get started →</a>
                    </div>
                  </div>
                </motion.div>

                {/* Widget 4 — Email Signup */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: 0.4 }} className="bg-brand-deep rounded-[16px] p-[24px]">
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

             </div>
          </div>

        </div>
      </section>

    </div>
  );
}
