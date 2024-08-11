"use server"

import AdminNavbar from "@/components/NavBar/AdminNavbar";
import DashBoard from "@/components/admin/DashBoard";
import axios from "axios";
import React from "react";

async function getAllQuizzes() {

  try {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/admin/getAllQuizzes`
    );
   
    return {
      props: data,
    };
  } catch (error) {
    return {
      props: error.message,
    };
  }
}


const dashboard = async () => {
  const { props } = await getAllQuizzes();
  return (
    <>
      <AdminNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
        <DashBoard allQuizzes={props} />
      </main>
    </>
  );
};

export default dashboard;
