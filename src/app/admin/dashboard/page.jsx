"use server"

import AdminNavbar from "@/components/NavBar/AdminNavbar";
import DashBoard from "@/components/admin/DashBoard";
import React from "react";


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
