import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const DragAndDropWordsExercise = ({ exercise, currentQuestionIndex, userAnswers, onAnswerChange, showFeedback }) => {
  const q = exercise.questions[currentQuestionIndex];
  const qIndex = currentQuestionIndex;

  const userAnswer = userAnswers[qIndex] || [];
  const isCorrect = showFeedback && JSON.stringify(userAnswer) === JSON.stringify(q.correct_answer);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;

    // Dragging from answer area to another position in answer area (reordering)
    if (sourceId === 'answer-area' && destinationId === 'answer-area') {
        const newUserAnswer = [...userAnswer];
        const [movedWord] = newUserAnswer.splice(source.index, 1);
        newUserAnswer.splice(destination.index, 0, movedWord);
        onAnswerChange(qIndex, newUserAnswer);
        return;
    }

    // Dragging from word bank to answer area
    if (sourceId === 'word-bank' && destinationId === 'answer-area') {
        const newUserAnswer = [...userAnswer];
        const wordToAdd = wordBankWords[source.index];
        newUserAnswer.splice(destination.index, 0, wordToAdd);
        onAnswerChange(qIndex, newUserAnswer);
        return;
    }
  };

  const handleRemoveWord = (wordToRemove) => {
    if(showFeedback) return;
    const newUserAnswer = userAnswer.filter(word => word !== wordToRemove);
    onAnswerChange(qIndex, newUserAnswer);
  }

  const handleAddWord = (wordToAdd) => {
    if(showFeedback) return;
    if (!userAnswer.includes(wordToAdd)) {
      const newUserAnswer = [...userAnswer, wordToAdd];
      onAnswerChange(qIndex, newUserAnswer);
    }
  }

  const wordBankWords = q.word_bank.filter(word => !userAnswer.includes(word));

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="card">
        <p className="text-black font-medium mb-4 text-lg leading-relaxed flex flex-wrap items-center">
          <span className="mr-2">{qIndex + 1}.</span>
          <span>{q.sentence_start}</span>
          <Droppable droppableId="answer-area" direction="horizontal">
            {(provided, snapshot) => (
              <span
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`inline-flex items-center align-middle h-12 mx-2 p-2 border-2 border-dashed rounded-lg min-w-[150px] bg-gray-50 ${snapshot.isDraggingOver ? 'border-blue-400 bg-blue-100' : 'border-gray-300'}`}
              >
                {userAnswer.map((word, index) => (
                  <Draggable key={word} draggableId={`answer-${word}`} index={index}>
                    {(provided) => (
                      <span
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => handleRemoveWord(word)}
                        className={`px-3 py-1 rounded-md text-white shadow-md mx-1 cursor-pointer ${isCorrect ? 'bg-green-500' : showFeedback ? 'bg-red-500' : 'bg-blue-500'}`}
                      >
                        {word}
                      </span>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </span>
            )}
          </Droppable>
          <span>{q.sentence_end}</span>
        </p>
        
        <div className="mt-6 p-4 border-t border-gray-200">
          <h4 className="font-bold text-gray-600 mb-3">Word Bank</h4>
          <Droppable droppableId="word-bank" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-wrap gap-2 p-2 rounded-lg bg-gray-50 border border-gray-200"
              >
                {wordBankWords.map((word, index) => (
                  <Draggable key={word} draggableId={`bank-${word}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => handleAddWord(word)}
                        className="px-3 py-1 rounded-md shadow bg-white text-gray-800 cursor-pointer"
                      >
                        {word}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default DragAndDropWordsExercise; 