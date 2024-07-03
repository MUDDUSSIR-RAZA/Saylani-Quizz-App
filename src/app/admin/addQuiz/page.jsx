import AdminNavbar from "@/components/AdminNavbar";
import CreateQuizz from "@/components/admin/CreateQuizz";
import React from "react";

const page = () => {
  return (
    <>
      <div className="overflow-hidden w-dvw h-dvh bg-slate-50  bg-fixed bg-center" style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.NkwEpqJktRs1GVY_474xRQHaHa?w=184&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7')", backgroundSize: 'contain' }}>
        <AdminNavbar />
          <CreateQuizz />
      </div>
    </>
  );
};

export default page;