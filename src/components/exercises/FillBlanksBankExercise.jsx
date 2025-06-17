import React from 'react';

const FillBlanksBankExercise = ({ exercise, userAnswers, onAnswerChange, showFeedback }) => {
  const renderTextWithBlanks = () => {
    const elements = [];
    exercise.textSegments.forEach((segment, index) => {
      elements.push(<span key={`segment-${index}`}>{segment}</span>);
      if (index < exercise.correctAnswers.length) {
        const qIndex = index;
        const userAnswer = userAnswers[qIndex] || '';
        const correctEntry = exercise.correctAnswers.find(item => item.index === qIndex);
        const isCorrect = correctEntry && userAnswer.toLowerCase().trim() === correctEntry.word.toLowerCase().trim();

        elements.push(
          <input
            key={`blank-${qIndex}`}
            type="text"
            className={`inline-block w-32 px-2 py-1 mx-1 border-b-2 text-gray-800 focus:outline-none ${
              showFeedback
                ? (isCorrect
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50')
                : 'border-gray-300 focus:border-blue-500'
            }`}
            value={userAnswer}
            onChange={(e) => onAnswerChange(qIndex, e.target.value)}
            placeholder={`(${qIndex + 1})`}
            disabled={showFeedback}
            aria-label={`Blank ${qIndex + 1}`}
          />
        );
      }
    });
    return elements;
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-lg leading-relaxed">
      <p className="mb-4 font-bold text-gray-800">Word Bank: {exercise.wordBank.join(', ')}</p>
      <div className="bg-white p-4 rounded-lg shadow-inner">
        {renderTextWithBlanks()}
      </div>
    </div>
  );
};

export default FillBlanksBankExercise; 