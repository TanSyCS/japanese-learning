"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reading1Page() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleImageSelect = (imageNumber: number) => {
    setSelectedImage(imageNumber);
    setIsCorrect(null); // Reset result on new selection
    setShowTranslation(false); // Hide translation on new selection
    setShowTip(false); // Hide tip on new selection
  };

  const handleComplete = () => {
    if (selectedImage === 1) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowTranslation(true); // Show translation after checking
    setShowTip(true); // Show tip after checking
  };

  const handleNextLesson = () => {
    router.push("/skills/reading/lesson2");
  };

  const handleTryAgain = () => {
    setSelectedImage(null);
    setIsCorrect(null);
    setShowTranslation(false);
    setShowTip(false);
  };

  const readingText =
    "「ゆかたを着た二人がうつっています。二人は花火を見ています。うしろには、ほかの人たちもいて、みんなが花火をたのしんでいます。」";

  const readingTranslation =
    "Two people wearing yukatas are in the picture. They are watching fireworks. Behind them, there are other people, and everyone is enjoying the fireworks.";

  const images = ["/fireworks.jpg", "/cherry_blossom.jpg", "/beach.jpg", "/mountain_clouds.jpg"];

  const imageTitles = ["Summer Fireworks Festival", "Cherry Blossom Viewing", "Beach Scene", "Mountain View"];

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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Lesson 1: Picture Selection</h1>
          <p className="text-gray-600">Read the text and select the matching image</p>
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
                    ? "Great job! You correctly identified the image that matches the text."
                    : "The correct image is the fireworks scene. The text describes people wearing yukatas watching fireworks."}
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

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Select the image that best matches the description:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageSelect(index + 1)}
                className={`group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border-2 ${
                  selectedImage === index + 1 ? "border-blue-500 ring-2 ring-blue-300" : "border-transparent"
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-medium text-sm">{imageTitles[index]}</p>
                </div>
                {selectedImage === index + 1 && (
                  <div className="absolute top-3 right-3 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleComplete}
            disabled={selectedImage === null}
            className={`flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
              selectedImage === null ? "opacity-50 cursor-not-allowed" : ""
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
            <p className="text-sm text-blue-700">
              When reading Japanese texts, try to identify key nouns and verbs first. In this example, words like "ゆかた"
              (yukata) and "花火" (fireworks) give important clues about the scene being described.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}