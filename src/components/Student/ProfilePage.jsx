"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

// Example student data
const fakeStudent = {
  name: "MUHAMMAD MUDDUSSIR RAZA",
  fathername: "RASHID MEHMOOD",
  nic: "42201-666454-7",
  password: "mrdevbussiness@gmail.com",
  email: "mrdevbussiness@gmail.com",
  phone: "+92 322 2664789",
  courses: [
    {
      course_name: "Web and App Development",
      batch: "Batch 1",
      city: "Karachi",
      roll_no: 101,
      status: "enrolled",
    },
    {
      course_name: "Data Structures",
      batch: "Batch 2",
      city: "Karachi",
      roll_no: 502,
      status: "pending",
    },
    {
      course_name: "Algorithms",
      batch: "Batch 1",
      city: "Karachi",
      roll_no: 701,
      status: "failed",
    },
    {
      course_name: "Databases",
      batch: "Batch 3",
      city: "Karachi",
      roll_no: 903,
      status: "enrolled",
    },
  ],
  results: [],
};

const ProfilePage = ({ studentId }) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Replace with actual fetch call
    // const fetchStudent = async () => {
    //   const response = await fetch(`/api/get-student?studentId=${studentId}`);
    //   const data = await response.json();
    //   setStudent(data);
    // };
    // fetchStudent();

    // Using fakeStudent for demonstration
    setStudent(fakeStudent);
  }, [studentId]);

  if (!student) {
    return (
      <>
        {" "}
        <Loading />{" "}
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
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center h-dvh">
      <div className="my-4 flex flex-col items-center w-full max-w-2xl md:w-11/12">
        <h1 className="text-2xl font-black my-6 tracking-[10px] md:tracking-[5px]">
          Student Profile
        </h1>
        <div className="w-full max-w-2xl backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl p-6 mb-6">
          <h2 className="text-2xl font-extrabold mt-2 mb-5">Profile Details</h2>
          <div className="mb-4">
            <div className="mb-1">
              <span className="font-semibold">Name: </span>
              <span>{student.name}</span>
              <br />
            </div>
            <div className="mb-1">
              <span className="font-semibold">Father's Name: </span>
              <span> {student.fathername}</span>
              <br />
            </div>
            <div className="mb-1">
              <span className="font-semibold"> NIC:</span>
              <span> {student.nic}</span>
              <br />
            </div>
            <div className="mb-1">
              <span className="font-semibold">Email: </span>
              <span>{student.email}</span>
              <br />
            </div>
            <div className="mb-1">
              <span className="font-semibold">Phone: </span>
              <span> {student.phone}</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Enrolled Courses</h2>
          <div className="overflow-y-auto max-h-[150px]">
            <table className="min-w-full backdrop-blur-2xl bg-[#ffffff00] shadow-inner text-center">
              <thead>
                <tr className="shadow-inner">
                  <th className="px-4 py-2">Course Name</th>
                  <th className="px-4 py-2">Batch</th>
                  <th className="px-4 py-2">Roll No</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {student.courses.map((course, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">{course.course_name}</td>
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
