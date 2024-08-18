"use client";

import React, { useEffect, useState } from "react";
import { card } from "@/css/quizList.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loading from "../Loading";

const DashBoard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get("/api/student/quiz/getStudentQuiz");
        setCourses(data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  if (!courses.length) {
    return (
      <>
        <div className=" backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl h-[90dvh] w-dvw flex items-center justify-center">
          {loading && <Loading />}
          {!loading && <div className="text-[60px] md:text-[28px] font-extrabold tracking-widest text-button">No Quizzes Available</div>}
        </div>
      </>
    );
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
    </>
  );
};

export default DashBoard;
