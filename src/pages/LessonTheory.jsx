import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessons } from '../data/lessons.js';

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
    if (section.content.intro && section.content.items) {
      // Standard vocabulary/grammar format
      return (
        <>
          {section.content.intro && (
            <p className="text-base-black mb-4 text-lg">
              {section.content.intro}
            </p>
          )}
          <div className="space-y-4">
            {section.content.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-brand-blue/20 border border-brand-blue rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-green text-base-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    {itemIndex + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base-black text-lg mb-1">
                      {item.term || item.rule}
                    </h3>
                    <p className="text-base-black">
                      {item.definition || item.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    } else if (section.content.headers && section.content.rows) {
      // Table format
      return (
        <>
          {section.content.intro && (
            <p className="text-base-black mb-4 text-lg">
              {section.content.intro}
            </p>
          )}
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-base-black bg-base-white">
              <thead>
                <tr>
                  {section.content.headers.map((header, index) => (
                    <th key={index} className="border border-base-black p-3 bg-brand-green text-base-black font-bold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.content.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-base-black p-3 text-base-black">
                        <span dangerouslySetInnerHTML={{ __html: cell }} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    } else if (section.content.structures) {
      // Nested rules format (for causatives)
      return (
        <div className="space-y-6">
          {section.content.structures.map((structure, structureIndex) => (
            <div key={structureIndex} className="bg-brand-blue/20 border border-brand-blue rounded-lg p-4">
              <h3 className="font-bold text-base-black text-lg mb-3 border-b border-brand-blue pb-2">
                {structure.form}
              </h3>
              <div className="space-y-3">
                {structure.uses.map((use, useIndex) => (
                  <div key={useIndex} className="bg-base-white border border-base-black rounded p-3">
                    <p className="font-semibold text-base-black mb-1">{use.use}</p>
                    <p className="text-base-black">
                      <span dangerouslySetInnerHTML={{ __html: use.example }} />
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
                  <li key={noteIndex} className="text-base-black">
                    <span dangerouslySetInnerHTML={{ __html: note }} />
                  </li>
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
                <span dangerouslySetInnerHTML={{ __html: note }} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-base-white flex flex-col items-center p-16 sm:p-6 lg:p-16 font-sans">
      <div className="w-full max-w-4xl bg-brand-blue border-2 border-base-black rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="bg-brand-green text-base-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-green/90"
          >
            ← Back to Lessons
          </Link>
          <Link
            to={`/lesson/${lessonId}/exercises`}
            className="bg-brand-yellow text-base-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-yellow/90"
          >
            Start Exercises →
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold text-base-black mb-4 text-center font-sans">
          {lesson.theory.title}
        </h1>

        <div className="space-y-8">
          {lesson.theory.sections.map((section, index) => (
            <div key={index} className="bg-base-white border-2 border-base-black rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-base-black mb-4 border-b-2 border-brand-green pb-2">
                {section.title}
              </h2>
              
              {renderContent(section)}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to={`/lesson/${lessonId}/exercises`}
            className="bg-brand-yellow text-base-black font-bold py-4 px-8 rounded-2xl transition duration-300 ease-in-out shadow-md border-2 border-base-black hover:bg-brand-yellow/90 text-lg"
          >
            Ready to Practice? Start Exercises
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LessonTheory; 