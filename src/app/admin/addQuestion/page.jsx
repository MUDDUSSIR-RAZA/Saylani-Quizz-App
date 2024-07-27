import AdminNavbar from "@/components/NavBar/AdminNavbar";
import AddQuestion from "@/components/admin/AddQuestion";
import axios from "axios";
import React from "react";

async function getQuizzes() {
  try {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/admin/getQuizzes`
    );
   
    return {
      props: data,
    };
  } catch (error) {
    return {
      props: error.message,
    };
  }
}


const page = async () => {
  const { props } = await getQuizzes();
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
