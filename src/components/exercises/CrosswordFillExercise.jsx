import React from 'react';

const CrosswordFillExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex] || '';
  const isCorrect = userAnswer.toLowerCase().trim() === q.correct.toLowerCase().trim();

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <p className="text-gray-800 font-medium mb-2">
        {q.number}. {q.direction}: {q.clue}
      </p>
      <input
        type="text"
        className={`w-full p-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 ${
          showFeedback
            ? (isCorrect
              ? 'border-green-500 ring-green-200 bg-green-50'
              : 'border-red-500 ring-red-200 bg-red-50')
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
        }`}
        value={userAnswer}
        onChange={(e) => onAnswerChange(qIndex, e.target.value)}
        disabled={showFeedback}
        aria-label={`Answer for question ${q.number}`}
      />
    </div>
  );
};

export default CrosswordFillExercise; 