import AdminNavbar from "@/components/AdminNavbar";
import AddQuestion from "@/components/admin/AddQuestion";
import React from "react";

const page = () => {
  return (
    <>
      <AdminNavbar />
      <main className="items-center justify-between p-24 -z-30">
        <AddQuestion />
      </main>
    </>
  );
};

export default page;
