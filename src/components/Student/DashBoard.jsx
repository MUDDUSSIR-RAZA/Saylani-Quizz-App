"use client";

import React, { useState } from "react";
import { card } from "@/css/quizList.module.css";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const router = useRouter();

  const [courses, setCourses] = useState([
    {
      _id: "60d21b4667d0d8992e610c85",
      course_name: "Web And App Development",
      quiz_name: "HTML",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c90",
          question_text: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          correct_option_index: 1,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c91",
          question_text: "What is 3 * 3?",
          options: ["6", "7", "8", "9"],
          correct_option_index: 3,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c91",
          question_text: "What is 3 * 3?",
          options: ["6", "7", "8", "9"],
          correct_option_index: 3,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c91",
          question_text: "What is 3 * 3?",
          options: ["6", "7", "8", "9"],
          correct_option_index: 3,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c91",
          question_text: "What is 3 * 3?",
          options: ["6", "7", "8", "9"],
          correct_option_index: 3,
          time_limit: 30,
        },
      ],
      quizOpen: true,
    },
  ]);

  const [showKeyEntry, setShowKeyEntry] = useState(false);
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [enteredKey, setEnteredKey] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuizClick = (quizId) => {
    setSelectedQuizId(quizId);
    setShowKeyEntry(true);
  };

  const handleKeySubmit = async () => {
    try {

      router.push(`/student/quiz/${selectedQuizId}`)


      // const response = await fetch("/api/check-key", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ key: enteredKey, quizId: selectedQuizId }),
      // });

      // const data = await response.json();

      // if (data.success) {
      //   router.push({
      //     pathname: `/quiz/${selectedQuizId}`,
      //     query: { key: enteredKey },
      //   });
      // } else {
      //   setErrorMessage("Invalid key. Please try again.");
      // }
    } catch (error) {
      // setErrorMessage("An error occurred. Please try again.");
    }
  };

  if (!Array.isArray(courses) || courses.length === 0) {
    return <p>No courses available</p>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center z-30">
        {courses.map((course) => (
          <div
            key={course._id}
            className="m-2 backdrop-blur-lg bg-[#ffffff00] cursor-pointer"
            onClick={() => handleQuizClick(course._id)}
          >
            <section className={` ${card}`}>
              <header className="flex flex-col">
                <u>
                  <h1 className="flex justify-center w-full font-extrabold tracking-widest">
                    {course.course_name}
                  </h1>
                </u>
                <p className="flex justify-center w-full font-semibold">
                  {course.quiz_name}
                </p>
              </header>
              <main>
                <p>
                  {course.questions.length} <a href="#">Questions</a>
                </p>
              </main>
            </section>
          </div>
        ))}
      </div>
      {showKeyEntry && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-3">Enter Quiz Key</h2>
            <input
              type="text"
              value={enteredKey}
              onChange={(e) => setEnteredKey(e.target.value)}
              className="border p-2 mb-3 w-full"
              placeholder="Enter key"
            />
            <button
              onClick={handleKeySubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
