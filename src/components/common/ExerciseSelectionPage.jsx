import React from 'react';

const ExerciseSelectionPage = ({ exercises, onSelectExercise }) => {
  return (
    <div className="bg-brand-blue p-8 rounded-2xl border-2 shadow-lg font-sans">
      <h3 className="text-2xl font-bold text-base-black mb-6 text-center font-sans">Select an Exercise</h3>
      <ul className="space-y-4">
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <button
              onClick={() => onSelectExercise(exercise.id)}
              className="w-full text-left py-4 px-6 bg-base-white border-2  rounded-2xl shadow-md hover:bg-brand-green/60 transition duration-200 ease-in-out focus:outline-none font-medium text-lg font-sans hover:bg-white-500"
            >
              <span className="font-semibold text-base-black text-lg font-sans">{exercise.title}</span>
              <p className="text-base-black text-sm mt-1 font-sans">{exercise.instructions}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseSelectionPage; 