"use client";
import axios from "axios";
import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";

const RequestPage = ({ data }) => {
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const handleVerify = (id, status) => {
    const { data } = axios.post("/api/admin/studentRequest", {
        id,
        status
    });
  };

  const handleViewDetails = (id) => {
    setSelectedStudentId(id === selectedStudentId ? null : id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1>User Signup Requests</h1>
      </header>
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
          <div className="flex text-center">
            <p className="w-[23dvw] px-2 mx-2">
              <strong>NAME</strong>
            </p>
            <p className="w-[23dvw] px-2 mx-2">
              <strong>NIC</strong>
            </p>
            <p className="w-[23dvw] px-2 mx-2">
              <strong>ATTESTED</strong>
            </p>
          </div>
        </div>
        {data.data.map((user) => (
          <div key={user._id}>
            <div
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
                <p className="w-[23dvw] backdrop-blur-3xl bg-[#ffffff00] shadow-inner p-1 rounded px-2 mx-2 text-lg">
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
                  onClick={() => handleViewDetails(user._id)}
                  style={{ color: "blue", fontSize: "24px" }}
                />
                <button
                  className="bg-green-700 text-white rounded-md py-1 px-3 mx-2"
                  onClick={() => handleVerify(user._id, "verified")}
                >
                  Verify
                </button>
                <button
                  className="bg-red-900 text-white rounded-md py-1 px-3 mx-2"
                  onClick={() => handleVerify(user._id, "unverified")}
                >
                  UnVerify
                </button>
              </div>
            </div>
            {selectedStudentId === user._id && (
              <>
                <div className="backdrop-blur-xl bg-[#ffffff00] shadow-inner p-5 my-5 border-2 border-[#ccc] rounded-xl">
                  <h2 className="text-center font-extrabold text-2xl tracking-widest">
                    Student Details
                  </h2>
                  <div className="backdrop-blur-xl bg-[#ffffff00] shadow-inner p-5 my-5 border-2 border-[#ccc] rounded-xl grid grid-cols-2 smm:grid-cols-1 gap-4">
                    <p>
                      <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                      <strong>Father's Name:</strong> {user.fathername}
                    </p>
                    <p>
                      <strong>NIC:</strong> {user.nic}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {user.phone}
                    </p>
                  </div>
                  <button
                    className="bg-gray-700 text-white rounded-md py-1 px-3"
                    onClick={() => setSelectedStudentId(null)}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestPage;
