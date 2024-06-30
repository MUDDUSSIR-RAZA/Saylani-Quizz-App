"use client"

import AddQuestion from "@/components/admin/AddQuestion";
import BulkUploadQuestions from "@/components/admin/BulkUploadQuestions";
import CourseList from "@/components/admin/CourseList";
import CreateQuiz from "@/components/admin/CreateQuizz";
import { useState } from "react";

const createquiz = () => {
  

  return (
    <>
      {/* <AddQuestion /> */}
      {/* <CourseList courses={course} /> */}
      <BulkUploadQuestions />
    </>
  );
};

export default createquiz;
