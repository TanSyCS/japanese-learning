"use client";

import { useRouter } from "next/navigation";

export default function Lesson2Page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-start mb-8">
          <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-900 flex items-center transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Lesson 2</h1>

          <div className="mb-4">
            <p className="font-semibold">
              これ (kore) ・ それ (sore) ・ あれ (are) + は N です。
            </p>
            <p>Meaning: This/ That/ That over there is N.</p>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-2">How to use:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>これ (kore) refers to something near the speaker.</li>
            <li>それ (sore) refers to something near the listener.</li>
            <li>あれ (are) refers to something far from both the speaker and the listener.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Examples:</h2>
          <ul className="list-disc list-inside">
            <li>これ は ほん です 。 This is a book.</li>
            <li>それ は じしょ です 。 That is a dictionary.</li>
            <li>あれ は くるま です か 。 Is that a car?</li>
          </ul>
        </div>
      </div>
    </main>
  );
}