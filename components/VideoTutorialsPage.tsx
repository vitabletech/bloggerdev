
import React from 'react';

import { videos } from '@/data/videos';

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