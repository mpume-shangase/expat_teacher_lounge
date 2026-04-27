import HubSectionPage from '@/components/hub/HubSectionPage'

export default function QatarSectionRoute({ params }: { params: { section: string } }) {
  return <HubSectionPage countrySlug="qatar" sectionSlug={params.section} countryName="Qatar" />
}
