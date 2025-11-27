
import React from 'react';
import { notFound } from 'next/navigation';
import { courseModules } from '@/courseData';
import LessonContent from '@/components/LessonContent';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allLessons = courseModules.flatMap(module => module.lessons);
  return allLessons.map(lesson => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const allLessons = courseModules.flatMap(module => module.lessons);
  const lesson = allLessons.find(l => l.slug === slug);

  if (!lesson) {
    return {
      title: 'Lesson Not Found',
    };
  }

  return {
    title: `${lesson.title} - Blogger Theme Dev Course`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const allLessons = courseModules.flatMap(module => module.lessons);
  const lessonIndex = allLessons.findIndex(l => l.slug === slug);

  if (lessonIndex === -1) {
    notFound();
  }

  const lesson = allLessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  return <LessonContent lesson={lesson} prevLesson={prevLesson} nextLesson={nextLesson} />;
}
