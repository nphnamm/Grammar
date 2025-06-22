import React from 'react';

const ExerciseSelectionPage = ({ exercises, onSelectExercise }) => {
  return (
    <div className="w-full">
      <h3 className="text-2xl sm:text-3xl font-bold text-base-black mb-6 sm:mb-8 text-center">Select an Exercise</h3>
      <div className="space-y-3 sm:space-y-4">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => onSelectExercise(exercise.id)}
            className="card card-hover cursor-pointer p-4 sm:p-6"
          >
            <h4 className="font-semibold text-base-black text-base sm:text-lg">{exercise.title}</h4>
            {exercise.instructions && (
              <p className="text-base-gray-600 text-sm mt-2 sm:mt-1">{exercise.instructions}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSelectionPage; 