import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import CountryHubClient from '@/components/hub/CountryHubClient'

export default async function QatarHubPage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  // Fetch sections
  const { data: qatarCountry } = await supabase.from('countries').select('id').eq('slug', 'qatar').single()
  const qatarId = qatarCountry?.id

  let sections: any[] = []
  if (qatarId) {
    const { data } = await supabase
      .from('hub_sections')
      .select('*, hub_articles(count)')
      .eq('country_id', qatarId)
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
     completedArticlesCount = count || 0
  }

  const progressPercentage = totalArticles > 0 ? Math.round((completedArticlesCount / totalArticles) * 100) : 0

  return (
    <CountryHubClient 
      countrySlug="qatar"
      countryName="Qatar"
      countryDescription="Everything you need to teach in Qatar — from qualifications to your first 90 days. Updated regularly based on current requirements."
      progressPercentage={progressPercentage}
      completedArticlesCount={completedArticlesCount}
      totalArticles={totalArticles}
      sections={sections}
    />
  )
}
