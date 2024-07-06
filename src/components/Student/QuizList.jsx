"use client";

import React, { useState } from "react";
import { card } from "@/css/quizList.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const QuizList = () => {
  const router = useRouter();

  const [courses, setCourse] = useState([
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

  // Check if courses is defined and is an array
  if (!Array.isArray(courses) || courses.length === 0) {
    return <p>No courses available</p>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center z-30 ">
        {courses.map((course) => (
          <div
            key={course._id}
            className="m-2 backdrop-blur-lg bg-[#ffffff00] cursor-pointer"
            onClick={() => {
              router.push("/student/EnterKey");
            }}
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
    </>
  );
};

export default QuizList;
