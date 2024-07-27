import AdminNavbar from "@/components/NavBar/AdminNavbar";
import DashBoard from "@/components/admin/DashBoard";
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


const dashboard = async () => {
  const { props } = await getQuizzes();
  return (
    <>
      <AdminNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
        <DashBoard quizzes={props} />
      </main>
    </>
  );
};

export default dashboard;
