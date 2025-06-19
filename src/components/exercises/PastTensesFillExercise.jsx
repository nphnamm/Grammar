import React from 'react';

const PastTensesFillExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer1 = userAnswers[`${qIndex}_1`] || '';
  const userAnswer2 = userAnswers[`${qIndex}_2`] || '';

  const isCorrect1 = userAnswer1.toLowerCase().trim() === q.correct1.toLowerCase().trim();
  const isCorrect2 = userAnswer2.toLowerCase().trim() === q.correct2.toLowerCase().trim();

  const parts = q.text.split(/ ?\(.+?\) ?/g); // Split by (verb) placeholders

  const getInputClasses = (isCorrect) => {
    let classes = "inline-block w-32 px-4 py-3 mx-2 border-b-2 text-black focus:outline-none focus:ring-2 rounded-lg transition-all duration-200 ";
    
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
      <p className="text-black font-medium mb-4 text-lg leading-relaxed">
        {qIndex + 1}. {parts[0]}
        <input
          type="text"
          className={getInputClasses(isCorrect1)}
          value={userAnswer1}
          onChange={(e) => onAnswerChange(`${qIndex}_1`, e.target.value)}
          disabled={showFeedback}
          placeholder={`(${q.verb1})`}
          aria-label={`First answer for question ${qIndex + 1}`}
        />
        {parts[1]}
        <input
          type="text"
          className={getInputClasses(isCorrect2)}
          value={userAnswer2}
          onChange={(e) => onAnswerChange(`${qIndex}_2`, e.target.value)}
          disabled={showFeedback}
          placeholder={`(${q.verb2})`}
          aria-label={`Second answer for question ${qIndex + 1}`}
        />
        {parts[2]}
      </p>
    </div>
  );
};

export default PastTensesFillExercise; 