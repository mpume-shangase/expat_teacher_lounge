import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'How I Built a Business While Teaching Full-Time in Qatar | Expat Teacher\'s Lounge',
  description: 'After 18 years of international teaching I built Expat Teacher\'s Lounge from scratch while working full-time in Doha. Here\'s the exact framework any teacher can follow to build income streams abroad.',
  keywords: ['international teacher side income', 'teacher entrepreneur', 'build a business while teaching abroad', 'expat teacher passive income', 'international teacher financial freedom', 'teaching abroad money'],
  authors: [{ name: 'Edwina Shangase' }],
  openGraph: {
    title: 'How I Built a Business While Teaching Full-Time in Qatar',
    description: 'The personal story and practical framework for teachers who want more than just a salary.',
    type: 'article',
  },
}

export default function BlogPost() {
  return <BlogContent />;
}
