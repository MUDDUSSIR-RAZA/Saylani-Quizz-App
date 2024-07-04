"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { quizTitleSchema } from "@/yupSchemas/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import LogingIn from "@/components/InPageLoader/LogingIn";
import Creating from "../InPageLoader/Creating";

const initialValues = {
  quiz: "",
};

const CreateQuizz = () => {
  const [courses, setCourses] = useState([
    { _id: "60d21b4667d0d8992e610c85", course_name: "Mathematics 101" },
    { _id: "60d21b4667d0d8992e610c86", course_name: "Science Basics" },
    { _id: "60d21b4667d0d8992e610c87", course_name: "History 101" },
  ]);
  const [selectedCourse, setselectedCourse] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: quizTitleSchema,
      onSubmit: async ({ quiz }, action) => {
        setLoading(true);
        // try {
        //   setLoading(true);
        //   const { data } = await axios.post(
        //     "/api/user/login",
        //     {
        //       email,
        //       password,
        //     },
        //     {
        //       withCredentials: true,
        //     }
        //   );
        //   setLoading(false);
        //   router.push("/");
        //   action.resetForm();
        //   return;
        // } catch (error) {
        //   setLoading(false);
        //   toast.error(error.response.data);
        //   return;
        // }
      },
    });

  return (
    <>
      <div>
        <Toaster />
      </div>
      <section className="w-vwh h-dvh flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-10/12 sm:px-0">
          <div className="w-10/12 backdrop-blur-2xl bg-[#ffffff00] shadow-2xl rounded-lg md:mt-0 sm:w-full xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl">
                <p className="text-sm font-light text-gray-500 relative">
                  <a
                    href="/admin/dashboard"
                    className="font-medium text-black hover:underline absolute right-5 md:right-3"
                  >
                    X
                  </a>
                </p>
                ADD QUIZ TITLE
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="courseSelect" className="mr-2 mb-3">
                    Select Course:
                  </label>
                  <select
                    id="courseSelect"
                    value={selectedCourse}
                    onChange={(e) => setselectedCourse(e.target.value)}
                    required
                    className="bg-bgColor font-bold text-slate-800 border border-gray-300 rounded-sm"
                  >
                    <option value="">Select a Course</option>
                    {courses.map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.course_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quiz"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Quiz Name
                  </label>
                  <input
                    type="text"
                    name="quiz"
                    id="quiz"
                    className="bg-bgColor border border-green-950 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="Course Name"
                    required
                    autoComplete="off"
                    value={values.quiz}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.quiz && touched.quiz ? (
                    <p className="text-red-900">{errors.quiz}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label
                    htmlFor="addKey"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Add Key
                  </label>
                  <input
                    type="password"
                    name="addKey"
                    id="addKey"
                    className="bg-bgColor border border-green-950 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="Quiz Key *****"
                    required
                    autoComplete="off"
                    // value={values.ad}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className={`w-full text-white flex justify-center  ${
                    loading
                      ? "bg-[#22659c]"
                      : "bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                  }  font-medium rounded-lg text-sm px-5 py-2.5 text-center  `}
                >
                  {loading ? <Creating /> : "Create Quiz"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateQuizz;
