"use client";

import React, { useState, useEffect } from "react";

const SignupPage = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    fathername: "",
    nic: "",
    password: "",
    email: "",
    phone: "",
    city: "",
    course_name: "",
    batch: "",
  });

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
  ]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from backend
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/admin-courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });

    if (name === "city") {
      setFilteredCourses(
        courses.filter((course) => course.cities.includes(value))
      );
      setStudentData({
        ...studentData,
        city: value,
        course_name: "",
        batch: "",
      });
    }

    if (name === "course_name") {
      const selectedCourse = filteredCourses.find(
        (course) => course.course_name === value
      );
      setStudentData({
        ...studentData,
        course_name: value,
        batch: selectedCourse.batch,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
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
          city: "",
          course_name: "",
          batch: "",
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
          </div>
          <h2 className="text-xl font-bold my-4">Course Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                City:
              </label>
              <select
                name="city"
                value={studentData.city}
                onChange={handleChange}
                required
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              >
                <option value="">Select City</option>
                {[...new Set(courses.flatMap((course) => course.cities))].map(
                  (city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course Name:
              </label>
              <select
                name="course_name"
                value={studentData.course_name}
                onChange={handleChange}
                required
                disabled={!studentData.city}
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              >
                <option value="">Select Course</option>
                {filteredCourses.map((course) => (
                  <option key={course._id} value={course.course_name}>
                    {course.course_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Batch:
              </label>
              <input
                type="text"
                name="batch"
                value={studentData.batch}
                readOnly
                className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
              />
            </div>
          </div>
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
