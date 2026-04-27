import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import HubDashboardClient from './HubDashboardClient'

export default async function HubHomePage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  // Fetch article counts for both countries
  const { data: qatarArticles } = await supabase
    .from('hub_articles')
    .select('id, hub_sections!inner(country_id, countries!inner(slug))')
    .eq('hub_sections.countries.slug', 'qatar')
    
  const { data: canadaArticles } = await supabase
    .from('hub_articles')
    .select('id, hub_sections!inner(country_id, countries!inner(slug))')
    .eq('hub_sections.countries.slug', 'canada')

  const totalQatar = qatarArticles?.length || 80 // mock fallback
  const totalCanada = canadaArticles?.length || 90

  const totalAvailable = totalQatar + totalCanada

  // Get user progress
  let userCompleted = 0
  let qatarCompleted = 0
  let canadaCompleted = 0

  if (session) {
    const { data: progress } = await supabase
      .from('user_progress')
      .select('article_id')
      .eq('user_id', session.user.id)
      
    if (progress) {
      userCompleted = progress.length
      
      // Calculate per-country (in a real app this would be a cleaner SQL join, doing simple match for now)
      const qatarIds = new Set(qatarArticles?.map(a => a.id))
      const canadaIds = new Set(canadaArticles?.map(a => a.id))
      
      progress.forEach(p => {
        if (qatarIds.has(p.article_id)) qatarCompleted++
        if (canadaIds.has(p.article_id)) canadaCompleted++
      })
    }
  }

  const qatarProgress = totalQatar > 0 ? Math.round((qatarCompleted / totalQatar) * 100) : 0
  const canadaProgress = totalCanada > 0 ? Math.round((canadaCompleted / totalCanada) * 100) : 0

  return (
    <HubDashboardClient 
      totalAvailable={totalAvailable}
      userCompleted={userCompleted}
      qatarProgress={qatarProgress}
      canadaProgress={canadaProgress}
    />
  )
}
