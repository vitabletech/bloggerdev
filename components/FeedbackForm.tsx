'use client';

import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface FeedbackFormProps {
  lessonTitle: string;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ lessonTitle }) => {
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const mailtoHref = `mailto:info@vitabletech.in?subject=${encodeURIComponent(`Feedback on: ${lessonTitle}`)}&body=${encodeURIComponent(feedback)}`;

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 dark:bg-gray-700/50 border border-green-200 dark:border-green-800 rounded-lg">
        <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Thank you for your feedback!</h3>
        <p className="mt-2 text-green-700 dark:text-green-200">We appreciate your input and will use it to improve the course.</p>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Was this lesson helpful?</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Have feedback, found an issue, or have a suggestion? Let us know!
      </p>
      <div className="mt-4 space-y-4">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your comments or report an issue here..."
          rows={4}
          className="block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
          required
        />
        <a
          href={feedback.trim() ? mailtoHref : '#'}
          onClick={(e) => {
            if (!feedback.trim()) {
                e.preventDefault();
                alert("Please enter your feedback before submitting.");
            } else {
                setIsSubmitted(true);
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-lg transition-colors ${!feedback.trim() ? 'bg-indigo-400 dark:bg-indigo-800 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        >
          <SendIcon className="h-5 w-5" />
          Send Feedback
        </a>
      </div>
    </div>
  );
};

export default FeedbackForm;
