import React from 'react';

const MultipleChoiceExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback, onSubmit }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex];
  const isCorrect = userAnswer === q.correct;

  const handleOptionClick = (option) => {
    if (!showFeedback) {
      onAnswerChange(qIndex, option);
      // Automatically submit the answer when an option is clicked
      onSubmit();
    }
  };

  return (
    <div className="card">
      <p className="text-black font-medium mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
        {qIndex + 1}. {q.text.split('/').join(' / ')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {q.options.map((option, optIndex) => {
          let optionClasses = "flex items-center p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-200 ease-in-out border-2 text-sm sm:text-base ";
          
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
            <div
              key={optIndex}
              className={optionClasses}
              onClick={() => handleOptionClick(option)}
            >
              <span className="mr-3 text-lg font-bold text-gray-400">
                {String.fromCharCode(65 + optIndex)}
              </span>
              <span>{option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleChoiceExercise; 