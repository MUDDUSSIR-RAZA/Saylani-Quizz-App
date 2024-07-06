import AdminNavbar from "@/components/NavBar/AdminNavbar";
import AddQuestion from "@/components/admin/AddQuestion";
import React from "react";

const page = () => {
  return (
    <>
      <AdminNavbar />
      <main className="items-center justify-between py-24 -z-30">
        <AddQuestion />
      </main>
    </>
  );
};

export default page;
