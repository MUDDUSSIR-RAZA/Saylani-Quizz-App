import AdminNavbar from "@/components/NavBar/AdminNavbar";
import CreateQuizz from "@/components/admin/CreateQuizz";
import axios from "axios";

const createquiz = async () => {
  const { props } = await getCourses();

  return (
    <>
      <div className="overflow-hidden w-dvw h-dvh" >
        <AdminNavbar />
          <CreateQuizz Courses={props} />
      </div>
    </>
  );
};

export default createquiz;
