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
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "Advanced CSS",
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
    date_taken: "2024-06-15T10:00:00Z",
  },,
  {
    student: "lkj",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "Advanced CSS",
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
    date_taken: "2024-06-15T10:00:00Z",
  },
  {
    student: "60f7ddb2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "Advanced CSS",
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
    date_taken: "2024-06-15T10:00:00Z",
  },
  {
    student: "60f7sdb2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "Advanced CSS",
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
    date_taken: "2024-06-15T10:00:00Z",
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "Advanced CSS",
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
    date_taken: "2024-06-15T10:00:00Z",
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "Advanced CSS",
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
    date_taken: "2024-06-15T10:00:00Z",
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "Advanced CSS",
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
    date_taken: "2024-06-15T10:00:00Z",
  },
  {
    student: "60f7b2f8b1c2c2a1b1a1b1b1",
    quiz: {
      _id: "60f7b2f8b1c2c2a1b1a1b1b5",
      course_name: "Web and App Development",
      quiz_name: "Advanced CSS",
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
    date_taken: "2024-06-15T10:00:00Z",
  }
];

  

const OverallPerformancePage = ({ studentId }) => {
  const [results, setResults] = useState([]);
  const [aggregatedResult, setAggregatedResult] = useState(null);

  useEffect(() => {
    // Replace with actual fetch call
    // const fetchResults = async () => {
    //   const response = await fetch(`/api/get-results?studentId=${studentId}`);
    //   const data = await response.json();
    //   setResults(data);
    //   calculateAggregatedResult(data);
    // };
    // fetchResults();

    // Using fakeResults for demonstration
    setResults(fakeResults);
    calculateAggregatedResult(fakeResults);
  }, [studentId]);

  const calculateAggregatedResult = (results) => {
    const totalQuizzes = results.length;
    const totalQuestions = results.reduce((sum, result) => sum + result.totalQuestions, 0);
    const totalCorrectAnswers = results.reduce((sum, result) => sum + result.score, 0);

    const percentage = ((totalCorrectAnswers / totalQuestions) * 100).toFixed(2);

    setAggregatedResult({
      totalQuizzes,
      totalQuestions,
      totalCorrectAnswers,
      percentage,
    });
  };

  if (!aggregatedResult) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-2xl backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Overall Performance</h1>
        <div className="mb-4">
          <p>Total Quizzes Attempted: {aggregatedResult.totalQuizzes}</p>
          <p>Total Questions: {aggregatedResult.totalQuestions}</p>
          <p>Total Correct Answers: {aggregatedResult.totalCorrectAnswers}</p>
          <p>Overall Percentage: {aggregatedResult.percentage}%</p>
        </div>
        <h2 className="text-xl font-semibold mt-6 mb-4">Detailed Results</h2>
        <div className="h-[250px] overflow-scroll">
          <table className="min-w-full backdrop-blur-3xl bg-[#ffffff00] border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Quiz ID</th>
                <th className="px-4 py-2 border">Total Questions</th>
                <th className="px-4 py-2 border">Score</th>
                <th className="px-4 py-2 border">Date Taken</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{result.quiz.course_name}</td>
                  <td className="px-4 py-2 border">{result.totalQuestions}</td>
                  <td className="px-4 py-2 border">{result.score}</td>
                  <td className="px-4 py-2 border">
                    {new Date(result.date_taken).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverallPerformancePage;
