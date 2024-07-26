"use server"

import AddCoursePage from '@/components/admin/AddCoursePage'
import AdminNavbar from '@/components/NavBar/AdminNavbar';
import axios from 'axios';
import React from 'react'

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

const addCourse = async () => {
  const { props } = await getCourses();
  return (
    <>
    <AdminNavbar />
    <main className="items-center justify-between py-24 -z-30">
      <AddCoursePage Courses={props} />;
    </main>
  </>
  )
}

export default addCourse