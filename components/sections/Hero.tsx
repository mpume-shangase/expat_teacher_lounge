"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";
import { ScrollReveal } from "../ui/ScrollReveal";

export default function Hero() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative min-h-screen bg-[#0a0b14] overflow-hidden flex items-center">
      {/* Floating Orbs Background */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center pt-24 pb-12 h-full">
        {/* Left Side: Content (55%) */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center text-[#f0f0f0] lg:pr-12">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-gray-800 bg-gray-900/50 px-4 py-1.5 text-sm font-medium text-gray-300 mb-8 backdrop-blur-sm">
              18 years • 4 countries • built by a teacher, for teachers
            </div>
          </ScrollReveal>
          
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-6 text-white">
            <AnimatedText text="Your international teaching move," />
            <div className="flex flex-wrap items-baseline mt-2">
              <span className="relative inline-block mr-4 text-white">
                done
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "circOut" }}
                  className="absolute bottom-1 left-0 h-3 bg-brand-gold -z-10 rounded-sm"
                />
              </span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="italic text-brand-blue"
              >
                right.
              </motion.span>
            </div>
          </h1>

          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Skip the Facebook group confusion and the sketchy recruiter agencies. Get the exact roadmap, contract intel, and market-ready strategy you need to secure a premium international teaching role.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a href="/products" className="bg-brand-blue hover:bg-brand-deep text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(28,145,215,0.4)] hover:-translate-y-1">
                Explore Products
              </a>
              <a href="/coaching" className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-gray-800">
                Book Coaching
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
             <div className="inline-flex items-center space-x-4 bg-gray-900/80 border border-gray-800 rounded-2xl p-4 backdrop-blur-sm">
               <div className="flex -space-x-3">
                 {[1,2,3].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0b14] bg-gray-700 overflow-hidden relative">
                     <Image src="/images/Edwina_headshot.png" alt="Teacher" fill className="object-cover" />
                   </div>
                 ))}
               </div>
               <div className="text-sm">
                 <div className="flex text-brand-gold mb-1 text-xs">
                   {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                 </div>
                 <span className="text-gray-300">Trusted by 2000+ teachers</span>
               </div>
             </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[50%] h-[500px] lg:h-[800px] mt-16 lg:mt-0 relative ml-auto lg:translate-x-8 z-0">
          <motion.div style={{ y: yImage }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
             <Image 
               src="/images/Edwina_working_with_a_student.png"
               alt="Edwina teaching"
               fill
               className="object-cover object-center rounded-2xl"
               priority
             />
             {/* Subtle gradient just on the extreme left edge to blend into the background */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b14] via-transparent to-transparent w-1/4 pointer-events-none rounded-2xl" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent lg:hidden pointer-events-none rounded-2xl" />
          </motion.div>

          <ScrollReveal delay={0.8} y={50} className="absolute bottom-8 left-4 lg:-left-12 z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center space-x-4">
              <div className="bg-brand-blue p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="text-white">
                <p className="text-sm font-bold tracking-wider">18 yrs • SA • UK • QA • CA</p>
                <p className="text-xs text-gray-300">Global Expertise</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
