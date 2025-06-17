import React from 'react';

const PastTensesFillExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer1 = userAnswers[`${qIndex}_1`] || '';
  const userAnswer2 = userAnswers[`${qIndex}_2`] || '';

  const isCorrect1 = userAnswer1.toLowerCase().trim() === q.correct1.toLowerCase().trim();
  const isCorrect2 = userAnswer2.toLowerCase().trim() === q.correct2.toLowerCase().trim();

  const parts = q.text.split(/ ?\(.+?\) ?/g); // Split by (verb) placeholders

  return (
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <p className="text-gray-800 font-medium mb-3">
        {qIndex + 1}. {parts[0]}
        <input
          type="text"
          className={`inline-block w-32 px-3 py-2 mx-2 border-b-2 text-gray-800 focus:outline-none focus:ring-2 ${
            showFeedback
              ? (isCorrect1
                ? 'border-green-500 ring-green-200 bg-green-50'
                : 'border-red-500 ring-red-200 bg-red-50')
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
          }`}
          value={userAnswer1}
          onChange={(e) => onAnswerChange(`${qIndex}_1`, e.target.value)}
          disabled={showFeedback}
          placeholder={`(${q.verb1})`}
          aria-label={`First answer for question ${qIndex + 1}`}
        />
        {parts[1]}
        <input
          type="text"
          className={`inline-block w-32 px-3 py-2 mx-2 border-b-2 text-gray-800 focus:outline-none focus:ring-2 ${
            showFeedback
              ? (isCorrect2
                ? 'border-green-500 ring-green-200 bg-green-50'
                : 'border-red-500 ring-red-200 bg-red-50')
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
          }`}
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