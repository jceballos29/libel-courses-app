import ProcessCourseCard from 'components/cards/ProcessCourseCard'
import React from 'react'
import { courses } from 'utils/backend'

const Process = () => {
  return (
    <div className='w-full h-full'>
      <h2 className='text-center lg:text-left mb-6'>Cursos en Proceso</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center content-center'>
        {
          courses.map(course => (
            <ProcessCourseCard key={course._id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default Process