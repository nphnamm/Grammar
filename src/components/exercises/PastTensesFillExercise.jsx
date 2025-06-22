import React from 'react';

const PastTensesFillExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback, onSubmit }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer1 = userAnswers[`${qIndex}_1`] || '';
  const userAnswer2 = userAnswers[`${qIndex}_2`] || '';
  const userAnswer3 = userAnswers[`${qIndex}_3`] || '';

  const isCorrect1 = userAnswer1.toLowerCase().trim() === q.correct1.toLowerCase().trim();
  const isCorrect2 = userAnswer2.toLowerCase().trim() === q.correct2.toLowerCase().trim();
  const isCorrect3 = q.correct3 ? userAnswer3.toLowerCase().trim() === q.correct3.toLowerCase().trim() : true;

  // Check if the text uses numbered placeholders (1), (2), (3) or simple placeholders
  const hasNumberedPlaceholders = q.text.includes('(1)') || q.text.includes('(2)') || q.text.includes('(3)');
  
  // Split text based on placeholder type
  const parts = hasNumberedPlaceholders 
    ? q.text.split(/\((\d+)\)/g)  // Split by numbered placeholders
    : q.text.split(/\(__+\)/g);    // Split by simple placeholders

  const getInputClasses = (isCorrect) => {
    let classes = "inline-block w-24 sm:w-32 px-2 sm:px-4 py-1 sm:py-3 mx-1 sm:mx-2 border-b-2 text-black focus:outline-none focus:ring-2 rounded-lg transition-all duration-200 text-sm sm:text-base ";
    
    if (showFeedback) {
      if (isCorrect) {
        classes += "success-state";
      } else {
        classes += "error-state";
      }
    } else {
      classes += "border-gray-300 focus:border-gray-400 focus:ring-gray-200";
    }
    
    return classes;
  };

  return (
    <div className="card">
      <p className="text-black font-medium mb-4 text-base sm:text-lg leading-relaxed">
        {qIndex + 1}. {parts[0]}
        <input
          type="text"
          className={getInputClasses(isCorrect1)}
          value={userAnswer1}
          onChange={(e) => onAnswerChange(`${qIndex}_1`, e.target.value)}
          disabled={showFeedback}
          aria-label={`First answer for question ${qIndex + 1}`}
          onKeyDown={e => { if (e.key === 'Enter') onSubmit(); }}
        />
        {parts[2]}
        <input
          type="text"
          className={getInputClasses(isCorrect2)}
          value={userAnswer2}
          onChange={(e) => onAnswerChange(`${qIndex}_2`, e.target.value)}
          disabled={showFeedback}
          aria-label={`Second answer for question ${qIndex + 1}`}
          onKeyDown={e => { if (e.key === 'Enter') onSubmit(); }}
        />
        {parts[4]}
        {q.correct3 && (
          <>
            <input
              type="text"
              className={getInputClasses(isCorrect3)}
              value={userAnswer3}
              onChange={(e) => onAnswerChange(`${qIndex}_3`, e.target.value)}
              disabled={showFeedback}
              aria-label={`Third answer for question ${qIndex + 1}`}
              onKeyDown={e => { if (e.key === 'Enter') onSubmit(); }}
            />
            {parts[6]}
          </>
        )}
        {!q.correct3 && parts[6]}
      </p>
    </div>
  );
};

export default PastTensesFillExercise; 