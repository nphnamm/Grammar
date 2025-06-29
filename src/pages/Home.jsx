import React, { useState } from 'react';
import { lessons } from '../data/lessons.js';
import { Link } from 'react-router-dom';

function Home() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
  };

  if (selectedLesson) {
    return (
      <div className="min-h-screen bg-base-gray-50 flex flex-col items-center p-4 sm:p-6 lg:p-8 pt-20">
        <div className="w-full max-w-4xl">
          <button
            onClick={handleBackToLessons}
            className="btn-secondary mb-6 sm:mb-8 text-sm sm:text-base"
          >
            ← Back to Lessons
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-black mb-3 sm:mb-4">
              {selectedLesson.title}
            </h1>
            <p className="text-base sm:text-lg text-base-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {selectedLesson.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Link
              to={`/lesson/${selectedLesson.id}/theory`}
              className="card-3d card-3d-hover bg-base-white p-6 sm:p-8 text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-base-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-base-black mb-2">Study Theory</h3>
              <p className="text-base-gray-600 text-sm sm:text-base">
                Learn the concepts, rules, and vocabulary.
              </p>
            </Link>

            <Link
              to={`/lesson/${selectedLesson.id}/exercises`}
              className="card-3d card-3d-hover bg-base-white p-6 sm:p-8 text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-base-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-base-black mb-2">Practice Exercises</h3>
              <p className="text-base-gray-600 text-sm sm:text-base">
                Test your knowledge with interactive exercises.
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-gray-50 flex flex-col items-center p-12  pt-20">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-black mb-4 sm:mb-6">
            English Learning Platform
          </h1>
          <p className="text-lg sm:text-xl text-base-gray-600 max-w-3xl mx-auto">
            Master English grammar, vocabulary, and language skills through interactive lessons and exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="card-3d card-3d-hover bg-base-white p-4 sm:p-6 cursor-pointer flex flex-col"
              onClick={() => handleLessonClick(lesson)}
            >
              <div className="flex-grow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-mint rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-9 sm:h-9 text-base-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v11.494m-9-5.747h18"></path></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-base-black mb-2">{lesson.title}</h2>
                <p className="text-base-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  {lesson.description}
                </p>
              </div>
              
              <div className="text-right text-xs sm:text-sm font-medium text-base-black">
                Start Lesson →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
