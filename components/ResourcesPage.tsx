
import React from 'react';
import { ExternalLinkIcon } from './Icons';

const resources = [
  {
    title: 'Official Blogger Help Center',
    description: 'The official source for information on using Blogger, including basic theme customization.',
    link: 'https://support.google.com/blogger/',
  },
  {
    title: 'Blogger Layouts Data Tags',
    description: 'A comprehensive (though slightly dated) list of all available data tags for theme development.',
    link: 'https://support.google.com/blogger/answer/47270?hl=en',
  },
  {
    title: 'Stack Overflow - Blogger Tag',
    description: 'A community of developers answering questions. A great place to find solutions to specific problems.',
    link: 'https://stackoverflow.com/questions/tagged/blogger',
  },
  {
    title: 'MDN Web Docs',
    description: 'The ultimate resource for learning HTML, CSS, and JavaScript, the building blocks of any theme.',
    link: 'https://developer.mozilla.org/',
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <header className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Resources</h1>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">A curated list of useful links and tools for your theme development journey.</p>
      </header>

      <div className="space-y-6">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-white dark:hover:bg-gray-700/50 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md"
          >
            <h3 className="flex items-center justify-between text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <span>{resource.title}</span>
                <ExternalLinkIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-indigo-500 transition-colors" />
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{resource.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;