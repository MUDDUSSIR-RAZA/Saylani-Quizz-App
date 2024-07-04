import AdminNavbar from "@/components/AdminNavbar";
import CreateQuizz from "@/components/admin/CreateQuizz";
import React from "react";

const page = () => {
  return (
    <>
      <div className="overflow-hidden w-dvw h-dvh" >
        <AdminNavbar />
          <CreateQuizz />
      </div>
    </>
  );
};

export default page;