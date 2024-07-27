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
  quiz_name: " ",
  key: "",
  course_name: "",
  course_id: "",
};

const CreateQuizz = ({ Courses }) => {
  const [courses, setCourses] = useState(Courses);
  const [loading, setLoading] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: quizTitleSchema,
    onSubmit: async (values, action) => {
      setLoading(true);
      try {
        console.log("🚀 ~ onSubmit: ~ values:", values);
        setLoading(true);
        const { data } = await axios.post(
          "/api/admin/quiz/addQuiz",
          { ...values },
          {
            withCredentials: true,
          }
        );
        setLoading(false);
        // router.push("/admin/dashboard");
        toast.success(data);
        action.resetForm();
        return;
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data);
        return;
      }
    },
  });

  const handleCourseChange = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const courseName = selectedOption.getAttribute("data-name");
    const courseId = selectedOption.value;

    setFieldValue("course_name", courseName);
    setFieldValue("course_id", courseId);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
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
                    id="course_name"
                    name="course_name"
                    value={values.course_id} // Use course_id as the value
                    onChange={handleCourseChange} // Custom change handler
                    onBlur={handleBlur}
                    required
                    className="bg-bgColor font-bold text-slate-800 border border-gray-300 rounded-sm"
                  >
                    <option value="">Select a Course</option>
                    {courses.map((course) => (
                      <option
                        key={course._id}
                        value={course._id}
                        data-name={course.course_name}
                      >
                        {course.course_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quiz_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Quiz Name
                  </label>
                  <input
                    type="text"
                    name="quiz_name"
                    id="quiz_name"
                    className="bg-bgColor border border-green-950 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="Course Name"
                    required
                    autoComplete="off"
                    value={values.quiz_name}
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
                    htmlFor="key"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Add Key
                  </label>
                  <input
                    type="password"
                    name="key"
                    id="key"
                    className="bg-bgColor border border-green-950 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="Quiz Key *****"
                    required
                    autoComplete="off"
                    value={values.key}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
