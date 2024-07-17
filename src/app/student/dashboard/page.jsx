
import StudentNavbar from "@/components/NavBar/StudentNavbar";
import QuizList from "@/components/Student/QuizList";
import React from "react";

const dashboard = () => {
  return (
    <>
    <StudentNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
        <QuizList />
      </main>
    </>
  );
};

export default dashboard;
