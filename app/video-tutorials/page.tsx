
import VideoTutorialsPage from '@/components/VideoTutorialsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Tutorials - Blogger Theme Dev Course',
  description: 'Watch our video guides and walkthroughs to visually learn the concepts of Blogger theme development.',
};

export default function Page() {
  return <VideoTutorialsPage />;
}
