"use client"

import { useState, useEffect } from "react"
import { Check, BookOpen } from "lucide-react"

// Hàm lấy số ngày trong một tháng cụ thể (năm hiện tại)
const getDaysInMonth = (month: number) => {
  return new Date(new Date().getFullYear(), month, 0).getDate();
};

const AttendancePage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); 
  const [completedDays, setCompletedDays] = useState<number[]>([]); 
  const totalDays = getDaysInMonth(currentMonth);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const mockCompletedDays = [1, 2, 3, 7, 10, 15, 22];

  useEffect(() => {
    setCompletedDays(mockCompletedDays.filter(day => day <= totalDays));
  }, [currentMonth, totalDays]);

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= totalDays; i++) {
      const isCompleted = completedDays.includes(i);
      days.push(
        <div key={i} className="flex flex-col items-center">
          <div
            className={`w-14 h-14 border-2 border-gray-300 rounded flex items-center justify-center ${
              isCompleted ? "bg-green-100 border-green-300" : "bg-white"
            }`}
            aria-label={`Day ${i} ${isCompleted ? "completed" : "not completed"}`}
          >
            {isCompleted ? (
              <Check className="w-6 h-6 text-green-600" />
            ) : (
              <BookOpen className="w-6 h-6 text-gray-400" />
            )}
          </div>
          <span className="text-sm mt-1">Day {i}</span>
        </div>,
      );
    }
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 1 ? 12 : prev - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 12 ? 1 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-4">Attendance</h1>
        <p className="text-center mb-4">Your learning streak for {monthNames[currentMonth - 1]}!</p>

        <div className="flex justify-center mb-4">
          <button onClick={handlePrevMonth} className="px-4 py-2 rounded-l-lg bg-gray-100 hover:bg-gray-200 border border-gray-300">Previous</button>
          <span className="px-6 py-2 border-y border-gray-300">{monthNames[currentMonth - 1]}</span>
          <button onClick={handleNextMonth} className="px-4 py-2 rounded-r-lg bg-gray-100 hover:bg-gray-200 border border-gray-300">Next</button>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid grid-cols-7 gap-4">{renderDays()}</div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-medium">You have learned on {completedDays.length} days in {monthNames[currentMonth-1]}.</p>
          <p className="text-sm text-gray-600 mt-2">Keep up the great work!</p>
        </div>
      </div>
    </main>
  );
};

export default AttendancePage;