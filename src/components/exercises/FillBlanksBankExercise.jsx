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

        let inputClasses = "inline-block w-32 px-3 py-2 mx-2 border-b-2 text-black focus:outline-none focus:ring-2 rounded-lg transition-all duration-200 ";
        
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
      <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
        <p className="font-semibold text-black mb-2">Word Bank:</p>
        <p className="text-gray-700">{exercise.wordBank.join(', ')}</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
        <div className="text-lg leading-loose text-black ">
          {renderTextWithBlanks()}
        </div>
      </div>
    </div>
  );
};

export default FillBlanksBankExercise; 