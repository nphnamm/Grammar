import React from 'react';

const MultipleChoiceExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex];
  const isCorrect = userAnswer === q.correct;

  return (
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <p className="text-gray-800 font-medium mb-3">
        {qIndex + 1}. {q.text.split('/').join(' / ')}
      </p>
      <div className="flex flex-wrap gap-4">
        {q.options.map((option, optIndex) => (
          <label
            key={optIndex}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ease-in-out
              ${showFeedback
                ? (isCorrect && userAnswer === option
                    ? 'bg-green-100 border-green-500 text-green-800'
                    : (!isCorrect && userAnswer === option
                        ? 'bg-red-100 border-red-500 text-red-800'
                        : (option === q.correct ? 'bg-blue-100 border-blue-500 text-blue-800' : 'bg-white border-gray-200'))
                  )
                : 'bg-white border border-gray-300 hover:bg-gray-100'
              }`}
          >
            <input
              type="radio"
              name={`mcq-${exercise.id}-${qIndex}`}
              value={option}
              checked={userAnswer === option}
              onChange={() => onAnswerChange(qIndex, option)}
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              disabled={showFeedback}
              aria-label={`Option ${option} for question ${qIndex + 1}`}
            />
            <span className="font-medium text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceExercise; 