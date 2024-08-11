"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignupPage = ({ Courses }) => {
  const [courses, setCourses] = useState(Courses);
  const [isSend, setIsSend] = useState(false);
  const [studentData, setStudentData] = useState({
    name: "",
    fathername: "",
    nic: "",
    password: "",
    email: "",
    phone: "03",
    city: "",
    course_name: "",
    batch: "",
  });
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudentData((prevStudentData) => {
      if (name === "nic") {
        if (/^\d{0,13}$/.test(value)) {
          return { ...prevStudentData, [name]: Number(value) };
        } else {
          return prevStudentData;
        }
      }
     
      const updatedStudentData = { ...prevStudentData, [name]: value };

      if (name === "phone") {
        // Ensure the phone field contains exactly 11 digits and starts with "03"
        if (value.length < 3) {
          // Prevent user from removing "03"
          updatedStudentData.phone = "03";
        } else if (!value.startsWith("03")) {
          // Add "03" at the beginning if it doesn't start with "03"
          updatedStudentData.phone = "03" + value.replace(/^0+/, "");
        } else if (/^\d{0,11}$/.test(value)) {
          // Allow only digits up to 11 characters
          updatedStudentData.phone = value;
        } else {
          // If phone number is invalid, return previous state without updating
          return prevStudentData;
        }
  
        return updatedStudentData;
      }
      

      if (name === "city") {
        const filteredCourses = courses.filter((course) =>
          course.cities.includes(value)
        );
        setFilteredCourses(filteredCourses);

        return {
          ...updatedStudentData,
          course_name: "",
          batch: "",
        };
      }

      if (name === "course_name") {
        const selectedCourse = filteredCourses.find(
          (course) => course.course_name === value
        );

        if (selectedCourse) {
          return {
            ...updatedStudentData,
            batch: selectedCourse.batch,
          };
        }
      }

      return updatedStudentData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/signup", {
        studentData,
      });

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
      toast.success(data);
      setIsSend(true);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div
      className={`container mx-auto ${
        isSend && "h-dvh flex justify-center items-center"
      }`}
    >
      {isSend && (
        <div>
          <div className="backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl p-16 smm:px-2 smm:py-6">
            <div className="backdrop-blur-3xl bg-white bg-opacity-20 rounded-lg shadow-2xl p-8 max-w-md mx-auto my-auto">
              <ul className="list-disc list-inside text-[#bd3c3cc9] space-y-2">
                <li>
                  Attestation of ID/Admit Card is extremely mandatory from SMIT
                </li>
                <li>
                  No student will be allowed to enter in Entry Test without
                  attestation of Admit/ID Card
                </li>
                <li>
                  Bring CNIC and Last qualification Marksheet/Certification
                  (both original) at the time of Attestation.
                </li>
                <li>
                  Address: Saylani Head office 4th floor Bahadurabad char minaar
                  chowrangi/Gulshan Campus (2nd Floor, Mumtaz Mobile Mall,
                  Gulshan Chowrangi)
                </li>
              </ul>
              <button
                className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => setIsSend(false)}
              >
                Signup more..
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={true} />
      {!isSend && (
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center my-3 backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl mx-4 text-button tracking-[5px] py-2">
            Student Signup
          </h1>
          <form onSubmit={handleSubmit} className="mb-8 mx-5">
            <div className="backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-2xl p-8">
              <h2 className="text-xl font-bold mb-6 tracking-[2px] text-amber-900">
                Student Information
              </h2>
              <div className="grid grid-cols-2 smm:grid-cols-1 gap-4">
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
                    minLength="13"
                    maxLength="13"
                    pattern="\d{13}" // Enforces only 13 digits
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
                    minLength="11"
                    maxLength="11"
                    pattern="03\d{9}" // Enforces starting with "03" and having exactly 11 digits
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
                    minLength="8"
                    value={studentData.password}
                    onChange={handleChange}
                    required
                    className="form-input mt-1 block w-full backdrop-blur-3xl bg-[#ffffff00] rounded-lg shadow-inner p-2"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold my-6 tracking-[2px] text-amber-900 font-body">
                Course Information
              </h2>
              <div className="grid grid-cols-2 smm:grid-cols-1 gap-4">
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
                    {[
                      ...new Set(courses.flatMap((course) => course.cities)),
                    ].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
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
                    type="Number"
                    name="batch"
                    value={studentData.batch}
                    readOnly
                    disabled
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
            <div className="text-lg text-center">Already Signup?
                <a
                  href="/auth/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                   {" "}Sign in
                </a>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
