import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'My First Year in Qatar: What I Wish I Knew Before Moving | Expat Teacher\'s Lounge',
  description: 'After 18 years of international teaching, moving to Qatar still surprised me. Here\'s everything I wish someone had told me before my first year in Doha.',
  keywords: ['teaching in Qatar', 'expat teacher Qatar', 'moving to Qatar', 'first year Qatar', 'international school Qatar', 'Qatar teacher experience'],
  authors: [{ name: 'Edwina Shangase' }],
  openGraph: {
    title: 'My First Year in Qatar: What I Wish I Knew Before Moving',
    description: 'The honest version — everything nobody tells you until you\'re already there.',
    type: 'article',
  },
}

export default function BlogPost() {
  return <BlogContent />;
}
