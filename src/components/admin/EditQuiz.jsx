"use client"; // pages/admin/edit-detail.js

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Adding from "../InPageLoader/Adding";

const EditQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [editedData, setEditedData] = useState({});
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/detail");
        setInitialData(response.data);
        setEditedData(response.data); // Initialize edited data with initial data
      } catch (error) {
        console.error("Error fetching data:", error);
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

    // Check if there are any changes compared to the initial data
    const hasChanges = Object.keys(newEditedData).some(
      (key) => newEditedData[key] !== initialData[key]
    );

    setIsEdited(hasChanges);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/update-detail", editedData);
      setLoading(false);

      if (response.data.success) {
        setInitialData(editedData);
        setIsEdited(false);
        // Optional: Add success notification or redirect
      }
    } catch (error) {
      setLoading(false);
      console.error("Error updating data:", error);
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
              <center>Quiz Name</center>
            </h1>

            <br />
            <br />
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="quizName">
                <b>Quiz Name:</b>
              </label>
              <input
                type="text"
                id="quizName"
                value={editedData.quizName || "DMAS Rule"}
                autoComplete="off"
                onChange={(e) =>
                  handleInputChange("quizName", e.target.value)
                }
                className="bg-bgColor  text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
              
              <br />

              <label htmlFor="courseName">
                <b>Course Name:</b>
              </label>
              <input
                type="text"
                id="courseName"
                value={editedData.courseName || "Mathematics"}
                autoComplete="off"
                onChange={(e) =>
                  handleInputChange("courseName", e.target.value)
                }
                className="bg-bgColor  text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                disabled
                required
              />

              <br />

              <label htmlFor="editKey">
                <b>Key:</b>
              </label>
              <input
                type="text"
                id="editKey"
                value={editedData.editKey || ""}
                placeholder="**********"
                autoComplete="off"
                onChange={(e) => handleInputChange("editKey", e.target.value)}
                className="bg-bgColor text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />

              <br />

              <label htmlFor="displayQuestions">
                <b>Display Questions:</b>
              </label>
              <input
                type="number"
                id="displayQuestions"
                value={editedData.displayQuestions || ""}
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
                {loading ? <Adding /> : "Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditQuiz;
