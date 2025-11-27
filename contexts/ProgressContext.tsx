'use client';

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'bloggerDevCourseProgress';

interface ProgressContextType {
  completedSlugs: Set<string>;
  markAsCompleted: (slug: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(new Set());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(STORAGE_KEY);
      if (item) {
        setCompletedSlugs(new Set(JSON.parse(item)));
      }
    } catch (error) {
      console.error("Error reading from localStorage", error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedSlugs)));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [completedSlugs, isInitialized]);

  const markAsCompleted = useCallback((slug: string) => {
    setCompletedSlugs(prevSlugs => {
      if (prevSlugs.has(slug)) {
        return prevSlugs; // Avoid unnecessary state updates
      }
      const newSlugs = new Set(prevSlugs);
      newSlugs.add(slug);
      return newSlugs;
    });
  }, []);

  return (
    <ProgressContext.Provider value={{ completedSlugs, markAsCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useLessonProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useLessonProgress must be used within a ProgressProvider');
  }
  return context;
};
