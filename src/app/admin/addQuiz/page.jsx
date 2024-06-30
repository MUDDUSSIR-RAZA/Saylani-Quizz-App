import AdminNavbar from "@/components/AdminNavbar";
import CreateQuizz from "@/components/admin/CreateQuizz";
import React from "react";

const page = () => {
  return (
    <>
      <div className="overflow-hidden w-dvw h-dvh">
        <AdminNavbar />
        <main className="items-center justify-between p-24 -z-30">
          <CreateQuizz />
        </main>
      </div>
    </>
  );
};

export default page;