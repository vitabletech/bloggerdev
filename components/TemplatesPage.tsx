'use client';

import React, { useState, useMemo } from 'react';
import { templates } from '../templatesData';
import { Template } from '../types';
import { DownloadIcon } from './Icons';

const CheckBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

const TemplateCard: React.FC<{ template: Template }> = ({ template }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col group">
        <div className="relative overflow-hidden">
            <img src={template.thumbnailUrl} alt={template.name} className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110" />
            <div className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-bold text-white rounded-full shadow-md ${template.isPremium ? 'bg-red-500' : 'bg-green-500'}`}>
                {template.isPremium ? 'Premium' : 'Free'}
            </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{template.name}</h3>
            {template.author && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">by {template.author}</p>}
            <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow mb-4">{template.description}</p>
            
            <div className="mt-auto">
                 <div className="mb-4 flex flex-wrap gap-2">
                    {template.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-xs font-semibold rounded-full">{tag}</span>
                    ))}
                </div>
                
                <div className="mt-6 flex gap-3">
                    <a href={template.previewUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                        Live Preview
                    </a>
                    <a href={template.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center gap-2">
                         {template.isPremium ? 'Purchase' : 'Download'}
                    </a>
                </div>
            </div>
        </div>
    </div>
);


const InstallationGuide = () => (
    <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"><DownloadIcon className="h-8 w-8 text-indigo-500" /> How to Install a Blogger Template</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p>Installing a new theme on your Blogger blog is a straightforward process. Follow these steps:</p>
            <ol className="list-none p-0 space-y-4">
                <li className="flex items-start"><strong className="bg-indigo-500 text-white rounded-full w-8 h-8 text-center leading-8 flex-shrink-0 mr-4">1</strong><span><strong>Download the Theme:</strong> First, download the template file. It will usually be a <code>.zip</code> file.</span></li>
                <li className="flex items-start"><strong className="bg-indigo-500 text-white rounded-full w-8 h-8 text-center leading-8 flex-shrink-0 mr-4">2</strong><span><strong>Extract the XML File:</strong> Unzip the downloaded file. Look for a file with a <code>.xml</code> extension inside. This is your theme file.</span></li>
                <li className="flex items-start"><strong className="bg-indigo-500 text-white rounded-full w-8 h-8 text-center leading-8 flex-shrink-0 mr-4">3</strong><span><strong>Back Up Your Current Theme:</strong> Before uploading, always back up your existing one. Go to your Blogger Dashboard &rarr; <strong>Theme</strong>, click the dropdown, and select <strong>Backup</strong>.</span></li>
                <li className="flex items-start"><strong className="bg-indigo-500 text-white rounded-full w-8 h-8 text-center leading-8 flex-shrink-0 mr-4">4</strong><span><strong>Upload the New Theme:</strong> In the same menu, select <strong>Restore</strong>. An "Upload theme" dialog will appear. Click <strong>Upload</strong> and select the <code>.xml</code> file.</span></li>
            </ol>
            <div className="p-4 bg-yellow-50 dark:bg-gray-700/50 border-l-4 border-yellow-400 rounded-r-lg mt-6">
                <p className="font-semibold text-yellow-800 dark:text-yellow-300">Important Note:</p>
                <p>Some themes come with documentation that includes instructions for setting up specific widgets or features. Be sure to check for a "documentation" or "readme" file in the downloaded folder.</p>
            </div>
        </div>
    </section>
);


const TemplatesPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        templates.forEach(t => t.tags.forEach(tag => tags.add(tag)));
        return ['All', 'Free', 'Premium', ...Array.from(tags).sort()];
    }, []);

    const filteredTemplates = useMemo(() => {
        if (activeFilter === 'All') return templates;
        if (activeFilter === 'Free') return templates.filter(t => !t.isPremium);
        if (activeFilter === 'Premium') return templates.filter(t => t.isPremium);
        return templates.filter(t => t.tags.includes(activeFilter));
    }, [activeFilter]);

    const FilterButton: React.FC<{ tag: string }> = ({ tag }) => (
        <button
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 border-2 ${activeFilter === tag ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500'}`}
        >
            {tag}
        </button>
    );

    return (
        <div className="space-y-12">
            <header className="text-center bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-xl shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Templates Gallery</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Browse our curated collection of free and premium Blogger themes. Find the perfect design for your blog, from minimal personal sites to professional news magazines.
                </p>
            </header>

            <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                {allTags.map(tag => <FilterButton key={tag} tag={tag} />)}
            </nav>

            <main>
                {filteredTemplates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTemplates.map(template => <TemplateCard key={template.id} template={template} />)}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-500 dark:text-gray-400">No templates found for "{activeFilter}".</p>
                    </div>
                )}
            </main>

            <InstallationGuide />
        </div>
    );
};

export default TemplatesPage;