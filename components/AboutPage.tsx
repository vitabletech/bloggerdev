
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <header className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">About BloggerDev Course</h1>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">Your one-stop guide to mastering Blogger theme development.</p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 prose-indigo">
        <section>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            Blogger is a powerful and flexible platform, but its theme development can be intimidating due to outdated documentation and a lack of modern learning resources. Our mission is to bridge that gap. We aim to provide a clear, comprehensive, and up-to-date educational experience that empowers developers and designers to build high-quality, professional Blogger themes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">What You'll Learn</h2>
          <p>
            This course is designed to take you from a complete beginner to an advanced theme developer. We cover every aspect of the Blogger theme system, including:
          </p>
          <ul>
            <li>The fundamentals of Blogger's XML syntax.</li>
            <li>Harnessing dynamic content with Data Tags.</li>
            <li>Building customizable layouts with Sections and Widgets.</li>
            <li>Implementing advanced logic with conditionals and loops.</li>
            <li>Ensuring your themes are responsive, SEO-friendly, and accessible.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Feedback & Support</h2>
          <p>
            This platform is built for the community. If you have any feedback, find an error, or have a suggestion for a new lesson, please don't hesitate to reach out. Your input helps us make this resource better for everyone.
          </p>
          <p>
            For support or feedback, please contact us at <a href="mailto:feedback@example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">feedback@example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;