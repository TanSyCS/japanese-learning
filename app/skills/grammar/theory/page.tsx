"use client"

import { useRouter } from "next/navigation"

export default function GrammarTheoryPage() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const handleLesson = (lessonNumber: number) => {
    router.push(`/skills/grammar/theory/lesson${lessonNumber}theory`)
  }

  // Array of lessons for easy expansion
  const lessons = [
    { id: 1, title: "Lesson 1" },
    { id: 2, title: "Lesson 2" },
    { id: 3, title: "Lesson 3" },
    // { id: 4, title: "Lesson 4" },
    // { id: 5, title: "Lesson 5" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="flex justify-start mb-8">
          <button onClick={handleGoBack} className="text-gray-600 hover:text-gray-900 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold text-center mb-10">Grammar Theory</h1>

        <div className="space-y-4">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => handleLesson(lesson.id)}
              className="w-full bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium py-4 rounded-lg transition-colors"
            >
              {lesson.title}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
