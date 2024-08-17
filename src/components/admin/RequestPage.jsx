"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";

const RequestPage = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [data, setUpdateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/admin/studentRequest/getStudentRequests`
        );
        setUpdateData(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };

    fetchData();
  }, []);

  const getUpdateData = async () => {
    try {
      const { data } = await axios.get(
        `/api/admin/studentRequest/getStudentRequests`
      );
      setUpdateData(data);
    } catch (error) {
    }
  };

  const handleVerify = async (id, status) => {
    try {
      const { data } = await axios.post(
        "/api/admin/studentRequest/approveStudentReuquests",
        {
          id,
          status,
        }
      );
      if (status == "verified") {
        toast.success(data);
      } else {
        if (status == "Unverified") {
          toast.error(data);
        }
      }
      getUpdateData();
    } catch (error) {
    }
  };

  const handleViewDetails = (id) => {
    setSelectedStudentId(id === selectedStudentId ? null : id);
  };

  return (
    <div className=" xl:min-w-[30%] p-5">
      <Toaster position="top-right" reverseOrder={true} />
      <header className="mb-3 text-center backdrop-blur-2xl bg-[#918d8d52] shadow-inner text-button tracking-[5px] py-2 font-black rounded-xl">
        <h1>USER SIGNUP REQUESTS</h1>
      </header>
      <div>
        <div className="backdrop-blur-2xl bg-[#ffffff00] shadow-inner xl:hidden border-2 border-[#ccc] p-3 my-3 rounded-xl flex justify-between items-center">
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
        {data.map((user) => (
          <div key={user._id}>
            <div className="backdrop-blur-xl bg-[#ffffff00] shadow-inner border-2 border-[#ccc] p-3 my-3 rounded-xl flex justify-between items-center  xl:max-w-[80%] xl:mx-auto md:max-w-[95%]">
              <div className="flex text-center xl:flex-col xl:my-1 xl:text-left xl:w-[70%]">
                <p className="w-[23dvw] backdrop-blur-3xl bg-[#ffffff00] shadow-inner p-1 rounded px-2 mx-2 text-lg tracking-widest flex justify-center items-center capitalize xl:w-full xl:my-2 xl:backdrop-blur-0 xl:shadow-none xl:justify-start">
                  <div className="hidden xl:flex xl:text-wrap font-bold">NAME: </div>
                  <span>{user.name}</span>
                </p>
                <p className="w-[23dvw] backdrop-blur-3xl bg-[#ffffff00] shadow-inner p-1 rounded px-2 mx-2 text-lg text-center flex justify-center items-center xl:w-full xl:my-2  xl:backdrop-blur-0 xl:shadow-none xl:justify-start">
                  <div className="hidden xl:flex xl:text-wrap font-bold">NIC: </div>
                  <div>{user.nic}</div>
                </p>
                <div className="flex backdrop-blur-3xl bg-[#ffffff00] shadow-inner p-1 rounded px-2 mx-2 text-lg text-center xl:backdrop-blur-0 xl:shadow-none">
                  <div className="justify-center items-center hidden xl:flex">
                    <strong>ATTESTED:</strong>
                  </div>
                  <p
                    className={`w-[23dvw] backdrop-blur-3xl bg-[#ffffff00] shadow-inner p-1 rounded px-2 mx-2 text-lg text-white my-auto ${
                      user.attest === "verified"
                        ? "bg-green-700"
                        : user.attest === "Unverified"
                        ? "bg-red-900"
                        : "bg-slate-700"
                    } xl:my-2 xl:backdrop-blur-0 xl:shadow-none xl:justify-start xl:text-center`}
                  >
                    {user.attest}
                  </p>
                </div>
              </div>
              <div className="flex xl:flex-col">
                <AiFillEye
                  className="cursor-pointer text-center my-auto mx-2  xl:mx-auto xl:my-1"
                  onClick={() => handleViewDetails(user._id)}
                  style={{ color: "blue", fontSize: "24px" }}
                />
                <button
                  className="bg-green-700 text-white rounded-md py-2 px-3 mx-2  xl:mx-auto xl:my-1"
                  onClick={() => handleVerify(user._id, "verified")}
                >
                  Verify
                </button>
                <button
                  className="bg-red-900 text-white rounded-md py-2 px-3 mx-2  xl:mx-auto xl:my-1"
                  onClick={() => handleVerify(user._id, "Unverified")}
                >
                  UnVerify
                </button>
              </div>
            </div>
            {selectedStudentId === user._id && (
              <>
                <div className="backdrop-blur-xl bg-[#ffffff00] shadow-inner p-5 my-5 border-2 border-[#ccc] rounded-xl xl:max-w-[80%] xl:mx-auto md:max-w-[95%]">
                  <h2 className="text-center font-extrabold text-2xl tracking-widest ">
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
