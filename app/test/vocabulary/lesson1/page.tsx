"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
export default function VocabularyLessonOnePage() {
  const router = useRouter();
  const [connections, setConnections] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedConnector, setSelectedConnector] = useState<string | null>(null);
  const connectorRefs = useRef<Record<string, DOMRect>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const questions = [
    { japanese: "いぬ", correctAnswer: "dog", image: "🐶" },
    { japanese: "ねこ", correctAnswer: "cat", image: "🐱" },
    { japanese: "にわとり", correctAnswer: "chicken", image: "🐔" },
    { japanese: "くま", correctAnswer: "bear", image: "🐻" },
    { japanese: "さかな", correctAnswer: "fish", image: "🐠" },
  ];

  // Shuffle images to randomize their order
  const [shuffledImages] = useState(() => {
    const images = questions.map((q) => ({ correctAnswer: q.correctAnswer, image: q.image }));
    return images.sort(() => Math.random() - 0.5);
  });

  // Update connector positions
  useEffect(() => {
    const updatePositions = () => {
      questions.forEach((q) => {
        const wordConnector = document.getElementById(`connector-word-${q.japanese}`);
        const imageConnector = document.getElementById(`connector-image-${q.correctAnswer}`);
        if (wordConnector) {
          connectorRefs.current[`word-${q.japanese}`] = wordConnector.getBoundingClientRect();
        }
        if (imageConnector) {
          connectorRefs.current[`image-${q.correctAnswer}`] = imageConnector.getBoundingClientRect();
        }
      });
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [questions]);

  const handleConnectorClick = (type: "word" | "image", id: string) => {
    if (!selectedConnector) {
      // First click: select the connector
      setSelectedConnector(`${type}-${id}`);
    } else {
      const [selectedType, selectedId] = selectedConnector.split("-");
      // Second click: check if the types are different (word -> image or image -> word)
      if (selectedType !== type) {
        if (selectedType === "word" && type === "image") {
          setConnections((prev) => ({ ...prev, [selectedId]: id }));
        } else if (selectedType === "image" && type === "word") {
          setConnections((prev) => ({ ...prev, [id]: selectedId }));
        }
      }
      setSelectedConnector(null);
    }
  };

  const handleClearConnection = (type: "word" | "image", id: string) => {
    setConnections((prev) => {
      const newConnections = { ...prev };
      if (type === "word") {
        delete newConnections[id];
      } else {
        const wordToRemove = Object.keys(newConnections).find((key) => newConnections[key] === id);
        if (wordToRemove) delete newConnections[wordToRemove];
      }
      return newConnections;
    });
    setSelectedConnector(null);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    for (const question of questions) {
      if (connections[question.japanese] === question.correctAnswer) {
        correctCount++;
      }
    }
    setScore(correctCount);
    setShowResults(true);
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleTryAgain = () => {
    setConnections({});
    setShowResults(false);
    setSelectedConnector(null);
  };

  const getLineCoordinates = (japanese: string, correctAnswer: string) => {
    const wordRect = connectorRefs.current[`word-${japanese}`];
    const imageRect = connectorRefs.current[`image-${correctAnswer}`];
    if (!wordRect || !imageRect || !containerRef.current) return { x1: 0, y1: 0, x2: 0, y2: 0 };

    const containerRect = containerRef.current.getBoundingClientRect();
    const x1 = wordRect.left + wordRect.width / 2 - containerRect.left;
    const y1 = wordRect.top + wordRect.height / 2 - containerRect.top;
    const x2 = imageRect.left + imageRect.width / 2 - containerRect.left;
    const y2 = imageRect.top + imageRect.height / 2 - containerRect.top;
    return { x1, y1, x2, y2 };
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={handleGoBack}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to Vocabulary Tests</span>
        </button>
      </div>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">Lesson 1: Animals</h1>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Beginner</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">5 Questions</span>
          </div>
          <p className="text-center text-gray-600">
            Click the circles to match the Japanese words (hiragana) with the corresponding animal images.
          </p>
        </div>

        {!showResults ? (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 bg-blue-50 border-b border-gray-200">
              <h2 className="font-semibold text-gray-800">Connect each word to the correct animal</h2>
            </div>

            <div className="relative p-5" ref={containerRef}>
              <div className="flex justify-between items-start">
                {/* Left side: Japanese words with connectors on the right */}
                <div className="flex flex-col space-y-6">
                  {questions.map((question) => (
                    <div key={question.japanese} className="flex items-center justify-between space-x-4 w-full">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-semibold text-gray-800">{question.japanese}</span>
                        <span className="text-sm text-gray-500">hiragana</span>
                      </div>
                      <div
                        id={`connector-word-${question.japanese}`}
                        onClick={() =>
                          connections[question.japanese]
                            ? handleClearConnection("word", question.japanese)
                            : handleConnectorClick("word", question.japanese)
                        }
                        className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer ${
                          connections[question.japanese] ? "bg-blue-200" : selectedConnector === `word-${question.japanese}` ? "bg-blue-100" : ""
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Right side: Shuffled images with connectors on the left */}
                <div className="flex flex-col space-y-6">
                  {shuffledImages.map((img) => (
                    <div key={img.correctAnswer} className="flex items-center justify-between space-x-4 w-full">
                      <div
                        id={`connector-image-${img.correctAnswer}`}
                        onClick={() =>
                          Object.values(connections).includes(img.correctAnswer)
                            ? handleClearConnection("image", img.correctAnswer)
                            : handleConnectorClick("image", img.correctAnswer)
                        }
                        className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer ${
                          Object.values(connections).includes(img.correctAnswer)
                            ? "bg-blue-200"
                            : selectedConnector === `image-${img.correctAnswer}` ? "bg-blue-100" : ""
                        }`}
                      />
                      <span className="text-2xl">{img.image}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SVG for drawing lines */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {Object.entries(connections).map(([japanese, correctAnswer]) => {
                  const { x1, y1, x2, y2 } = getLineCoordinates(japanese, correctAnswer);
                  return (
                    <line
                      key={`${japanese}-${correctAnswer}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#3B82F6"
                      strokeWidth="2"
                      onClick={() => {
                        handleClearConnection("word", japanese);
                        handleClearConnection("image", correctAnswer);
                      }}
                      className="pointer-events-auto cursor-pointer"
                    />
                  );
                })}
              </svg>
            </div>

            <div className="p-5 border-t border-gray-200">
              <button
                onClick={handleSubmit}
                disabled={Object.keys(connections).length !== questions.length}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition duration-200"
              >
                Check Answers
              </button>
              <p className="text-center text-sm text-gray-500 mt-2">
                {Object.keys(connections).length} of {questions.length} questions answered
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div
              className={`p-5 ${
                score === questions.length
                  ? "bg-green-50 border-b border-green-200"
                  : "bg-blue-50 border-b border-blue-200"
              }`}
            >
              <h2
                className={`text-xl font-semibold ${
                  score === questions.length ? "text-green-700" : "text-blue-700"
                } flex items-center`}
              >
                {score === questions.length ? (
                  <>
                    <span className="text-2xl mr-2">🎉</span> Perfect Score!
                  </>
                ) : (
                  <>Results</>
                )}
              </h2>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-blue-50 border-8 border-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">{score}</div>
                    <div className="text-sm text-blue-600">out of {questions.length}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {questions.map((question) => {
                  const userAnswer = connections[question.japanese];
                  const isCorrect = userAnswer === question.correctAnswer;
                  const userImage = shuffledImages.find((img) => img.correctAnswer === userAnswer)?.image || "none";
                  return (
                    <div
                      key={question.japanese}
                      className={`p-4 rounded-lg ${
                        isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-gray-800">{question.japanese}</span>
                          <span className="text-gray-500 text-sm ml-2">→</span>
                          <span className="ml-2">
                            {question.image} {question.correctAnswer}
                          </span>
                        </div>
                        <div>
                          {isCorrect ? (
                            <span className="text-green-600 text-sm font-medium">Correct</span>
                          ) : (
                            <span className="text-red-600 text-sm font-medium">
                              You selected: {userImage}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleTryAgain}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition duration-200"
                >
                  Try Again
                </button>
                <button
                  onClick={handleGoBack}
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 border border-gray-300 rounded-lg shadow-sm transition duration-200"
                >
                  Back to Lessons
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}