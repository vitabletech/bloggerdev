
import LiveEditorPage from '@/components/LiveEditorPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Theme Editor - Blogger Theme Dev Course',
  description: 'Edit the Blogger XML on the left and see your changes rendered live on the right.',
};

export default function Page() {
  return <LiveEditorPage />;
}
