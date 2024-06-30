"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "@/yupSchemas/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import LogingIn from "@/components/InPageLoader/LogingIn";

const initialValues = {
  email: "",
  password: "",
};

const logIn = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async ({ email, password }, action) => {
        console.log(email, password )
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
      <section className="bg-slate-50 dark:bg-gray-900 w-vwh h-dvh flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-10/12 sm:px-0">
          <div className="w-10/12 backdrop-blur-sm bg-[#ccc5c56d] rounded-lg shadow dark:border md:mt-0 sm:w-full xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-900">{errors.email}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    autoComplete="off"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="text-red-900">{errors.password}</p>
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
                      : "bg-primary-600 dark:bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  }  font-medium rounded-lg text-sm px-5 py-2.5 text-center  `}
                >
                  {loading ? <LogingIn /> : "Login"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="/auth/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Signup here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default logIn;
