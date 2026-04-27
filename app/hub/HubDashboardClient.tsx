'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

interface HubDashboardClientProps {
  totalAvailable: number
  userCompleted: number
  qatarProgress: number
  canadaProgress: number
}

export default function HubDashboardClient({
  totalAvailable,
  userCompleted,
  qatarProgress,
  canadaProgress
}: HubDashboardClientProps) {
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="flex flex-col w-full pb-24">
      
      {/* Cinematic Hero */}
      <div className="bg-[#0a0b14] w-full min-h-[45vh] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center items-center text-center">
        {/* Floating gradient orbs */}
        <motion.div 
           animate={{ y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }} 
           transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-brand-blue rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
           animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }} 
           transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px] pointer-events-none" 
        />
        
        <div className="relative z-10 flex flex-col items-center">
          <SectionLabel light>Membership Hub</SectionLabel>
          <div className="flex gap-2 text-white/50 text-[11px] font-bold uppercase tracking-widest font-body mb-6">
            <span>Dashboard</span>
            <span>→</span>
            <span className="text-white">Hub</span>
          </div>
          
          <h1 className="font-display font-black text-4xl md:text-[56px] text-white leading-[1.1] mb-6 tracking-[-0.03em] max-w-3xl">
            {['The', 'global', 'relocation', 'hub'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p className="text-white/60 font-body text-[16px] md:text-lg max-w-[600px] leading-[1.8]">
            Country-specific guides built from lived experience. Updated regularly with current requirements.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-12 max-w-[1200px] w-full mx-auto relative z-20 -mt-12">
        {/* Stats Row */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div variants={fadeIn} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-6 shadow-xl shadow-black/5">
             <div className="text-gray-500 font-body text-[11px] font-bold uppercase tracking-wider mb-2">Countries available</div>
             <div className="font-display font-black text-4xl text-gray-900 dark:text-white">2</div>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-6 shadow-xl shadow-black/5">
             <div className="text-gray-500 font-body text-[11px] font-bold uppercase tracking-wider mb-2">Total articles</div>
             <div className="font-display font-black text-4xl text-gray-900 dark:text-white">{totalAvailable}</div>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-brand-deep rounded-xl p-6 shadow-xl shadow-brand-deep/20 text-white relative overflow-hidden">
             <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-[20px]"></div>
             <div className="text-white/60 font-body text-[11px] font-bold uppercase tracking-wider mb-2">Your progress</div>
             <div className="font-display font-black text-4xl">{userCompleted} <span className="text-white/80 font-body font-bold text-lg">articles completed</span></div>
          </motion.div>
        </motion.div>

        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           
           {/* Qatar Card */}
           <motion.div
             whileHover={{ y: -8, scale: 1.01 }}
             transition={{ type: 'spring', stiffness: 300, damping: 20 }}
             className="group relative bg-white dark:bg-[#13151f] rounded-2xl border border-gray-100 dark:border-white/8 overflow-hidden cursor-pointer shadow-lg shadow-black/5"
           >
             <Link href="/hub/qatar" className="absolute inset-0 z-10"></Link>
             {/* Top accent bar */}
             <div className="h-1 bg-gradient-to-r from-[#1C91D7] to-[#3739DB]" />
             
             {/* Card content */}
             <div className="p-8">
               <div className="text-5xl mb-4">🇶🇦</div>
               <h2 className="font-display text-2xl font-bold mb-2 text-gray-900 dark:text-white">Qatar Hub</h2>
               <p className="text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400 mb-6">
                 Everything you need to teach in the Middle East. Step by step guides to QID, housing, and schools.
               </p>
               
               {/* Section pills */}
               <div className="flex flex-wrap gap-2 mb-6">
                 {['Immigration', 'Documents', 'Interview Prep', 'Housing'].map((s) => (
                   <span key={s} className="text-xs font-bold px-3 py-1 rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-white/5 text-gray-600 dark:text-gray-400 font-body uppercase tracking-wider">
                     {s}
                   </span>
                 ))}
               </div>
               
               {/* Progress */}
               <div className="mb-6">
                 <div className="flex justify-between font-body uppercase tracking-wider font-bold text-[10px] text-gray-400 mb-2">
                   <span>Progress</span>
                   <span>{qatarProgress > 100 ? 100 : qatarProgress}% complete</span>
                 </div>
                 <div className="h-1.5 bg-[rgba(0,0,0,0.05)] dark:bg-white/5 rounded-full overflow-hidden">
                   <motion.div
                     className="h-full bg-gradient-to-r from-[#1C91D7] to-[#3739DB] rounded-full"
                     initial={{ width: 0 }}
                     animate={{ width: `${qatarProgress > 100 ? 100 : qatarProgress}%` }}
                     transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                   />
                 </div>
               </div>
               
               {/* CTA */}
               <div className="flex items-center justify-between mt-auto border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] pt-6">
                 <span className="text-[11px] font-body text-gray-400 font-bold uppercase tracking-wider">Last updated: April 2026</span>
                 <span className="text-sm font-bold text-brand-blue flex items-center gap-2 group-hover:gap-3 transition-all relative z-20">
                   Enter hub
                   <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                 </span>
               </div>
             </div>
           </motion.div>

           {/* Canada Card */}
           <motion.div
             whileHover={{ y: -8, scale: 1.01 }}
             transition={{ type: 'spring', stiffness: 300, damping: 20 }}
             className="group relative bg-white dark:bg-[#13151f] rounded-2xl border border-gray-100 dark:border-white/8 overflow-hidden cursor-pointer shadow-lg shadow-black/5"
           >
             <Link href="/hub/canada" className="absolute inset-0 z-10"></Link>
             {/* Top accent bar */}
             <div className="h-1 bg-gradient-to-r from-[#FCCB52] to-[#FF8C00]" />
             
             {/* Card content */}
             <div className="p-8">
               <div className="text-5xl mb-4">🇨🇦</div>
               <h2 className="font-display text-2xl font-bold mb-2 text-gray-900 dark:text-white">Canada Hub</h2>
               <p className="text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400 mb-6">
                 From international recruitment drives to permanent residency in New Brunswick and beyond.
               </p>
               
               {/* Section pills */}
               <div className="flex flex-wrap gap-2 mb-6">
                 {['NB Pathway', 'Provincial Guide', 'Immigration', 'Certification'].map((s) => (
                   <span key={s} className="text-xs font-bold px-3 py-1 rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-white/5 text-gray-600 dark:text-gray-400 font-body uppercase tracking-wider">
                     {s}
                   </span>
                 ))}
               </div>
               
               {/* Progress */}
               <div className="mb-6">
                 <div className="flex justify-between font-body uppercase tracking-wider font-bold text-[10px] text-gray-400 mb-2">
                   <span>Progress</span>
                   <span>{canadaProgress > 100 ? 100 : canadaProgress}% complete</span>
                 </div>
                 <div className="h-1.5 bg-[rgba(0,0,0,0.05)] dark:bg-white/5 rounded-full overflow-hidden">
                   <motion.div
                     className="h-full bg-gradient-to-r from-[#FCCB52] to-[#FF8C00] rounded-full"
                     initial={{ width: 0 }}
                     animate={{ width: `${canadaProgress > 100 ? 100 : canadaProgress}%` }}
                     transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                   />
                 </div>
               </div>
               
               {/* CTA */}
               <div className="flex items-center justify-between mt-auto border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] pt-6">
                 <span className="text-[11px] font-body text-gray-400 font-bold uppercase tracking-wider">Last updated: April 2026</span>
                 <span className="text-sm font-bold text-[#EAA622] flex items-center gap-2 group-hover:gap-3 transition-all relative z-20">
                   Enter hub
                   <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                 </span>
               </div>
             </div>
           </motion.div>

        </div>

        {/* Coming Soon Row */}
        <h3 className="font-display font-medium text-xl text-gray-400 dark:text-gray-500 mb-6 border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] pb-4">In development</h3>
        <motion.div variants={staggerContainer} initial="hidden" animate="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {[
             { flag: '🇦🇪', name: 'UAE', code: 'uae' },
             { flag: '🇬🇧', name: 'United Kingdom', code: 'uk' },
             { flag: '🇦🇺', name: 'Australia', code: 'au' },
             { flag: '🇸🇦', name: 'Saudi Arabia', code: 'ksa' }
           ].map((country) => (
             <motion.div variants={fadeIn} key={country.code} className="relative rounded-2xl border-2 border-dashed border-gray-200 dark:border-white/10 p-6 opacity-60 flex flex-col items-center justify-center text-center">
               <div className="text-3xl mb-2 grayscale">{country.flag}</div>
               <h3 className="font-display text-lg font-bold mb-1 text-gray-400">{country.name}</h3>
               <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 font-body mb-3">Coming soon</span>
               <button className="text-[12px] font-bold text-brand-blue font-body hover:underline block cursor-not-allowed">
                 Notify me when available →
               </button>
             </motion.div>
           ))}
        </motion.div>

      </div>
    </motion.div>
  )
}
