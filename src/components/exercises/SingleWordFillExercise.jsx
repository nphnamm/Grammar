import React from 'react';

const SingleWordFillExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex] || '';
  const isCorrect = userAnswer.toLowerCase().trim() === q.correct.toLowerCase().trim();

  const parts = q.text.split('__________');
  return (
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <p className="text-gray-800 font-medium mb-3">
        {qIndex + 1}. {parts[0]}
        <input
          type="text"
          className={`inline-block w-48 px-3 py-2 mx-2 border-b-2 text-gray-800 focus:outline-none focus:ring-2 ${
            showFeedback
              ? (isCorrect
                ? 'border-green-500 ring-green-200 bg-green-50'
                : 'border-red-500 ring-red-200 bg-red-50')
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
          }`}
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