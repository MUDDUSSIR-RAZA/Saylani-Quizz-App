"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    course_name: "",
    batch: "",
    cities: [""],
  });

  const getUpdateData = async () => {
    try {
      console.log("Get Update Data Request");
      // const { data } = await axios.get(`/api/admin/courses/getCourses`);
      const res = await fetch("https://saylani-quizz-app.vercel.app/api/admin/courses/getCourses")
      const data = res.json()
      console.log("Get Update Data Request Response", data);
      setCourses(data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("UseEffect Request");
      const res = await fetch("https://saylani-quizz-app.vercel.app/api/admin/courses/getCourses")
      const data = res.json()
        // const { data } = await axios.get(`/api/admin/courses/getCourses`);
        console.log("UseEffect Request Request Response", data);
        setCourses(data);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/courses/addCourse", {
        ...newCourse,
      });
      getUpdateData();
      setNewCourse({
        course_name: "",
        batch: "",
        cities: [""],
      });
      toast.success(data);
    } catch (error) {
      toast.error(error.response.data);
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
      <Toaster position="top-right" reverseOrder={true} />
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
                  type="Number"
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

        <h2 className="text-3xl tracking-widest font-extrabold mb-4 text-center backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl mx-4 p-3 text-gray-900">
          Current Courses
        </h2>
        <div>
          {courses.length == 0 && (
            <div className="backdrop-blur-xl bg-[#ffffff00] rounded-lg shadow-2xl p-4 m-4">
              <h1 className="p-5 font-black text-7xl text-center md:text-5xl">
                Courses Not Available
              </h1>
            </div>
          )}

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
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;
