"use client"; // pages/admin/add-question.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Adding from "../InPageLoader/Adding";

const AddQuestion = () => {    
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([
    { _id: "60d21b4667d0d8992e610c85", course_name: "Mathematics 101" },
    { _id: "60d21b4667d0d8992e610c86", course_name: "Science Basics" },
    { _id: "60d21b4667d0d8992e610c87", course_name: "History 101" },
  ]);
  const [selectedCourse, setSelectedCourse] = useState("");
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
    //     `/api/courses/${selectedCourse}/add-question`,
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
    <section className="bg-slate-50 w-vwh h-dvh flex -z-99">
      <div className="flex items-baseline justify-center my-[20px] h-[90%] px-6 py-8 mx-auto md:h-screen lg:py-0 w-10/12 sm:px-0">
        <div className="w-10/12 backdrop-blur-sm bg-[#ccc5c56d] rounded-lg shadow md:mt-0 sm:w-full xl:p-0">
          <div className="p-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-7">
              Add a New Question
            </h1>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="courseSelect" className="mr-2 mb-3">
                <b>Select Course:</b>
              </label>
              <select
                id="courseSelect"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
                className="border-2 border-black rounded-md"
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.course_name}
                  </option>
                ))}
              </select>

              <br />
              <br />

              <label htmlFor="questionText"> <b>Question Text:</b> </label>
              <input
                type="text"
                id="questionText"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="bg-gray-50 border mb-5 text-gray-900 text-sm rounded-lg block w-[70%] md:w-full p-2.5 "
                required
              />

              {options.map((option, index) => (
                <div key={index} className="text-base font-medium">
                  <label htmlFor={`option${index}`}>Option {index + 1}:</label>
                  <input
                    type="text"
                    id={`option${index}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="text-sm rounded-lg block w-[70%] md:w-full p-2.5"
                    required
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[70%] md:w-full p-2.5"
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
                    ? "bg-[#22659c]"
                    : "bg-primary-600 dark:bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
                }  font-medium rounded-lg text-sm px-5 py-2.5 text-center  `}
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
