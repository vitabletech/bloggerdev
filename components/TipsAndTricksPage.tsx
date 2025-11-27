
import React, { useState } from 'react';
import { tips } from '../tipsAndTricksData';
import type { Tip } from '../tipsAndTricksData';
import { Wand2Icon, ChevronDownIcon } from './Icons';
import CodeBlock from './CodeBlock';

const AccordionItem: React.FC<{ tip: Tip; isOpen: boolean; onClick: () => void; }> = ({ tip, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <h2>
        <button
          type="button"
          onClick={onClick}
          className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
          aria-expanded={isOpen}
        >
          <span className="text-lg">{tip.title}</span>
          <ChevronDownIcon className={`w-6 h-6 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </h2>
      {isOpen && (
        <div className="p-5 border-t-0 border-gray-200 dark:border-gray-700">
          <div className="prose dark:prose-invert max-w-none">
            {tip.description}
            {tip.codeExample && (
              <CodeBlock 
                title={tip.codeExample.title}
                language={tip.codeExample.language}
                code={tip.codeExample.code}
                highlightLines={tip.codeExample.highlightLines}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const TipsAndTricksPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="space-y-12">
      <header className="text-center bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-xl shadow-lg">
        <Wand2Icon className="h-16 w-16 mx-auto text-indigo-500 mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Tips & Tricks</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A collection of useful code snippets, advanced techniques, and best practices to level up your Blogger theme development workflow.
        </p>
      </header>
      
      <main className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
         <div id="accordion-flush">
            {tips.map((tip, index) => (
                <AccordionItem 
                    key={index} 
                    tip={tip}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
      </main>
    </div>
  );
};

export default TipsAndTricksPage;
