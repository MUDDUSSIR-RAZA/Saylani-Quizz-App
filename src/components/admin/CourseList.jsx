import React from "react";
import { card } from "@/css/courseList.module.css";

const CourseList = ({ courses }) => {
  // Check if courses is defined and is an array
  if (!Array.isArray(courses) || courses.length === 0) {
    return <p>No courses available</p>;
  }

  return (
    <>
      <div className="flex flex-wrap">
        {courses.map((course) => (
          <div className="m-6">
          <section key={course._id} className={`backdrop-blur-sm ${card}`}>
            <header>
              <p>{course.course_name}</p>
              <a href="#" className="text-[#26ffd7]">
                Details
              </a>
            </header>
            <main>
              <p>
                {course.questions.length} <a href="#">Questions</a>
              </p>
            </main>
            <footer className="relative">
              {course.quiz_open ? (
                <p className="text-green-800">Quiz Open</p>
              ) : (
                <p className="text-[#ff0000]">Quiz Closed</p>
              )}
              <a href="#" className="absolute right-6">
                Edit
              </a>
            </footer>
          </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseList;

// import { card } from "@/css/courseList.module.css";

// const CourseList = ({ course }) => {
//   console.log(course);
//   return (
//     <>
//       {course.map((course) => {
//         <section className={`backdrop-blur-sm ${card}`}>
//           <header>
//             <p>{course.course_name}</p>
//             <a href="#" className=" text-[#18af94]">
//               Details
//             </a>
//           </header>
//           <main>
//             <p>
//               {course.questions.length} <a href="#">Questions</a>
//             </p>
//           </main>
//           <footer className="relative">
//             {course.quizOpen ? (
//               <p className="text-green-800"> Quiz Open </p>
//             ) : (
//               <p className="text-[#ff0000]"> Quiz Closed </p>
//             )}
//             <a href="#" className="absolute right-6">
//               Edit
//             </a>
//           </footer>
//         </section>;
//       })}
//     </>
//   );
// };

// export default CourseList;
