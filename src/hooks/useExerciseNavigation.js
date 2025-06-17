import { useState, useEffect } from 'react';

export const useExerciseNavigation = (exercises) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentView, setCurrentView] = useState('exercise_selection');
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);

  const currentExercise = exercises[currentExerciseIndex];

  // Reset state when moving to a new exercise
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setShowFeedback(false);
    setUserAnswers({});
  }, [currentExerciseIndex, selectedExerciseId]);

  const handleAnswerChange = (questionIndex, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentExercise.id]: {
        ...(prev[currentExercise.id] || {}),
        [questionIndex]: value
      }
    }));
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentExercise.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowFeedback(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowFeedback(false);
    } else {
      handlePreviousExercise();
    }
  };

  const handleNextExercise = () => {
    setShowFeedback(false);
    setUserAnswers({});
    const nextIndex = (currentExerciseIndex + 1);
    if (nextIndex < exercises.length) {
      setCurrentExerciseIndex(nextIndex);
      setSelectedExerciseId(exercises[nextIndex].id);
      setCurrentQuestionIndex(0);
    } else {
      setSelectedExerciseId(null);
      setCurrentView('exercise_selection');
    }
  };

  const handlePreviousExercise = () => {
    setShowFeedback(false);
    setUserAnswers({});
    const prevIndex = (currentExerciseIndex - 1);
    if (prevIndex >= 0) {
      setCurrentExerciseIndex(prevIndex);
      setSelectedExerciseId(exercises[prevIndex].id);
      setCurrentQuestionIndex(0);
    } else {
      setSelectedExerciseId(null);
      setCurrentView('exercise_selection');
    }
  };

  const selectExercise = (exerciseId) => {
    const index = exercises.findIndex(ex => ex.id === exerciseId);
    if (index !== -1) {
      setSelectedExerciseId(exerciseId);
      setCurrentExerciseIndex(index);
      setCurrentView('exercises');
    }
  };

  const navigateToExerciseList = () => {
    setSelectedExerciseId(null);
    setCurrentView('exercise_selection');
  };

  const calculateScore = () => {
    let correctCount = 0;
    let totalQuestions = 0;
    const exerciseAnswers = userAnswers[currentExercise.id] || {};

    if (currentExercise.type === 'fill_blanks_bank') {
      totalQuestions = currentExercise.correctAnswers.length;
      currentExercise.correctAnswers.forEach(q => {
        const userAnswer = (exerciseAnswers[q.index] || '').toLowerCase().trim();
        if (userAnswer === q.word.toLowerCase().trim()) {
          correctCount++;
        }
      });
    } else if (currentExercise.type === 'past_tenses_fill') {
      totalQuestions = currentExercise.questions.length;
      currentExercise.questions.forEach((q, qIndex) => {
        const userAnswer1 = (exerciseAnswers[`${qIndex}_1`] || '').toLowerCase().trim();
        const userAnswer2 = (exerciseAnswers[`${qIndex}_2`] || '').toLowerCase().trim();
        if (userAnswer1 === q.correct1.toLowerCase().trim() && userAnswer2 === q.correct2.toLowerCase().trim()) {
          correctCount++;
        }
      });
    } else if (currentExercise.type === 'bold_word_correction') {
      totalQuestions = currentExercise.questions.length;
      currentExercise.questions.forEach((q, qIndex) => {
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
      totalQuestions = currentExercise.questions.length;
      currentExercise.questions.forEach((q, qIndex) => {
        const userAnswer = (exerciseAnswers[qIndex] || '').toLowerCase().trim();
        let isCorrect = false;
        if (currentExercise.type === 'multiple_choice') {
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

  return {
    currentExercise,
    currentQuestionIndex,
    userAnswers,
    showFeedback,
    currentView,
    selectedExerciseId,
    handleAnswerChange,
    handleSubmit,
    handleNextQuestion,
    handlePreviousQuestion,
    handleNextExercise,
    handlePreviousExercise,
    selectExercise,
    navigateToExerciseList,
    calculateScore,
    setCurrentView
  };
}; 