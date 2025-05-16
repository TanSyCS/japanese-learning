"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Pencil } from "lucide-react"
export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("/mascot.png")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-semibold flex items-center">
              General Information
            </h1>
          </div>

          <div className="p-6">
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                  <Image
                    src={profileImage || "/mascot.png"}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer shadow-md transition-colors"
                >
                  <Pencil className="h-4 w-4" />
                </label>
                <input
                  type="file"
                  id="profile-image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Change profile picture</button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-700">Last Name</div>
                <div className="md:col-span-2 flex items-center">
                  <span className="text-gray-900">Nihongo</span>
                  <button className="ml-2 text-gray-400 hover:text-blue-600">
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-700">First Name</div>
                <div className="md:col-span-2 flex items-center">
                  <span className="text-gray-900">Learning</span>
                  <button className="ml-2 text-gray-400 hover:text-blue-600">
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-700">Email</div>
                <div className="md:col-span-2 flex items-center">
                  <span className="text-gray-900">user1@gmail.com</span>
           
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-700">Username</div>
                <div className="md:col-span-2 flex items-center">
                  <span className="text-gray-900">NihongoLearning1</span>
                  <button className="ml-2 text-gray-400 hover:text-blue-600">
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-700">Learning Streak</div>
                <div className="md:col-span-2">
                  <span className="text-gray-900">7 days</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold flex items-center">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full mr-3">
                2
              </span>
              Learning Progress
            </h2>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-700">Current Level</div>
                <div className="md:col-span-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    Beginner
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-700">Completed Lessons</div>
                <div className="md:col-span-2">
                  <span className="text-gray-900">12 lessons</span>
                </div>
              </div>

           

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-medium text-gray-700">Vocabulary Mastered</div>
                <div className="md:col-span-2">
                  <span className="text-gray-900">85 words</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  )
}
