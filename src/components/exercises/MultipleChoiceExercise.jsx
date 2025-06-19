import React from 'react';

const MultipleChoiceExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex];
  const isCorrect = userAnswer === q.correct;

  return (
    <div className="card">
      <p className="text-black font-medium mb-6 text-lg leading-relaxed">
        {qIndex + 1}. {q.text.split('/').join(' / ')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {q.options.map((option, optIndex) => {
          let optionClasses = "flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 ease-in-out border-2 ";
          
          if (showFeedback) {
            if (isCorrect && userAnswer === option) {
              optionClasses += "success-state shadow-soft";
            } else if (!isCorrect && userAnswer === option) {
              optionClasses += "error-state shadow-soft";
            } else if (option === q.correct) {
              optionClasses += "success-state shadow-soft";
            } else {
              optionClasses += "bg-white border-gray-200 text-gray-600";
            }
          } else {
            optionClasses += "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-soft";
          }

          return (
            <label key={optIndex} className={optionClasses}>
              <input
                type="radio"
                name={`mcq-${exercise.id}-${qIndex}`}
                value={option}
                checked={userAnswer === option}
                onChange={() => onAnswerChange(qIndex, option)}
                className="mr-3 h-4 w-4 text-black border-gray-300 focus:ring-gray-400"
                disabled={showFeedback}
                aria-label={`Option ${option} for question ${qIndex + 1}`}
              />
              <span className="font-medium">{option}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleChoiceExercise; 