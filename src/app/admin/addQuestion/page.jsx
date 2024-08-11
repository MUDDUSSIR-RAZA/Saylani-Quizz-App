import AdminNavbar from "@/components/NavBar/AdminNavbar";
import AddQuestion from "@/components/admin/AddQuestion";
import axios from "axios";
import React from "react";
}


const page = async () => {
  const { props } = await getAllQuizzes();
  return (
    <>
      <AdminNavbar />
      <main className="items-center justify-between py-24 -z-30">
        <AddQuestion quizzes={props}  />
      </main>
    </>
  );
};

export default page;
