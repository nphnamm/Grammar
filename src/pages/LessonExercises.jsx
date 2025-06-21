import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessons } from '../data/lessons.js';
import ExerciseSelectionPage from '../components/common/ExerciseSelectionPage';
import CrosswordFillExercise from '../components/exercises/CrosswordFillExercise';
import FillBlanksBankExercise from '../components/exercises/FillBlanksBankExercise';
import MultipleChoiceExercise from '../components/exercises/MultipleChoiceExercise';
import SingleWordFillExercise from '../components/exercises/SingleWordFillExercise';
import WordFormationExercise from '../components/exercises/WordFormationExercise';
import PastTensesFillExercise from '../components/exercises/PastTensesFillExercise';
import BoldWordCorrectionExercise from '../components/exercises/BoldWordCorrectionExercise';
import GradingModal from '../components/common/GradingModal';
import ReactMarkdown from 'react-markdown';
import DragAndDropWordsExercise from '../components/exercises/DragAndDropWordsExercise';

function LessonExercises() {
  const { lessonId } = useParams();
  const lesson = lessons.find(l => l.id === lessonId);

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentView, setCurrentView] = useState('exercise_selection');
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  const [showGradingModal, setShowGradingModal] = useState(false);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-base-white flex flex-col items-center p-16 sm:p-6 lg:p-16 font-sans">
        <div className="w-full max-w-4xl bg-brand-blue border-2 border-base-black rounded-2xl shadow-lg p-8 sm:p-10">
          <h1 className="text-4xl font-extrabold text-base-black mb-6 text-center font-sans">
            Lesson Not Found
          </h1>
          <Link
            to="/"
            className="mt-4 bg-brand-green text-base-black font-bold py-3 px-8 rounded-2xl transition duration-300 ease-in-out shadow-md border-2 border-base-black"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const exercises = lesson.exercises;
  const currentExercise = exercises[currentExerciseIndex];

  // Reset currentQuestionIndex and feedback when moving to a new exercise OR when selectedExerciseId changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setShowFeedback(false);
    setUserAnswers({}); // Clear answers for the new exercise
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
    // Only show grading modal if this is the last question or a fill_blanks_bank exercise
    if (
      (currentExercise?.questions && currentQuestionIndex === currentExercise.questions.length - 1) ||
      currentExercise?.type === 'fill_blanks_bank'
    ) {
      setShowGradingModal(true);
    }
  };

  const handleCloseGradingModal = () => {
    setShowGradingModal(false);
  };

  const handleNextExerciseModal = () => {
    setShowGradingModal(false);
    handleNextExercise();
  };

  const handleNextQuestion = () => {
    if (currentExercise?.questions && currentQuestionIndex < currentExercise.questions.length - 1) {
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

  // Function to calculate score for the current exercise
  const calculateScore = () => {
    if (!currentExercise) return { correctCount: 0, totalQuestions: 0 };

    let correctCount = 0;
    let totalQuestions = 0;
    const exerciseAnswers = userAnswers[currentExercise.id] || {};

    if (currentExercise.type === 'fill_blanks_bank') {
      totalQuestions = currentExercise.correctAnswers?.length || 0;
      currentExercise.correctAnswers?.forEach(q => {
        const userAnswer = (exerciseAnswers[q.index] || '').toLowerCase().trim();
        if (userAnswer === q.word.toLowerCase().trim()) {
          correctCount++;
        }
      });
    } else if (currentExercise.type === 'past_tenses_fill') {
      totalQuestions = currentExercise.questions?.length || 0;
      currentExercise.questions?.forEach((q, qIndex) => {
        const userAnswer1 = (exerciseAnswers[`${qIndex}_1`] || '').toLowerCase().trim();
        const userAnswer2 = (exerciseAnswers[`${qIndex}_2`] || '').toLowerCase().trim();
        if (userAnswer1 === q.correct1.toLowerCase().trim() && userAnswer2 === q.correct2.toLowerCase().trim()) {
          correctCount++;
        }
      });
    } else if (currentExercise.type === 'bold_word_correction') {
      totalQuestions = currentExercise.questions?.length || 0;
      currentExercise.questions?.forEach((q, qIndex) => {
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
    } else if (currentExercise.type === 'drag_and_drop_words') {
      totalQuestions = currentExercise.questions?.length || 0;
      currentExercise.questions?.forEach((q, qIndex) => {
        const userAnswer = exerciseAnswers[qIndex] || [];
        if (JSON.stringify(userAnswer) === JSON.stringify(q.correct_answer)) {
          correctCount++;
        }
      });
    } else {
      totalQuestions = currentExercise.questions?.length || 0;
      currentExercise.questions?.forEach((q, qIndex) => {
        const userAnswer = (exerciseAnswers[qIndex] || '').toLowerCase().trim();
        let isCorrect = false;
        if (currentExercise.type === 'multiple_choice') {
          isCorrect = userAnswer === q?.correct?.toLowerCase().trim();
        } else {
          isCorrect = userAnswer === q?.correct?.toLowerCase().trim();
        }
        if (isCorrect) {
          correctCount++;
        }
      });
    }
    return { correctCount, totalQuestions };
  };

  const score = showFeedback ? calculateScore() : { correctCount: 0, totalQuestions: 0 };
  const isLastExercise = currentExerciseIndex === exercises.length - 1;

  if (!currentExercise && currentView === 'exercises') {
    return (
      <div className="min-h-screen bg-base-white flex flex-col items-center p-16 sm:p-6 lg:p-16 font-sans">
        <div className="w-full max-w-4xl bg-brand-blue border-2 border-base-black rounded-2xl shadow-lg p-8 sm:p-10">
          <h1 className="text-4xl font-extrabold text-base-black mb-6 text-center font-sans">
            Exercise Not Found
          </h1>
          <button
            onClick={navigateToExerciseList}
            className="mt-4 bg-brand-green text-base-black font-bold py-3 px-8 rounded-2xl transition duration-300 ease-in-out shadow-md border-2 border-base-black"
          >
            Back to Exercises List
          </button>
        </div>
      </div>
    );
  }

  const renderWordBank = (wordBank) => {
    if (!wordBank) return null;
    
    if (Array.isArray(wordBank)) {
      // Handle regular array wordBank
      return (
        <div className="bg-brand-blue/10 p-4 rounded-lg mb-4">
          <div className="font-semibold mb-2">Word Bank:</div>
          <div className="flex flex-wrap gap-2">
            {wordBank.map((word, idx) => (
              <span key={idx} className="bg-base-white px-3 py-1 rounded-lg border border-brand-blue text-sm">
                {word}
              </span>
            ))}
          </div>
        </div>
      );
    } else if (wordBank.boxA && wordBank.boxB) {
      // Handle split box wordBank
      return (
        <div className="bg-brand-blue/10 p-4 rounded-lg mb-4">
          <div className="space-y-4">
            <div>
              <div className="font-semibold mb-2">Box A:</div>
              <div className="flex flex-wrap gap-2">
                {wordBank.boxA.map((word, idx) => (
                  <span key={idx} className="bg-base-white px-3 py-1 rounded-lg border border-brand-blue text-sm">
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Box B:</div>
              <div className="flex flex-wrap gap-2">
                {wordBank.boxB.map((word, idx) => (
                  <span key={idx} className="bg-base-white px-3 py-1 rounded-lg border border-brand-blue text-sm">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-base-white flex flex-col items-center p-16 sm:p-6 lg:p-16 font-sans">
      <GradingModal
        score={score}
        show={showGradingModal && showFeedback && (currentView === 'exercises')}
        onClose={handleCloseGradingModal}
        onNext={handleNextExerciseModal}
        isLastExercise={isLastExercise}
      />
      <div className="w-full max-w-4xl bg-brand-blue border-2 border-base-black rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="bg-brand-green text-base-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-green/90"
          >
            ← Back to Lessons
          </Link>
          <button
            onClick={navigateToExerciseList}
            className="bg-brand-blue text-base-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-blue/90"
          >
            Exercises List
          </button>
        </div>

        <h1 className="text-4xl font-extrabold text-base-black mb-6 text-center font-sans">
          {lesson.title} - Exercises
        </h1>

        {currentView === 'exercise_selection' ? (
          <ExerciseSelectionPage exercises={exercises} onSelectExercise={selectExercise} />
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-base-black mb-4 border-b pb-2">
              {currentExercise?.title}
            </h2>
            {renderWordBank(currentExercise?.wordBank)}
            <p className="text-base-black mb-6 leading-relaxed">
              {currentExercise?.instructions}
            </p>

            {/* Exercise Rendering based on type and current question index */}
            {currentExercise?.type === 'fill_blanks_bank' ? (
              <FillBlanksBankExercise
                exercise={currentExercise}
                userAnswers={userAnswers[currentExercise.id] || {}}
                onAnswerChange={handleAnswerChange}
                showFeedback={showFeedback}
                onSubmit={handleSubmit}
              />
            ) : currentExercise?.type === 'past_tenses_fill' ? (
              <PastTensesFillExercise
                exercise={currentExercise}
                currentQuestionIndex={currentQuestionIndex}
                userAnswers={userAnswers[currentExercise.id] || {}}
                onAnswerChange={handleAnswerChange}
                showFeedback={showFeedback}
                onSubmit={handleSubmit}
              />
            ) : currentExercise?.type === 'bold_word_correction' ? (
              <BoldWordCorrectionExercise
                exercise={currentExercise}
                currentQuestionIndex={currentQuestionIndex}
                userAnswers={userAnswers[currentExercise.id] || {}}
                onAnswerChange={handleAnswerChange}
                showFeedback={showFeedback}
                onSubmit={handleSubmit}
              />
            ) : currentExercise?.type === 'drag_and_drop_words' ? (
              <DragAndDropWordsExercise
                exercise={currentExercise}
                currentQuestionIndex={currentQuestionIndex}
                userAnswers={userAnswers[currentExercise.id] || {}}
                onAnswerChange={handleAnswerChange}
                showFeedback={showFeedback}
              />
            ) : (
              currentExercise?.type === 'crossword_fill' ? (
                <CrosswordFillExercise
                  exercise={currentExercise}
                  currentQuestionIndex={currentQuestionIndex}
                  userAnswers={userAnswers[currentExercise.id] || {}}
                  onAnswerChange={handleAnswerChange}
                  showFeedback={showFeedback}
                  onSubmit={handleSubmit}
                />
              ) : currentExercise?.type === 'multiple_choice' ? (
                <MultipleChoiceExercise
                  exercise={currentExercise}
                  currentQuestionIndex={currentQuestionIndex}
                  userAnswers={userAnswers[currentExercise.id] || {}}
                  onAnswerChange={handleAnswerChange}
                  showFeedback={showFeedback}
                  onSubmit={handleSubmit}
                />
              ) : currentExercise?.type === 'single_word_fill' ? (
                <SingleWordFillExercise
                  exercise={currentExercise}
                  currentQuestionIndex={currentQuestionIndex}
                  userAnswers={userAnswers[currentExercise.id] || {}}
                  onAnswerChange={handleAnswerChange}
                  showFeedback={showFeedback}
                  onSubmit={handleSubmit}
                />
              ) : (
                <WordFormationExercise
                  exercise={currentExercise}
                  currentQuestionIndex={currentQuestionIndex}
                  userAnswers={userAnswers[currentExercise.id] || {}}
                  onAnswerChange={handleAnswerChange}
                  showFeedback={showFeedback}
                  onSubmit={handleSubmit}
                />
              )
            )}

            <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
              {currentExercise?.type !== 'fill_blanks_bank' && !showFeedback && (
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-brand-green hover:bg-brand-green/80 text-base-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-opacity-75"
                  disabled={showFeedback}
                >
                  Submit Answer
                </button>
              )}

              {currentExercise?.type === 'fill_blanks_bank' && !showFeedback && (
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-brand-green hover:bg-brand-green/80 text-base-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-opacity-75"
                  disabled={showFeedback}
                >
                  Submit Exercise
                </button>
              )}

              {showFeedback && currentExercise?.questions && (currentQuestionIndex < currentExercise.questions.length - 1) && (
                <button
                  onClick={handleNextQuestion}
                  className="flex-1 bg-brand-blue hover:bg-brand-blue/80 text-base-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-75"
                >
                  Next Question
                </button>
              )}

              {showFeedback && currentExercise?.type !== 'fill_blanks_bank' && currentExercise?.questions && currentQuestionIndex === currentExercise.questions.length - 1 && (
                <button
                  onClick={handleNextExercise}
                  className="flex-1 bg-brand-green hover:bg-brand-green/80 text-base-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-opacity-75"
                >
                  Finish Exercise
                </button>
              )}

              {showFeedback && currentExercise?.type === 'fill_blanks_bank' && (
                <button
                  onClick={handleNextExercise}
                  className="flex-1 bg-brand-green hover:bg-brand-green/80 text-base-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-opacity-75"
                >
                  Finish Exercise
                </button>
              )}

              <button
                onClick={navigateToExerciseList}
                className="flex-1 bg-brand-blue hover:bg-brand-blue/80 text-base-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-75"
              >
                Back to Exercises List
              </button>
            </div>

            {showFeedback && (
              <div className="mt-8 p-6 bg-brand-blue/10 border-l-4 border-brand-blue text-base-black rounded-lg shadow-inner">

                <h3 className="text-xl font-bold mb-3">Explanation:</h3>
                {currentExercise?.type === 'fill_blanks_bank' ? (
                  currentExercise.correctAnswers?.map((q, qIndex) => {
                    const userAnswer = (userAnswers[currentExercise.id] && userAnswers[currentExercise.id][q.index]) || '';
                    const isCorrect = userAnswer.toLowerCase().trim() === q.word.toLowerCase().trim();

                    return (
                      <div key={qIndex} className="mb-4">
                        <div className="text-sm mb-3">

                          {
                            isCorrect ? 'Correct ✅' : 'Wrong ❌'
                          }


                        </div>
                        <p className="font-semibold text-base-black">
                          Question {q.index + 1}:
                        </p>
                        <p className="text-sm mt-1">
                          Your Answer: <span className={`font-medium ${isCorrect ? 'text-brand-green' : 'text-red-600'}`}>
                            {userAnswer || '(No answer)'}
                          </span>
                        </p>
                        <p className="text-sm">
                          Correct Answer: <span className="font-medium text-brand-green">
                            {q.word ? q.word : q.correct}
                          </span>
                        </p>
                        <p className="text-sm mt-1 bg-brand-blue/20 p-2 rounded">
                          <span className="font-bold text-brand-blue">Why:</span> {q.explanation}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  (() => {
                    const q = currentExercise?.questions?.[currentQuestionIndex];
                    if (!q) return null;

                    const qIndex = currentQuestionIndex;
                    const userAnswer = (userAnswers[currentExercise.id] && userAnswers[currentExercise.id][qIndex]);
                    let isCorrect = false;

                    if (currentExercise.type === 'crossword_fill' || currentExercise.type === 'single_word_fill' || currentExercise.type === 'word_formation') {
                      isCorrect = (userAnswer || '')?.toLowerCase().trim() === q?.correct?.toLowerCase().trim();
                    } else if (currentExercise.type === 'multiple_choice') {
                      isCorrect = userAnswer === q?.correct;
                    } else if (currentExercise.type === 'past_tenses_fill') {
                      const userAnswer1 = (userAnswers[currentExercise.id] && userAnswers[currentExercise.id][`${qIndex}_1`]) || '';
                      const userAnswer2 = (userAnswers[currentExercise.id] && userAnswers[currentExercise.id][`${qIndex}_2`]) || '';
                      isCorrect = (userAnswer1.toLowerCase().trim() === q.correct1.toLowerCase().trim()) &&
                        (userAnswer2.toLowerCase().trim() === q.correct2.toLowerCase().trim());
                    } else if (currentExercise.type === 'bold_word_correction') {
                      if (userAnswer === '_IS_CORRECT_') {
                        isCorrect = q.isCorrectDefault;
                      } else {
                        isCorrect = (userAnswer || '').toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
                      }
                    } else if (currentExercise.type === 'drag_and_drop_words') {
                      const userAnswer = (userAnswers[currentExercise.id] && userAnswers[currentExercise.id][qIndex]) || [];
                      isCorrect = JSON.stringify(userAnswer) === JSON.stringify(q.correct_answer);
                    }

                    return (
                      <div key={qIndex} className="mb-4">
                        {/* <p className="font-semibold text-base-black">
                          {q.number ? `${q.number}. ` : `${qIndex + 1}. `}
                          {q.text || q.clue || ''}
                        </p> */}
                        <div className="text-sm mb-3">
                          {
                            isCorrect ? 'Correct ✅' : 'Wrong ❌'
                          }
                        </div>
                        <p className="text-sm mt-1">
                          Your Answer(s): <span className={`font-medium ${isCorrect ? 'text-brand-green' : 'text-red-600'}`}>
                            {currentExercise.type === 'past_tenses_fill'
                              ? `(${userAnswers[currentExercise.id]?.[`${qIndex}_1`] || ''}, ${userAnswers[currentExercise.id]?.[`${qIndex}_2`] || ''}${q.correct3 ? `, ${userAnswers[currentExercise.id]?.[`${qIndex}_3`] || ''}` : ''})`
                              : currentExercise.type === 'drag_and_drop_words'
                                ? (userAnswer.join(' ') || '(No answer)')
                                : (userAnswer === '_IS_CORRECT_' ? '(Bold word is correct)' : (userAnswer || '(No answer)'))
                            }
                          </span>
                        </p>
                        <p className="text-sm ">
                          Correct Answer(s): <span className="font-medium text-green-500">
                            {currentExercise.type === 'past_tenses_fill'
                              ? `(${q.correct1}, ${q.correct2}${q.correct3 ? `, ${q.correct3}` : ''})`
                              : currentExercise.type === 'drag_and_drop_words'
                                ? q.correct_answer.join(' ')
                                : (q.isCorrectDefault ? q.boldWord : q.correctAnswer ? q.correctAnswer : q.correct)
                            }
                          </span>
                        </p>
                        <p className="text-lg mt-1 bg-brand-blue/20 p-2 rounded ">
                          <span className="font-bold text-green-500">Why:</span> <span>
                            <ReactMarkdown>{q.explanation}</ReactMarkdown>
                          </span>
                        </p>
                      </div>
                    );
                  })()
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default LessonExercises; 