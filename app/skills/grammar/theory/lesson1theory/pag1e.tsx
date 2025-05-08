"use client"

import { useRouter } from "next/navigation"

export default function Lesson1Page() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-start mb-8">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Lessons
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold">Lesson 1: Basic Sentence Structure</h1>
            <p className="mt-2 opacity-90">Understanding the fundamental structure of Japanese sentences</p>
          </div>

          <div className="p-6">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Word Order</h2>
              <p className="text-gray-700 mb-4">
                Unlike English which follows Subject-Verb-Object (SVO) order, Japanese follows Subject-Object-Verb (SOV)
                order. This means the verb always comes at the end of the sentence.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-800 mb-1">Example:</p>
                <p className="text-blue-800 mb-1">私はりんごを食べます。</p>
                <p className="text-gray-600 mb-1">Watashi wa ringo o tabemasu.</p>
                <p className="text-gray-700">I eat an apple.</p>
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Structure breakdown:</span> 私は (I) + りんごを (apple) + 食べます (eat)
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Particles</h2>
              <p className="text-gray-700 mb-4">
                Japanese uses particles to indicate the grammatical function of words. The most common particles are:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>
                  <span className="font-medium">は (wa)</span> - Topic marker
                </li>
                <li>
                  <span className="font-medium">を (o)</span> - Direct object marker
                </li>
                <li>
                  <span className="font-medium">が (ga)</span> - Subject marker
                </li>
                <li>
                  <span className="font-medium">に (ni)</span> - Indirect object, direction, or location marker
                </li>
                <li>
                  <span className="font-medium">で (de)</span> - Location where an action takes place
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Practice Sentences</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-blue-800 mb-1">彼は学校に行きます。</p>
                  <p className="text-gray-600 mb-1">Kare wa gakkou ni ikimasu.</p>
                  <p className="text-gray-700">He goes to school.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-blue-800 mb-1">私は日本語を勉強します。</p>
                  <p className="text-gray-600 mb-1">Watashi wa nihongo o benkyou shimasu.</p>
                  <p className="text-gray-700">I study Japanese.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-blue-800 mb-1">彼女は公園で本を読みます。</p>
                  <p className="text-gray-600 mb-1">Kanojo wa kouen de hon o yomimasu.</p>
                  <p className="text-gray-700">She reads a book in the park.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between">
          <div></div> {/* Empty div for spacing */}
          <button
            onClick={() => router.push("/courses/grammar/theory/lesson-2")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors duration-200 flex items-center font-medium"
          >
            Next Lesson
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  )
}
