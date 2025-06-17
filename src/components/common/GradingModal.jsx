import React from 'react';

const GradingModal = ({ score, onClose, onNext, show, isLastExercise }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-brand-green border-2 border-base-black rounded-2xl shadow-lg p-10 w-full max-w-md text-center font-sans relative">
        <button
          className="absolute top-4 right-4 text-base-black text-2xl font-bold hover:text-red-600"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-3xl font-extrabold mb-4">Exercise Completed!</h2>
        <p className="text-xl font-medium mb-2">
          You got <span className="font-extrabold">{score.correctCount}</span> out of{' '}
          <span className="font-extrabold">{score.totalQuestions}</span> correct.
        </p>
        {score.totalQuestions > 0 && (
          <p className="text-2xl font-bold mb-6">
            Your score: <span className="text-base-black">{((score.correctCount / score.totalQuestions) * 100).toFixed(0)}%</span>
          </p>
        )}
        <div className="flex flex-col gap-3 mt-6">
          {!isLastExercise && (
            <button
              className="bg-brand-blue hover:bg-brand-peach text-base-black font-bold py-3 px-8 rounded-2xl shadow-md border-2 border-base-black transition duration-300 ease-in-out"
              onClick={onNext}
            >
              Next Exercise
            </button>
          )}
          <button
            className="bg-brand-peach hover:bg-brand-blue text-base-black font-bold py-3 px-8 rounded-2xl shadow-md border-2 border-base-black transition duration-300 ease-in-out"
            onClick={onClose}
          >
            Back to Exercises List
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradingModal; 