"use client";

import React, { useEffect, useState } from "react";
import { card } from "@/css/quizList.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

const DashBoard = () => {
  const router = useRouter();

  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/student/quiz/getStudentQuiz");

        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const [showKeyEntry, setShowKeyEntry] = useState(false);
  // const [selectedQuizId, setSelectedQuizId] = useState(null);
  // const [enteredKey, setEnteredKey] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleQuizClick = (quizId) => {
  //   setSelectedQuizId(quizId);
  //   setShowKeyEntry(true);
  // };

  // const handleKeySubmit = async () => {
  //   try {
  //     // const { data } = await axios.post("student/quiz/checkKey", {
  //     //   key: enteredKey,
  //     //   quizId: selectedQuizId,
  //     // });

  //     router.push(`/student/quiz/${selectedQuizId}?key=${enteredKey}`);
  //   } catch (error) {
  //     setErrorMessage(error.response.data);
  //   }
  // };

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
            onClick={() => router.push(`/student/quiz/${course._id}`)}
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
                  {course.displayQuestions} <a href="#">Questions</a>
                </p>
              </main>
            </section>
          </div>
        ))}
      </div>
      {/* {showKeyEntry && (
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
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </div>
        </div>
      )} */}
    </>
  );
};

export default DashBoard;
