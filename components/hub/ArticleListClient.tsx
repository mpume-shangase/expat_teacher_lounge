'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ArticleItem {
  id: string
  title: string
  slug: string
  content: string
  isCompleted: boolean
}

interface ArticleListClientProps {
  articles: ArticleItem[]
  countrySlug: string
  sectionSlug: string
}

export default function ArticleListClient({ articles, countrySlug, sectionSlug }: ArticleListClientProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center p-8 border border-dashed border-gray-300 dark:border-gray-800 rounded-xl text-gray-500 font-body text-sm bg-gray-50 dark:bg-[#13151f]">
         No articles found in this section yet. Check back soon.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {articles.map((article, i) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ x: 8 }}
        >
          <Link href={`/hub/${countrySlug}/${sectionSlug}/${article.slug}`} className="group bg-white dark:bg-[#13151f] border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(28,145,215,0.1)] hover:border-brand-blue/30 transition-all flex items-center justify-between">
            <div className="flex items-center gap-6 w-full">
              <div className="font-display font-black text-4xl text-gray-200 dark:text-white/10 w-12 text-center hidden md:block">
                {i + 1}
              </div>
              
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${article.isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 dark:border-gray-700 group-hover:border-brand-blue/50 text-transparent'}`}>
                <span className="text-[12px] font-bold">✓</span>
              </div>

              <div className="flex-1">
                <div className="text-[11px] text-brand-blue font-bold uppercase tracking-wider mb-1 md:hidden">Part {i + 1}</div>
                <h3 className="font-display font-bold text-[19px] text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">
                  {article.title}
                </h3>
                <div className="text-[13px] text-gray-500 mt-2 font-body">
                  Est. {Math.max(1, Math.ceil((article.content?.length || 0) / 1000))} min read
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block text-brand-blue font-bold group-hover:underline flex-shrink-0 text-sm ml-4 flex items-center gap-1">
              Read <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
