"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const OverallPerformancePage = () => {
  const [results, setResults] = useState([]);
  const [groupedResults, setGroupedResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/student/getOverallPerformance");
        setResults(data);
        groupResultsByCourseAndBatch(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const groupResultsByCourseAndBatch = (results) => {
    const grouped = results.reduce((acc, result) => {
      const key = `${result.course_name} - Batch ${result.batch}`;
      if (!acc[key]) {
        acc[key] = {
          course: result.course_name,
          batch: result.batch,
          quizzes: [],
        };
      }
      acc[key].quizzes.push(result);
      return acc;
    }, {});

    setGroupedResults(Object.values(grouped));
  };

  const calculateAggregatedResult = (quizzes) => {
    const totalQuizzes = quizzes.length;
    const totalQuestions = quizzes.reduce(
      (sum, quiz) => sum + quiz.totalQuestions,
      0
    );
    const totalCorrectAnswers = quizzes.reduce(
      (sum, quiz) => sum + quiz.score,
      0
    );

    const percentage = ((totalCorrectAnswers / totalQuestions) * 100).toFixed(
      2
    );

    return {
      totalQuizzes,
      totalQuestions,
      totalCorrectAnswers,
      percentage,
    };
  };

  if (!groupedResults.length) {
    return (
      <>
        <div className=" backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl h-dvh w-dvw flex items-center justify-center">
          {loading && <Loading />}
          {!loading && <div className=" text-[60px] font-extrabold tracking-widest text-button">No Quizzes Attempted Yet</div>}
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center h-dvh w-dvw overflow-y-scroll overflow-x-auto">
      <Toaster position="top-right" reverseOrder={true} />
      <h1 className="text-2xl font-extrabold my-6 tracking-widest">
        Overall Performance
      </h1>
      {groupedResults.map((group, index) => {
        const aggregatedResult = calculateAggregatedResult(group.quizzes);
        return (
          <div
            key={index}
            className="w-full max-w-[90%] backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl p-6 mb-6"
          >
            <h2 className="text-3xl font-bold mb-4 md:text-2xl">
              {group.course} - Batch {group.batch}
            </h2>
            <hr />
            <div className="my-4 text-xl md:text-lg">
              <p className="my-2">
                {" "}
                <span className="font-semibold">
                  Total Quizzes Attempted:
                </span>{" "}
                <span className="text-2xl md:text-xl">
                  {aggregatedResult.totalQuizzes}
                </span>
              </p>
              <p className="my-2">
                {" "}
                <span className="font-semibold">Total Questions:</span>{" "}
                <span className="text-2xl">
                  {aggregatedResult.totalQuestions}
                </span>
              </p>
              <p className="my-2">
                {" "}
                <span className="font-semibold">
                  {" "}
                  Total Correct Answers:
                </span>{" "}
                <span className="text-2xl">
                  {aggregatedResult.totalCorrectAnswers}
                </span>
              </p>
              <p className="my-2">
                {" "}
                <span className="font-semibold"> Percentage:</span>{" "}
                <span className="text-2xl">{aggregatedResult.percentage}%</span>
              </p>
            </div>
            <div className="overflow-y-auto">
              <table className="min-w-full backdrop-blur-2xl bg-[#ffffff00] shadow-inner lg950px:min-w-[1000px] lg950px:overflow-x-auto ">
                <thead>
                  <tr className="shadow-inner text-xl">
                    <th className="p-4 shadow-inner">Quiz Name</th>
                    <th className="p-4 shadow-inner">Score</th>
                    <th className="p-4 shadow-inner">Total Questions</th>
                    <th className="p-4 shadow-inner">Percentage</th>
                    <th className="p-4 shadow-inner">Date Taken</th>
                  </tr>
                </thead>
                <tbody>
                  {group.quizzes.map((quiz, idx) => {
                    const percentage = (
                      (quiz.score / quiz.totalQuestions) *
                      100
                    ).toFixed(2);

                    return (
                      <tr key={idx} className="text-lg">
                        <td className="border px-4 py-2">{quiz.quiz_name}</td>
                        <td className="border px-4 py-2 text-center">
                          {quiz.score}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {quiz.totalQuestions}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {percentage}%
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {new Date(quiz.date).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OverallPerformancePage;
