"use client";

interface ListViewProps {
  flashcards: { term: string; definition: string; id: number }[];
  onDelete: (id: number) => void;
}

export default function ListView({ flashcards, onDelete }: ListViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {flashcards.map((card) => (
        <div key={card.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 relative">
          <h3 className="text-xl font-semibold text-blue-700">{card.term}</h3>
          <p className="text-gray-600 mt-2">{card.definition}</p>
          <button
            onClick={() => onDelete(card.id)}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700 p-1.5 rounded-md transition-colors"
            aria-label="Delete flashcard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}