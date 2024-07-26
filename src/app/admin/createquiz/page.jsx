import AdminNavbar from "@/components/NavBar/AdminNavbar";
import CreateQuizz from "@/components/admin/CreateQuizz";
import axios from "axios";

async function getCourses() {
  try {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/admin/getCourses`
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
