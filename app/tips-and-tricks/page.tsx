
import TipsAndTricksPage from '@/components/TipsAndTricksPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tips & Tricks - Blogger Theme Dev Course',
  description: 'A collection of useful code snippets, advanced techniques, and best practices.',
};

export default function Page() {
  return <TipsAndTricksPage />;
}
