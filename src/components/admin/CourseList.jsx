"use client";

import React, { useState } from "react";
import { card } from "@/css/courseList.module.css";

const CourseList = () => {
  const [courses, setCourse] = useState([
    {
      _id: "60d21b4667d0d8992e610c85",
      course_name: "Mathematics ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c90",
          question_text: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          correct_option_index: 1,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c91",
          question_text: "What is 3 * 3?",
          options: ["6", "7", "8", "9"],
          correct_option_index: 3,
          time_limit: 30,
        },
      ],
      quizOpen: true,
    },
    {
      _id: "60d21b4667d0d8992e610c86",
      course_name: "Physics ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c92",
          question_text: "What is the acceleration due to gravity on Earth?",
          options: ["9.8 m/s²", "10 m/s²", "8 m/s²", "9 m/s²"],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c93",
          question_text: "What is the speed of light?",
          options: [
            "300,000 km/s",
            "150,000 km/s",
            "400,000 km/s",
            "250,000 km/s",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: true,
    },
    {
      _id: "60d21b4667d0d8992e610c87",
      course_name: "Chemistry ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c94",
          question_text: "What is the chemical symbol for water?",
          options: ["H2O", "O2", "CO2", "H2"],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c95",
          question_text: "What is the atomic number of carbon?",
          options: ["6", "8", "12", "14"],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: true,
    },
    {
      _id: "60d21b4667d0d8992e610c88",
      course_name: "Biology ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c96",
          question_text: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
          correct_option_index: 1,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c97",
          question_text: "What is the basic unit of life?",
          options: ["Atom", "Molecule", "Cell", "Organ"],
          correct_option_index: 2,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c89",
      course_name: "History ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c98",
          question_text: "Who was the first President of the United States?",
          options: [
            "George Washington",
            "Thomas Jefferson",
            "Abraham Lincoln",
            "John Adams",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c99",
          question_text: "In which year did World War II end?",
          options: ["1945", "1939", "1950", "1941"],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c8a",
      course_name: "Geography ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c9a",
          question_text: "What is the longest river in the world?",
          options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          correct_option_index: 1,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c9b",
          question_text: "What is the largest desert in the world?",
          options: ["Sahara", "Gobi", "Arabian", "Kalahari"],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c8b",
      course_name: "Computer Science ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c9c",
          question_text: "What does CPU stand for?",
          options: [
            "Central Processing Unit",
            "Central Power Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c9d",
          question_text: "What is the binary representation of the number 5?",
          options: ["", "110", "100", "111"],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c8c",
      course_name: "Literature ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610c9e",
          question_text: "Who wrote 'Romeo and Juliet'?",
          options: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610c9f",
          question_text: "Which novel begins with the line 'Call me Ishmael'?",
          options: [
            "Moby Dick",
            "Great Expectations",
            "Pride and Prejudice",
            "War and Peace",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c8d",
      course_name: "Art ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610ca0",
          question_text: "Who painted the Mona Lisa?",
          options: [
            "Leonardo da Vinci",
            "Vincent van Gogh",
            "Pablo Picasso",
            "Claude Monet",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610ca1",
          question_text: "In which city is the Louvre Museum located?",
          options: ["London", "New York", "Paris", "Rome"],
          correct_option_index: 2,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c8e",
      course_name: "Economics ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610ca2",
          question_text: "What is the law of demand?",
          options: [
            "As price falls, quantity demanded rises",
            "As price rises, quantity demanded rises",
            "As price falls, quantity supplied rises",
            "As price rises, quantity supplied falls",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610ca3",
          question_text: "Who wrote 'The Wealth of Nations'?",
          options: [
            "Adam Smith",
            "Karl Marx",
            "John Maynard Keynes",
            "Milton Friedman",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c8f",
      course_name: "Political Science ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610ca4",
          question_text: "What is the main purpose of the legislative branch?",
          options: [
            "To make laws",
            "To enforce laws",
            "To interpret laws",
            "To negotiate treaties",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610ca5",
          question_text: "Who is known as the 'Father of the Constitution'?",
          options: [
            "George Washington",
            "Thomas Jefferson",
            "James Madison",
            "Alexander Hamilton",
          ],
          correct_option_index: 2,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c90",
      course_name: "Sociology ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610ca6",
          question_text: "What is the study of human societies called?",
          options: ["Anthropology", "Sociology", "Psychology", "Economics"],
          correct_option_index: 1,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610ca7",
          question_text: "Who coined the term 'sociology'?",
          options: [
            "Karl Marx",
            "Max Weber",
            "Emile Durkheim",
            "Auguste Comte",
          ],
          correct_option_index: 3,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c91",
      course_name: "Philosophy ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610ca8",
          question_text:
            "Who is known for the quote 'I think, therefore I am'?",
          options: ["Socrates", "Plato", "Aristotle", "Descartes"],
          correct_option_index: 3,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610ca9",
          question_text: "What is the study of being and existence called?",
          options: ["Ethics", "Epistemology", "Metaphysics", "Aesthetics"],
          correct_option_index: 2,
          time_limit: 30,
        },
      ],
      quizOpen: true,
    },
    {
      _id: "60d21b4667d0d8992e610c92",
      course_name: "Psychology ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610caa",
          question_text: "What is the study of the mind and behavior called?",
          options: ["Sociology", "Psychology", "Anthropology", "Biology"],
          correct_option_index: 1,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610cab",
          question_text: "Who is the father of psychoanalysis?",
          options: [
            "Sigmund Freud",
            "Carl Jung",
            "Ivan Pavlov",
            "B.F. Skinner",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c93",
      course_name: "Engineering ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610cac",
          question_text: "What does CAD stand for?",
          options: [
            "Computer Aided Design",
            "Computer Assisted Development",
            "Circuitry And Design",
            "Calculus And Design",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610cad",
          question_text:
            "What is the most common material used in construction?",
          options: ["Wood", "Steel", "Concrete", "Brick"],
          correct_option_index: 2,
          time_limit: 30,
        },
      ],
      quizOpen: true,
    },
    {
      _id: "60d21b4667d0d8992e610c94",
      course_name: "Law ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610cae",
          question_text: "What is the highest court in the United States?",
          options: [
            "Court of Appeals",
            "District Court",
            "Supreme Court",
            "Circuit Court",
          ],
          correct_option_index: 2,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610caf",
          question_text: "Who is known as the 'Father of the Constitution'?",
          options: [
            "George Washington",
            "Thomas Jefferson",
            "James Madison",
            "Alexander Hamilton",
          ],
          correct_option_index: 2,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c95",
      course_name: "Business ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610cb0",
          question_text: "What is the main purpose of a business?",
          options: [
            "To provide services",
            "To make profit",
            "To create jobs",
            "To innovate",
          ],
          correct_option_index: 1,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610cb1",
          question_text: "Who wrote 'The Art of War'?",
          options: ["Sun Tzu", "Confucius", "Lao Tzu", "Machiavelli"],
          correct_option_index: 0,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c96",
      course_name: "Astronomy ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610cb2",
          question_text: "What is the closest star to Earth?",
          options: [
            "Proxima Centauri",
            "Alpha Centauri",
            "Sirius",
            "Betelgeuse",
          ],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610cb3",
          question_text: "What planet is known as the Red Planet?",
          options: ["Venus", "Mars", "Jupiter", "Saturn"],
          correct_option_index: 1,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c97",
      course_name: "Music ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610cb4",
          question_text: "What is the term for the speed of a piece of music?",
          options: ["Tempo", "Pitch", "Harmony", "Melody"],
          correct_option_index: 0,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610cb5",
          question_text: "Who composed the 'Fifth Symphony'?",
          options: ["Mozart", "Beethoven", "Bach", "Chopin"],
          correct_option_index: 1,
          time_limit: 30,
        },
      ],
      quizOpen: false,
    },
    {
      _id: "60d21b4667d0d8992e610c98",
      course_name: "Medicine ",
      questions: [
        {
          _id: "60d21b4667d0d8992e610cb6",
          question_text:
            "What is the study of the structure of the human body called?",
          options: ["Physiology", "Anatomy", "Biology", "Pathology"],
          correct_option_index: 1,
          time_limit: 30,
        },
        {
          _id: "60d21b4667d0d8992e610cb7",
          question_text: "What is the largest organ in the human body?",
          options: ["Heart", "Liver", "Skin", "Lungs"],
          correct_option_index: 2,
          time_limit: 30,
        },
      ],
      quizOpen: true,
    },
  ]);

  // Check if courses is defined and is an array
  if (!Array.isArray(courses) || courses.length === 0) {
    return <p>No courses available</p>;
  }

  return (
    <>
      <div className="flex flex-wrap -z-30 ">
        {courses.map((course) => (
          <div className="m-6">
            <section key={course._id} className={`backdrop-blur-sm ${card}`}>
              <header>
                <p>{course.course_name}</p>
                <a href="#" className="text-black">
                  Details
                </a>
              </header>
              <main>
                <p>
                  {course.questions.length} <a href="#">Questions</a>
                </p>
              </main>
              <footer className="relative">
                {course.quizOpen ? (
                  <p className="text-[#34ac2c] text-base">Quiz Open</p>
                ) : (
                  <p className="text-[#ff0000]  text-base">Quiz Closed</p>
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
