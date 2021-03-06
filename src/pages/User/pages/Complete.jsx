import CompleteCourseCard from 'components/cards/CompleteCourseCard'
import React from 'react'
import { courses } from 'utils/backend'

const Complete = () => {
  return (
    <div className='w-full h-full'>
      <h2 className='text-center lg:text-left mb-6'>Cursos Completados</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center content-center'>
        {
          courses.map(course => (
            <CompleteCourseCard key={course._id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default Complete