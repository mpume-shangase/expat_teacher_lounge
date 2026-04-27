import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import MarkCompleteButton from '@/app/hub/qatar/[section]/[article]/MarkCompleteButton'
import PageTransition from '@/components/ui/PageTransition'

export default async function HubArticlePage({ countrySlug, sectionSlug, articleSlug, countryName }: { countrySlug: string, sectionSlug: string, articleSlug: string, countryName: string }) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) redirect('/login')

  const { data: country } = await supabase.from('countries').select('id').eq('slug', countrySlug).single()
  if (!country) redirect(`/hub/${countrySlug}`)

  const { data: section } = await supabase.from('hub_sections').select('id, title').eq('slug', sectionSlug).eq('country_id', country.id).single()
  if (!section) redirect(`/hub/${countrySlug}`)

  const { data: article } = await supabase.from('hub_articles').select('*').eq('slug', articleSlug).eq('section_id', section.id).single()
  if (!article) redirect(`/hub/${countrySlug}/${sectionSlug}`)

  const { data: progress } = await supabase.from('user_progress').select('id').eq('user_id', session.user.id).eq('article_id', article.id).single()
  const isCompleted = !!progress

  const { data: nextArticle } = await supabase.from('hub_articles').select('slug, title').eq('section_id', section.id).gt('order_index', article.order_index).order('order_index').limit(1).single()

  return (
    <PageTransition className="flex flex-col w-full pb-24">
      <div className="p-6 md:p-12 max-w-[700px] w-full mx-auto">
        
        {/* Simplified Premium Hero */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold font-body mb-8 uppercase tracking-[0.08em] text-brand-blue">
           <Link href={`/hub/${countrySlug}`} className="hover:opacity-70 transition-opacity">{countryName} Hub</Link>
           <span className="text-gray-300 dark:text-gray-700">/</span>
           <Link href={`/hub/${countrySlug}/${sectionSlug}`} className="hover:opacity-70 transition-opacity">{section?.title}</Link>
        </div>

        <h1 className="font-display font-black text-4xl md:text-[52px] text-gray-900 dark:text-white leading-[1.05] mb-6 tracking-tight">
           {article.title}
        </h1>
        
        <div className="text-gray-400 text-[11px] font-bold uppercase tracking-widest font-body mb-12 pb-6 border-b border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] flex items-center">
           <span>Last updated</span>
           <span className="mx-2">•</span>
           <span>{new Date(article.last_updated).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg dark:prose-invert font-body text-gray-800 dark:text-gray-200 !max-w-[700px] mb-16 whitespace-pre-wrap leading-[1.8] text-[18px]">
          {article.content}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] pt-8 mt-12">
           <MarkCompleteButton articleId={article.id} initialState={isCompleted} />
           
           {nextArticle && (
              <Link href={`/hub/${countrySlug}/${sectionSlug}/${nextArticle.slug}`} className="group flex items-center text-right max-w-[300px] bg-[rgba(0,0,0,0.02)] hover:bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.02)] dark:hover:bg-[rgba(255,255,255,0.04)] py-4 px-5 rounded-2xl transition-colors gap-4">
                 <div className="flex flex-col">
                   <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold font-body">Up Next</span>
                   <span className="text-[15px] font-bold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors font-display leading-tight">{nextArticle.title}</span>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform">
                   <span className="text-xl leading-none font-bold">→</span>
                 </div>
              </Link>
           )}
        </div>
      </div>
    </PageTransition>
  )
}
