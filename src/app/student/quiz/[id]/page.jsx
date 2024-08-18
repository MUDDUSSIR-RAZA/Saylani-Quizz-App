// import QuizPage from "@/components/Student/QuizPage";
// import React from "react";

// const quiz = ( { quizDetails, error } ) => {
//   return (
//     <>
//        <QuizPage quizDetails={quizDetails} error={error} />
//     </>
//   );
// }; 
import QuizPage from "@/components/Student/QuizPage";
import React from "react";

const quiz = ({ params }) => {

  return (
    <>
      <QuizPage quizId={params.id} />
    </>
  );
};

// export async function getServerSideProps(context) {
//     const { id } = context.params;
//     const { key } = context.query;

//     const response = await fetch(`${process.env.BASE_URL}/api/check-key`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ key, quizId: id }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       return { props: { quizDetails: data.quizDetails } };
//     } else {
//       return {
//         redirect: {
//           destination: "/error?message=Invalid%20key%20or%20quiz%20ID",
//           permanent: false,
//         },
//       };
//     }
//   }

export default quiz;

// // pages/error.js

// import { useRouter } from "next/router";

// const ErrorPage = () => {
//   const router = useRouter();
//   const { message } = router.query;

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//         <strong className="font-bold">Error:</strong>
//         <span className="block sm:inline">{message}</span>
//       </div>
//     </div>
//   );
// };

// export default ErrorPage;
