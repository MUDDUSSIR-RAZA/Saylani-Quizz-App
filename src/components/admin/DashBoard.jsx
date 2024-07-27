"use client";

import React, { useState } from "react";
import { card } from "@/css/quizList.module.css";
import Link from "next/link";

const DashBoard = ({quizzes}) => {
  console.log("first quizzes" , quizzes)

  // Check if courses is defined and is an array
  if (!Array.isArray(quizzes) || quizzes.length === 0) {
    return <p>No courses available</p>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center z-30 ">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="m-2 backdrop-blur-lg bg-[#ffffff00]">
            <section className={` ${card}`}>
              <header>
                <p>{quiz.quiz_name}</p>
                <a href="#" className="text-[#893232]">
                  Delete
                </a>
              </header>
              <main>
                <p>
                  {quiz.questions.length} <a href="#">Questions</a>
                </p>
              </main>
              <footer className="relative">
                {quiz.quizOpen ? (
                  <p className="text-[#287c22] text-base">Quiz Open</p>
                ) : (
                  <p className="text-[#a72727]  text-base">Quiz Closed</p>
                )}
                <Link href={`/admin/editquiz/${quiz._id}`} className="absolute right-6 cursor-pointer">
                  Edit
                </Link>
              </footer>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashBoard;

// import { card } from "@/css/quizList.module.css";

// const quizList = ({ course }) => {
//   console.log(course);
//   return (
//     <>
//       {course.map((course) => {
//         <section className={`backdrop-blur-sm ${card}`}>
//           <header>
//             <p>{course.course_name}</p>
//             <a href="#" className=" text-[#18af94]">
//               Details
//             </a>
//           </header>
//           <main>
//             <p>
//               {course.questions.length} <a href="#">Questions</a>
//             </p>
//           </main>
//           <footer className="relative">
//             {course.quizOpen ? (
//               <p className="text-green-800"> Quiz Open </p>
//             ) : (
//               <p className="text-[#ff0000]"> Quiz Closed </p>
//             )}
//             <a href="#" className="absolute right-6">
//               Edit
//             </a>
//           </footer>
//         </section>;
//       })}
//     </>
//   );
// };

// export default QuizList;
