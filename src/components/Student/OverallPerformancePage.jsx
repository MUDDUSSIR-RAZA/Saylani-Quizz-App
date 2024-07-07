"use client";

import { useEffect, useState } from "react";

const fakeResults = [
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b2",
      course_name: "Web and App Development",
      quiz_name: "HTML Basics",
      questions: ["60f7b2f8b1c2c2a1b1a1b1b3", "60f7b2f8b1c2c2a1b1a1b1b4"],
      quizOpen: true,
    },
    score: 8,
    totalQuestions: 10,
    answers: [
      {
        question: "60f7b2f8b1c2c2a1b1a1b1b3",
        selected_option: "A",
        correct: true,
      },
      {
        question: "60f7b2f8b1c2c2a1b1a1b1b4",
        selected_option: "B",
        correct: false,
      },
    ],
    date_taken: "2024-06-01T10:00:00Z",
    batch: 1,
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "CSS Basics",
      questions: ["60f7b2f8b1c2c2a1b1a1b1b6", "60f7b2f8b1c2c2a1b1a1b1b7"],
      quizOpen: true,
    },
    score: 7,
    totalQuestions: 10,
    answers: [
      {
        question: "60f7b2f8b1c2c2a1b1a1b1b6",
        selected_option: "C",
        correct: true,
      },
      {
        question: "60f7b2f8b1c2c2a1b1a1b1b7",
        selected_option: "D",
        correct: false,
      },
    ],
    date_taken: "2024-06-10T10:00:00Z",
    batch: 1,
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b8",
      course_name: "Web and App Development",
      quiz_name: "JavaScript Basics",
      questions: ["60f7b2f8b1c2c2a1b1a1b1b9", "60f7b2f8b1c2c2a1b1a1b1ba"],
      quizOpen: true,
    },
    score: 9,
    totalQuestions: 10,
    answers: [
      {
        question: "60f7b2f8b1c2c2a1b1a1b1b9",
        selected_option: "B",
        correct: true,
      },
      {
        question: "60f7b2f8b1c2c2a1b1a1b1ba",
        selected_option: "A",
        correct: true,
      },
    ],
    date_taken: "2024-06-15T10:00:00Z",
    batch: 2,
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1bb",
      course_name: "Data Structures",
      quiz_name: "Arrays",
      questions: ["60f7b2f8b1c2c2a1b1a1b1bc", "60f7b2f8b1c2c2a1b1a1b1bd"],
      quizOpen: true,
    },
    score: 6,
    totalQuestions: 10,
    answers: [
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bc",
        selected_option: "C",
        correct: true,
      },
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bd",
        selected_option: "B",
        correct: false,
      },
    ],
    date_taken: "2024-06-20T10:00:00Z",
    batch: 2,
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1be",
      course_name: "Algorithms",
      quiz_name: "Sorting Algorithms",
      questions: ["60f7b2f8b1c2c2a1b1a1b1bf", "60f7b2f8b1c2c2a1b1a1b1bg"],
      quizOpen: true,
    },
    score: 8,
    totalQuestions: 10,
    answers: [
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bf",
        selected_option: "D",
        correct: true,
      },
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bg",
        selected_option: "A",
        correct: true,
      },
    ],
    date_taken: "2024-06-25T10:00:00Z",
    batch: 3,
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1bh",
      course_name: "Databases",
      quiz_name: "SQL Basics",
      questions: ["60f7b2f8b1c2c2a1b1a1b1bi", "60f7b2f8b1c2c2a1b1a1b1bj"],
      quizOpen: true,
    },
    score: 7,
    totalQuestions: 10,
    answers: [
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bi",
        selected_option: "A",
        correct: true,
      },
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bj",
        selected_option: "C",
        correct: false,
      },
    ],
    date_taken: "2024-06-30T10:00:00Z",
    batch: 3,
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1bk",
      course_name: "Web and App Development",
      quiz_name: "Advanced JavaScript",
      questions: ["60f7b2f8b1c2c2a1b1a1b1bl", "60f7b2f8b1c2c2a1b1a1b1bm"],
      quizOpen: true,
    },
    score: 9,
    totalQuestions: 10,
    answers: [
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bl",
        selected_option: "B",
        correct: true,
      },
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bm",
        selected_option: "D",
        correct: true,
      },
    ],
    date_taken: "2024-07-05T10:00:00Z",
    batch: 4,
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1bn",
      course_name: "Data Structures",
      quiz_name: "Linked Lists",
      questions: ["60f7b2f8b1c2c2a1b1a1b1bo", "60f7b2f8b1c2c2a1b1a1b1bp"],
      quizOpen: true,
    },
    score: 8,
    totalQuestions: 10,
    answers: [
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bo",
        selected_option: "C",
        correct: true,
      },
      {
        question: "60f7b2f8b1c2c2a1b1a1b1bp",
        selected_option: "A",
        correct: false,
      },
    ],
    date_taken: "2024-07-10T10:00:00Z",
    batch: 4,
  },
];

const OverallPerformancePage = ({ studentId }) => {
  const [results, setResults] = useState([]);
  const [groupedResults, setGroupedResults] = useState([]);

  useEffect(() => {
    // Replace with actual fetch call
    // const fetchResults = async () => {
    //   const response = await fetch(`/api/get-results?studentId=${studentId}`);
    //   const data = await response.json();
    //   setResults(data);
    //   groupResultsByCourseAndBatch(data);
    // };
    // fetchResults();

    // Using fakeResults for demonstration
    setResults(fakeResults);
    groupResultsByCourseAndBatch(fakeResults);
  }, [studentId]);

  const groupResultsByCourseAndBatch = (results) => {
    const grouped = results.reduce((acc, result) => {
      const key = `${result.quiz.course_name} - Batch ${result.batch}`;
      if (!acc[key]) {
        acc[key] = {
          course: result.quiz.course_name,
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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center h-dvh w-dvw overflow-y-scroll">
      <h1 className="text-2xl font-bold my-6">Overall Performance</h1>
      {groupedResults.map((group, index) => {
        const aggregatedResult = calculateAggregatedResult(group.quizzes);
        return (
          <div
            key={index}
            className="w-full max-w-2xl backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-md p-6 mb-6"
          >
            <h2 className="text-xl font-bold mb-4">
              {group.course} - Batch {group.batch}
            </h2>
            <div className="mb-4">
              <p>Total Quizzes Attempted: {aggregatedResult.totalQuizzes}</p>
              <p>Total Questions: {aggregatedResult.totalQuestions}</p>
              <p>
                Total Correct Answers: {aggregatedResult.totalCorrectAnswers}
              </p>
              <p>Percentage: {aggregatedResult.percentage}%</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Quiz Name</th>
                    <th className="px-4 py-2">Score</th>
                    <th className="px-4 py-2">Total Questions</th>
                    <th className="px-4 py-2">Date Taken</th>
                  </tr>
                </thead>
                <tbody>
                  {group.quizzes.map((quiz, idx) => (
                    <tr key={idx}>
                      <td className="border px-4 py-2">
                        {quiz.quiz.quiz_name}
                      </td>
                      <td className="border px-4 py-2">{quiz.score}</td>
                      <td className="border px-4 py-2">
                        {quiz.totalQuestions}
                      </td>
                      <td className="border px-4 py-2">
                        {new Date(quiz.date_taken).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
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
