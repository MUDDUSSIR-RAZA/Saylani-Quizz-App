import StudentNavbar from "@/components/NavBar/StudentNavbar";
import OverallPerformancePage from "@/components/Student/OverallPerformancePage";
import React from "react";

const OverallPerformance = () => {
  return (
    <>
      <StudentNavbar />
      <main className="pt-20 px-5">
        <OverallPerformancePage />
      </main>
    </>
  );
};

export default OverallPerformance;
