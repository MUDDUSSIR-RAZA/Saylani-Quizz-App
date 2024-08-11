import AdminNavbar from "@/components/NavBar/AdminNavbar";
import CreateQuizz from "@/components/admin/CreateQuizz";

const createquiz = async () => {

  return (
    <>
      <div className="overflow-hidden w-dvw h-dvh" >
        <AdminNavbar />
          <CreateQuizz />
      </div>
    </>
  );
};

export default createquiz;
