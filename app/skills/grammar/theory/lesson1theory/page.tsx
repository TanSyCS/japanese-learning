"use client";

import { useRouter } from "next/navigation";

export default function Lesson1Page() {
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
          <h1 className="text-2xl font-bold mb-4">Lesson 1</h1>

          <div className="mb-4">
            <p className="font-semibold">
              ここ ・ そこ ・ あそこ + は N (Location) です。
            </p>
            <p>This place/ that place/ that place over there is N (Location).</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">
              N (Location) + は + ここ ・ そこ ・ あそこ + です。
            </p>
            <p>N is in this place/ that place/ that place over there.</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">N (Location) + は どこ + です か ?</p>
            <p>Where is N?</p>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-2">How to use:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>ここ (koko) refers to a place near the speaker, or near both speaker and listener.</li>
            <li>そこ (soko) refers to a place near the listener.</li>
            <li>あそこ (asoko) refers to a place far from both the speaker and the listener.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Examples:</h2>
          <ul className="list-disc list-inside">
            <li>ここ は きょう しつ です 。 This is a classroom.</li>
            <li>そこ は お て あらい です 。 That is a restroom.</li>
            <li>こうえん は どこ です か 。 Where is the park?</li>
          </ul>
        </div>
      </div>
    </main>
  );
}