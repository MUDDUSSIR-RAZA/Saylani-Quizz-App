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

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues,
    validationSchema: loginSchema
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/user/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      router.push("/student/dashboard");
    } catch (error) {
      const err = error.response.data;
      setLoading(false);
      if (err == "pending" || err ==  "Unverified") {
        toast.error(`${err} Request!`);
      } else {
        toast.error(err);
      }
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <section className="relative w-full h-screen">
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="w-full max-w-md bg-[#ffffff8b] backdrop-blur-lg rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center text-gray-900">
              Login to your account
            </h1>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="name@company.com"
                  required
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="••••••••"
                  required
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                ) : null}
              </div>
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    loading
                      ? "bg-button"
                      : "bg-button hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }`}
                >
                  {loading ? <LogingIn /> : "Login"}
                </button>
              </div>
              <div className="text-sm text-center">
                <a
                  href="/auth/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Don't have an account? Signup here
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
