import AdminNavbar from "@/components/NavBar/AdminNavbar";
import QuizList from "@/components/Student/QuizList";
import React from "react";

const dashboard = () => {
  return (
    <>
      {/* <AdminNavbar /> */}
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
        <QuizList />
      </main>
    </>
  );
};

export default dashboard;
