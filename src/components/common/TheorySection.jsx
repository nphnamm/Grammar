import React from 'react';
import ReactMarkdown from 'react-markdown';

// Helper function to render HTML content from a string (e.g., for bold tags)
// This is safe because we are controlling the source of the content.
// (No longer needed, so remove renderHTML)

const TheorySection = ({ topicContent, onStartExercises }) => {
  if (!topicContent) {
    return <div>Loading theory...</div>;
  }

  // This function determines how to render a section based on its type
  const renderSection = (section, index) => {
    const { type, title, content } = section;

    // Common container for each section
    return (
      <div key={index} className="mb-8">
        <h4 className="text-xl font-semibold text-brand-blue mb-3 font-sans">{title}</h4>
        {renderSectionContent(type, content)}
      </div>
    );
  };

  // The core logic to switch between different content layouts
  const renderSectionContent = (type, content) => {
    switch (type) {
      case 'definitions_list':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 text-base-black">
            {content?.map((item, index) => (
              <div key={index} className="flex items-baseline">
                <span className="font-medium font-sans">{item?.term}</span>
                <span className="text-sm text-base-black ml-1">({item?.definition})</span>
              </div>
            ))}
          </div>
        );
      
      case 'simple_list':
        return (
          <ul className="list-disc list-inside space-y-2 text-base-black">
            {content?.map((item, index) => (
              <li key={index}><ReactMarkdown className="inline">{item}</ReactMarkdown></li>
            ))}
          </ul>
        );

      case 'table':
        return (
          <div className="overflow-x-auto">
            {content.intro && <p className="mb-3 text-base-black"><ReactMarkdown>{content.intro}</ReactMarkdown></p>}
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  {content?.headers?.map((header, index) => (
                    <th key={index} className="py-2 px-4 border-b text-left font-semibold text-gray-700">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content?.rows?.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="py-2 px-4 border-b text-base-black">
                        <ReactMarkdown>{cell}</ReactMarkdown>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'rules_with_examples':
        return (
            <div>
              {content.intro && <p className="mb-6 text-black text-lg leading-relaxed"><ReactMarkdown>{content.intro}</ReactMarkdown></p>}
              <ul className="space-y-4 text-black">
                {content?.items?.map((item, index) => (
                  <li key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-soft transition-all duration-200">
                      <p className="leading-relaxed"><ReactMarkdown className="font-semibold text-gray-900">{item.rule}:</ReactMarkdown> <ReactMarkdown className="inline">{item.example}</ReactMarkdown></p>
                  </li>
                ))}
              </ul>
              {content.notes && (
                  <div className="mt-6 p-4 bg-error-50 border-l-4 border-error-400 rounded-xl">
                      <p className="font-bold text-error-800 mb-2">⚠️ Watch out!</p>
                      {content?.notes?.map((note, noteIndex) => (
                          <p key={noteIndex} className="mt-1 text-error-700 leading-relaxed"><ReactMarkdown>{note}</ReactMarkdown></p>
                      ))}
                  </div>
              )}
            </div>
        );
        
      case 'nested_rules':
        return (
            <div>
                {content?.structures?.map((structure, structIndex) => (
                    <div key={structIndex} className="mb-6">
                        <h5 className="font-bold text-lg text-black mb-3"><ReactMarkdown>{structure.form}</ReactMarkdown></h5>
                        <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-black">
                            {structure?.uses?.map((useItem, useIndex) => (
                                <li key={useIndex} className="leading-relaxed">
                                    <span className="font-medium text-gray-900">{useItem.use}:</span> <span><ReactMarkdown className="inline">{useItem.example}</ReactMarkdown></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {content.notes && (
                  <div className="mt-6 p-4 bg-error-50 border-l-4 border-error-400 rounded-xl">
                      <p className="font-bold text-error-800 mb-2">⚠️ Watch out!</p>
                      {content?.notes?.map((note, noteIndex) => (
                          <p key={noteIndex} className="mt-1 text-error-700 leading-relaxed"><ReactMarkdown>{note}</ReactMarkdown></p>
                      ))}
                  </div>
              )}
            </div>
        );

      default:
        return <p>Unsupported content type.</p>;
    }
  };

  return (
    <div className="card">
      <h3 className="text-3xl font-bold text-black mb-8">{topicContent.title}</h3>

      {/* Dynamically render all sections */}
      {topicContent?.sections?.map((section, index) => renderSection(section, index))}

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