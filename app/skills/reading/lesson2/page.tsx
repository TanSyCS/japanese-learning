"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reading2Page() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean | null>>({});
  const [showTranslation, setShowTranslation] = useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleAnswerSelect = (questionNumber: number, answer: string) => {
    setAnswers({ ...answers, [questionNumber]: answer });
    setResults({ ...results, [questionNumber]: null });
  };

  const checkAnswers = () => {
    const newResults: Record<number, boolean> = {};
    newResults[1] = answers[1] === "b";
    newResults[2] = answers[2] === "a";
    newResults[3] = answers[3] === "c";
    newResults[4] = answers[4] === "a";
    setResults(newResults);
    setShowTranslation(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const readingText = `
私の毎日のルーティンはだいたい同じです。まず、朝７時に起きて、顔を洗って歯を磨きます。それから、簡単な朝食を食べます。たいていパンとコーヒーです。

朝食の後、８時半に家を出て、電車で会社へ向かいます。会社では、午前中は会議やメールの返信など、忙しい時間を過ごします。

お昼は、会社の食堂で同僚と食べることが多いです。午後は、自分の仕事に集中して、夕方６時に退社します。

家に帰ってから、夕食を作り、お風呂に入って、リラックスします。寝る前に少し読書をして、だいたい夜１１時ごろに寝ます。
  `;

  const readingTranslation = `
My daily routine is mostly the same. First, I wake up at 7:00 AM, wash my face, and brush my teeth. Then, I eat a simple breakfast. Usually it's bread and coffee.

After breakfast, I leave home at 8:30 AM and go to the office by train. At the office, I spend a busy morning with meetings and replying to emails.

For lunch, I often eat with my colleagues at the company cafeteria. In the afternoon, I concentrate on my work and leave the office at 6:00 PM.

After returning home, I cook dinner, take a bath, and relax. I read a little before going to bed, and usually go to sleep around 11:00 PM.
  `;

  const questions = [
    {
      number: 1,
      text: "朝、何時に起きますか。",
      translation: "What time do I wake up in the morning?",
      options: [
        { key: "a", value: "午前６時", translation: "6:00 AM" },
        { key: "b", value: "午前７時", translation: "7:00 AM" },
        { key: "c", value: "午前８時", translation: "8:00 AM" },
        { key: "d", value: "午前９時", translation: "9:00 AM" },
      ],
      correctAnswer: "b",
    },
    {
      number: 2,
      text: "朝食は何を食べますか。",
      translation: "What do I eat for breakfast?",
      options: [
        { key: "a", value: "パンとコーヒー", translation: "Bread and coffee" },
        { key: "b", value: "ご飯と味噌汁", translation: "Rice and miso soup" },
        { key: "c", value: "サラダとヨーグルト", translation: "Salad and yogurt" },
        { key: "d", value: "何も食べません", translation: "I don't eat anything" },
      ],
      correctAnswer: "a",
    },
    {
      number: 3,
      text: "昼食はどこで誰と食べることが多いですか。",
      translation: "Where and with whom do I often eat lunch?",
      options: [
        { key: "a", value: "家で一人で", translation: "Alone at home" },
        { key: "b", value: "近くのレストランで", translation: "At a nearby restaurant" },
        { key: "c", value: "会社の食堂で同僚と", translation: "With colleagues at the company cafeteria" },
        { key: "d", value: "外で一人で", translation: "Alone outside" },
      ],
      correctAnswer: "c",
    },
    {
      number: 4,
      text: "会社を何時に退社しますか。",
      translation: "What time do I leave the office?",
      options: [
        { key: "a", value: "午後６時", translation: "6:00 PM" },
        { key: "b", value: "午後５時", translation: "5:00 PM" },
        { key: "c", value: "午後７時", translation: "7:00 PM" },
        { key: "d", value: "午後８時", translation: "8:00 PM" },
      ],
      correctAnswer: "a",
    },
  ];

  const isAllAnswered = Object.keys(answers).length === questions.length;
  const score = Object.values(results).filter((res) => res === true).length;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex justify-start mb-6">
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

        <h1 className="text-2xl font-bold text-center mb-8">Lesson 2: Daily Routine</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Read the following text:</h2>
          <p className="text-lg font-japanese leading-relaxed">{readingText}</p>
          {showTranslation && (
            <details className="text-sm text-gray-600 mt-2 open">
              <summary className="cursor-pointer hover:text-blue-600 transition-colors">Translation</summary>
              <p className="mt-2 p-3 bg-gray-50 rounded-md">{readingTranslation}</p>
            </details>
          )}
          {!showTranslation && (
            <details className="text-sm text-gray-600 mt-2">
              <summary className="cursor-pointer hover:text-blue-600 transition-colors">Translation</summary>
            </details>
          )}
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Answer the following questions:</h2>

        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.number} className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-3 font-semibold">{question.number}. {question.text}</p>
              {showTranslation && <p className="text-sm text-gray-500 mb-1">{question.translation}</p>}
              <div className="space-y-2">
                {question.options.map((option) => (
                  <label
                    key={option.key}
                    className={`flex items-center cursor-pointer rounded-md p-2 ${
                      answers[question.number] === option.key ? "bg-blue-100 border border-blue-300" : "hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.number}`}
                      value={option.key}
                      checked={answers[question.number] === option.key}
                      onChange={() => handleAnswerSelect(question.number, option.key)}
                      className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      disabled={showTranslation}
                    />
                    <span className="ml-2">{option.value} {showTranslation && <span className="text-sm text-gray-500">({option.translation})</span>}</span>
                  </label>
                ))}
              </div>
              {showTranslation && results[question.number] !== null && (
                <p className={`mt-2 text-sm font-semibold ${results[question.number] ? "text-green-600" : "text-red-600"}`}>
                  {results[question.number] ? "Correct!" : "Incorrect"}
                </p>
              )}
            </div>
          ))}
        </div>

        {!showTranslation && (
          <button
            onClick={checkAnswers}
            disabled={!isAllAnswered}
            className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 ${
              isAllAnswered ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Check Answers
          </button>
        )}

        {showTranslation && (
          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Results</h2>
            <p className="text-lg">Your score: {score} / {questions.length}</p>
            <button
              onClick={() => router.push("/skills/reading")}
              className="mt-4 py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              Back to Lessons
            </button>
          </div>
        )}
      </div>
    </main>
  );
}