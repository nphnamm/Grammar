import React from 'react';

const TheorySection = ({ content, onStartExercises }) => {
  return (
    <div className="bg-brand-blue p-8 rounded-2xl border-2 border-base-black shadow-lg font-sans">
      <h3 className="text-3xl font-extrabold text-base-black mb-6 font-sans">Unit 3 Vocabulary: Fun and Games</h3>

      <div className="mb-8">
        <h4 className="text-xl font-semibold text-brand-blue mb-3 font-sans">Topic Vocabulary</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 text-base-black">
          {content.topicVocabulary.map((item, index) => (
            <div key={index} className="flex items-baseline">
              <span className="font-medium font-sans">{item.word}</span> <span className="text-sm text-base-black ml-1">({item.type})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-semibold text-brand-blue mb-3 font-sans">Phrasal Verbs</h4>
        <ul className="list-disc list-inside space-y-2 text-base-black">
          {content.phrasalVerbs.map((item, index) => (
            <li key={index}>
              <span className="font-medium font-sans">{item.verb}:</span> {item.meaning}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-semibold text-brand-blue mb-3 font-sans">Prepositional Phrases</h4>
        <ul className="list-disc list-inside space-y-2 text-base-black">
          {content.prepositionalPhrases.map((phrase, index) => (
            <li key={index}>{phrase}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-semibold text-brand-blue mb-3 font-sans">Word Formation</h4>
        <ul className="list-disc list-inside space-y-2 text-base-black">
          {content.wordFormation.map((item, index) => (
            <li key={index}>
              <span className="font-medium font-sans">{item.base}:</span> {item.derived.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-semibold text-brand-blue mb-3 font-sans">Word Patterns</h4>
        {content.wordPatterns.map((category, index) => (
          <div key={index} className="mb-4">
            <p className="font-medium text-base-black mb-1 capitalize font-sans">{category.category}:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-base-black">
              {category.patterns.map((pattern, pIndex) => (
                <li key={pIndex}>{pattern}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onStartExercises}
          className="bg-brand-peach hover:bg-brand-green text-base-black font-bold py-3 px-10 rounded-2xl shadow-md border-2 border-base-black transition duration-300 ease-in-out font-sans"
        >
          Start Exercises
        </button>
      </div>
    </div>
  );
};

export default TheorySection; 