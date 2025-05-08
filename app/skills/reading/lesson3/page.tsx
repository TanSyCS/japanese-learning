"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reading3Page() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(null);
    setShowTranslation(false);
    setShowTip(false);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === "cooking") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowTranslation(true);
    setShowTip(true);
  };

  const handleNextLesson = () => {
    router.push("/skills/reading/lesson4"); // Assuming you'll have a Lesson 4
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowTranslation(false);
    setShowTip(false);
  };

  const readingText = `
私の趣味は料理です。週末によく新しいレシピを試します。
先週はイタリア料理を作りました。トマトソースとパスタがとても美味しかったです。
今週末は何を作ろうか考えています。家族も楽しんでくれると嬉しいです。
  `;

  const readingTranslation = `
My hobby is cooking. I often try new recipes on weekends.
Last week, I made Italian food. The tomato sauce and pasta were very delicious.
I'm thinking about what to make this weekend. I hope my family will enjoy it too.
  `;

  const question = "What is the person's hobby?";
  const correctAnswer = "cooking";
  const answerChoices = ["reading", "gardening", "cooking", "traveling"];

  const readingTip =
    "The first sentence, '私の趣味は料理です。' (Watashi no shumi wa ryouri desu.), directly states the person's hobby. Look for such direct statements when answering comprehension questions.";

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200 font-medium group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <span className="text-sm text-blue-600 font-medium">Reading Exercise</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Lesson 3: Comprehension</h1>
          <p className="text-gray-600">Read the text and answer the question</p>
        </div>

        {isCorrect !== null && (
          <div
            className={`mb-8 p-6 rounded-xl border ${
              isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-start">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                  isCorrect ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
              >
                {isCorrect ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                  {isCorrect ? "Correct!" : "Incorrect"}
                </h3>
                <p className={`text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                  {isCorrect
                    ? "That's right! The person's hobby is cooking."
                    : `The correct answer is "cooking". The first sentence clearly states, '私の趣味は料理です。'`}
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-4 space-x-3">
              <button
                onClick={handleTryAgain}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Try Again
              </button>
              <button
                onClick={handleNextLesson}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Next Lesson
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Read the following text:</h2>
          <div className="mb-4">
            <p className="text-xl leading-relaxed text-gray-900 mb-3 font-japanese">{readingText}</p>
            {showTranslation && (
              <details className="text-sm text-gray-600 open">
                <summary className="cursor-pointer hover:text-blue-600 transition-colors">Show Translation</summary>
                <p className="mt-2 p-3 bg-gray-50 rounded-md">{readingTranslation}</p>
              </details>
            )}
            {!showTranslation && (
              <details className="text-sm text-gray-600">
                <summary className="cursor-pointer hover:text-blue-600 transition-colors">Show Translation</summary>
              </details>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">{question}</h2>
          <div className="mt-4 space-y-2">
            {answerChoices.map((choice) => (
              <button
                key={choice}
                onClick={() => handleAnswerSelect(choice)}
                className={`w-full py-2 px-4 rounded-md text-left transition-colors duration-200 ${
                  selectedAnswer === choice
                    ? "bg-blue-100 text-blue-800 border border-blue-300"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleCheckAnswer}
            disabled={selectedAnswer === null}
            className={`flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
              selectedAnswer === null ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Check Answer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {showTip && (
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="text-md font-medium text-blue-800 mb-2 flex items-center">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Reading Tip
            </h3>
            <p className="text-sm text-blue-700">{readingTip}</p>
          </div>
        )}
      </div>
    </main>
  );
}