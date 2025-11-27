'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MenuIcon, SearchIcon } from './Icons';
import { courseModules } from '../courseData';
import { Lesson } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Lesson[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const allLessons = courseModules.flatMap(module => module.lessons);
      const results = allLessons.filter(lesson =>
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchQuery('');
        setSearchResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (slug: string) => {
    router.push(`/lesson/${slug}`);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <header className="flex-shrink-0 bg-white dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700/80 h-16 flex items-center justify-between px-4 sm:px-6 z-20 shadow-sm transition-colors duration-300">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="lg:hidden text-gray-500 dark:text-gray-400 mr-4 focus:outline-none">
          <MenuIcon className="h-6 w-6" />
        </button>
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="BloggerDev Logo" className="h-8 w-auto" />
            <span className="hidden sm:inline">BloggerDev</span>
        </Link>
      </div>

      <div className="flex-1 flex justify-end md:justify-center px-4">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md" ref={searchContainerRef}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full bg-gray-100 dark:bg-gray-700 border-2 border-transparent rounded-lg py-2 pl-10 pr-3 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-900 focus:border-indigo-500 focus:ring-0 transition-all duration-200"
          />
          {searchResults.length > 0 && (
            <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-700 rounded-md shadow-lg max-h-80 overflow-y-auto border border-gray-200 dark:border-gray-600 animate-in fade-in zoom-in-95 duration-200">
              <ul>
                {searchResults.map((lesson, index) => (
                  <li key={lesson.slug} className={`${index > 0 ? 'border-t border-gray-100 dark:border-gray-600' : ''}`}>
                    <button
                      onClick={() => handleResultClick(lesson.slug)}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <span className="font-semibold block">{lesson.title}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block truncate">{lesson.description}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center ml-2">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;