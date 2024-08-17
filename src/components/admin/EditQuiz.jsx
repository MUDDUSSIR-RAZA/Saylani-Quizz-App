"use client"; 

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../Loading";
import { useRouter } from "next/navigation";

const EditQuiz = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState({});
  const [editedData, setEditedData] = useState({});
  const [isEdited, setIsEdited] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/admin/quiz/getQuizById", {
          params: { id },
        });
        setInitialData(data);
        setEditedData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (field, value) => {
    const newEditedData = {
      ...editedData,
      [field]: value,
    };

    setEditedData(newEditedData);
    const hasChanges = Object.keys(newEditedData).some(
      (key) => newEditedData[key] !== initialData[key]
    );

    setIsEdited(hasChanges);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (editedData.displayQuestions < 10) {
      toast.error("Question count must be at least 10!");
    } else if (editedData.displayQuestions > initialData.questions.length) {
      toast.error(
        `First add ${
          editedData.displayQuestions - initialData.questions.length
        } more questions!`
      );
    } else {
      try {
        setLoading(true);
        const { data } = await axios.patch("/api/admin/quiz/editQuiz", {
          _id: editedData._id,
          quiz_name: editedData.quiz_name,
          displayQuestions: editedData.displayQuestions,
          quizOpen: editedData.quizOpen,
        });
        setLoading(false);
        toast.success(data);
        setInitialData(editedData);
        setIsEdited(false);
        router.push("/admin/dashboard")
      } catch (error) {
        toast.error(error.response.data || "Error updating data.");
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <>
        <div className=" backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl h-dvh w-dvw flex items-center justify-center">
          <Loading />
        </div>
      </>
    );
  }

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
              <center>
              <div className="flex justify-center">
                <label htmlFor="isPublished" className="font-bold mx-2">
                  Publish Quiz :
                </label>
                <div className="toggle-cont">
                  <input
                    type="checkbox"
                    id="isPublished"
                    className="toggle-input"
                    checked={editedData.quizOpen}
                    onChange={(e) =>
                      handleInputChange("quizOpen", e.target.checked)
                    }
                  />
                  <label htmlFor="isPublished" className="toggle-label">
                    <span className="cont-icon">
                      <div className="sparkle" />
                      <div className="icon"></div>
                    </span>
                  </label>
                </div>
              </div>
              </center>
            </h1>

            <br />
            <br />
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="quiz_name">
                <b>Quiz Name:</b>
              </label>
              <input
                type="text"
                id="quiz_name"
                value={editedData.quiz_name}
                autoComplete="off"
                onChange={(e) => handleInputChange("quiz_name", e.target.value)}
                className="bg-bgColor  text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />

              <br />

              <label htmlFor="course_name">
                <b>Course Name:</b>
              </label>
              <input
                type="text"
                id="course_name"
                value={editedData.course_name}
                autoComplete="off"
                onChange={(e) =>
                  handleInputChange("course_name", e.target.value)
                }
                className="bg-bgColor  text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                disabled
                required
              />

              <br />

              <label htmlFor="displayQuestions">
                <b>Display Questions:</b>
              </label>
              <input
                type="Number"
                id="displayQuestions"
                value={editedData.displayQuestions}
                placeholder="Minimum 10"
                autoComplete="off"
                onChange={(e) =>
                  handleInputChange("displayQuestions", e.target.value)
                }
                className="bg-bgColor text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                required
              />

              <br />
              <br />

              

              <br />
              <br />

              <button
                disabled={loading || !isEdited}
                type="submit"
                className={`w-full text-white flex justify-center mt-4  ${
                  loading
                    ? "bg-button"
                    : isEdited
                    ? "bg-button hover:bg-button focus:ring-4 focus:outline-none focus:ring-primary-300"
                    : "bg-gray-400 cursor-not-allowed"
                } font-medium rounded-lg text-sm py-2.5 text-center`}
              >
                {loading ? "Updating" : "Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditQuiz;
