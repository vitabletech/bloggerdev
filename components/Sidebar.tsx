

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { courseModules } from '../courseData';
import { XIcon, BookOpenIcon, CheckCircleIcon, ChevronDownIcon, PaletteIcon, LayoutDashboardIcon, InfoIcon, Wand2Icon, PlayCircleIcon, CodeIcon } from './Icons';
import { useLessonProgress } from '../contexts/ProgressContext';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const { completedSlugs } = useLessonProgress();
    const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
        const initialState: Record<string, boolean> = {};
        courseModules.forEach((module, index) => {
            initialState[module.title] = index === 0;
        });
        return initialState;
    });

    const toggleModule = (title: string) => {
        setOpenModules(prev => ({ ...prev, [title]: !prev[title] }));
    };

  const navLinkClasses = "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 group";
  const activeClassName = "text-white bg-indigo-600";
  const inactiveClassName = "text-gray-300 hover:bg-gray-700/50 hover:text-white";

  const content = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between h-16 px-4 flex-shrink-0 border-b border-gray-700/80">
         <div className="flex items-center gap-2 text-xl font-bold text-white">
            <BookOpenIcon className="h-6 w-6 text-indigo-400"/>
            <span>BloggerDev</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="space-y-2">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} ${isActive ? activeClassName : inactiveClassName}`}><LayoutDashboardIcon className="h-5 w-5 mr-3" /> Home</NavLink>
            <NavLink to="/templates" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} ${isActive ? activeClassName : inactiveClassName}`}><PaletteIcon className="h-5 w-5 mr-3"/>Templates</NavLink>
            <NavLink to="/live-editor" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} ${isActive ? activeClassName : inactiveClassName}`}><CodeIcon className="h-5 w-5 mr-3" />Live Editor</NavLink>
            <NavLink to="/video-tutorials" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} ${isActive ? activeClassName : inactiveClassName}`}><PlayCircleIcon className="h-5 w-5 mr-3" />Videos</NavLink>
            <NavLink to="/resources" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} ${isActive ? activeClassName : inactiveClassName}`}><BookOpenIcon className="h-5 w-5 mr-3" />Resources</NavLink>
            <NavLink to="/tips-and-tricks" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} ${isActive ? activeClassName : inactiveClassName}`}><Wand2Icon className="h-5 w-5 mr-3" />Tips & Tricks</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} ${isActive ? activeClassName : inactiveClassName}`}><InfoIcon className="h-5 w-5 mr-3" />About</NavLink>
        </div>
        <div className="pt-4 mt-4 border-t border-gray-700/80">
        {courseModules.map((module) => {
          const moduleId = `module-lessons-${module.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
          const isExpanded = !!openModules[module.title];
          return (
            <div key={module.title} className="py-1">
              <button
                onClick={() => toggleModule(module.title)}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-sm font-semibold text-gray-300 rounded-md hover:bg-gray-700/50 hover:text-white focus:outline-none"
                aria-expanded={isExpanded}
                aria-controls={moduleId}
              >
                <span className="truncate">{module.title}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                  aria-hidden="true"
                />
              </button>
              {isExpanded && (
                  <ul id={moduleId} className="mt-1 space-y-1 pl-4 border-l-2 border-gray-700 ml-2">
                  {module.lessons.map((lesson) => (
                      <li key={lesson.slug}>
                      <NavLink
                          to={`/lesson/${lesson.slug}`}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClassName : inactiveClassName}`}
                      >
                           <span className="flex-shrink-0 w-5 h-5 mr-3 flex items-center justify-center">
                            {completedSlugs.has(lesson.slug) ? (
                                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                            ): (
                                <span className="block w-2 h-2 bg-gray-500 rounded-full group-hover:bg-gray-300"></span>
                            )}
                          </span>
                          <span className="truncate">{lesson.title}</span>
                      </NavLink>
                      </li>
                  ))}
                  </ul>
              )}
            </div>
          );
        })}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      <div className={`fixed inset-0 z-30 bg-black bg-opacity-75 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      <aside className={`fixed lg:relative inset-y-0 left-0 z-40 w-72 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        {content}
      </aside>
    </>
  );
};

export default Sidebar;