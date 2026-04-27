"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Send } from "lucide-react";

function ScrollImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

  return (
    <div ref={ref} className="relative w-full h-[560px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
      <motion.div style={{ scale }} className="w-full h-full relative">
        <Image src="/images/Edwina_Teaching.png" alt="Who this is for" fill className="object-cover object-center" />
      </motion.div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <div className="flex flex-col w-full">
      
      {/* SECTION 1 — CINEMATIC PAGE HERO */}
      <section className="relative h-screen bg-[#0a0b14] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Edwina_reading_a_book.png" 
            alt="Hero background" 
            fill 
            className="object-cover opacity-20" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,11,20,0.95)] to-[rgba(55,57,219,0.3)]" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1100px]">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }} 
            className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-6 block"
          >
            Our story
          </motion.span>
          
          <h1 className="font-display font-black text-4xl md:text-[64px] text-white leading-tight mb-8">
            {"Built by a teacher who has lived it — every single move.".split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block mr-3" 
                initial={{ y: 60, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5, duration: 1 }} 
            className="font-body text-white/65 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            South Africa to the UK. The UK to Qatar. Qatar to Canada. Each move taught me something different. Each one confirmed that international teachers deserve far better resources than what exists.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — FOUNDING STORY */}
      <section className="py-[100px] px-6 md:px-12 bg-white dark:bg-[#0a0b14] overflow-hidden">
        <div className="container mx-auto max-w-[1100px] flex flex-col lg:flex-row gap-[80px]">
           
           {/* Left */}
           <motion.div 
             initial={{ x: -60, opacity: 0 }} 
             whileInView={{ x: 0, opacity: 1 }} 
             viewport={{ once: true, amount: 0.1 }} 
             transition={{ duration: 0.6 }}
             className="w-full lg:w-[45%] relative mt-8 lg:mt-0"
           >
              <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[520px]">
                 <Image 
                   src="/images/Edwina_picture_on_the_coach.png" 
                   alt="Edwina on coach" 
                   fill 
                   className="object-cover object-top rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]" 
                 />
                 <div className="absolute -bottom-[30px] -right-[30px] w-[180px] h-[180px] rounded-2xl border-4 border-white dark:border-[#0a0b14] shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden z-10 hidden sm:block">
                    <Image src="/images/Edwina_headshot.png" alt="Edwina headshot" fill className="object-cover" />
                 </div>
                 <div className="absolute -left-[16px] top-[60px] w-[4px] h-[120px] bg-[#FCCB52] rounded-sm z-10 hidden sm:block" />
              </div>
           </motion.div>
           
           {/* Right */}
           <motion.div 
             initial={{ x: 60, opacity: 0 }} 
             whileInView={{ x: 0, opacity: 1 }} 
             viewport={{ once: true, amount: 0.1 }} 
             transition={{ duration: 0.6 }}
             className="w-full lg:w-[55%]"
           >
             <span className="text-brand-blue uppercase text-sm font-bold tracking-wider mb-4 block">About Edwina</span>
             <h2 className="font-display font-bold text-3xl md:text-[40px] text-gray-900 dark:text-white leading-tight mb-8">The honest truth about why I built this</h2>
             
             <div className="space-y-6 text-gray-500 dark:text-gray-400 font-body text-[16px] leading-[1.8] mb-10">
               <p>When I made my first international move, I did what most teachers do. I joined Facebook groups. I Googled everything. I asked colleagues who&apos;d been there longer. I pieced together information from ten different places, half of which was outdated, a quarter of which was wrong, and all of which took more time than I had.</p>
               <p>When I moved again, the process was the same. And again after that.</p>
               <p>After 18 years of international teaching across four countries, I had accumulated something valuable — not just experience, but a complete, tested, real-world understanding of what it actually takes to move your life across borders as a teacher. The contracts. The immigration processes. The financial planning. The moments nobody warns you about. The things you only learn after you&apos;ve already made the mistake.</p>
               <p>I built Expat Teacher&apos;s Lounge because that knowledge shouldn&apos;t live in my head. It should be available to every teacher who is standing where I once stood — excited, overwhelmed, and wishing someone would just tell them the truth.</p>
             </div>
             
             <div className="flex flex-wrap gap-[10px] mb-10">
                {["🇿🇦 South Africa", "🇬🇧 United Kingdom", "🇶🇦 Qatar", "🇨🇦 Canada", "18 years teaching", "PMP certified"].map((tag, i) => (
                   <motion.div 
                     initial={{ scale: 0.8, opacity: 0 }} 
                     whileInView={{ scale: 1, opacity: 1 }} 
                     viewport={{ once: true }} 
                     transition={{ delay: i * 0.1, type: "spring" }} 
                     key={i} 
                     className="px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue font-bold text-sm whitespace-nowrap"
                   >
                      {tag}
                   </motion.div>
                ))}
             </div>
             
             <a href="/products" className="inline-block bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-blue/30 hover:bg-brand-deep transition-all">
                Explore the resources →
             </a>
           </motion.div>
           
        </div>
      </section>

      {/* SECTION 3 — WHAT THIS PLACE IS */}
      <section className="py-[100px] px-6 md:px-12 bg-slate-50 dark:bg-[#0f1019] overflow-hidden">
        <div className="container mx-auto max-w-[1100px]">
          
          <div className="text-center md:text-left mb-12">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.1 }}>
              <span className="text-gray-500 uppercase text-sm font-bold tracking-wider mb-4 block">What this place is</span>
              <h2 className="font-display font-black text-3xl md:text-[40px] text-gray-900 dark:text-white mb-6">A one-stop platform for teachers who want more</h2>
              <p className="font-body text-[17px] text-gray-600 dark:text-gray-400 max-w-[640px] leading-relaxed">
                Expat Teacher&apos;s Lounge is not a job board. It is not a recruitment agency. It is a platform built for teachers who want to expand their horizons — whether that means moving internationally for the first time, transitioning to a higher-paying market, or building multiple income streams alongside their career.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[48px]">
            {[
              { icon: '🎯', title: 'Honesty', body: 'We tell you what schools don\'t. Every resource is built on lived experience, not curated optimism.'},
              { icon: '⚡', title: 'Practicality', body: 'Every resource is actionable, not theoretical. No fluff. No filler. Just the information you actually need.'},
              { icon: '🌍', title: 'Experience', body: '18 years across 4 countries. Everything here comes from doing this — not from researching it from a desk.'}
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-[32px_28px] text-center hover:-translate-y-[6px] hover:border-brand-blue transition-all duration-300"
              >
                <div className="text-[48px] mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">{v.title}</h3>
                <p className="font-body text-gray-500 dark:text-gray-400 leading-relaxed font-body">{v.body}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* SECTION 4 — WHO THIS IS FOR */}
      <section className="py-[100px] px-6 md:px-12 bg-white dark:bg-[#0a0b14] overflow-hidden">
        <div className="container mx-auto max-w-[1100px] flex flex-col lg:flex-row gap-[80px]">
          
          <div className="w-full lg:w-1/2">
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
              <span className="text-gray-500 uppercase text-sm font-bold tracking-wider mb-4 block">Who this is for</span>
              <h2 className="font-display font-black text-3xl md:text-[40px] text-gray-900 dark:text-white mb-10">Built for all of you</h2>
            </motion.div>
            
            <div className="space-y-8">
              {[
                { h: 'First-time international teachers', p: 'For the teacher who has never taught internationally and doesn\'t know where to start — the one who has been thinking about it for years and finally decided this is the year.'},
                { h: 'Experienced expat teachers', p: 'For the experienced expat teacher moving to a new country and discovering that everything they knew about the process doesn\'t apply here.'},
                { h: 'Teachers relocating with families', p: 'For the teacher relocating with a family — navigating not just their own career move but everything that comes with uprooting a household, finding schools, managing logistics, and keeping everyone together through the uncertainty.'},
                { h: 'Teachers building financial freedom', p: 'For the teacher who knows that a great salary is only part of the picture — who wants to build financial security, explore multiple income streams, and stop trading time for money as their only strategy.'}
              ].map((block, i) => (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} 
                  whileInView={{ y: 0, opacity: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.1 }} 
                  key={i} 
                  className="pb-8 border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] last:border-0 relative pl-6"
                >
                  <div className="absolute left-0 top-[8px] w-2 h-2 rounded-full bg-brand-gold" />
                  <h3 className="font-body font-semibold text-lg text-gray-900 dark:text-white mb-2">{block.h}</h3>
                  <p className="font-body text-gray-500 dark:text-gray-400">{block.p}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
             <ScrollImage />
          </div>
          
        </div>
      </section>

      {/* SECTION 5 — ABOUT THE PERSON */}
      <section className="py-[100px] px-6 md:px-12 bg-[#3739DB] overflow-hidden">
        <div className="container mx-auto max-w-[1100px] flex flex-col lg:flex-row gap-[80px] items-center">
          
          <div className="w-full lg:w-[45%] relative">
            <motion.div 
              initial={{ x: -40, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl"
            >
               <Image src="/images/Edwina_delivering_a_presentation.png" alt="Edwina presenting" fill className="object-cover object-top" />
               <div className="absolute bottom-6 right-6 bg-[rgba(10,11,20,0.85)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.15)] rounded-xl p-[14px_18px] max-w-[200px]">
                  <div className="font-display font-bold text-3xl text-brand-gold">18 years</div>
                  <div className="text-white/65 text-xs font-body uppercase tracking-wider mt-1 leading-snug">International teaching experience</div>
               </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-[55%]">
            <motion.div 
              initial={{ x: 40, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-gold uppercase text-sm font-bold tracking-wider mb-4 block">A little more about me</span>
              <h2 className="font-display font-bold text-[36px] text-white leading-tight mb-8">The teaching never stopped being the point</h2>
              
              <div className="space-y-6 text-white/70 font-body text-[16px] leading-[1.8] mb-10">
                <p>I have 18 years of international teaching experience. I hold a PMP certification and I am actively building skills in technology and digital systems — because I believe that teachers who understand both the classroom and the digital world are the ones who will thrive in the next decade.</p>
                <p>I am also an entrepreneur. I have built businesses alongside my teaching career because I understood early that financial freedom requires more than one income stream. Expat Teacher&apos;s Lounge is part of that — a platform that serves teachers and builds a sustainable business at the same time.</p>
                <p>I move with my family. Every relocation has been a family decision, not just a career one — and that shapes everything about how I approach the advice and resources I offer here. I understand the full picture because I have lived the full picture.</p>
              </div>
              
              <a href="/coaching" className="inline-flex items-center justify-center bg-brand-gold text-brand-deep px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 hover:shadow-lg">
                Work with me →
              </a>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* SECTION 6 — WHAT I WANT FOR YOU */}
      <section className="py-[100px] px-6 md:px-12 bg-slate-50 dark:bg-[#0f1019] overflow-hidden">
        <div className="container mx-auto max-w-[800px] text-center">
           <motion.h2 
             initial={{ y: 40, opacity: 0 }} 
             whileInView={{ y: 0, opacity: 1 }} 
             viewport={{ once: true }} 
             className="font-display font-bold text-[48px] text-gray-900 dark:text-white mb-10"
           >
             What I want for you
           </motion.h2>
           
           <div className="space-y-6 text-gray-500 dark:text-gray-400 font-body text-[18px] leading-[1.8] mb-12 text-left md:text-center">
             <motion.p initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
               I want you to make your international teaching move with your eyes open — with real information, a clear plan, and the confidence that comes from knowing you&apos;ve prepared properly.
             </motion.p>
             <motion.p initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
               I want you to find community here. People who understand what it means to build a life in a country that isn&apos;t yours. People who have navigated the same paperwork, the same culture shock, the same moments of doubt — and come out the other side.
             </motion.p>
             <motion.p initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
               And I want you to think bigger than just the next posting. I want you to see your teaching career for what it can be — a platform for financial freedom, professional growth, and a life lived on your own terms.
             </motion.p>
             <motion.p initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="font-display italic text-brand-blue font-semibold text-2xl mt-8">
               That is what Expat Teacher&apos;s Lounge was built for.
             </motion.p>
           </div>
           
           <motion.div 
             initial={{ y: 40, opacity: 0 }} 
             whileInView={{ y: 0, opacity: 1 }} 
             viewport={{ once: true }} 
             transition={{ delay: 0.5 }} 
             className="flex flex-wrap justify-center gap-3"
           >
              <a href="/products" className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold hover:bg-brand-deep transition-colors">Explore free resources</a>
              <a href="/products" className="bg-transparent border border-[rgba(0,0,0,0.1)] dark:border-white/20 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Browse paid guides</a>
              <a href="/coaching" className="bg-brand-gold text-brand-deep px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">Book a coaching session</a>
           </motion.div>
        </div>
      </section>

      {/* SECTION 7 — EMAIL CAPTURE */}
      <section className="py-[100px] px-6 md:px-12 bg-brand-deep text-center overflow-hidden">
        <div className="container mx-auto">
          <motion.span 
            initial={{ y: 40, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            className="text-white/50 uppercase text-sm font-bold tracking-wider mb-4 block"
          >
            Stay connected
          </motion.span>
          <motion.h2 
            initial={{ y: 40, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="font-display font-bold text-[40px] text-white mb-4"
          >
            Join thousands of international teachers
          </motion.h2>
          <motion.p 
            initial={{ y: 40, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="font-body text-white/80 text-lg mb-10"
          >
            Get relocation guides, salary updates, and insider knowledge delivered to your inbox.
          </motion.p>
          
          <motion.form 
            initial={{ y: 40, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }} 
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col sm:flex-row justify-center max-w-[440px] mx-auto gap-3"
          >
             <input 
               type="email" 
               placeholder="Enter your email address" 
               required 
               className="flex-1 px-6 py-4 rounded-lg bg-white/12 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold" 
             />
             <button 
               type="submit" 
               className="bg-[#FCCB52] hover:bg-yellow-400 text-[#3739DB] px-8 py-4 rounded-lg font-bold transition-transform hover:-translate-y-1"
             >
               Subscribe
             </button>
          </motion.form>
        </div>
      </section>

    </div>
  );
}
