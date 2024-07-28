"use client";
// pages/admin/bulk-upload-questions.js
import React, { useState } from "react";
import axios from "axios";
import UploadingBulkFile from "../InPageLoader/UploadingBulkFile";
import toast, { Toaster } from "react-hot-toast";

const BulkUploadQuestions = ({ quizzes }) => {
  console.log(quizzes);
  const [loading, setLoading] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileContent = e.target.result;
      let questions;

      try {
        questions = JSON.parse(fileContent); // Parse JSON file content
      } catch (err) {
        console.error("Error parsing file content:", err);
        alert("Invalid file format. Please upload a valid JSON file.");
        return;
      }

      try {
        setLoading(true);
        const { data } = await axios.post(
          `/api/admin/question/addBulkQuestions`,
          { selectedCourse, questions }
        );
        toast.success(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data)
      }
    };

    reader.readAsText(file);
  };

  return (
    <section className="w-vwh h-dvh flex">
      <Toaster position="top-right" reverseOrder={true} />
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen w-10/12 sm:px-0">
        <div className="w-10/12 backdrop-blur-xl bg-bgColor rounded-lg shadow-2xl mb-14 md:mt-0 sm:w-full xl:p-0">
          <div className="p-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 relative md:text-xl">
              <a
                href="/admin/dashboard"
                className="font-medium text-black hover:underline absolute right-5 md:right-3"
              >
                X
              </a>
              Bulk Upload Questions
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleFormSubmit}
            >
              <label htmlFor="courseSelect">Select Quiz: </label>
              <select
                id="courseSelect"
                className="bg-bgColor font-bold text-slate-800 border border-gray-300 rounded-sm p-2"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                <option value="">Select a quiz</option>
                {quizzes.map((quiz) => (
                  <option key={quiz._id} value={quiz._id}>
                    {quiz.quiz_name}
                  </option>
                ))}
              </select>

              <br />
              <br />

              <label htmlFor="fileUpload">Upload File:</label>
              <input
                type="file"
                id="fileUpload"
                accept=".json"
                onChange={handleFileChange}
                className="bg-bgColor font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />

              <button
                disabled={loading}
                type="submit"
                className={`w-full text-white flex justify-center  ${
                  loading
                    ? "bg-button"
                    : "bg-button hover:bg-button focus:ring-4 focus:outline-none focus:ring-primary-300"
                }  font-medium rounded-lg text-sm px-5 py-2.5 text-center  `}
              >
                {loading ? <UploadingBulkFile /> : "Upload Questions"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkUploadQuestions;
