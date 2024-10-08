"use server"

import AdminNavbar from "@/components/NavBar/AdminNavbar";
import DashBoard from "@/components/admin/DashBoard";
import React from "react";


const dashboard = async () => {
  return (
    <>
      <AdminNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
        <DashBoard 
        />
      </main>
    </>
  );
};

export default dashboard;
