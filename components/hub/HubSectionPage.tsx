import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import PageTransition from '@/components/ui/PageTransition'
import SectionLabel from '@/components/ui/SectionLabel'
import ArticleListClient from './ArticleListClient'
export default async function HubSectionPage({ countrySlug, sectionSlug, countryName }: { countrySlug: string, sectionSlug: string, countryName: string }) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) redirect('/login')

  const { data: country } = await supabase.from('countries').select('id').eq('slug', countrySlug).single()
  if (!country) redirect(`/hub/${countrySlug}`)

  const { data: section } = await supabase
    .from('hub_sections')
    .select('id, title, description, icon')
    .eq('slug', sectionSlug)
    .eq('country_id', country.id)
    .single()

  if (!section) redirect(`/hub/${countrySlug}`)

  const { data: articles } = await supabase
    .from('hub_articles')
    .select('id, title, slug, content')
    .eq('section_id', section.id)
    .order('order_index')

  let progressMap: Record<string, boolean> = {}

  if (session && articles) {
    const articleIds = articles.map((a: any) => a.id)
    const { data: userProgress } = await supabase
      .from('user_progress')
      .select('article_id')
      .eq('user_id', session.user.id)
      .in('article_id', articleIds)

    userProgress?.forEach(p => {
       progressMap[p.article_id] = true
    })
  }

  const articleItems = articles?.map((a: any) => ({
    id: a.id,
    title: a.title,
    slug: a.slug,
    content: a.content || '',
    isCompleted: !!progressMap[a.id]
  })) || []

  return (
    <PageTransition className="flex flex-col w-full pb-24">
      {/* Hero */}
      <div className="w-full bg-[#0a0b14] relative overflow-hidden flex flex-col justify-center items-start text-left p-8 md:p-12 min-h-[35vh] border-b border-white/5">
        
        {/* Subtle accent glow */}
        <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20 ${countrySlug === 'qatar' ? 'bg-[#1C91D7]' : 'bg-[#FCCB52]'}`} />

        <div className="relative z-10 max-w-[1000px] mx-auto w-full">
           <SectionLabel light>Section</SectionLabel>
           <div className="flex flex-wrap gap-2 text-white/50 text-[11px] font-bold uppercase tracking-widest font-body mb-6">
              <Link href={`/hub/${countrySlug}`} className="hover:text-white transition-colors">{countryName} Hub</Link>
              <span>→</span>
              <span className="text-white">{section.title}</span>
           </div>
           
           <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
              {section.title}
           </h1>
           <p className="text-white/60 font-body text-[15px] max-w-[600px] leading-relaxed">
             {section.description}
           </p>
        </div>
      </div>

      <div className="p-6 md:p-12 max-w-[1000px] w-full mx-auto relative z-20">
        <ArticleListClient 
           articles={articleItems}
           countrySlug={countrySlug}
           sectionSlug={sectionSlug}
        />
      </div>
    </PageTransition>
  )
}
