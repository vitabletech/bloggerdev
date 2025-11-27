
import TemplatesPage from '@/components/TemplatesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Templates Gallery - Blogger Theme Dev Course',
  description: 'Browse our curated collection of free and premium Blogger themes.',
};

export default function Page() {
  return <TemplatesPage />;
}
