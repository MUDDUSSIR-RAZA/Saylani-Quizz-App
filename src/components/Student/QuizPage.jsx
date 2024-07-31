"use client";

import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaMedal } from "react-icons/fa";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../AnimatedProgressProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const QuizPage = ({ quizId }) => {
  const [quizDetails, setQuizDetails] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();
  const [isResultSubmitted, setIsResultSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/student/quiz/getQuizById", {
          params: { quizId },
        });
        setQuizDetails(data);
        console.log(data);
        setTimeLeft(quizDetails.questions[0].time_limit);
        console.log(quizDetails.questions);
      } catch (error) {
        //  router.push("/student/dashboard")
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!quizStarted) return;

    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleNextQuestion();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted]);

  useEffect(() => {
    // Function to enter fullscreen
    const enterFullscreen = () => {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        /* Firefox */
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen();
      }
    };

    // Enter fullscreen when quiz starts
    if (quizStarted) {
      enterFullscreen();
    }

    // Lock fullscreen during quiz
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
      if (
        document.hidden &&
        quizStarted &&
        !isQuizCompleted &&
        !isResultSubmitted
      ) {
        setScore(0);
        submitResult();
        setIsResultSubmitted(true);
        setIsQuizCompleted(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [quizStarted, isQuizCompleted, isResultSubmitted]);

  useEffect(() => {
    if (isQuizCompleted) {
      setTimeLeft(0); // Set time left to 0 when quiz is completed
      return;
    }

    // Ensure quizDetails and quizDetails.questions are defined and currentQuestionIndex is within bounds
    if (
      quizDetails &&
      quizDetails.questions &&
      currentQuestionIndex >= 0 &&
      currentQuestionIndex < quizDetails.questions.length
    ) {
      setTimeLeft(quizDetails.questions[currentQuestionIndex].time_limit);
    }
  }, [currentQuestionIndex, isQuizCompleted, quizDetails]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };
  const handleOptionClick = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    const currentQuestion = quizDetails.questions[currentQuestionIndex];

    // Check if the current answer is correct and update score
    if (userAnswers[currentQuestion.id] === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question if available, otherwise set quiz as completed
    if (currentQuestionIndex < quizDetails.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  // Effect to submit result once quiz is completed
  useEffect(() => {
    if (isQuizCompleted && !isResultSubmitted) {
      submitResult();
      setScore(score);
      setIsResultSubmitted(true);
    }
  }, [isQuizCompleted, isResultSubmitted]);

  const submitResult = async () => {
    try {
      const { data } = await axios.post("/api/student/quiz/submitResult", {
        userId: quizDetails.userId,
        course_name: quizDetails.course_name,
        batch: quizDetails.course.batch,
        quiz_name: quizDetails.quiz_name,
        totalQuestions: quizDetails.questions.length,
        score,
      });
      toast.success(data);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  if (!quizStarted) {
    return (
      <div className="flex justify-center flex-col items-center h-screen backdrop-blur-xl bg-bgColor rounded-lg shadow-2xl p-7">
        <div className="flex flex-col justify-center items-center h-screen ">
          <div className="instructions bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            <p className="font-bold ">Instructions for Quiz Takers:</p>
            <br />
            <ul className="list-disc pl-5">
              <li>
                Do not exit the full-screen mode, or the current question will
                be skipped and{" "}
                <span className="text-red-600">
                  you won't get points for it.
                </span>
              </li>
              <li>
                Avoid switching tabs or minimizing the window, or the
                <span className="text-red-600">
                  {" "}
                  quiz will be submitted with a score of 0.
                </span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleStartQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-11 rounded-2xl text-6xl"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (isQuizCompleted) {
    const percentageScore = (score / quizDetails.questions.length) * 100;
    let badgeColor = "red";
    if (percentageScore >= 75) badgeColor = "green";
    else if (percentageScore >= 50) badgeColor = "yellow";
    else if (percentageScore >= 25) badgeColor = "red";

    return (
      <div className="flex justify-center flex-col items-center h-screen backdrop-blur-xl bg-bgColor rounded-lg shadow-2xl p-7">
        <Toaster position="top-right" reverseOrder={true} />
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
          Your Score: {score} / {quizDetails.questions.length}
        </p>
      </div>
    );
  }

  const currentQuestion = quizDetails.questions[currentQuestionIndex];

  const calculatePathColor = (timeLeft) => {
    const percentage = (timeLeft / 30) * 100; // Calculate percentage of time left

    // Determine color based on percentage
    if (percentage > 65) {
      return `rgba(76, 175, 80, ${percentage / 100})`; // Green color when > 65%
    } else if (percentage > 45) {
      return `rgba(255, 235, 59, ${percentage / 100})`; // Yellow color when > 45%
    } else {
      return `rgba(244, 67, 54, ${percentage / 100})`; // Red color below 45%
    }
  };

  return (
    <>
      {isPaused && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <Toaster position="top-right" reverseOrder={true} />
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Quiz Paused</h2>
            <p>Please return to full-screen mode to continue the quiz.</p>
            <button
              onClick={() => {
                handleNextQuestion();
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
          <Toaster position="top-right" reverseOrder={true} />
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
                  className="bg-button hover:bg-blue-700 active:bg-violet-700 focus:backdrop-blur-3xl focus:bg-[#38ff386c] focus:outline-none focus:ring focus:ring-[#51c542] text-white font-bold py-2 px-4 rounded mb-2 min-w-[60%]"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="timer h-28 w-28">
              <AnimatedProgressProvider
                valueStart={timeLeft}
                valueEnd={0}
                duration={
                  quizDetails.questions[currentQuestionIndex].time_limit
                }
                easingFunction={easeQuadInOut}
              >
                {(value) => (
                  <CircularProgressbar
                    value={(timeLeft / 30) * 100} // Calculate the percentage of time left
                    text={`${timeLeft}`} // Display the current time left
                    styles={buildStyles({
                      pathColor: calculatePathColor(timeLeft), // Dynamically calculate path color
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                      // CSS transition for smooth color change
                      pathTransition:
                        "stroke-dashoffset 0.5s ease-in-out, stroke 0.5s ease-in-out",
                    })}
                  />
                )}
              </AnimatedProgressProvider>
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
