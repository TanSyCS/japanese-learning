"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Play, Pause, Rewind, Volume2 } from "lucide-react"

// Replace with the actual URL or local path of your audio file
const audioSource = "/lesson1.mp3"

interface Question {
  id: number
  placeholder: string
  correctAnswer: string
}

const questions: Question[] = [
  { id: 1, placeholder: "(1) ...", correctAnswer: "どこ" }, // Where
  { id: 2, placeholder: "(2) ...", correctAnswer: "ボクたち" }, // We
  { id: 3, placeholder: "(3) ...", correctAnswer: "近く" }, // Near/Close
  { id: 4, placeholder: "(4) ...", correctAnswer: "ありがとう" }, // Thank you
]

export default function ListeningLessonOnePage() {
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState<string>("0:00")
  const [currentTime, setCurrentTime] = useState<string>("0:00")
  const [progress, setProgress] = useState(0)

  // Get audio duration when metadata is loaded
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        const minutes = Math.floor(audio.duration / 60)
        const seconds = Math.floor(audio.duration % 60)
          .toString()
          .padStart(2, "0")
        setDuration(`${minutes}:${seconds}`)
      })

      audio.addEventListener("timeupdate", () => {
        const minutes = Math.floor(audio.currentTime / 60)
        const seconds = Math.floor(audio.currentTime % 60)
          .toString()
          .padStart(2, "0")
        setCurrentTime(`${minutes}:${seconds}`)
        setProgress((audio.currentTime / audio.duration) * 100)
      })

      audio.addEventListener("ended", () => {
        setIsPlaying(false)
      })
    }

    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", () => {})
        audio.removeEventListener("timeupdate", () => {})
        audio.removeEventListener("ended", () => {})
      }
    }
  }, [])

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers({ ...answers, [id]: value })
  }

  const handleSubmit = () => {
    let correctCount = 0
    questions.forEach((question) => {
      if (answers[question.id]?.trim() === question.correctAnswer) {
        correctCount++
      }
    })
    setScore(correctCount)
    setShowResults(true)
  }

  const handleGoBack = () => {
    router.back()
  }

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }

  const handleTryAgain = () => {
    setAnswers({})
    setShowResults(false)
    setScore(0)
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.pause()
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
      const percentageClicked = clickPosition / progressBar.offsetWidth
      audioRef.current.currentTime = percentageClicked * audioRef.current.duration
    }
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-4">
        <button
          onClick={handleGoBack}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to Listening Practice</span>
        </button>
      </div>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">Listening Practice: Lesson 1</h1>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Beginner</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Conversation</span>
          </div>
          <p className="text-center text-gray-600">
            Listen to the conversation and fill in the blanks with the missing Japanese words.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="p-5 bg-blue-50 border-b border-gray-200 flex items-center">
            <Volume2 className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="font-semibold text-gray-800">Audio Player</h2>
          </div>

          <div className="p-5">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePlayAudio}
                    className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full focus:outline-none transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
                  </button>
                  <button
                    onClick={handleRewind}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full focus:outline-none transition-colors"
                    aria-label="Rewind"
                  >
                    <Rewind className="h-5 w-5" />
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  {currentTime} / {duration}
                </div>
              </div>

              <div
                className="h-2 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>

              <audio ref={audioRef} src={audioSource} className="hidden" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="p-5 bg-blue-50 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Fill in the Blanks</h2>
          </div>

          <div className="p-5">
            <div className="text-lg leading-relaxed space-y-4 font-japanese">
              <p>
                タム：すみませんでした。
                <br />
                ハルさん-ハウスは
                <input
                  type="text"
                  value={answers[1] || ""}
                  onChange={(e) => handleAnswerChange(1, e.target.value)}
                  placeholder={questions[0].placeholder}
                  className="inline-block w-28 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-center bg-gray-50 px-1"
                />
                ですか。
              </p>
              <p>
                カイト：ハルさん-ハウス？
                <br />
                あれ？
                <input
                  type="text"
                  value={answers[2] || ""}
                  onChange={(e) => handleAnswerChange(2, e.target.value)}
                  placeholder={questions[1].placeholder}
                  className="inline-block w-28 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-center bg-gray-50 px-1"
                />
                のうちだよね。
              </p>
              <p>
                ミヤ：すぐ
                <input
                  type="text"
                  value={answers[3] || ""}
                  onChange={(e) => handleAnswerChange(3, e.target.value)}
                  placeholder={questions[2].placeholder}
                  className="inline-block w-28 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-center bg-gray-50 px-1"
                />
                です。一緒に行きましょう。
              </p>
              <p>
                カイト：こっちだよ。
                <br />
                はい。
                <input
                  type="text"
                  value={answers[4] || ""}
                  onChange={(e) => handleAnswerChange(4, e.target.value)}
                  placeholder={questions[3].placeholder}
                  className="inline-block w-28 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-center bg-gray-50 px-1"
                />
                ございます。
              </p>
            </div>
          </div>
        </div>

        {!showResults ? (
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition duration-200"
            >
              Check Answers
            </button>
         
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div
              className={`p-5 ${
                score === questions.length
                  ? "bg-green-50 border-b border-green-200"
                  : "bg-blue-50 border-b border-blue-200"
              }`}
            >
              <h2
                className={`text-xl font-semibold ${
                  score === questions.length ? "text-green-700" : "text-blue-700"
                } flex items-center`}
              >
                {score === questions.length ? (
                  <>
                    <span className="text-2xl mr-2">🎉</span> Perfect Score!
                  </>
                ) : (
                  <>Your Results</>
                )}
              </h2>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-blue-50 border-8 border-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">{score}</div>
                    <div className="text-sm text-blue-600">out of {questions.length}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {questions.map((question) => {
                  const isCorrect = answers[question.id]?.trim() === question.correctAnswer
                  return (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg ${
                        isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-gray-800">{question.placeholder}</span>
                          <span className="text-gray-500 text-sm ml-2">→</span>
                          <span className="ml-2 font-japanese">
                            {isCorrect ? (
                              <span className="text-green-600 font-medium">{question.correctAnswer}</span>
                            ) : (
                              <>
                                <span className="text-red-600">
                                  {answers[question.id] ? answers[question.id] : "Not answered"}
                                </span>
                                <span className="text-gray-500 mx-2">•</span>
                                <span className="text-green-600 font-medium">Correct: {question.correctAnswer}</span>
                              </>
                            )}
                          </span>
                        </div>
                        <div>
                          {isCorrect ? (
                            <span className="text-green-600 text-sm font-medium">Correct</span>
                          ) : (
                            <span className="text-red-600 text-sm font-medium">Incorrect</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleTryAgain}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition duration-200"
                >
                  Try Again
                </button>
                <button
                  onClick={handleGoBack}
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 border border-gray-300 rounded-lg shadow-sm transition duration-200"
                >
                  Back to Lessons
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
