
import ResourcesPage from '@/components/ResourcesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - Blogger Theme Dev Course',
  description: 'A curated list of useful links and tools for your theme development journey.',
};

export default function Page() {
  return <ResourcesPage />;
}
