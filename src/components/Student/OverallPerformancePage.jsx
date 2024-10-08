"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const OverallPerformancePage = () => {
  const [groupedResults, setGroupedResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/student/getOverallPerformance");
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

  return (
    <div className="flex flex-col items-center  h-[90dvh] overflow-y-scroll overflow-x-auto px-5">
      <Toaster position="top-right" reverseOrder={true} />
      <header className="my-5 text-center backdrop-blur-2xl bg-[#918d8d52] shadow-inner text-button tracking-[5px] py-2 font-black rounded-xl w-full">
        <h1> Overall Performance</h1>
      </header>

      {groupedResults.map((group, index) => {
        const aggregatedResult = calculateAggregatedResult(group.quizzes);
        return (
          <div
            key={index}
            className="w-full max-w-[90%] md:max-w-full backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl p-6 mb-6"
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
              <table className="min-w-full backdrop-blur-2xl bg-[#ffffff00] shadow-inner lg950px:min-w-[1000px] md:min-w-[700px] smm:min-w-[600px] lg950px:overflow-x-auto ">
                <thead>
                  <tr className="shadow-inner text-xl md:text-lg">
                    <th className="p-4 shadow-inner md:px-0">Quiz Name</th>
                    <th className="p-4 shadow-inner md:px-0">Score</th>
                    <th className="p-4 shadow-inner md:px-0">
                      Total Questions
                    </th>
                    <th className="p-4 shadow-inner md:px-0">Percentage</th>
                    <th className="p-4 shadow-inner md:px-0">Date Taken</th>
                  </tr>
                </thead>
                <tbody>
                  {group.quizzes.map((quiz, idx) => {
                    const percentage = (
                      (quiz.score / quiz.totalQuestions) *
                      100
                    ).toFixed(2);

                    return (
                      <tr key={idx} className="text-lg md:text-base">
                        <td className="border px-4 py-2 ">{quiz.quiz_name}</td>
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
