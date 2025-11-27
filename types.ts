import type React from 'react';

export interface CodeExample {
  title: string;
  language: 'xml' | 'html' | 'css' | 'javascript';
  code: string;
  highlightLines?: string;
}

export interface ContentSection {
  heading: string;
  content: React.ReactNode;
}

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  content: {
    introduction: string;
    sections: ContentSection[];
    codeExamples?: CodeExample[];
    tips?: string[];
    exercises?: string[];
  };
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface Slide {
  imageUrl: string;
  caption: string;
}

export interface Template {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
  previewUrl: string;
  downloadUrl: string;
  isPremium: boolean;
  features: string[];
  tags: string[];
  author?: string;
}
