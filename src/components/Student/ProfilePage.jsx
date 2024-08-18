"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import axios from "axios";

const ProfilePage = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/student/profile/getProfile");
        setStudent(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  if (!student) {
    return (
      <>
        <div className="flex flex-col items-center h-dvh m-auto justify-center">
          <Loading />
        </div>
      </>
    );
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "enrolled":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
      case "failed":
        return "text-red-500";
      case "completed":
        return "text-blue-500"; // assuming blue for completed
      case "canceled":
        return "text-gray-500"; // assuming gray for canceled
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center h-[90dvh] m-auto justify-center">
      <div className="my-4 flex flex-col items-center w-full max-w-[80%] md:w-full md:max-w-[98%]">
        <h1 className="text-2xl font-black my-6 tracking-[10px] md:tracking-[5px] ">
          Student Profile
        </h1>
        <div className="w-full backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl p-6 mb-6">
          <h2 className="text-3xl font-extrabold mt-2 mb-5 pb-3">
            Profile Details
          </h2>
          <div className="mb-4 my-3 text-2xl">
            <div className="mb-1  my-3">
              <span className="font-semibold">Name: </span>
              <span>{student.name}</span>
              <br />
            </div>
            <div className="mb-1  my-3">
              <span className="font-semibold">Father's Name: </span>
              <span> {student.fathername}</span>
              <br />
            </div>
            <div className="mb-1  my-3">
              <span className="font-semibold"> NIC:</span>
              <span> {student.nic}</span>
              <br />
            </div>
            <div className="mb-1  my-3">
              <span className="font-semibold">Email: </span>
              <span>{student.email}</span>
              <br />
            </div>
            <div className="mb-1  my-3">
              <span className="font-semibold">Phone: </span>
              <span> {student.phone}</span>
            </div>
          </div>
          <hr className="text-slate-950 bg-button " />
          <h2 className="text-3xl py-3 font-bold mb-4">Enrolled Courses</h2>
          <div className="overflow-y-auto max-h-[300px]">
            <table className="min-w-full backdrop-blur-2xl bg-[#ffffff00] shadow-inner text-center">
              <thead>
                <tr className="shadow-inner">
                  <th className="p-6">Course Name</th>
                  <th className="px-4 py-2">Batch</th>
                  <th className="px-4 py-2">Roll No</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {student.courses.map((course, idx) => (
                  <tr key={idx}>
                    <td className="border p-4">{course.course_name}</td>
                    <td className="border px-4 py-2">{course.batch}</td>
                    <td className="border px-4 py-2 ">{course.roll_no}</td>
                    <td className="border px-4 py-2">{course.city}</td>
                    <td
                      className={`border px-4 py-2 ${getStatusClass(
                        course.status
                      )}`}
                    >
                      {course.status.charAt(0).toUpperCase() +
                        course.status.slice(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
