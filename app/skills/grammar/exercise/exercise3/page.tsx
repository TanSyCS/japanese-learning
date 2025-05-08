"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Exercise3Page() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleGoBack = () => {
    router.back();
  };

  const handleAnswer = (questionNumber: number, selectedAnswer: string) => {
    setAnswers({ ...answers, [questionNumber]: selectedAnswer });
  };

  const checkAnswers = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      if (answers[question.number] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetExercise = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const questions = [
    {
      number: 1,
      text: "これ は ペン ___。 (This is not a pen.)",
      options: ["です", "ではありません"],
      correctAnswer: "ではありません",
    },
    {
      number: 2,
      text: "私 は 医者 ___。 (I am not a doctor.)",
      options: ["です", "ではありません"],
      correctAnswer: "ではありません",
    },
    {
      number: 3,
      text: "それ は カメラ ___ か。 (Is that not a camera?)",
      options: ["です", "ではありません"],
      correctAnswer: "ではありません",
    },
    {
      number: 4,
      text: "あの 人 は 学生 ___。 (That person is not a student.)",
      options: ["です", "ではありません"],
      correctAnswer: "ではありません",
    },
    {
      number: 5,
      text: "この 料理 は 美味しい ___。 (This dish is not delicious.)",
      options: ["です", "ではありません"],
      correctAnswer: "ではありません",
    },
  ];

  const isAllAnswered = Object.keys(answers).length === questions.length;

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <button onClick={handleGoBack} className="text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <div className="text-sm text-gray-500">
            {Object.keys(answers).length}/{questions.length} answered
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Exercise: Lesson 3</h1>
          <p className="text-gray-600">Negative Noun (〜ではありません)</p>
        </div>

        {showResults && (
          <div className={`mb-8 rounded-lg p-6 ${score === questions.length ? "bg-green-50 border border-green-200" : score >= questions.length / 2 ? "bg-yellow-50 border border-yellow-200" : "bg-red-50 border border-red-200"}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                Your Score: {score}/{questions.length}
              </h2>
              <button onClick={resetExercise} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Try Again
              </button>
            </div>
            <div className="mt-4 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full ${score === questions.length ? "bg-green-500" : score >= questions.length / 2 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${(score / questions.length) * 100}%` }}></div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.number} className={`bg-white rounded-xl shadow-sm border p-6 transition-all ${showResults ? (answers[question.number] === question.correctAnswer ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50") : "border-gray-200 hover:shadow-md"}`}>
              <p className="text-lg mb-4 font-medium">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full mr-3">
                  {question.number}
                </span>
                {question.text}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => !showResults && handleAnswer(question.number, option)}
                    disabled={showResults}
                    className={`py-3 px-4 rounded-lg text-center font-medium transition-all ${
                      answers[question.number] === option
                        ? showResults
                          ? option === question.correctAnswer
                            ? "bg-green-100 text-green-800 border-2 border-green-500"
                            : "bg-red-100 text-red-800 border-2 border-red-500"
                          : "bg-blue-100 text-blue-800 border-2 border-blue-500"
                        : showResults && option === question.correctAnswer
                        ? "bg-green-100 text-green-800 border-2 border-green-500"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showResults && (
                <div className={`mt-4 p-3 rounded-lg ${answers[question.number] === question.correctAnswer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {answers[question.number] === question.correctAnswer ? "Correct!" : `Incorrect. The correct answer is "${question.correctAnswer}".`}
                </div>
              )}
            </div>
          ))}
        </div>

        {!showResults && (
          <button
            onClick={checkAnswers}
            disabled={!isAllAnswered}
            className={`w-full mt-8 py-4 rounded-lg font-semibold text-white transition-all ${isAllAnswered ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
          >
            {isAllAnswered ? "Check Answers" : `Answer All Questions (${Object.keys(answers).length}/${questions.length})`}
          </button>
        )}

        {showResults && (
          <div className="mt-8 flex justify-center">
            <button onClick={() => router.push("/skills/grammar/exercise")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Back to Exercises
            </button>
          </div>
        )}
      </div>
    </main>
  );
}