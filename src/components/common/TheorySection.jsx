import React from 'react';

// Helper function to render HTML content from a string (e.g., for bold tags)
// This is safe because we are controlling the source of the content.
const renderHTML = (htmlString) => {
  // Simple parser for **bold** markdown to <b>bold</b> HTML
  const parsedHtml = htmlString.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  return { __html: parsedHtml };
};

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
              <li key={index}>{item}</li>
            ))}
          </ul>
        );

      case 'table':
        return (
          <div className="overflow-x-auto">
            {content.intro && <p className="mb-3 text-base-black">{content.intro}</p>}
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
                      <td key={cellIndex} className="py-2 px-4 border-b text-base-black" dangerouslySetInnerHTML={renderHTML(cell)} />
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
              {content.intro && <p className="mb-4 text-base-black">{content.intro}</p>}
              <ul className="space-y-3 text-base-black">
                {content?.items?.map((item, index) => (
                  <li key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p><span className="font-semibold">{item.rule}:</span> <span dangerouslySetInnerHTML={renderHTML(item.example)} /></p>
                  </li>
                ))}
              </ul>
              {content.notes && (
                  <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
                      <p className="font-bold">Watch out!</p>
                      {content?.notes?.map((note, noteIndex) => (
                          <p key={noteIndex} className="mt-1" dangerouslySetInnerHTML={renderHTML(note)} />
                      ))}
                  </div>
              )}
            </div>
        );
        
      case 'nested_rules':
        return (
            <div>
                {content?.structures?.map((structure, structIndex) => (
                    <div key={structIndex} className="mb-4">
                        <h5 className="font-bold text-lg text-base-black" dangerouslySetInnerHTML={renderHTML(structure.form)} />
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-base-black">
                            {structure?.uses?.map((useItem, useIndex) => (
                                <li key={useIndex}>
                                    <span className="font-medium">{useItem.use}:</span> <span dangerouslySetInnerHTML={renderHTML(useItem.example)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {content.notes && (
                  <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
                      <p className="font-bold">Watch out!</p>
                      {content?.notes?.map((note, noteIndex) => (
                          <p key={noteIndex} className="mt-1" dangerouslySetInnerHTML={renderHTML(note)} />
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
    <div className="bg-brand-blue p-8 rounded-2xl border-2 border-base-black shadow-lg font-sans">
      <h3 className="text-3xl font-extrabold text-base-black mb-6 font-sans">{topicContent.title}</h3>

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