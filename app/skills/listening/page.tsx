"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, Headphones, Volume2 } from "lucide-react"

export default function ListeningPracticePage() {
  const router = useRouter()

  const handleLessonClick = (lessonNumber: number) => {
    router.push(`/skills/listening/lesson${lessonNumber}`)
  }

  const handleGoBack = () => {
    router.back()
  }

  const lessons = [
    {
      number: 1,
      title: "Find a place",
      level: "Beginner",
      duration: "2 min",
      description: "Where is Haru-san house?",
    },
    {
      number: 2,
      title: "Ask a favor",
      level: "Beginner",
      duration: "2 min",
      description: "How to ask a favor politely?",
    },
    // {
    //   number: 3,
    //   title: "Shopping & Numbers",
    //   level: "Beginner-Intermediate",
    //   duration: "10 min",
    //   description: "Learn vocabulary related to shopping and counting in Japanese",
    // },
    // {
    //   number: 4,
    //   title: "Asking for Directions",
    //   level: "Intermediate",
    //   duration: "12 min",
    //   description: "Practice asking for and understanding directions in Japanese",
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
          <span>Back to Practice</span>
        </button>
      </div>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Headphones className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">Listening Practice</h1>
          <p className="text-center text-gray-600 max-w-md">
            Improve your Japanese listening skills with our audio lessons. Select a lesson to begin practicing.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => (
            <button
              key={lesson.number}
              onClick={() => handleLessonClick(lesson.number)}
              className="bg-white hover:bg-blue-50 border border-gray-200 rounded-xl p-5 text-left transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-700 font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                    {lesson.number}
                  </div>
                  <h3 className="font-semibold text-gray-800">{lesson.title}</h3>
                </div>
                <Volume2 className="h-5 w-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-gray-600 text-sm mb-3 ml-11">{lesson.description}</p>

              <div className="flex items-center ml-11">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                  {lesson.level}
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {lesson.duration}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-700 mb-2">How to practice effectively</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Listen to each audio clip multiple times to improve comprehension
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Try to understand without looking at the transcript first
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Practice speaking along with the audio to improve pronunciation
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
