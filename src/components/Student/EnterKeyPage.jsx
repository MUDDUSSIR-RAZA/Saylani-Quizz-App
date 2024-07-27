"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EnterKeyPage() {
  const [key, setKey] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key === "123") {
      router.push("/student/quiz"); 
    } else {
      <div><Toaster/></div>
      toast.error("Incorrect Key");
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-lg bg-[#ffffff00] p-6 shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Key
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            disabled={key === ""} 
            className={` text-white font-bold py-2 px-4 rounded ${key === "" ? 'disabled bg-[#6665657d]' : 'bg-button hover:bg-blue-700 focus:outline-none focus:shadow-outline '}`}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
