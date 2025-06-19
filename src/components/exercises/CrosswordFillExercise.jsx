import React from 'react';

const CrosswordFillExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex] || '';
  const isCorrect = userAnswer.toLowerCase().trim() === q.correct.toLowerCase().trim();

  let inputClasses = "w-full p-4 border-2 rounded-xl text-black focus:outline-none focus:ring-2 transition-all duration-200 ";
  
  if (showFeedback) {
    if (isCorrect) {
      inputClasses += "success-state";
    } else {
      inputClasses += "error-state";
    }
  } else {
    inputClasses += "border-gray-200 focus:border-gray-400 focus:ring-gray-200";
  }

  return (
    <div className="card">
      <p className="text-black font-medium mb-4 text-lg leading-relaxed">
        {q.number}. {q.direction}: {q.clue}
      </p>
      <input
        type="text"
        className={inputClasses}
        value={userAnswer}
        onChange={(e) => onAnswerChange(qIndex, e.target.value)}
        disabled={showFeedback}
        aria-label={`Answer for question ${q.number}`}
      />
    </div>
  );
};

export default CrosswordFillExercise; 