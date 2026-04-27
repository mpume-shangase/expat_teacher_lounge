import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'How I Got a Teaching Job in Canada from Qatar | Expat Teacher\'s Lounge',
  description: 'The real story of moving from Qatar to New Brunswick, Canada. From the intial recruitment drive to securing permanent residency in under 12 months.',
  keywords: ['Canada', 'New Brunswick', 'Teaching abroad', 'Immigration', 'PNP', 'Express Entry', 'International teacher'],
  authors: [{ name: 'Edwina Shangase' }],
  openGraph: {
    title: 'How I Got a Teaching Job in Canada from Qatar',
    description: 'The real story of moving from Qatar to New Brunswick, Canada. From the intial recruitment drive to securing permanent residency in under 12 months.',
    type: 'article',
  },
}

export default function BlogPost() {
  return <BlogContent />;
}
