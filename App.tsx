

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import LessonPage from './components/LessonPage';
import TemplatesPage from './components/TemplatesPage';
import ResourcesPage from './components/ResourcesPage';
import AboutPage from './components/AboutPage';
import TipsAndTricksPage from './components/TipsAndTricksPage';
import VideoTutorialsPage from './components/VideoTutorialsPage';
import LiveEditorPage from './components/LiveEditorPage';
import { ProgressProvider } from './contexts/ProgressContext';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector('.main-content')?.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HashRouter>
      <ProgressProvider>
        <ScrollToTop />
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden font-sans">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
          
          <div className="flex-1 flex flex-col relative">
            <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
            
            <main className="main-content flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/lesson/:slug" element={<LessonPage />} />
                <Route path="/templates" element={<TemplatesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/tips-and-tricks" element={<TipsAndTricksPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/video-tutorials" element={<VideoTutorialsPage />} />
                <Route path="/live-editor" element={<LiveEditorPage />} />
              </Routes>
            </main>

            <footer className="flex-shrink-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 flex items-center justify-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    BloggerDev is a product of <a href="https://vitabletech.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">VitableTech</a>.
                </p>
            </footer>
          </div>
        </div>
      </ProgressProvider>
    </HashRouter>
  );
};

export default App;