"use server";

import RequestPage from "@/components/admin/RequestPage";
import AdminNavbar from "@/components/NavBar/AdminNavbar";
import React from "react";

const requests = async () => {
  const { props } = await getRequests();
  return (
    <>
      <AdminNavbar />
      <main className="items-center justify-between py-24 -z-30">
        <RequestPage initialData={props} />;
      </main>
    </>
  );
};

export default requests;
