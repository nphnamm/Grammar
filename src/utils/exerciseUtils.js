export const calculateScore = (exercise, userAnswers) => {
  let correctCount = 0;
  let totalQuestions = 0;
  const exerciseAnswers = userAnswers[exercise.id] || {};

  if (exercise.type === 'fill_blanks_bank') {
    totalQuestions = exercise.correctAnswers.length;
    exercise.correctAnswers.forEach(q => {
      const userAnswer = (exerciseAnswers[q.index] || '').toLowerCase().trim();
      if (userAnswer === q.word.toLowerCase().trim()) {
        correctCount++;
      }
    });
  } else if (exercise.type === 'past_tenses_fill') {
    totalQuestions = exercise.questions.length;
    exercise.questions.forEach((q, qIndex) => {
      const userAnswer1 = (exerciseAnswers[`${qIndex}_1`] || '').toLowerCase().trim();
      const userAnswer2 = (exerciseAnswers[`${qIndex}_2`] || '').toLowerCase().trim();
      if (userAnswer1 === q.correct1.toLowerCase().trim() && userAnswer2 === q.correct2.toLowerCase().trim()) {
        correctCount++;
      }
    });
  } else if (exercise.type === 'bold_word_correction') {
    totalQuestions = exercise.questions.length;
    exercise.questions.forEach((q, qIndex) => {
      const userAnswer = exerciseAnswers[qIndex];
      if (userAnswer === '_IS_CORRECT_') {
        if (q.isCorrectDefault) {
          correctCount++;
        }
      } else {
        if (userAnswer && userAnswer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()) {
          correctCount++;
        }
      }
    });
  } else {
    totalQuestions = exercise.questions.length;
    exercise.questions.forEach((q, qIndex) => {
      const userAnswer = (exerciseAnswers[qIndex] || '').toLowerCase().trim();
      let isCorrect = false;
      if (exercise.type === 'multiple_choice') {
        isCorrect = userAnswer === q.correct.toLowerCase().trim();
      } else {
        isCorrect = userAnswer === q.correct.toLowerCase().trim();
      }
      if (isCorrect) {
        correctCount++;
      }
    });
  }
  return { correctCount, totalQuestions };
};

export const renderTextWithBold = (text) => {
  if (!text) return '';
  return text.split('**').map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{part}</strong>;
    }
    return part;
  });
};

export const getExerciseComponent = (exercise) => {
  switch (exercise.type) {
    case 'fill_blanks_bank':
      return 'FillBlanksBankExercise';
    case 'past_tenses_fill':
      return 'PastTensesFillExercise';
    case 'bold_word_correction':
      return 'BoldWordCorrectionExercise';
    case 'crossword_fill':
      return 'CrosswordFillExercise';
    case 'multiple_choice':
      return 'MultipleChoiceExercise';
    case 'single_word_fill':
      return 'SingleWordFillExercise';
    case 'word_formation':
      return 'WordFormationExercise';
    default:
      return null;
  }
}; 