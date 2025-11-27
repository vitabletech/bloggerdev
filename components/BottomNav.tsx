'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboardIcon, PaletteIcon, PlayCircleIcon, BookOpenIcon, MenuIcon } from './Icons';
import { motion } from 'framer-motion';

interface BottomNavProps {
  onMenuClick: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ onMenuClick }) => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: LayoutDashboardIcon, label: 'Home' },
    { href: '/templates', icon: PaletteIcon, label: 'Templates' },
    { href: '/video-tutorials', icon: PlayCircleIcon, label: 'Videos' },
    { href: '/resources', icon: BookOpenIcon, label: 'Resources' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center justify-center w-full h-full">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center space-y-1 ${
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
        <button onClick={onMenuClick} className="flex flex-col items-center justify-center w-full h-full text-gray-500 dark:text-gray-400">
             <motion.div whileTap={{ scale: 0.9 }} className="flex flex-col items-center space-y-1">
                <MenuIcon className="h-6 w-6" />
                <span className="text-[10px] font-medium">Menu</span>
             </motion.div>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
