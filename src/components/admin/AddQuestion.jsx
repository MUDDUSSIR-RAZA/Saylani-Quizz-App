"use client"; // pages/admin/add-question.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Adding from "../InPageLoader/Adding";

const AddQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([
    { _id: "60d21b4667d0d8992e610c85", quiz_name: "Mathematics 101" },
    { _id: "60d21b4667d0d8992e610c86", quiz_name: "Science Basics" },
    { _id: "60d21b4667d0d8992e610c87", quiz_name: "History 101" },
  ]);
  const [selectedQuiz, setselectedQuiz] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);
  const [timeLimit, setTimeLimit] = useState(30);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/api/courses");
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(correctOptionIndex, timeLimit);
    try {
      setLoading(true);
      //   const response = await axios.post(
      //     `/api/courses/${selectedQuiz}/add-question`,
      //     {
      //       question_text: questionText,
      //       options,
      //       correct_option_index: correctOptionIndex,
      //       time_limit: timeLimit,
      //     }
      //   );
      // setLoading(false);

      //   if (response.data.success) {
      //     // router.push('/admin'); // Redirect to admin dashboard or another page
      //   }
    } catch (error) {
      setLoading(false);
      console.error("Error adding question:", error);
    }
  };

  return (
    <section className="w-vwh h-dvh flex -z-99">
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
                value={selectedQuiz}
                onChange={(e) => setselectedQuiz(e.target.value)}
                required
                className="bg-bgColor font-bold text-slate-800 border border-gray-300 rounded-sm"
              >
                <option value="">Select a Quiz</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.quiz_name}
                  </option>
                ))}
              </select>

              <br />
              <br />

              <label htmlFor="questionText">
                <b>Question Text:</b>
              </label>
              <input
                type="text"
                id="questionText"
                value={questionText}
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
                      value={index}
                      checked={correctOptionIndex === index}
                      onChange={() => setCorrectOptionIndex(index)}
                    />
                  </div>
                </div>
              ))}

              <label htmlFor="timeLimit">Time Limit (seconds):</label>
              <input
                className="bg-bgColor border border-green-950 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                type="number"
                id="timeLimit"
                value={timeLimit}
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
