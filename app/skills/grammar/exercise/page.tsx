"use client";

import { useRouter } from "next/navigation";

export default function GrammarExercisePage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleExercise = (exerciseNumber: number) => {
    router.push(`/skills/grammar/exercise/exercise${exerciseNumber}`);
  };

  // Array of exercises for easy expansion
  const exercises = [
    { id: 1, title: "Exercise 1" },
    { id: 2, title: "Exercise 2" },
    { id: 3, title: "Exercise 3" },
    // { id: 4, title: "Exercise 4" },
    // { id: 5, title: "Exercise 5" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="flex justify-start mb-8">
          <button onClick={handleGoBack} className="text-gray-600 hover:text-gray-900 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold text-center mb-10">Grammar Exercises</h1>

        <div className="space-y-4">
          {exercises.map((exercise) => (
            <button
              key={exercise.id}
              onClick={() => handleExercise(exercise.id)}
              className="w-full bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium py-4 rounded-lg transition-colors"
            >
              {exercise.title}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}