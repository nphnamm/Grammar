import React from 'react';

const ScoringSection = ({ score }) => {
  return (
    <div className="mt-8 p-8 bg-brand-green border-2 border-base-black text-base-black rounded-2xl shadow-lg text-center font-sans">
      <h3 className="text-3xl font-extrabold mb-4 font-sans">Exercise Completed!</h3>
      <p className="text-xl font-medium font-sans">
        You got <span className="font-extrabold">{score.correctCount}</span> out of{' '}
        <span className="font-extrabold">{score.totalQuestions}</span> correct.
      </p>
      {score.totalQuestions > 0 && (
        <p className="text-2xl font-bold mt-3 font-sans">
          Your score: <span className="text-base-black">{((score.correctCount / score.totalQuestions) * 100).toFixed(0)}%</span>
        </p>
      )}
    </div>
  );
};

export default ScoringSection; 