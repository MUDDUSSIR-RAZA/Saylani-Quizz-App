"use client";
// pages/admin/bulk-upload-questions.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadingBulkFile from "../InPageLoader/UploadingBulkFile";


const BulkUploadQuestions = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([
    { _id: "60d21b4667d0d8992e610c85", course_name: "Mathematics 101" },
    { _id: "60d21b4667d0d8992e610c86", course_name: "Science Basics" },
    { _id: "60d21b4667d0d8992e610c87", course_name: "History 101" }
]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [file, setFile] = useState(null);

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
        const response = await axios.post(
          `/api/courses/${selectedCourse}/bulk-upload-questions`,
          { questions }
        );
        if (response.data.success) {
          // router.push('/admin'); // Redirect to admin dashboard or another page
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error uploading questions:", error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <section className="bg-slate-50 dark:bg-gray-900 w-vwh h-dvh flex">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-10/12 sm:px-0">
        <div className="w-10/12 backdrop-blur-sm bg-[#ccc5c56d] rounded-lg shadow dark:border md:mt-0 sm:w-full xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Bulk Upload Questions
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleFormSubmit}
            >
              <label htmlFor="courseSelect">Select Course:</label>
              <select
                id="courseSelect"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
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

              <label htmlFor="fileUpload">Upload File:</label>
              <input
                type="file"
                id="fileUpload"
                accept=".json"
                onChange={handleFileChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />

              <button
                disabled={loading}
                type="submit"
                className={`w-full text-white flex justify-center  ${
                  loading
                    ? "bg-[#22659c]"
                    : "bg-primary-600 dark:bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
