"use server";

import RequestPage from "@/components/admin/RequestPage";
import axios from "axios";
import React from "react";

async function getRequests() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/admin/studentRequest");
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
  const data = await getRequests()
  return <RequestPage />;
};

export default requests;