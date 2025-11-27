'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Lesson } from '../types';
import CodeBlock from './CodeBlock';
import { useLessonProgress } from '../contexts/ProgressContext';
import { LightbulbIcon, PencilIcon } from './Icons';
import FeedbackForm from './FeedbackForm';

interface LessonContentProps {
    lesson: Lesson;
    prevLesson: Lesson | null;
    nextLesson: Lesson | null;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson, prevLesson, nextLesson }) => {
  const { markAsCompleted } = useLessonProgress();

  useEffect(() => {
    if (lesson) {
      markAsCompleted(lesson.slug);
    }
  }, [lesson, markAsCompleted]);

  return (
    <article className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      <header className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">{lesson.title}</h1>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">{lesson.description}</p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 prose-indigo">
        <p>{lesson.content.introduction}</p>

        {lesson.content.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-bold mt-10 mb-4">{section.heading}</h2>
            <div>{section.content}</div>
          </section>
        ))}

        {lesson.content.codeExamples && lesson.content.codeExamples.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mt-10 mb-4">Code Examples</h2>
            <div className="space-y-6">
                {lesson.content.codeExamples.map((example, index) => (
                    <CodeBlock 
                        key={index} 
                        title={example.title} 
                        language={example.language} 
                        code={example.code}
                        highlightLines={example.highlightLines}
                    />
                ))}
            </div>
          </section>
        )}

        {lesson.content.tips && lesson.content.tips.length > 0 && (
            <section className="mt-8 p-5 bg-blue-50 dark:bg-gray-700/50 border-l-4 border-blue-400 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center"><LightbulbIcon className="h-6 w-6 mr-3"/> Pro Tip</h3>
                <div className="space-y-2 text-blue-700 dark:text-blue-200">
                    {lesson.content.tips.map((tip, index) => <p key={index}>{tip}</p>)}
                </div>
            </section>
        )}

        {lesson.content.exercises && lesson.content.exercises.length > 0 && (
            <section className="mt-8 p-5 bg-green-50 dark:bg-gray-700/50 border-l-4 border-green-500 rounded-r-lg">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3 flex items-center"><PencilIcon className="h-6 w-6 mr-3" /> Exercises</h3>
                <ul className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-200">
                    {lesson.content.exercises.map((exercise, index) => <li key={index}>{exercise}</li>)}
                </ul>
            </section>
        )}
      </div>

      <section className="mt-12">
        <FeedbackForm lessonTitle={lesson.title} />
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        {prevLesson ? (
          <Link href={`/lesson/${prevLesson.slug}`} className="w-full sm:w-auto text-center px-6 py-3 font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
            &larr; Previous
            <span className="block text-sm text-gray-500 dark:text-gray-400 truncate">{prevLesson.title}</span>
          </Link>
        ) : <div className="w-full sm:w-auto" />}
        {nextLesson ? (
          <Link href={`/lesson/${nextLesson.slug}`} className="w-full sm:w-auto text-center px-6 py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
            Next &rarr;
            <span className="block text-sm text-indigo-200 truncate">{nextLesson.title}</span>
          </Link>
        ) : <div className="w-full sm:w-auto" />}
      </footer>
    </article>
  );
};

export default LessonContent;
