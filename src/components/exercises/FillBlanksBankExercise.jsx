import React from 'react';

const FillBlanksBankExercise = ({ exercise, userAnswers, onAnswerChange, showFeedback, onSubmit }) => {
  const renderTextWithBlanks = () => {
    const elements = [];
    exercise.textSegments.forEach((segment, index) => {
      elements.push(<span key={`segment-${index}`}>{segment}</span>);
      if (index < exercise.correctAnswers.length) {
        const qIndex = index;
        const userAnswer = userAnswers[qIndex] || '';
        const correctEntry = exercise.correctAnswers.find(item => item.index === qIndex);
        const isCorrect = correctEntry && userAnswer.toLowerCase().trim() === correctEntry.word.toLowerCase().trim();

        let inputClasses = "inline-block w-24 sm:w-32 px-2 sm:px-3 py-1 sm:py-2 mx-1 sm:mx-2 border-b-2 text-black focus:outline-none focus:ring-2 rounded-lg transition-all duration-200 text-sm sm:text-base ";
        
        if (showFeedback) {
          if (isCorrect) {
            inputClasses += "success-state";
          } else {
            inputClasses += "error-state";
          }
        } else {
          inputClasses += "border-gray-300 focus:border-gray-400 focus:ring-gray-200";
        }

        elements.push(
          <input
            key={`blank-${qIndex}`}
            type="text"
            className={inputClasses}
            value={userAnswer}
            onChange={(e) => onAnswerChange(qIndex, e.target.value)}
            placeholder={`(${qIndex + 1})`}
            disabled={showFeedback}
            aria-label={`Blank ${qIndex + 1}`}
            onKeyDown={e => { if (e.key === 'Enter') onSubmit(); }}
          />
        );
      }
    });
    return elements;
  };

  return (
    <div className="card">
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
        <p className="font-semibold text-black mb-2 text-sm sm:text-base">Word Bank:</p>
        <p className="text-gray-700 text-sm sm:text-base">{exercise.wordBank.join(', ')}</p>
      </div>
      <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-inner border border-gray-200">
        <div className="text-base sm:text-lg leading-loose text-black">
          {renderTextWithBlanks()}
        </div>
      </div>
    </div>
  );
};

export default FillBlanksBankExercise; 