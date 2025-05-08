"use client";

import { useRouter } from "next/navigation";

export default function Lesson3Page() {
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
          <h1 className="text-2xl font-bold mb-4">Lesson 3</h1>

          <div className="mb-4">
            <p className="font-semibold">
              N1 は N2 で は あ り ま せ ん 。 (N1 wa N2 de wa arimasen.)
            </p>
            <p>Meaning: N1 is not N2.</p>
            <p>Note: で は (de wa) is the informal form of で は あ り ま せ ん (de wa arimasen).</p>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-2">How to use:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>This grammar point is used to negate the copula "です" (desu), meaning "is".</li>
            <li>It indicates that N1 is not N2.</li>
            <li>"で は あ り ま せ ん" (de wa arimasen) is the polite negative form.</li>
            <li>The informal negative form is "じゃありません" (ja arimasen) or "じゃないです" (janai desu), though the image shows "で は" (de wa) as the informal reading, which is a bit simplified. "じゃ" (ja) is more common in casual speech.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Examples:</h2>
          <ul className="list-disc list-inside">
            <li>わたし は せんせい で は あ り ま せ ん 。 (Watashi wa sensei de wa arimasen.) I am not a teacher.</li>
            <li>これ は ほん で は あ り ま せ ん 。 (Kore wa hon de wa arimasen.) This is not a book.</li>
            <li>あの ひと は がくせい で は あ り ま せ ん 。 (Ano hito wa gakusei de wa arimasen.) That person is not a student.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}