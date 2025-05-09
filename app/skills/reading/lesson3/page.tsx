"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reading3Page() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean | null>>({});
  const [showResults, setShowResults] = useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleAnswerSelect = (questionNumber: number, answer: string) => {
    setAnswers({ ...answers, [questionNumber]: answer });
    setResults({ ...results, [questionNumber]: null }); // Reset result on new selection
  };

  const checkAnswers = () => {
    const newResults: Record<number, boolean> = {};
    newResults[1] = answers[1] === "d";
    newResults[2] = answers[2] === "c";
    newResults[3] = answers[3] === "b";
    newResults[4] = answers[4] === "b";
    newResults[5] = answers[5] === "b";
    setResults(newResults);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const readingText = `
「まんが」

日本では子供のためのまんがから大人も楽しめるまんがまで、いろいろなまんがが売られています。絵がじょうずだということや、話がおもしろいのですが、「この後どうなるのだろう？」と思うと、どうしても止めることができなくなるほどです。

人気があるまんがから映画やテレビのばんぐみが生まれることもあります。今では「MANGA」となって世界中で日本のまんがが読まれています。
  `;

  const readingTranslation = `
"Manga"

In Japan, there are various manga sold, from manga for children to manga that adults can also enjoy. What makes them appealing is not only the skillful illustrations and interesting stories, but also the feeling that once you wonder, "What will happen next?", you become so engrossed that you can't stop reading.

Sometimes, popular manga are adapted into movies and TV shows. Nowadays, Japanese manga are read all over the world under the name "MANGA".
  `;

  const questions = [
    {
      number: 1,
      text: "まんがは、どのくらいおもしろいですか。",
      translation: "How interesting is manga?",
      options: [
        { key: "a", value: "世界中で読まれているほどおもしろいです。", translation: "It is as interesting as it is read all over the world." },
        { key: "b", value: "とちゅうで止めることができないほどおもしろいです。", translation: "It is so interesting that you cannot stop reading in the middle." },
        { key: "c", value: "この後どうなるのだろうと思うほどおもしろいです。", translation: "It is so interesting that you wonder what will happen next." },
        { key: "d", value: "子供だけでなく、大人も読むほどおもしろいです。", translation: "It is so interesting that not only children but also adults read it." },
      ],
      correctAnswer: "d",
    },
    {
      number: 2,
      text: "日本のまんがが売られているのは、誰のためですか。",
      translation: "Who are Japanese manga sold for?",
      options: [
        { key: "a", value: "ただ子供のため", translation: "Only for children" },
        { key: "b", value: "ただ大人のため", translation: "Only for adults" },
        { key: "c", value: "子供から大人まで", translation: "From children to adults" },
        { key: "d", value: "ただ外国人ため", translation: "Only for foreigners" },
      ],
      correctAnswer: "c",
    },
    {
      number: 3,
      text: "日本のまんがが人気がある理由は何ですか。",
      translation: "What is the reason why Japanese manga are popular?",
      options: [
        { key: "a", value: "絵が下手だから", translation: "Because the illustrations are bad" },
        { key: "b", value: "話がおもしろいから", translation: "Because the stories are interesting" },
        { key: "c", value: "高いから", translation: "Because they are expensive" },
        { key: "d", value: "読みにくいから", translation: "Because they are difficult to read" },
      ],
      correctAnswer: "b",
    },
    {
      number: 4,
      text: "人気があるまんがから何が生まれることがありますか。",
      translation: "What can be created from popular manga?",
      options: [
        { key: "a", value: "音楽", translation: "Music" },
        { key: "b", value: "映画やテレビのばんぐみ", translation: "Movies and TV shows" },
        { key: "c", value: "ゲーム", translation: "Games" },
        { key: "d", value: "本", translation: "Books" },
      ],
      correctAnswer: "b",
    },
    {
      number: 5,
      text: "日本のまんがは今、世界中で何と呼ばれていますか。",
      translation: "What are Japanese manga called around the world now?",
      options: [
        { key: "a", value: "ANIME", translation: "Anime" },
        { key: "b", value: "MANGA", translation: "Manga" },
        { key: "c", value: "NOVEL", translation: "Novel" },
        { key: "d", value: "DRAMA", translation: "Drama" },
      ],
      correctAnswer: "b",
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

        <h1 className="text-2xl font-bold text-center mb-8">Lesson 3: Reading Comprehension</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Read the following text:</h2>
          <p className="text-lg font-japanese leading-relaxed">{readingText}</p>
          {showResults && (
            <details className="text-sm text-gray-600 mt-2 open">
              <summary className="cursor-pointer hover:text-blue-600 transition-colors">Translation</summary>
              <p className="mt-2 p-3 bg-gray-50 rounded-md">{readingTranslation}</p>
            </details>
          )}
          {!showResults && (
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
              {showResults && <p className="text-sm text-gray-500 mb-1">{question.translation}</p>}
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
                      disabled={showResults}
                    />
                    <span className="ml-2">{option.value} {showResults && <span className="text-sm text-gray-500">({option.translation})</span>}</span>
                  </label>
                ))}
              </div>
              {showResults && results[question.number] !== null && (
                <p className={`mt-2 text-sm font-semibold ${results[question.number] ? "text-green-600" : "text-red-600"}`}>
                  {results[question.number] ? "Correct!" : "Incorrect"}
                </p>
              )}
            </div>
          ))}
        </div>

        {!showResults && (
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

        {showResults && (
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