import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessons } from '../data/lessons.js';
import ReactMarkdown from 'react-markdown';

function LessonTheory() {
  const { lessonId } = useParams();
  const lesson = lessons.find(l => l.id === lessonId);

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

  const renderContent = (section) => {
    if (section.content?.intro && section.content?.items) {
      // Standard vocabulary/grammar format
      return (
        <>
          {section.content?.intro && (
            <p className="text-base-black mb-4 text-lg">
              {section.content?.intro}
            </p>
          )}
          <div className="space-y-4">
            {section.content?.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-brand-blue/20 border border-brand-blue rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-green text-base-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    {itemIndex + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base-black text-lg mb-1">
                      {item.term || <ReactMarkdown>{item.rule}</ReactMarkdown>}
                    </h3>
                    <p className="text-base-black">
                      {item.definition || <ReactMarkdown>{item.example}</ReactMarkdown>}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    } else if (section.content?.headers && section.content?.rows) {
      // Table format
      return (
        <>
          {section.content?.intro && (
            <p className="text-base-black mb-4 text-lg">
              {section.content?.intro}
            </p>
          )}
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-base-black bg-base-white">
              <thead>
                <tr>
                  {section.content?.headers.map((header, index) => (
                    <th key={index} className="border border-base-black p-3 bg-brand-green text-base-black font-bold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.content?.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-base-black p-3 text-base-black">
                        <ReactMarkdown>{cell}</ReactMarkdown>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    } else if (section.content?.structures) {
      // Nested rules format (for causatives)
      return (
        <div className="space-y-6">
          {section.content?.structures.map((structure, structureIndex) => (
            <div key={structureIndex} className="bg-brand-blue/20 border border-brand-blue rounded-lg p-4">
              <h3 className="font-bold text-base-black text-lg mb-3 border-b border-brand-blue pb-2">
                {<ReactMarkdown>{structure.form}</ReactMarkdown>}
              </h3>
              <div className="space-y-3">
                {structure.uses.map((use, useIndex) => (
                  <div key={useIndex} className="bg-base-white border border-base-black rounded p-3">
                    <p className="font-semibold text-base-black mb-1">{use.use}</p>
                    <p className="text-base-black">
                      <ReactMarkdown>{use.example}</ReactMarkdown>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {section.content.notes && (
            <div className="bg-brand-yellow/20 border border-brand-yellow rounded-lg p-4">
              <h4 className="font-bold text-base-black mb-2">Notes:</h4>
              <ul className="list-disc list-inside space-y-1">
                {section.content.notes.map((note, noteIndex) => (
                  <div key={noteIndex} className="text-base-black">
                    <ReactMarkdown>{note}</ReactMarkdown>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    } else if (section.content.notes) {
      // Notes only format
      return (
        <div className="bg-brand-yellow/20 border border-brand-yellow rounded-lg p-4">
          <h4 className="font-bold text-base-black mb-2">Notes:</h4>
          <ul className="list-disc list-inside space-y-1">
            {section.content.notes.map((note, noteIndex) => (
              <li key={noteIndex} className="text-base-black">
                <ReactMarkdown>{note}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    else if (section.content.intro && section.content.words) {
      // Vocabulary format - Modern UI
      return (
        <div className="bg-brand-blue/10 border border-brand-blue rounded-xl p-6">
          <h4 className="font-bold text-base-black mb-4 text-xl flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-brand-blue rounded-full"></span>
            {section.title}
          </h4>
          <ul className="grid sm:grid-cols-4 gap-4">
            {section.content.words.map((item, itemIndex) => (
              <li key={itemIndex} className="bg-base-white border border-brand-blue rounded-lg p-4 shadow flex flex-col gap-1 hover:bg-brand-blue/10 transition">
                <ReactMarkdown>{item}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    else if (section.content?.verbs) {
      // Verbs only format - Modern UI
      return (
        <div className="bg-brand-blue/10 border border-brand-blue rounded-xl p-6">
          <h4 className="font-bold text-base-black mb-4 text-xl flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-brand-green rounded-full"></span>
            Verbs
          </h4>
          <ul className="grid sm:grid-cols-2 gap-4">
            {section.content.verbs.map((verb, verbIndex) => (
              <li key={verbIndex} className="bg-base-white border border-brand-green rounded-lg p-4 shadow flex flex-col gap-1 hover:bg-brand-green/10 transition">
                <span className="font-semibold text-base-black text-lg">{verb.verb}</span>
                <span className="text-base-black text-sm opacity-80">{verb.definition}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    else if (section.type === "collocations") {
      // Collocations format - Modern UI
      return (
        <div className="bg-brand-blue/10 border border-brand-blue rounded-xl p-6">
          <h4 className="font-bold text-base-black mb-4 text-xl flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-brand-yellow rounded-full"></span>
            {section.title}
          </h4>
          <ul className="space-y-4">
            {section.content.items.map((item, itemIndex) => (
              <li key={itemIndex} className="bg-base-white border border-brand-yellow rounded-lg p-4 shadow">
                <span className="font-semibold text-brand-blue text-lg mr-2">{item.word}</span>
                <span className="flex flex-wrap gap-2 mt-2">
                  {item.patterns.map((pattern, patternIndex) => (
                    <span key={patternIndex} className="bg-brand-yellow/40 text-base-black px-2 py-1 rounded-full text-sm border border-brand-yellow">
                      {pattern}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    else if (section.type === "idioms") {
      // Idioms format - Modern UI
      return (
        <div className="bg-brand-blue/10 border border-brand-blue rounded-xl p-6">
          <h4 className="font-bold text-base-black mb-4 text-xl flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-brand-blue rounded-full"></span>
            {section.title}
          </h4>
          <ul className="space-y-4">
            {section.content.idioms.map((idiom, idiomIndex) => (
              <li key={idiomIndex} className="bg-base-white border border-brand-blue rounded-lg p-4 shadow flex flex-col gap-1">
                <span className="font-semibold text-brand-blue text-lg">{idiom.idiom}</span>
                <span className="text-base-black text-sm opacity-80">{idiom.definition}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    else if (section.type === "wordFormation") {
      // Word Formation format - Modern UI
      return (
        <div className="bg-brand-blue/10 border border-brand-blue rounded-xl p-6">
          <h4 className="font-bold text-base-black mb-4 text-xl flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-brand-green rounded-full"></span>
            {section.title}
          </h4>
          <ul className="space-y-4">
            {section.content.words.map((word, wordIndex) => (
              <li key={wordIndex} className="bg-base-white border border-brand-green rounded-lg p-4 shadow flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-brand-blue text-lg min-w-[120px]">{word.word}</span>
                <span className="flex flex-wrap gap-2 mt-1">
                  {word.forms.map((form, formIndex) => (
                    <span key={formIndex} className="bg-brand-green/40 text-base-black px-2 py-1 rounded-full text-sm border border-brand-green">
                      {form}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-base-white flex flex-col items-center p-4 sm:p-6 lg:p-16 font-sans pt-20">
      <div className="w-full max-w-4xl bg-brand-blue border-2 border-base-black rounded-2xl shadow-lg p-4 sm:p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
          <Link
            to="/"
            className="w-full sm:w-auto bg-brand-green text-base-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-green/90 text-center"
          >
            ← Back to Lessons
          </Link>
          <Link
            to={`/lesson/${lessonId}/exercises`}
            className="w-full sm:w-auto bg-brand-yellow text-base-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-yellow/90 text-center"
          >
            Start Exercises →
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-base-black mb-4 sm:mb-6 text-center font-sans">
          {lesson?.theory?.title}
        </h1>

        <div className="space-y-6 sm:space-y-8">
          {lesson?.theory?.sections.map((section, index) => (
            <div key={index} className="bg-base-white border-2 border-base-black rounded-xl p-4 sm:p-6 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-base-black mb-4 border-b-2 border-brand-green pb-2">
                {section.title}
              </h2>

              {renderContent(section)}
            </div>
          ))}
        </div>

        {/* List all exercises for this lesson */}
        <div className="mt-8 sm:mt-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Exercises for this Lesson</h2>
          <div className="space-y-3 sm:space-y-4 max-w-xl mx-auto">
            {lesson?.exercises && lesson?.exercises.length > 0 ? (
              lesson?.exercises.map((exercise, idx) => (
                <Link
                  key={exercise.id}
                  to={`/lesson/${lessonId}/exercises/${exercise.id}`}
                  className="block bg-brand-yellow text-base-black font-bold py-2 px-4 rounded-lg border-2 border-base-black shadow-md hover:bg-brand-yellow/90 text-sm sm:text-base"
                >
                  {idx + 1}. {exercise.title}
                </Link>
              ))
            ) : (
              <p className="text-base-black">No exercises available for this lesson.</p>
            )}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Link
            to={`/lesson/${lessonId}/exercises`}
            className="bg-brand-yellow text-base-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-yellow/90 text-base sm:text-lg"
          >
            Ready to Practice? Start Exercises
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LessonTheory; 