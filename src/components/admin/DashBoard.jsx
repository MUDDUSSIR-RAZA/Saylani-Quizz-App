"use client";

import React, { useEffect, useState } from "react";
import { card } from "@/css/quizList.module.css";
import Link from "next/link";
import Loading from "../Loading";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const DashBoard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/admin/quiz/getAllQuiz`);
        setQuizzes(data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error(error.response.data);
      }
    };

    fetchData();
  }, []);

  const getUpdateData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getAllQuizzes`
      );
      setQuizzes(data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  if (!quizzes.length) {
    return (
      <>
          <div className=" backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl h-[90dvh] w-dvw flex items-center justify-center">
            {loading && <Loading />}
            {!loading && (
              <div className="text-[60px] md:text-[28px] font-extrabold tracking-widest text-button">
                No Quizzes Available
              </div>
            )}
          </div>
        </>
    );
  }

  if (!Array.isArray(quizzes) || quizzes.length === 0) {
    return (
      <div className=" backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl h-[90dvh] w-dvw flex items-center justify-center">
        <div className="text-[60px] md:text-[28px] font-extrabold tracking-widest text-button">
          No Quizzes Available
        </div>
      </div>
    );
  }

  const handleDelete = async (_id) => {
    try {
      const { data } = await axios.post("/api/admin/quiz/deleteQuiz", {
        _id,
      });
      toast.success(data);
      getUpdateData();
    } catch (error) {
      toast.error(error.response.data || "Error updating data.");
    }
  };


  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex flex-wrap justify-center z-30 ">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="m-2 backdrop-blur-lg bg-[#ffffff00]">
            <section className={` ${card}`}>
              <header>
                <p>{quiz.quiz_name}</p>
                <a
                  onClick={() => {
                    handleDelete(quiz._id);
                  }}
                  className="text-[#893232]"
                >
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
                <Link
                  href={`/admin/editquiz/${quiz._id}`}
                  className="absolute right-6 cursor-pointer"
                >
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
