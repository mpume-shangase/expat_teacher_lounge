import HubSectionPage from '@/components/hub/HubSectionPage'

export default function CanadaSectionRoute({ params }: { params: { section: string } }) {
  return <HubSectionPage countrySlug="canada" sectionSlug={params.section} countryName="Canada" />
}
