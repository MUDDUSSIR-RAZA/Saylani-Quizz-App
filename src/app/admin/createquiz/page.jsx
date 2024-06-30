"use client"

import AddQuestion from "@/components/admin/AddQuestion";
import BulkUploadQuestions from "@/components/admin/BulkUploadQuestions";
import CourseList from "@/components/admin/CourseList";
import CreateQuiz from "@/components/admin/CreateQuizz";
import { useState } from "react";

const createquiz = () => {
  const [course, setCourse] = useState([{
    _id: "60d21b4667d0d8992e610c85",
    course_name: "Mathematics 101",
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
    quizOpen: false, // Assume quiz is closed initially
  },{
    _id: "60d21b4667d0d8992e610c85",
    course_name: "Mathematics 101",
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
    quizOpen: false, // Assume quiz is closed initially
  },{
    _id: "60d21b4667d0d8992e610c85",
    course_name: "Mathematics 101",
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
    quizOpen: false, // Assume quiz is closed initially
  },{
    _id: "60d21b4667d0d8992e610c85",
    course_name: "Mathematics 101",
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
    quizOpen: false, // Assume quiz is closed initially
  }]);

  return (
    <>
      {/* <AddQuestion /> */}
      {/* <CourseList courses={course} /> */}
      <BulkUploadQuestions />
    </>
  );
};

export default createquiz;
