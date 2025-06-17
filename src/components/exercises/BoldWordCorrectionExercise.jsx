import React, { useState, useEffect, useRef } from 'react';

const BoldWordCorrectionExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback, onSubmit }) => {
    const q = exercise.questions[currentQuestionIndex];
    const qIndex = currentQuestionIndex;

    // Ref for the input field to allow programmatic focusing
    const inputRef = useRef(null); 

    // localUserAnswer stores the temporary input value before submission for 'Wrong' case
    // It's initialized from userAnswers, but only when not showing feedback to allow typing
    const [localUserAnswer, setLocalUserAnswer] = useState(() => {
        const existingAnswer = userAnswers[qIndex];
        return existingAnswer === '_IS_CORRECT_' ? '' : existingAnswer || ''; // Clear if it was '_IS_CORRECT_' for display
    });
    // isInputMode tracks if the user clicked 'Wrong' and should see the input field
    const [isInputMode, setIsInputMode] = useState(() => {
        // If there's an existing answer and it's not '_IS_CORRECT_', assume input mode was active
        const existingAnswer = userAnswers[qIndex];
        return existingAnswer !== undefined && existingAnswer !== '_IS_CORRECT_';
    });

    // Effect to reset state when the current question changes or feedback state changes
    useEffect(() => {
        // Reset local answer and input mode when moving to a new question or hiding feedback
        const existingAnswer = userAnswers[qIndex];
        setLocalUserAnswer(existingAnswer === '_IS_CORRECT_' ? '' : existingAnswer || ''); 
        
        if (showFeedback) {
            // If showing feedback, determine if the original submission was 'correct' or a typed answer
            setIsInputMode(existingAnswer !== '_IS_CORRECT_'); // If it was '_IS_CORRECT_', no input mode needed for feedback display
        } else {
            // For a new question or before submission, default to button selection unless there's a typed answer
            setIsInputMode(existingAnswer !== undefined && existingAnswer !== '_IS_CORRECT_'); 
        }
    }, [currentQuestionIndex, userAnswers, showFeedback]);

    // Focus input when it appears
    useEffect(() => {
        if (!showFeedback && isInputMode && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isInputMode, showFeedback]);

    const handleCorrectClick = () => {
        onAnswerChange(qIndex, '_IS_CORRECT_'); // Store specific value for correct matches
        setIsInputMode(false); // Hide input if it was visible
        onSubmit(); // Directly submit when 'Correct' is clicked
    };

    const handleWrongClick = () => {
        setIsInputMode(true); // Show the input field
        setLocalUserAnswer(''); // Clear any previous local input
        onAnswerChange(qIndex, ''); // Clear parent state for this question if it was _IS_CORRECT_
    };

    const handleInputConfirm = () => {
        // Only set the answer in parent state if an answer is typed (not empty)
        if (localUserAnswer.trim() !== '') {
            onAnswerChange(qIndex, localUserAnswer); // Store the typed answer
            onSubmit(); // Directly submit when input is confirmed
        }
    };

    // Helper function to render the text with the bold word highlighted
    const renderTextWithBold = (text, boldWord) => {
        const parts = text.split(new RegExp(`(${boldWord})`, 'gi')); // Global and case-insensitive
        return parts.map((part, index) => {
            if (part.toLowerCase() === boldWord.toLowerCase()) {
                return <span key={index} className="font-bold text-blue-700">{part}</span>;
            }
            return part;
        });
    };

    return (
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <p className="text-gray-800 font-medium mb-3">
                {q.number}. {renderTextWithBold(q.text, q.boldWord)}
            </p>

            {!showFeedback && ( // Show buttons/input based on internal state if no feedback
                <>
                    {!isInputMode && ( // Show Correct/Wrong buttons
                        <div className="flex space-x-4 mt-4">
                            <button
                                onClick={handleCorrectClick}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                                disabled={showFeedback} // Disabled if feedback is active
                            >
                                Correct
                            </button>
                            <button
                                onClick={handleWrongClick}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                                disabled={showFeedback} // Disabled if feedback is active
                            >
                                Wrong
                            </button>
                        </div>
                    )}

                    {isInputMode && ( // Show input field
                        <div className="mt-4">
                            <input
                                ref={inputRef} // Attach ref here
                                type="text"
                                className="w-full p-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-200"
                                value={localUserAnswer}
                                onChange={(e) => setLocalUserAnswer(e.target.value)}
                                onBlur={handleInputConfirm} // Update parent state on blur
                                onKeyDown={(e) => { // Also update on Enter key
                                    if (e.key === 'Enter') {
                                        handleInputConfirm();
                                    }
                                }}
                                placeholder="Type the correct word"
                                aria-label={`Answer for question ${q.number}`}
                                disabled={showFeedback} // Should also be disabled when feedback is shown
                            />
                            <p className="text-sm text-gray-500 mt-1">Press Enter or click outside to confirm your typed word.</p>
                        </div>
                    )}
                </>
            )}

            {showFeedback && ( // Show user's choice when feedback is active
                <div className="mt-4 p-3 rounded-lg bg-gray-100 text-gray-700">
                    Your choice: <span className="font-semibold">
                      {userAnswers[qIndex] === '_IS_CORRECT_' ? '(Bold word is correct)' : (userAnswers[qIndex] || 'N/A')}
                    </span>
                </div>
            )}
        </div>
    );
};

export default BoldWordCorrectionExercise; 