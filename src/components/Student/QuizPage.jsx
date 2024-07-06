"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const quizDetails = {
  id: "dsfdsf",
  quiz_name: "HTML",
  course: "Web and App Development",
  key: "dsasadassad545",
  quiz: [
    {
      correct_answer: "3",
      options: ["1", "2", "3", "4"],
      question_text: "What is the length of the array [1, 2, 3, 4]?",
      time_limit: 30,
      author_id: "fsd2f454f5sfddsf",
      id: "dsfdsfsf534dsfds",
    },
    {
      correct_answer: "splice",
      options: ["slice", "splice", "split", "join"],
      question_text:
        "Which method can be used to remove elements from an array?",
      time_limit: 30,
      author_id: "fsd2f454f5sfddsf",
      id: "dsfdsfsf534dsfdg",
    },
    {
      correct_answer: "map",
      options: ["filter", "reduce", "map", "forEach"],
      question_text:
        "Which array method creates a new array populated with the results of calling a provided function on every element in the calling array?",
      time_limit: 30,
      author_id: "fsd2f454f5sfddsf",
      id: "dsfdsfsf534dsfdh",
    },
    {
      correct_answer: "0",
      options: ["0", "1", "undefined", "null"],
      question_text: "What is the index of the first element in an array?",
      time_limit: 30,
      author_id: "fsd2f454f5sfddsf",
      id: "dsfdsfsf534dsfdi",
    },
    {
      correct_answer: "filter",
      options: ["find", "filter", "reduce", "some"],
      question_text:
        "Which method creates a new array with all elements that pass the test implemented by the provided function?",
      time_limit: 30,
      author_id: "fsd2f454f5sfddsf",
      id: "dsfdsfsf534dsfdj",
    },
  ],
};

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleOptionClick = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    const currentQuestion = quizDetails.quiz[currentQuestionIndex];
    if (userAnswers[currentQuestion.id] === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < quizDetails.quiz.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
      submitResult();
    }
  };

  const submitResult = async () => {
    try {
      const response = await fetch("/api/submit-result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userAnswers,
          score,
          quizId: quizDetails.id,
        }),
      });

      if (response.ok) {
        console.log("Result submitted successfully");
      } else {
        console.error("Error submitting result");
      }
    } catch (error) {
      console.error("Error submitting result:", error);
    }
  };

  if (isQuizCompleted) {
    return (
      <div className="flex justify-center flex-col items-center h-screen backdrop-blur-xl bg-bgColor rounded-lg shadow-2xl ">
        <h1 className="text-3xl ">Quiz Completed!</h1>
        <br />
        <br />
        <p>
          Your Score: {score} / {quizDetails.quiz.length}
        </p>
      </div>
    );
  }

  const currentQuestion = quizDetails.quiz[currentQuestionIndex];

  return (
    <>
      <div className="w-dvw h-dvh flex justify-center items-center md:mt-10">
        <div className="flex flex-col items-center backdrop-blur-xl bg-bgColor rounded-lg shadow-2xl p-7">
          <h1 className="text-2xl font-bold tracking-widest">
            {quizDetails.quiz_name}
          </h1>
          <br />
          <br />
          <p className="text-xl mb-7 backdrop-blur-3xl shadow-inner bg-[#373c3c26] rounded-lg p-3">
            {currentQuestion.question_text}
          </p>
          <div className="flex flex-col w-full justify-center items-center">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(currentQuestion.id, option)}
                className="bg-button hover:bg-blue-700 active:bg-violet-700 focus:bg-sky-800  focus:outline-none focus:ring focus:ring-sky-950 text-white font-bold py-2 px-4 rounded mb-2 min-w-[60%]"
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   const quizDetails = {
//     id: 'dsfdsf',
//     quiz_name: 'HTML',
//     course: 'Web and App Development',
//     key: 'dsasadassad545',
//     quiz: [
//       {
//         correct_answer: '2',
//         options: ['1', '2', '3', '4'],
//         question_text: 'What is the length of the array [1, 2, 3, 4]?',
//         time_limit: 30,
//         author_id: 'fsd2f454f5sfddsf',
//         id: 'dsfdsfsf534dsfds',
//       },
//       {
//         correct_answer: 'splice',
//         options: ['slice', 'splice', 'split', 'join'],
//         question_text: 'Which method can be used to remove elements from an array?',
//         time_limit: 30,
//         author_id: 'fsd2f454f5sfddsf',
//         id: 'dsfdsfsf534dsfdg',
//       },
//       {
//         correct_answer: 'map',
//         options: ['filter', 'reduce', 'map', 'forEach'],
//         question_text: 'Which array method creates a new array populated with the results of calling a provided function on every element in the calling array?',
//         time_limit: 30,
//         author_id: 'fsd2f454f5sfddsf',
//         id: 'dsfdsfsf534dsfdh',
//       },
//       {
//         correct_answer: '0',
//         options: ['0', '1', 'undefined', 'null'],
//         question_text: 'What is the index of the first element in an array?',
//         time_limit: 30,
//         author_id: 'fsd2f454f5sfddsf',
//         id: 'dsfdsfsf534dsfdi',
//       },
//       {
//         correct_answer: 'filter',
//         options: ['find', 'filter', 'reduce', 'some'],
//         question_text: 'Which method creates a new array with all elements that pass the test implemented by the provided function?',
//         time_limit: 30,
//         author_id: 'fsd2f454f5sfddsf',
//         id: 'dsfdsfsf534dsfdj',
//       },
//     ],
//   };

//   return { props: { quizDetails } };
// }

export default QuizPage;
