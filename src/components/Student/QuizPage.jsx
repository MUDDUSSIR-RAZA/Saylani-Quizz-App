// // pages/api/check-key.js

// export default async function handler(req, res) {
//   const { key, quizId } = req.body;

//   // Dummy data for key validation
//   const validKey = "dsasadassad545";
//   const quizDetails = {
//     id: "dsfdsf",
//     quiz_name: "HTML",
//     course: "Web and App Development",
//     key: validKey,
//     quiz: [
//       // quiz questions
//     ],
//   };

//   if (key === validKey && quizId === quizDetails.id) {
//     res.status(200).json({ success: true, quizDetails });
//   } else {
//     res.status(401).json({ success: false, message: "Invalid key or quiz ID" });
//   }
// }

"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaMedal } from "react-icons/fa";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../AnimatedProgressProvider";

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
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quizDetails.quiz[0].time_limit);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      router.push("/");
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && !isPaused) {
        setTimeLeft(timeLeft - 1);
      } else if (!isPaused) {
        handleNextQuestion();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isPaused]);

  useEffect(() => {
    const enterFullscreen = () => {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    };

    const handleFullscreenChange = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.mozFullScreenElement &&
        !document.msFullscreenElement
      ) {
        setIsFullScreen(false);
        setIsPaused(true);
      } else {
        setIsFullScreen(true);
        setIsPaused(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    if (quizStarted) {
      enterFullscreen();
    }

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, [quizStarted]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log("User has switched tabs or minimized the browser.");
      }
    };
  
    document.addEventListener('visibilitychange', handleVisibilityChange);
  
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isQuizCompleted) {
      setTimeLeft(0); // Set time left to 0 when quiz is completed
      return;
    }

    // Ensure currentQuestionIndex is within bounds
    if (
      currentQuestionIndex >= 0 &&
      currentQuestionIndex < quizDetails.quiz.length
    ) {
      setTimeLeft(quizDetails.quiz[currentQuestionIndex].time_limit);
    }

    return () => {
      // Cleanup function (if needed)
    };
  }, [currentQuestionIndex, isQuizCompleted, quizDetails.quiz]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setIsFullScreen(true);
  };

  const handleOptionClick = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < quizDetails.quiz.length - 1) {
      console.log(
        "🚀 ~ handleSkipQuestion ~ currentQuestionIndex:",
        currentQuestionIndex
      );
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
      submitResult();
    }
  };

  const handleNextQuestion = () => {
    const currentQuestion = quizDetails.quiz[currentQuestionIndex];
    if (userAnswers[currentQuestion.id] === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < quizDetails.quiz.length - 1) {
      console.log(
        "🚀 ~ handleNextQuestion ~ currentQuestionIndex:",
        currentQuestionIndex
      );
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

  if (!quizStarted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={handleStartQuiz}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (isQuizCompleted) {
    const percentageScore = (score / quizDetails.quiz.length) * 100;
    let badgeColor = "red";
    if (percentageScore >= 75) badgeColor = "green";
    else if (percentageScore >= 50) badgeColor = "yellow";
    else if (percentageScore >= 25) badgeColor = "red";

    return (
      <div className="flex justify-center flex-col items-center h-screen backdrop-blur-xl bg-bgColor rounded-lg shadow-2xl p-7">
        <h1 className="text-3xl font-bold mb-5">Quiz Completed!</h1>
        <div style={{ width: "150px", height: "150px" }}>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={percentageScore}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
          >
            {(value) => (
              <CircularProgressbar
                value={value}
                text={`${Math.round(value)}%`}
                styles={buildStyles({
                  textColor: "#f88",
                  pathColor: badgeColor,
                  trailColor: "#d6d6d6",
                })}
              />
            )}
          </AnimatedProgressProvider>
        </div>
        <br />
        <FaMedal size={50} color={badgeColor} />
        <p className="mt-5">
          Your Score: {score} / {quizDetails.quiz.length}
        </p>
      </div>
    );
  }

  const currentQuestion = quizDetails.quiz[currentQuestionIndex];

  return (
    <>
      {isPaused && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Quiz Paused</h2>
            <p>Please return to full-screen mode to continue the quiz.</p>
            <button
              onClick={() => {
                handleSkipQuestion();
                const element = document.documentElement;
                if (element.requestFullscreen) {
                  element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                  element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                  element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                  element.msRequestFullscreen();
                }
              }}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enter Full-Screen
            </button>
          </div>
        </div>
      )}

      {!isPaused && (
        <div className="w-dvw h-dvh flex justify-center items-center md:mt-10">
          <div className="flex flex-col items-center backdrop-blur-xl bg-bgColor rounded-lg shadow-2xl p-7">
            <h1 className="text-2xl font-bold tracking-widest mb-5">
              {quizDetails.quiz_name}
            </h1>
            <p className="text-xl mb-7 backdrop-blur-3xl shadow-inner bg-[#373c3c26] rounded-lg p-3">
              {currentQuestion.question_text}
            </p>
            <div className="flex flex-col w-full justify-center items-center">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(currentQuestion.id, option)}
                  className="bg-button hover:bg-blue-700 active:bg-violet-700 focus:bg-sky-800 focus:outline-none focus:ring focus:ring-sky-950 text-white font-bold py-2 px-4 rounded mb-2 min-w-[60%]"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-4">Time Left: {timeLeft} seconds</p>
            <button
              onClick={handleNextQuestion}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
              disabled={isPaused}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizPage;
