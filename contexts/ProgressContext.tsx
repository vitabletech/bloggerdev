
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'bloggerDevCourseProgress';

interface ProgressContextType {
  completedSlugs: Set<string>;
  markAsCompleted: (slug: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(() => {
    try {
      const item = window.localStorage.getItem(STORAGE_KEY);
      return item ? new Set(JSON.parse(item)) : new Set();
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return new Set();
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedSlugs)));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [completedSlugs]);

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
