import HubArticlePage from '@/components/hub/HubArticlePage'

export default function CanadaArticleRoute({ params }: { params: { section: string, article: string } }) {
  return <HubArticlePage countrySlug="canada" sectionSlug={params.section} articleSlug={params.article} countryName="Canada" />
}
