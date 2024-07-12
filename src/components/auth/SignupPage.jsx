"use client";

import React, { useState } from "react";

const SignupPage = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    fathername: "",
    nic: "",
    password: "",
    email: "",
    phone: "",
    courses: [
      {
        course_name: "",
        batch: "",
        city: "",
        roll_no: "",
        status: "pending"
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleCourseChange = (index, e) => {
    const { name, value } = e.target;
    const newCourses = [...studentData.courses];
    newCourses[index][name] = value;
    setStudentData({ ...studentData, courses: newCourses });
  };

  const addCourse = () => {
    setStudentData({
      ...studentData,
      courses: [
        ...studentData.courses,
        { course_name: "", batch: "", city: "", roll_no: "", status: "pending" }
      ]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(studentData)
      });

      if (response.ok) {
        console.log("Student signed up successfully");
        setStudentData({
          name: "",
          fathername: "",
          nic: "",
          password: "",
          email: "",
          phone: "",
          courses: [
            { course_name: "", batch: "", city: "", roll_no: "", status: "pending" }
          ]
        });
      } else {
        console.error("Failed to sign up student");
      }
    } catch (error) {
      console.error("Error signing up student:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center my-3 backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl mx-4">
        Student Signup
      </h1>
      <form onSubmit={handleSubmit} className="mb-8 mx-5">
        <div className="backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl p-8">
          <h2 className="text-xl font-bold mb-4">Student Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                required
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Father's Name:
              </label>
              <input
                type="text"
                name="fathername"
                value={studentData.fathername}
                onChange={handleChange}
                required
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                NIC:
              </label>
              <input
                type="text"
                name="nic"
                value={studentData.nic}
                onChange={handleChange}
                required
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={studentData.password}
                onChange={handleChange}
                required
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                required
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                value={studentData.phone}
                onChange={handleChange}
                required
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold my-4">Courses Information</h2>
          {studentData.courses.map((course, index) => (
            <div key={index} className="mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Course Name:
                  </label>
                  <input
                    type="text"
                    name="course_name"
                    value={course.course_name}
                    onChange={(e) => handleCourseChange(index, e)}
                    required
                    className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Batch:
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={course.batch}
                    onChange={(e) => handleCourseChange(index, e)}
                    required
                    className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={course.city}
                    onChange={(e) => handleCourseChange(index, e)}
                    required
                    className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Roll No:
                  </label>
                  <input
                    type="number"
                    name="roll_no"
                    value={course.roll_no}
                    onChange={(e) => handleCourseChange(index, e)}
                    required
                    className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status:
                  </label>
                  <select
                    name="status"
                    value={course.status}
                    onChange={(e) => handleCourseChange(index, e)}
                    required
                    className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                  >
                    <option value="pending">Pending</option>
                    <option value="enrolled">Enrolled</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addCourse}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Another Course
          </button>
          <button
            type="submit"
            className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
