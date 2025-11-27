
import React, { useState } from 'react';
import { starterThemeXML } from '../themeData';
import { Wand2Icon } from './Icons';

const LiveEditorPage: React.FC = () => {
  const [code, setCode] = useState(starterThemeXML);

  return (
    // Use a layout that fills the available vertical space from the parent <main>
    <div className="flex flex-col h-full max-h-[calc(100vh-10rem)] space-y-6">
      <header className="flex-shrink-0 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Wand2Icon className="h-8 w-8 text-indigo-500" />
          <span>Live Theme Editor</span>
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Edit the Blogger XML on the left and see your changes rendered live on the right. This is a simulation and doesn't process dynamic Blogger data tags.
        </p>
      </header>
      
      {/* Desktop View: Editor and Preview Grid */}
      <div className="flex-1 hidden lg:grid grid-cols-2 gap-6 overflow-hidden">
        {/* Editor Panel */}
        <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
            <h2 className="font-semibold text-gray-700 dark:text-gray-200">Theme.xml</h2>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full p-4 font-mono text-sm text-white bg-[#0d1117] resize-none border-0 focus:ring-0 focus:outline-none leading-relaxed rounded-b-xl"
              spellCheck="false"
              placeholder="Enter your Blogger XML theme code here..."
            />
          </div>
        </div>

        {/* Preview Panel */}
        <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
           <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
            <h2 className="font-semibold text-gray-700 dark:text-gray-200">Live Preview</h2>
          </div>
          <div className="flex-1 overflow-hidden relative bg-white rounded-b-xl">
            <iframe
              srcDoc={code}
              title="Live Theme Preview"
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>

      {/* Mobile View: Informational Message */}
      <div className="lg:hidden flex-1 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
        <Wand2Icon className="h-16 w-16 text-indigo-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Live Editor is Desktop Only</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-sm">
          To provide the best experience with a side-by-side code editor and preview, this feature is only available on larger screens. Please switch to a desktop or tablet in landscape mode.
        </p>
      </div>
    </div>
  );
};

export default LiveEditorPage;
