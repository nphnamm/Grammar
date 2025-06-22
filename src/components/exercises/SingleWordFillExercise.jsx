import React from 'react';

const SingleWordFillExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback, onSubmit }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex] || '';
  const isCorrect = userAnswer.toLowerCase().trim() === q.correct.toLowerCase().trim();

  const parts = q.text.split('__________');
  
  let inputClasses = "inline-block w-32 sm:w-48 px-3 sm:px-4 py-2 sm:py-3 mx-1 sm:mx-2 border-b-2 text-black focus:outline-none focus:ring-2 rounded-lg transition-all duration-200 text-sm sm:text-base ";
  
  if (showFeedback) {
    if (isCorrect) {
      inputClasses += "success-state";
    } else {
      inputClasses += "error-state";
    }
  } else {
    inputClasses += "border-gray-300 focus:border-gray-400 focus:ring-gray-200";
  }
  
  return (
    <div className="card">
      <p className="text-black font-medium mb-4 text-base sm:text-lg leading-relaxed">
        {qIndex + 1}. {parts[0]}
        <input
          type="text"
          className={inputClasses}
          value={userAnswer}
          onChange={(e) => onAnswerChange(qIndex, e.target.value)}
          disabled={showFeedback}
          aria-label={`Answer for question ${qIndex + 1}`}
          onKeyDown={e => { if (e.key === 'Enter') onSubmit(); }}
        />
        {parts[1]}
      </p>
    </div>
  );
};

export default SingleWordFillExercise; 