'use client';

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden font-sans transition-colors duration-300">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col relative min-w-0">
        <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        
        <main className="main-content flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8 scroll-smooth">
          {children}
        </main>

        <footer className="flex-shrink-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800 p-4 flex items-center justify-center transition-colors duration-300">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                BloggerDev is a product of <a href="https://vitabletech.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">VitableTech</a>.
            </p>
        </footer>
      </div>
    </div>
  );
};

export default ClientLayout;
