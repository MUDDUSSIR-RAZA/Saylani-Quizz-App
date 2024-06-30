"use client";

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
      <section className="bg-slate-50 w-vwh h-dvh flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-10/12 sm:px-0">
          <div className="w-10/12 backdrop-blur-sm bg-[#ccc5c56d] rounded-lg shado md:mt-0 sm:w-full xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl">
                <p className="text-sm font-light text-gray-500 relative">
                  <a
                    href="/auth/signup"
                    className="font-medium text-black hover:underline absolute right-5"
                  >
                    X
                  </a>
                </p>
                ADD QUIZ TITLE
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="quiz"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name="quiz"
                    id="quiz"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
