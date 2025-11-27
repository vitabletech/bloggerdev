
import AboutPage from '@/components/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Blogger Theme Dev Course',
  description: 'Your one-stop guide to mastering Blogger theme development.',
};

export default function Page() {
  return <AboutPage />;
}
