"use client"; // pages/admin/add-question.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import Adding from "../InPageLoader/Adding";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [quizId, setQuizId] = useState("");
  const [question_text, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [time_limit, setTimeLimit] = useState(30);
  const [quizzes, setQuizzes] = useState([]);
  const router =useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/student/quiz/getAllQuiz`
        );
        setQuizzes(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };

    fetchData();
  }, []);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);

    if (correctAnswer === options[index]) {
      setCorrectAnswer(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/admin/question/addQuestion`, {
        quizId,
        question_text,
        options,
        correctAnswer,
        time_limit,
      });
      toast.success(data);
      setLoading(false);
      router.push('/admin/dashboard')
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data);
    }
  };

  return (
    <section className="w-vwh h-dvh flex -z-99">
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex items-baseline justify-center my-[20px] h-[90%] px-6 py-8 mx-auto md:h-screen lg:py-0 w-10/12 sm:px-0">
        <div className="w-9/12 backdrop-blur-xl bg-bgColor rounded-lg shadow-2xl md:mt-0 sm:w-full xl:p-0">
          <div className="p-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-1 relative md:text-xl">
              <a
                href="/admin/dashboard"
                className="font-medium text-black hover:underline absolute right-5 md:right-3"
              >
                X
              </a>
              Add a New Question
            </h1>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="courseSelect" className="mr-2 mb-3">
                Select Quiz:
              </label>
              <select
                id="courseSelect"
                value={quizId}
                type="radio"
                onChange={(e) => {
                  setQuizId(e.target.value);
                }}
                required
                className="bg-bgColor font-bold text-slate-800 border border-gray-300 rounded-sm"
              >
                <option value="">Select a Quiz</option>
                {quizzes.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.quiz_name}
                  </option>
                ))}
              </select>

              <br />
              <br />

              <label htmlFor="question_text">
                <b>Question Text:</b>
              </label>
              <input
                type="text"
                id="question_text"
                value={question_text}
                autoComplete="off"
                onChange={(e) => setQuestionText(e.target.value)}
                className="bg-bgColor border border-green-950 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />

              <br />
              <br />

              <b>OPTIONS </b>

              {options.map((option, index) => (
                <div key={index} className="text-base font-medium">
                  {/* <label htmlFor={`option${index}`}>Option {index + 1}:</label> */}
                  <input
                    type="text"
                    id={`option${index}`}
                    value={option}
                    placeholder={`Option ${index + 1}`}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="bg-bgColor border border-green-950 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    required
                    autoComplete="off"
                  />
                  <div className="mb-5 flex items-center">
                    <label htmlFor={`correctOption${index}`}>Correct</label>
                    <input
                      type="radio"
                      name="correctOption"
                      className="text-sm ml-5 p-2.5"
                      required
                      value={option}
                      checked={correctAnswer === option}
                      onChange={() => setCorrectAnswer(option)}
                    />
                  </div>
                </div>
              ))}

              <label htmlFor="time_limit">Time Limit (seconds):</label>
              <input
                className="bg-bgColor border border-green-950 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                type="number"
                id="time_limit"
                value={time_limit}
                onChange={(e) => setTimeLimit(Number(e.target.value))}
                required
              />

              <button
                disabled={loading}
                type="submit"
                className={`w-full text-white flex justify-center mt-4  ${
                  loading
                    ? "bg-button"
                    : "bg-button hover:bg-button focus:ring-4 focus:outline-none focus:ring-primary-300"
                }  font-medium rounded-lg text-sm py-2.5 text-center  `}
              >
                {loading ? <Adding /> : "Add Question"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddQuestion;
