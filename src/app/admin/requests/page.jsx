"use server";

import RequestPage from "@/components/admin/RequestPage";
import AdminNavbar from "@/components/NavBar/AdminNavbar";
import axios from "axios";
import React from "react";

async function getRequests() {
  try {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/admin/getStudentRequests`
    );
    return {
      props: {
        data,
        error: null,
      },
    };
  } catch (axiosError) {
    return {
      props: {
        data: null,
        error: axiosError.message,
      },
    };
  }
}

const requests = async () => {
  const { props } = await getRequests();
  return (
    <>
      <AdminNavbar />
      <main className="items-center justify-between py-24 -z-30">
        <RequestPage data={props} />;
      </main>
    </>
  );
};

export default requests;
