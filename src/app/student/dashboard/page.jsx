import StudentNavbar from "@/components/NavBar/StudentNavbar";
import DashBoard from "@/components/Student/DashBoard";
import axios from "axios";
import React from "react";

const dashboard = () => {
  return (
    <>
      <StudentNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
        <DashBoard />
      </main>
    </>
  );
};

export default dashboard;
