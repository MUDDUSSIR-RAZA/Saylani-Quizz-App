import AdminNavbar from '@/components/AdminNavbar'
import CourseList from '@/components/admin/CourseList'
import React from 'react'

const dashboard = () => {
  return (
    <>
    <AdminNavbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <CourseList />
    </main>
    </>
  )
}

export default dashboard