import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import CountryHubClient from '@/components/hub/CountryHubClient'

export default async function CanadaHubPage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  // Fetch sections
  const { data: canadaCountry } = await supabase.from('countries').select('id').eq('slug', 'canada').single()
  const canadaId = canadaCountry?.id

  let sections: any[] = []
  if (canadaId) {
    const { data } = await supabase
      .from('hub_sections')
      .select('*, hub_articles(count)')
      .eq('country_id', canadaId)
      .order('order_index')
    
    sections = data || []
  }

  // Calculate generic progress (mock or real if implemented via join)
  const totalArticles = sections.reduce((acc, sec) => acc + (sec.hub_articles?.[0]?.count || 0), 0)
  
  let completedArticlesCount = 0
  if (session) {
     const { count } = await supabase
       .from('user_progress')
       .select('*', { count: 'exact', head: true })
       .eq('user_id', session.user.id)
     completedArticlesCount = count || 0 // NOTE: this counts total global articles. In real prod we should filter by country articles.
  }

  const progressPercentage = totalArticles > 0 ? Math.round((completedArticlesCount / totalArticles) * 100) : 0

  return (
    <CountryHubClient 
      countrySlug="canada"
      countryName="Canada"
      countryDescription="From international recruitment drives to permanent residency — everything you need to teach in Canada, built from a pathway completed in 2025."
      progressPercentage={progressPercentage}
      completedArticlesCount={completedArticlesCount}
      totalArticles={totalArticles}
      sections={sections}
    />
  )
}
