
import React from 'react';

const videos = [
  {
    title: 'Blogger Theme Development Course Introduction',
    embedUrl: 'https://www.youtube.com/embed/7zCLYngx5rk',
    description: 'A perfect overview of what you\'ll learn in this course. This video covers setting up the basic structure, adding sections, and implementing dynamic content.',
  },
  {
    title: 'How to make a website with Blogger',
    embedUrl: 'https://www.youtube.com/embed/OH8KSNe50hg',
    description: 'Learn the basics of creating a complete website using the Blogger platform, from initial setup to customization.',
  },
  {
    title: 'Full Course: HTML, CSS & JS',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLlqmJM8g9yioiYCdWRGIcE3-PR3DcutST',
    description: 'A complete playlist covering the fundamentals of web development with HTML, CSS, and JavaScript.',
  },
  {
    title: 'Blogger Theme Development Playlist',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLlqmJM8g9yiomwmXGyuvFFSakHoiD915-',
    description: 'Dive deep into Blogger theme development with this comprehensive playlist of tutorials and guides.',
  },
  {
    title: 'Advanced Blogger SEO Playlist',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLlqmJM8g9yiqTFeqrGFGCH_Nd6I81NH62',
    description: 'Master Search Engine Optimization for your Blogger site with these advanced tips and tricks.',
  },
];

const VideoTutorialsPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <header className="text-center bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Video Tutorials</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Watch our video guides and walkthroughs to visually learn the concepts of Blogger theme development.
        </p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{video.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{video.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default VideoTutorialsPage;