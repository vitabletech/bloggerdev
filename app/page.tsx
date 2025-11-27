
import React from 'react';
import Link from 'next/link';
import { courseModules } from '@/courseData';
import { CheckCircleIcon } from '@/components/Icons';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode; link?: string }> = ({ title, description, icon, link }) => {
    const content = (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
            <div className="text-3xl mb-4 text-indigo-500">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 flex-grow">{description}</p>
        </div>
    );

    if (link) {
        return <Link href={link}>{content}</Link>;
    }

    return content;
};


export default function HomePage() {
    const firstLessonSlug = courseModules[0]?.lessons[0]?.slug;

    return (
        <div className="space-y-16">
            <section className="text-center bg-gray-800 p-8 sm:p-12 md:p-16 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 opacity-80"></div>
                <div className="relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Master Blogger Theme Development</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        From fundamentals to advanced techniques, this course provides everything you need to create powerful, beautiful, and dynamic Blogger themes from scratch.
                    </p>
                    {firstLessonSlug && (
                        <Link 
                            href={`/lesson/${firstLessonSlug}`}
                            className="mt-8 inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg hover:bg-gray-200 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Start Learning Now
                        </Link>
                    )}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Why This Course?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard 
                        icon="🎓"
                        title="Comprehensive Curriculum"
                        description="Covering everything from basic XML tags to complex conditional logic, dynamic widgets, and full theme projects."
                    />
                    <FeatureCard 
                        icon="💻"
                        title="Hands-On Examples"
                        description="Learn by doing with practical code examples, tips, and exercises at the end of each lesson."
                    />
                    <FeatureCard 
                        icon="🚀"
                        title="Build Real Projects"
                        description="Apply your skills by building a complete, professional news site theme from start to finish in the final module."
                    />
                    <FeatureCard 
                        icon="🎬"
                        title="Video Tutorials"
                        description="Watch detailed video walkthroughs to visually grasp key concepts and see theme development in action."
                        link="/video-tutorials"
                    />
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Course Outline</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
                    {courseModules.map((module, index) => {
                        const firstModuleLessonSlug = module.lessons[0]?.slug;
                        return (
                            <div key={module.title} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 transition-shadow hover:shadow-md">
                                {firstModuleLessonSlug ? (
                                    <Link href={`/lesson/${firstModuleLessonSlug}`} className="block group">
                                        <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400 group-hover:underline">Module {index + 1}: {module.title}</h3>
                                    </Link>
                                ) : (
                                    <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">Module {index + 1}: {module.title}</h3>
                                )}
                                <ul className="mt-3 space-y-2">
                                    {module.lessons.slice(0, 3).map(lesson => (
                                        <li key={lesson.slug} className="flex items-start text-sm">
                                            <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                                            <Link href={`/lesson/${lesson.slug}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:underline">
                                                <span>{lesson.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    {module.lessons.length > 3 && (
                                        <li className="text-sm text-gray-500 dark:text-gray-400 pl-7">... and {module.lessons.length - 3} more lessons.</li>
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
