import SignupPage from "@/components/auth/SignupPage"
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

const signup = async () => {
  const { props } = await getCourses();
  return (
    <>
    <SignupPage Courses={props} />
    </>
  )
}

export default signup