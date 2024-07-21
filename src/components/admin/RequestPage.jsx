"use client";

import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";

const RequestPage = ({ data }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleVerify = (id, status) => {
    // Handle verify or unverify logic here
    console.log(`User ID: ${id}, Status: ${status}`);
    // You might want to call an API to update the user's status here
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setShowDetails(true);
  };

  return (
    <div className="p-5">
      <header style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1>User Signup Requests</h1>
      </header>
      {!showDetails && (
        <div>
          <div
            className="backdrop-blur-2xl bg-[#ffffff00] shadow-inner"
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="flex  text-center">
              <p className="w-[23dvw]  px-2 mx-2">
                <strong>NAME</strong>
              </p>
              <p className="w-[23dvw]  px-2 mx-2">
                <strong>NIC</strong>
              </p>
              <p className="w-[23dvw]  px-2 mx-2">
                <strong>ATTESTED</strong>
              </p>
            </div>
            {/* <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  background: user.attest === "verified" ? "green" : "gray",
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px 10px",
                }}
                // onClick={() => handleVerify(user._id, 'verified')}
              >
                Verify
              </button>
              <button
                style={{
                  background: user.attest === "unverified" ? "red" : "gray",
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px 10px",
                }}
                // onClick={() => handleVerify(user._id, 'unverified')}
              >
                Unverify
              </button>
            </div> */}
          </div>
          {data.data.map((user) => (
            <div
              key={user._id}
              className="backdrop-blur-xl bg-[#ffffff00] shadow-inner"
              style={{
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="flex text-center">
                <p className="w-[23dvw] backdrop-blur-3xl bg-[#ffffff00] shadow-inner p-1 rounded px-2 mx-2 text-lg tracking-widest">
                  {user.name}
                </p>
                <p className="w-[23dvw] backdrop-blur-3xl bg-[#ffffff00] shadow-inner p-1 rounded px-2 mx-2 text-lg ">
                  {user.nic}
                </p>
                <p
                  className={`w-[23dvw] backdrop-blur-3xl bg-[#ffffff00] shadow-inner p-1 rounded px-2 mx-2 text-lg text-white ${
                    user.attest === "verified"
                      ? "bg-green-700"
                      : user.attest === "unverified"
                      ? "bg-red-900"
                      : "bg-slate-700"
                  } `}
                >
                  {user.attest}
                </p>
              </div>
              <div className="flex">
                <AiFillEye
                  className="cursor-pointer text-center my-auto mx-2"
                  onClick={() => handleViewDetails(user)}
                  style={{ color: "blue", fontSize: "24px" }}
                />
                <button
                  className="bg-green-700 text-white rounded-md py-1 px-3 mx-2"
                  // onClick={() => handleVerify(user._id, 'verified')}
                >
                  Verify
                </button>
                <button
                  className="bg-red-900 text-white rounded-md py-1 px-3 mx-2"
                  // onClick={() => handleVerify(user._id, 'unverified')}
                >
                  UnVerify
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showDetails && selectedStudent && (
        <div
          className="backdrop-blur-xl bg-[#ffffff00] shadow-inner p-5 my-5 border-2 border-[#ccc] rounded-xl"
        >
          <h2 className="text-center font-extrabold text-2xl tracking-widest">Student Details</h2>
          <p>
            <strong>Name:</strong> {selectedStudent.name}
          </p>
          <p>
            <strong>Father's Name:</strong> {selectedStudent.fathername}
          </p>
          <p>
            <strong>NIC:</strong> {selectedStudent.nic}
          </p>
          <p>
            <strong>Email:</strong> {selectedStudent.email}
          </p>
          <p>
            <strong>Phone:</strong> {selectedStudent.phone}
          </p>
          <p>
            <strong>City:</strong> {selectedStudent.city}
          </p>
          <p>
            <strong>Course Name:</strong> {selectedStudent.course_name}
          </p>
          <p>
            <strong>Batch:</strong> {selectedStudent.batch}
          </p>
          <button
            className="bg-gray-700 text-white rounded-md py-1 px-3"
            onClick={() => setShowDetails(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default RequestPage;
