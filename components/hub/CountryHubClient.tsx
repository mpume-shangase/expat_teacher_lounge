'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

interface HubSection {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  hub_articles: { count: number }[]
}

interface CountryHubClientProps {
  countrySlug: string
  countryName: string
  countryDescription: string
  progressPercentage: number
  completedArticlesCount: number
  totalArticles: number
  sections: HubSection[]
}

export default function CountryHubClient({
  countrySlug,
  countryName,
  countryDescription,
  progressPercentage,
  completedArticlesCount,
  totalArticles,
  sections
}: CountryHubClientProps) {

  const accentColor = countrySlug === 'qatar' ? 'bg-[#1C91D7]' : 'bg-[#FCCB52]'
  const accentBorderHover = countrySlug === 'qatar' ? 'hover:border-[#1C91D7]/30 group-hover:text-[#1C91D7]' : 'hover:border-[#FCCB52]/30 group-hover:text-[#FCCB52]'

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="flex flex-col w-full pb-24">
      
      {/* Cinematic Hero */}
      <div className="w-full bg-[#0a0b14] relative overflow-hidden flex flex-col justify-center items-start text-left p-8 md:p-12 min-h-[40vh] border-b border-white/5">
        {/* Floating accent based on country */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none ${accentColor}`} 
        />

        <div className="relative z-10 max-w-[1000px] mx-auto w-full">
          <SectionLabel light>{countryName} Hub</SectionLabel>
          <div className="flex gap-2 text-white/50 text-[11px] font-bold uppercase tracking-widest font-body mb-6">
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <span>→</span>
            <Link href="/hub" className="hover:text-white transition-colors">Hub</Link>
            <span>→</span>
            <span className="text-white">{countryName}</span>
          </div>

          <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
            {countryName} Relocation Hub
          </h1>
          <p className="text-white/60 font-body text-[15px] max-w-[600px] leading-relaxed mb-6">
             {countryDescription}
          </p>
          <div className="inline-block bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-white/80 text-xs px-4 py-2 rounded-lg font-body font-medium">
            Last updated: April 2026
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12 max-w-[1000px] w-full mx-auto relative z-20">
        
        {/* Progress section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-[16px] p-8 mb-12 shadow-xl shadow-black/5"
        >
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Your progress</h3>
            <span className="text-brand-blue font-bold font-body">{progressPercentage > 100 ? 100 : progressPercentage}%</span>
          </div>
          <div className="w-full bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)] rounded-full h-3 overflow-hidden mb-3">
             <motion.div 
               className={`h-3 rounded-full ${accentColor}`} 
               initial={{ width: 0 }}
               animate={{ width: `${progressPercentage > 100 ? 100 : progressPercentage}%` }}
               transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
             />
          </div>
          <div className="text-sm text-gray-500 font-body">
            {completedArticlesCount} of {totalArticles} articles completed
          </div>
        </motion.div>

        {countrySlug === 'canada' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
            <Link href="/hub/canada/new-brunswick-pathway/nb-personal-story" className="group block bg-white dark:bg-[#13151f] rounded-[16px] p-8 border border-brand-gold/50 relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(252,203,82,0.15)] hover:-translate-y-1 hover:border-brand-gold">
                <div className="absolute top-6 right-6 text-2xl font-bold text-brand-gold group-hover:translate-x-1 transition-transform">→</div>
                
                <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">⭐</div>
                    <div className="text-xs uppercase bg-brand-gold/10 text-brand-gold font-bold px-3 py-1 rounded-full font-body tracking-wider">
                        Personal story · Read this first
                    </div>
                </div>

                <h3 className="font-display font-black text-2xl text-gray-900 dark:text-white mb-3 group-hover:text-brand-gold transition-colors">
                    The New Brunswick Story
                </h3>

                <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed max-w-[800px] mb-6">
                    A first-hand account of how one teacher went from Doha to a permanent teaching position in New Brunswick in under 12 months — including the recruitment drive, NB PNP, Express Entry, and work permit in 2 weeks.
                </p>

                <div className="text-brand-gold font-bold text-sm tracking-wide group-hover:underline">Read the full story</div>
            </Link>
          </motion.div>
        )}

        <div className="flex flex-col gap-4 mt-8">
          {sections.map((section, idx) => {
            const articleCount = section.hub_articles?.[0]?.count || 0
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <Link href={`/hub/${countrySlug}/${section.slug}`} className={`group flex items-center md:flex-row flex-col gap-6 p-6 bg-white dark:bg-[#13151f] rounded-2xl border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] shadow-sm transition-colors ${accentBorderHover}`}>
                  
                  <div className="font-display font-black text-4xl text-gray-200 dark:text-white/10 w-12 text-center md:block hidden">
                    {idx + 1}
                  </div>
                  
                  <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center text-2xl border border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] md:block hidden">
                    {section.icon || '📝'}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className={`font-display font-bold text-[19px] text-gray-900 dark:text-white mb-1 transition-colors ${accentBorderHover}`}>
                      {idx + 1}. {section.title}
                    </h3>
                    <p className="text-gray-500 font-body text-[13px] leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 gap-6">
                    <div className="bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.04)] text-gray-600 dark:text-gray-400 text-xs font-bold px-3 py-1.5 rounded-md font-body whitespace-nowrap">
                      {articleCount} {articleCount === 1 ? 'article' : 'articles'}
                    </div>
                    
                    <div className="font-bold text-sm flex items-center gap-1 group-hover:underline">
                      Start <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                  
                </Link>
              </motion.div>
            )
          })}

          {sections.length === 0 && (
             <div className="text-center text-gray-500 py-12">
               No sections loaded. Make sure to run the Supabase schema script!
             </div>
          )}
        </div>

      </div>
    </motion.div>
  )
}
