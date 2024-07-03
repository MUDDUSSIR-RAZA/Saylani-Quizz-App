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
    { _id: "60d21b4667d0d8992e610c87", course_name: "History 101" },
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
        // const response = await axios.post(
        //   `/api/courses/${selectedCourse}/bulk-upload-questions`,
        //   { questions }
        // );
        // if (response.data.success) {
        //   // router.push('/admin'); // Redirect to admin dashboard or another page
        // }
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        // console.error("Error uploading questions:", error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <section className="w-vwh h-dvh flex">
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
              <label htmlFor="courseSelect">Select Course: </label>
              <select
                id="courseSelect"
                className="bg-bgColor font-bold text-slate-800 border border-gray-300 rounded-sm"
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
