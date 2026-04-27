import HubArticlePage from '@/components/hub/HubArticlePage'

export default function QatarArticleRoute({ params }: { params: { section: string, article: string } }) {
  return <HubArticlePage countrySlug="qatar" sectionSlug={params.section} articleSlug={params.article} countryName="Qatar" />
}
