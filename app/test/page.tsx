"use client"

import { useRouter } from "next/navigation"
import { BookOpen, GraduationCap } from "lucide-react"

export default function TestPage() {
  const router = useRouter()

  const handleVocabularyClick = () => {
    router.push("/test/vocabulary")
  }

  const handleGrammarClick = () => {
    router.push("/test/grammar")
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Japanese Tests</h1>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Test your Japanese language skills with our comprehensive assessments. Choose from vocabulary or grammar tests
          to evaluate your progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <button
            onClick={handleVocabularyClick}
            className="flex flex-col items-center bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl p-8 transition-all duration-300 group"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
              <BookOpen className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Vocabulary Test</h2>
            <p className="text-center text-gray-600">Test your knowledge of Japanese words and phrases</p>
          </button>

          <button
            onClick={handleGrammarClick}
            className="flex flex-col items-center bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl p-8 transition-all duration-300 group"
          >
            <div className="bg-green-100 p-4 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
              <GraduationCap className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Grammar Test</h2>
            <p className="text-center text-gray-600">Test your understanding of Japanese grammar rules</p>
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Complete tests to track your progress and identify areas for improvement
          </p>
        </div>
      </main>
    </div>
  )
}
