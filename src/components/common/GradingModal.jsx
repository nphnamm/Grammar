import React from 'react';

const GradingModal = ({ score, onClose, onNext, show, isLastExercise }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="card p-8 w-full max-w-md text-center relative mx-4">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors duration-200"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        
        <div className="mb-6">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-success-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">Exercise Completed!</h2>
        </div>
        
        <div className="space-y-4 mb-8">
          <p className="text-xl font-medium">
            You got <span className="font-bold text-success-600">{score.correctCount}</span> out of{' '}
            <span className="font-bold">{score.totalQuestions}</span> correct.
          </p>
          
          {score.totalQuestions > 0 && (
            <div className="p-4 bg-success-50 rounded-xl border border-success-200">
              <p className="text-2xl font-bold text-success-700">
                {((score.correctCount / score.totalQuestions) * 100).toFixed(0)}%
              </p>
              <p className="text-sm text-success-600">Your Score</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-3">
          {!isLastExercise && (
            <button
              className="btn-primary"
              onClick={onNext}
            >
              Next Exercise
            </button>
          )}
          <button
            className="btn-secondary"
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