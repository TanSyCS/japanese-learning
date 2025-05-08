"use client";

interface FlashcardModeProps {
  flashcards: { term: string; definition: string }[];
  currentIndex: number;
  isFlipped: boolean;
  onFlip: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onDone: () => void;
}

export default function FlashcardMode({
  flashcards,
  currentIndex,
  isFlipped,
  onFlip,
  onPrevious,
  onNext,
  onDone,
}: FlashcardModeProps) {
  return (
    <div className="flex flex-col items-center">
      {flashcards.length > 0 ? (
        <div className="w-full max-w-xl mb-6">
          <div
            className="relative w-full h-80 bg-white rounded-xl shadow-lg perspective-1000 cursor-pointer"
            onClick={onFlip}
          >
            <div
              className={`absolute w-full h-full backface-hidden transition-transform duration-500 ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              <div className="w-full h-full flex items-center justify-center p-6 text-center bg-white rounded-xl shadow-inner">
                <h2 className="text-4xl font-semibold text-blue-700">{flashcards[currentIndex].term}</h2>
              </div>
            </div>
            <div
              className={`absolute w-full h-full backface-hidden transition-transform duration-500 ${
                isFlipped ? "" : "rotate-y-180"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center p-6 text-center bg-white rounded-xl shadow-inner">
                <p className="text-2xl text-gray-600">{flashcards[currentIndex].definition}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No flashcards available.</p>
      )}

      {flashcards.length > 0 && (
        <div className="flex gap-4">
          <button
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              currentIndex === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={currentIndex === flashcards.length - 1}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              currentIndex === flashcards.length - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Next
          </button>
          <button
            onClick={onDone}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}