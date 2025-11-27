'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { courseModules } from '../courseData';
import { XIcon, BookOpenIcon, CheckCircleIcon, ChevronDownIcon, PaletteIcon, LayoutDashboardIcon, InfoIcon, Wand2Icon, PlayCircleIcon, CodeIcon } from './Icons';
import { useLessonProgress } from '../contexts/ProgressContext';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from './assets/logo.png';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const { completedSlugs } = useLessonProgress();
    const pathname = usePathname();
    const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
        const initialState: Record<string, boolean> = {};
        courseModules.forEach((module, index) => {
            initialState[module.title] = index === 0;
        });
        return initialState;
    });

    // Close sidebar on route change on mobile
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsOpen(false); // Reset state when switching to desktop
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [setIsOpen]);

    const toggleModule = (title: string) => {
        setOpenModules(prev => ({ ...prev, [title]: !prev[title] }));
    };

  const navLinkClasses = "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group relative overflow-hidden";
  const activeClassName = "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20";
  const inactiveClassName = "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white";

  const content = (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between h-16 px-4 flex-shrink-0 border-b border-gray-200 dark:border-gray-800">
         <div className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
            <Image src={logoImg} alt="BloggerDev Logo" className="h-8 w-auto" priority />
            <span>BloggerDev</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors">
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
        <div className="space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className={`${navLinkClasses} ${pathname === '/' ? activeClassName : inactiveClassName}`}><LayoutDashboardIcon className="h-5 w-5 mr-3" /> Home</Link>
            <Link href="/templates" onClick={() => setIsOpen(false)} className={`${navLinkClasses} ${pathname === '/templates' ? activeClassName : inactiveClassName}`}><PaletteIcon className="h-5 w-5 mr-3"/>Templates</Link>
            <Link href="/live-editor" onClick={() => setIsOpen(false)} className={`${navLinkClasses} ${pathname === '/live-editor' ? activeClassName : inactiveClassName}`}><CodeIcon className="h-5 w-5 mr-3" />Live Editor</Link>
            <Link href="/video-tutorials" onClick={() => setIsOpen(false)} className={`${navLinkClasses} ${pathname === '/video-tutorials' ? activeClassName : inactiveClassName}`}><PlayCircleIcon className="h-5 w-5 mr-3" />Videos</Link>
            <Link href="/resources" onClick={() => setIsOpen(false)} className={`${navLinkClasses} ${pathname === '/resources' ? activeClassName : inactiveClassName}`}><BookOpenIcon className="h-5 w-5 mr-3" />Resources</Link>
            <Link href="/tips-and-tricks" onClick={() => setIsOpen(false)} className={`${navLinkClasses} ${pathname === '/tips-and-tricks' ? activeClassName : inactiveClassName}`}><Wand2Icon className="h-5 w-5 mr-3" />Tips & Tricks</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className={`${navLinkClasses} ${pathname === '/about' ? activeClassName : inactiveClassName}`}><InfoIcon className="h-5 w-5 mr-3" />About</Link>
        </div>
        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
        {courseModules.map((module) => {
          const moduleId = `module-lessons-${module.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
          const isExpanded = !!openModules[module.title];
          return (
            <div key={module.title} className="py-1">
              <button
                onClick={() => toggleModule(module.title)}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                aria-expanded={isExpanded}
                aria-controls={moduleId}
              >
                <span className="truncate">{module.title}</span>
                <ChevronDownIcon
                  className={`h-4 w-4 text-gray-500 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.ul
                        id={moduleId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden mt-1 space-y-1 pl-2"
                    >
                    {module.lessons.map((lesson) => (
                        <li key={lesson.slug}>
                        <Link
                            href={`/lesson/${lesson.slug}`}
                            onClick={() => setIsOpen(false)}
                            className={`${navLinkClasses} ${pathname === `/lesson/${lesson.slug}` ? activeClassName : inactiveClassName} pl-8`}
                        >
                             <span className="absolute left-2 flex items-center justify-center">
                              {completedSlugs.has(lesson.slug) ? (
                                  <CheckCircleIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
                              ): (
                                  <span className={`block w-1.5 h-1.5 rounded-full ${pathname === `/lesson/${lesson.slug}` ? 'bg-indigo-500' : 'bg-gray-400 dark:bg-gray-600'}`}></span>
                              )}
                            </span>
                            <span className="truncate">{lesson.title}</span>
                        </Link>
                        </li>
                    ))}
                    </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
                onClick={() => setIsOpen(false)}
            />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
             <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 left-0 z-40 w-72 lg:hidden shadow-2xl"
            >
                {content}
            </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 h-screen sticky top-0 overflow-hidden">
        {content}
      </aside>
    </>
  );
};

export default Sidebar;