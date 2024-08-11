"use server"

import AddCoursePage from '@/components/admin/AddCoursePage'
import AdminNavbar from '@/components/NavBar/AdminNavbar';
import React from 'react'

const addCourse = async () => {
  return (
    <>
    <AdminNavbar />
    <main className="items-center justify-between py-24 -z-30">
      <AddCoursePage />;
    </main>
  </>
  )
}

export default addCourse