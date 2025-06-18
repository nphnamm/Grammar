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
      <div className="min-h-screen bg-base-white flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
        <div className="w-full max-w-4xl bg-brand-blue border-2 border-base-black rounded-2xl shadow-lg p-8 sm:p-10">
          <button
            onClick={handleBackToLessons}
            className="mb-6 bg-brand-green text-base-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-green/90"
          >
            ← Back to Lessons
          </button>
          
          <h1 className="text-4xl font-extrabold text-base-black mb-4 text-center font-sans">
            {selectedLesson.title}
          </h1>
          
          <p className="text-lg text-base-black mb-8 text-center">
            {selectedLesson.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Theory Option */}
            <Link
              to={`/lesson/${selectedLesson.id}/theory`}
              className="bg-brand-green border-2 border-base-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-base-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-base-black mb-2">Study Theory</h3>
                <p className="text-base-black">
                  Learn the concepts, rules, and vocabulary before practicing with exercises.
                </p>
              </div>
            </Link>

            {/* Exercises Option */}
            <Link
              to={`/lesson/${selectedLesson.id}/exercises`}
              className="bg-brand-yellow border-2 border-base-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-base-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-base-black mb-2">Practice Exercises</h3>
                <p className="text-base-black">
                  Test your knowledge with interactive exercises and get immediate feedback.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-white flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-base-black mb-4 font-sans">
            Welcome to Grammar Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a lesson to start your learning journey. You can study the theory first or jump straight into exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-brand-blue border-2 border-base-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleLessonClick(lesson)}
            >
              <div className="h-48 bg-gradient-to-br from-brand-green to-brand-yellow flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-base-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-base-black">{lesson.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-base-black mb-4">
                  {lesson.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>📚 Theory + Exercises</span>
                  <span>Click to start →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
