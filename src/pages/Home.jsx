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
      <div className="min-h-screen bg-base-gray-50 flex flex-col items-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <button
            onClick={handleBackToLessons}
            className="btn-secondary mb-8"
          >
            ← Back to Lessons
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-base-black mb-4">
              {selectedLesson.title}
            </h1>
            <p className="text-lg text-base-gray-600 mb-8 max-w-2xl mx-auto">
              {selectedLesson.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to={`/lesson/${selectedLesson.id}/theory`}
              className="card-3d card-3d-hover bg-base-white p-8 text-center"
            >
              <div className="w-16 h-16 bg-lavender rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-base-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-black mb-2">Study Theory</h3>
              <p className="text-base-gray-600">
                Learn the concepts, rules, and vocabulary.
              </p>
            </Link>

            <Link
              to={`/lesson/${selectedLesson.id}/exercises`}
              className="card-3d card-3d-hover bg-base-white p-8 text-center"
            >
              <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-base-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-black mb-2">Practice Exercises</h3>
              <p className="text-base-gray-600">
                Test your knowledge with interactive exercises.
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-gray-50 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl">
        <div className="text-left mb-12">
          <h1 className="text-5xl font-bold text-base-black mb-3">
            Overview
          </h1>
          <p className="text-xl text-base-gray-500">
            Choose a lesson to start your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="card-3d card-3d-hover bg-base-white p-6 cursor-pointer flex flex-col"
              onClick={() => handleLessonClick(lesson)}
            >
              <div className="flex-grow">
                <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mb-4">
                  <svg className="w-9 h-9 text-base-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v11.494m-9-5.747h18"></path></svg>
                </div>
                <h2 className="text-2xl font-bold text-base-black mb-2">{lesson.title}</h2>
                <p className="text-base-gray-600 mb-4">
                  {lesson.description}
                </p>
              </div>
              
              <div className="text-right text-sm font-medium text-base-black">
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
