import React from 'react';

const SingleWordFillExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex] || '';
  const isCorrect = userAnswer.toLowerCase().trim() === q.correct.toLowerCase().trim();

  const parts = q.text.split('__________');
  
  let inputClasses = "inline-block w-48 px-4 py-3 mx-2 border-b-2 text-black focus:outline-none focus:ring-2 rounded-lg transition-all duration-200 ";
  
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
      <p className="text-black font-medium mb-4 text-lg leading-relaxed">
        {qIndex + 1}. {parts[0]}
        <input
          type="text"
          className={inputClasses}
          value={userAnswer}
          onChange={(e) => onAnswerChange(qIndex, e.target.value)}
          disabled={showFeedback}
          aria-label={`Answer for question ${qIndex + 1}`}
        />
        {parts[1]}
      </p>
    </div>
  );
};

export default SingleWordFillExercise; 