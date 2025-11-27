
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { courseModules } from '../courseData';
import { Lesson } from '../types';
import LessonContent from './LessonContent';

const LessonPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const allLessons = courseModules.flatMap(module => module.lessons);
  const lessonIndex = allLessons.findIndex(l => l.slug === slug);

  if (lessonIndex === -1) {
    return <Navigate to="/" replace />;
  }

  const lesson = allLessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  return <LessonContent lesson={lesson} prevLesson={prevLesson} nextLesson={nextLesson} />;
};

export default LessonPage;
