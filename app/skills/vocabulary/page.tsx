"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function VocabularyPage() {
  const router = useRouter()
  const [groups, setGroups] = useState<string[]>([])
  const [newGroupName, setNewGroupName] = useState("")
  const [editingGroupId, setEditingGroupId] = useState<number | null>(null)
  const [editedName, setEditedName] = useState("")
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Initialize with default groups
  useEffect(() => {
    setGroups(["JLPT N5 Vocabulary", "Common Phrases", "Travel Words"])
  }, [])

  const handleGoBack = () => {
    router.back()
  }

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newGroupName.trim()) return

    setGroups((prevGroups) => [...prevGroups, newGroupName])
    setNewGroupName("")
    setIsPopupOpen(false) // Close the popup after creating
  }

  const handleDeleteGroup = (index: number) => {
    setGroups((prevGroups) => prevGroups.filter((_, i) => i !== index))
  }

  const handleEditGroup = (index: number, currentName: string) => {
    setEditingGroupId(index)
    setEditedName(currentName)
  }

  const handleSaveEdit = (index: number) => {
    if (editedName.trim()) {
      setGroups((prevGroups) => prevGroups.map((name, i) => (i === index ? editedName : name)))
      setEditingGroupId(null)
      setEditedName("")
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
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
            Back
          </button>
        </div>

        {/* Flashcard Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Flashcards</h1>

        {/* Add New Group Button (Top Right) */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors duration-200 flex items-center font-medium shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Group
          </button>
        </div>

        {/* Groups List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <div key={index} className="relative group">
              {editingGroupId === index ? (
                <div className="flex gap-2 bg-white p-2 rounded-lg shadow-md">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg flex-1 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="h-full">
                  <Link
                    href={`/skills/vocabulary/${group.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block h-full rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 shadow-sm transition-all duration-200 hover:shadow-md p-6 text-center"
                  >
                    <div className="flex flex-col items-center justify-center h-full py-6">
                      <span className="text-blue-800 font-semibold text-xl mb-2">{group}</span>
                      <span className="text-blue-600 text-sm">Click to view flashcards</span>
                    </div>
                  </Link>

                  <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        handleEditGroup(index, group)
                      }}
                      className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 p-1.5 rounded-md transition-colors"
                      aria-label="Edit group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        handleDeleteGroup(index)
                      }}
                      className="bg-red-100 hover:bg-red-200 text-red-700 p-1.5 rounded-md transition-colors"
                      aria-label="Delete group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Popup for Creating New Group */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 transform transition-all duration-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Create New Flashcard Group</h2>
              <form onSubmit={handleCreateGroup}>
                <input
                  type="text"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Enter group name"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(false)}
                    className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
