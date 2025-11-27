'use client';

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isRightSwipe) {
            setSidebarOpen(true);
        }
    };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden font-sans transition-colors duration-300">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div 
        className="flex-1 flex flex-col relative min-w-0"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="hidden lg:block">
             <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        </div>
        <div className="lg:hidden">
             <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        </div>
        
        <main className="main-content flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8 scroll-smooth no-scrollbar pb-20 lg:pb-8">
          {children}
        </main>
        
        <BottomNav onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />

      </div>
    </div>
  );
};

export default ClientLayout;
