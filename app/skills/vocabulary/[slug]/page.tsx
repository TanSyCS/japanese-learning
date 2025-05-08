"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import FlashcardMode from "@/components/FlashcardMode";
import ListView from "@/components/ListView";

export default function GroupDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { slug } = params as { slug: string };
  const [flashcards, setFlashcards] = useState<{ term: string; definition: string; id: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [newTerm, setNewTerm] = useState("");
  const [newDefinition, setNewDefinition] = useState("");

  // Simulate fetching flashcards (replace with backend data if added later)
  useEffect(() => {
    const mockData: { [key: string]: { term: string; definition: string }[] } = {
      "jlpt-n5-vocabulary": [
        { term: "こんにちは", definition: "Hello" },
        { term: "ありがとう", definition: "Thank you" },
      ],
      "common-phrases": [
        { term: "おはよう", definition: "Good morning" },
        { term: "さようなら", definition: "Goodbye" },
      ],
      "travel-words": [
        { term: "ホテル", definition: "Hotel" },
        { term: "空港", definition: "Airport" },
      ],
    };

    const groupData = mockData[slug] || [];
    // Add unique IDs for delete functionality
    const flashcardsWithIds = groupData.map((card, index) => ({ ...card, id: index }));
    setFlashcards(flashcardsWithIds);
    setIsLoading(false);
  }, [slug]);

  const handleGoBack = () => {
    setIsFlashcardMode(false);
    setIsFlipped(false);
    router.back();
  };

  const handleStart = () => {
    setIsFlashcardMode(true);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDone = () => {
    setIsFlashcardMode(false);
    setIsFlipped(false);
  };

  const handleAddFlashcard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTerm.trim() || !newDefinition.trim()) return;

    const newFlashcard = {
      term: newTerm,
      definition: newDefinition,
      id: Date.now(), // Unique ID based on timestamp
    };
    setFlashcards((prev) => [...prev, newFlashcard]);
    setNewTerm("");
    setNewDefinition("");
    setIsAddPopupOpen(false);
  };

  const handleDeleteFlashcard = (id: number) => {
    setFlashcards((prev) => prev.filter((card) => card.id !== id));
    if (currentIndex >= flashcards.length - 1 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-start mb-8">
          <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsAddPopupOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center font-medium shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add
          </button>
        </div>

        {!isFlashcardMode ? (
          <div>
            <div className="text-center mb-8">
              <button
                onClick={handleStart}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium shadow-sm"
              >
                Start
              </button>
            </div>
            <ListView flashcards={flashcards} onDelete={handleDeleteFlashcard} />
          </div>
        ) : (
          <FlashcardMode
            flashcards={flashcards}
            currentIndex={currentIndex}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDone={handleDone}
          />
        )}

        {/* Add Flashcard Popup */}
        {isAddPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 transform transition-all duration-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Flashcard</h2>
              <form onSubmit={handleAddFlashcard}>
                <div className="mb-4">
                  <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-1">
                    Term
                  </label>
                  <input
                    type="text"
                    id="term"
                    value={newTerm}
                    onChange={(e) => setNewTerm(e.target.value)}
                    placeholder="Enter term"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="definition" className="block text-sm font-medium text-gray-700 mb-1">
                    Definition
                  </label>
                  <input
                    type="text"
                    id="definition"
                    value={newDefinition}
                    onChange={(e) => setNewDefinition(e.target.value)}
                    placeholder="Enter definition"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsAddPopupOpen(false)}
                    className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}