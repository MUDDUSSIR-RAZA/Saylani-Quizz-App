"use client"

import EditQuiz from '@/components/admin/EditQuiz'
import React from 'react'

const editQuiz = ({params}) => {
  return (
    <>
    <EditQuiz id={params.id} />
    </>
  )
}

export default editQuiz