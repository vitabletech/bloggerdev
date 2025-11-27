'use client';

import React, { useState, useMemo } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface CodeBlockProps {
  title: string;
  language: string;
  code: string;
  highlightLines?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, language, code, highlightLines }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const highlightedLinesSet = useMemo(() => {
    if (!highlightLines) {
      return new Set<number>();
    }
    const lines = new Set<number>();
    const ranges = highlightLines.split(',');
    for (const range of ranges) {
      if (range.includes('-')) {
        const [start, end] = range.split('-').map(Number);
        for (let i = start; i <= end; i++) {
          lines.add(i);
        }
      } else {
        lines.add(Number(range));
      }
    }
    return lines;
  }, [highlightLines]);

  return (
    <div className="bg-[#0d1117] rounded-lg border border-gray-700 overflow-hidden shadow-lg my-6 not-prose">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-400 uppercase">{language}</span>
            <span className="text-sm text-gray-300 font-mono">{title}</span>
        </div>
        <button onClick={handleCopy} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          {isCopied ? (
            <>
              <CheckIcon className="h-4 w-4 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="text-sm overflow-x-auto">
        <code className={`language-${language} text-white block`}>
          <div className="flex">
            <div className="text-right pr-4 text-gray-500 select-none flex-shrink-0 bg-gray-900/30 py-4">
                {code.split('\n').map((_, index) => (
                    <div key={index} className={`h-[21px] px-2 ${highlightedLinesSet.has(index + 1) ? 'bg-indigo-500/10' : ''}`}>{index + 1}</div>
                ))}
            </div>
            <div className="flex-1 py-4">
                {code.split('\n').map((line, index) => {
                  const isHighlighted = highlightedLinesSet.has(index + 1);
                  return (
                    <div key={index} className={`h-[21px] px-4 ${isHighlighted ? 'bg-indigo-500/10' : ''}`}>
                      <span>{line || ' '}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;