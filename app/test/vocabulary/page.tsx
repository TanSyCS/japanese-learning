"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export default function VocabularyTestPage() {
  const router = useRouter()

  const handleLessonClick = (lessonNumber: number) => {
    router.push(`/test/vocabulary/lesson${lessonNumber}`)
  }

  const handleGoBack = () => {
    router.back()
  }

  // Lesson data with descriptions
  const lessons = [
    {
      number: 1,
      title: "Animals",
      words: 5,
      level: "Beginner",
    },
    {
      number: 2,
      title: "Numbers & Counting",
      words: 25,
      level: "Beginner",
    },
    // {
    //   number: 3,
    //   title: "Daily Activities",
    //   words: 30,
    //   level: "Beginner-Intermediate",
    // },
    // {
    //   number: 4,
    //   title: "Food & Dining",
    //   words: 35,
    //   level: "Intermediate",
    // },
    // {
    //   number: 5,
    //   title: "Travel & Transportation",
    //   words: 40,
    //   level: "Intermediate",
    // },
  ]

  return (
    <div className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-4">
        <button
          onClick={handleGoBack}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to Tests</span>
        </button>
      </div>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-3">Vocabulary Test</h1>
        <p className="text-center text-gray-600 mb-8">Select a lesson to test your vocabulary knowledge</p>

        <div className="space-y-4">
          {lessons.map((lesson) => (
            <button
              key={lesson.number}
              onClick={() => handleLessonClick(lesson.number)}
              className="w-full flex items-center justify-between bg-white hover:bg-blue-50 text-left border border-blue-200 rounded-lg p-4 transition-all duration-200 group"
            >
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-700 font-bold h-10 w-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  {lesson.number}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{lesson.title}</h3>
                  <p className="text-sm text-gray-500">
                    {lesson.words} words • {lesson.level}
                  </p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-700 mb-2">How the test works</h3>
          <p className="text-sm text-gray-700">
            Each vocabulary test contains multiple-choice questions to test your knowledge of Japanese words and
            phrases. Complete the test to see your score and review any mistakes.
          </p>
        </div>
      </main>
    </div>
  )
}
