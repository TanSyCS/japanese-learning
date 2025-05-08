"use client"

import { useRouter } from "next/navigation"

export default function GrammarPage() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const handleTheory = () => {
    router.push("/skills/grammar/theory")
  }

  const handleExercise = () => {
    router.push("/skills/grammar/exercise")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-2xl">
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

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Grammar</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Master Japanese grammar through theory and practice exercises
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <button
            onClick={handleTheory}
            className="bg-white hover:bg-blue-50 border border-blue-200 shadow-sm rounded-xl p-8 text-center transition-all duration-200 hover:shadow-md group"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Theory</h2>
            <p className="text-gray-600 text-sm">Learn Japanese grammar rules and structures</p>
          </button>

          <button
            onClick={handleExercise}
            className="bg-white hover:bg-blue-50 border border-blue-200 shadow-sm rounded-xl p-8 text-center transition-all duration-200 hover:shadow-md group"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Exercises</h2>
            <p className="text-gray-600 text-sm">Practice and test your grammar knowledge</p>
          </button>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Learning Tip</h3>
          <p className="text-blue-700 text-sm">
            Start with basic grammar patterns and gradually move to more complex structures. Regular practice is key to
            mastering Japanese grammar!
          </p>
        </div>
      </div>
    </main>
  )
}
