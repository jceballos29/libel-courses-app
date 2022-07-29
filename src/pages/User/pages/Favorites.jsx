import CourseCard from 'components/cards/CourseCard'
import React from 'react'
import { courses } from 'utils/backend'

const Favorites = () => {
  return (
    <div className='w-full h-full'>
      <h2 className='text-center lg:text-left mb-6'>Cursos Favoritos</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center content-center'>
        {
          courses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default Favorites