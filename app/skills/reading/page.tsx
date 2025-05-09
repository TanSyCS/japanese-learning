"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function ReadingPage() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  // Array of reading lessons for easy expansion
  const readingLessons = [
    { id: 1, title: "Lesson 1", level: "Beginner", description: "People and places" },
    { id: 2, title: "Lesson 2", level: "Intermedia", description: "Daily routines and activities" },
    { id: 3, title: "Lesson 3", level: "Hard", description: "Manga" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-start mb-8">
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
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Reading Practice</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Improve your Japanese reading skills with these practice lessons
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {readingLessons.map((lesson) => (
            <Link key={lesson.id} href={`/skills/reading/lesson${lesson.id}`} className="block group">
              <div className="bg-white border border-gray-200 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-200 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                      {lesson.title}
                    </h2>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        lesson.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : lesson.level === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {lesson.level}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
                <div className="mt-auto">
                  <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors flex items-center">
                    Start Reading
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Reading Tips</h3>
          <p className="text-blue-700 text-sm">
            Start with shorter texts and gradually move to longer ones. Try to understand the context before looking up
            every unknown word. Regular practice is key to improving your reading skills!
          </p>
        </div>
      </div>
    </main>
  )
}
