"use client";
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const adminCourseSchema = new Schema({
//   course_name: { type: String, required: true },
//   batches: { type: [String], required: true },
//   cities: { type: [String], required: true }
// });

// const AdminCourse = mongoose.model('AdminCourse', adminCourseSchema);

// module.exports = AdminCourse;

// admin-page.js
// admin-page.js

import React, { useState, useEffect } from "react";

const AddCoursePage = () => {
  const [courses, setCourses] = useState([
    {
      _id: 1,
      course_name: "Web Development",
      batch: 3,
      cities: ["Karachi", "Lahore"],
    },
    {
      _id: 2,
      course_name: "Data Science Fundamentals",
      batch: 1,
      cities: ["Islamabad", "Rawalpindi"],
    },
    {
      _id: 3,
      course_name: "Graphic Design Workshop",
      batch: 2,
      cities: ["Faisalabad", "Multan"],
    },
    {
      _id: 4,
      course_name: "Digital Marketing Course",
      batch: 4,
      cities: ["Peshawar", "Quetta"],
    },
]
);
  const [newCourse, setNewCourse] = useState({
    course_name: "",
    batch: "", // Adjusted to handle one batch per course as a number
    cities: [""],
  });

  // Simulated initial courses array for display
  const fakeCourses = [
    {
      _id: 1,
      course_name: "Course A",
      batch: 1,
      cities: ["City A", "City B"],
    },
    {
      _id: 2,
      course_name: "Course B",
      batch: 2,
      cities: ["City B", "City C"],
    },
  ];

  // useEffect(() => {
  //   // Replace with actual fetch logic to fetch courses from backend
  //   // Simulating fetching courses from backend
  //   setCourses(fakeCourses);
  // }, []);

  const handleCourseSubmit = async (e) => {
    setCourses([...courses, { ...newCourse, _id: Date.now() }]);
    setNewCourse({
      course_name: "",
      batch: "",
      cities: [""],
    });
    e.preventDefault();
    try {
      // Simulating POST request to add new course
      // Replace with actual fetch logic to POST new course to backend
      const response = await fetch("/api/admin-courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });

      if (response.ok) {
        console.log("Course added successfully");
        // Simulating adding the new course to the courses array
        setCourses([...courses, { ...newCourse, _id: Date.now() }]);
        setNewCourse({
          course_name: "",
          batch: 1,
          cities: ["City A"],
        }); // Reset form fields
      } else {
        console.error("Failed to add course");
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      // Simulating DELETE request to remove course
      // Replace with actual fetch logic to DELETE course from backend
      const response = await fetch(`/api/admin-courses/${courseId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Course deleted successfully");
        // Update courses state to reflect deletion
        setCourses(courses.filter((course) => course._id !== courseId));
      } else {
        console.error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="my-5">
        <h1 className="text-2xl font-bold mb-4 text-center my-3 backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl mx-4">
          Manage Courses
        </h1>
        <form onSubmit={handleCourseSubmit} className="mb-8 mx-5 ">
          <div className="backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl p-8">
            <h2 className="text-xl font-bold mb-4">Add New Course</h2>
            <div className="flex  md:block">
              <div className="mr-4 md:mr-0">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Name:
                </label>
                <input
                  type="text"
                  value={newCourse.course_name}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, course_name: e.target.value })
                  }
                  required
                  className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                />
              </div>
              <div className="mx-4 md:mx-0">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Batch:
                </label>
                <input
                  type="number"
                  value={newCourse.batch}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      batch: parseInt(e.target.value),
                    })
                  }
                  required
                  className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                />
              </div>
              <div className="mx-4 md:mx-0">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cities (comma-separated):
                </label>
                <input
                  type="text"
                  value={newCourse.cities.join(",")}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      cities: e.target.value.split(","),
                    })
                  }
                  required
                  className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-button hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            >
              Add Course
            </button>
          </div>
        </form>

        <h2 className="text-xl font-bold mb-4 text-center backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl mx-4">Current Courses</h2>
        <div className="">
          {courses.map((course) => (
            <div
              key={course._id}
              className="backdrop-blur-xl bg-[#ffffff00] rounded-lg shadow-2xl p-4 m-4"
            >
              <h3 className="text-lg font-bold mb-2">{course.course_name}</h3>
              <p>
                <span className="font-medium">Batch:</span> {course.batch}
              </p>
              <p>
                <span className="font-medium">Cities:</span>{" "}
                {course.cities.join(", ")}
              </p>
              <button
                className="mt-2 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteCourse(course._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;
