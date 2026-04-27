import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Edwina Shangase | Expat Teacher\'s Lounge',
  description: 'Meet Edwina Shangase — South African international teacher with 18 years of experience across the UK, Qatar, and Canada. Founder of Expat Teacher\'s Lounge.',
};

export default function AboutPage() {
  return <AboutContent />;
}
