import AdminNavbar from "@/components/NavBar/AdminNavbar";
import BulkUploadQuestions from "@/components/admin/BulkUploadQuestions";
import React from "react";

const page = async () => {
  return (
    <>
      <div className="overflow-hidden w-dvw h-dvh">
        <AdminNavbar />
        <main className="items-center justify-between py-24 -z-30">
          <BulkUploadQuestions />
        </main>
      </div>
    </>
  );
};

export default page;
