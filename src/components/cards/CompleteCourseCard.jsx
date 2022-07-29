import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { path } from 'routes';

const CompleteCourseCard = ({course}) => {
  return (
    <div className='group w-full rounded overflow-hidden shadow border bg-white'>
      <figure className='relative w-full h-[210px] bg-gray-300 overflow-hidden'>
        <img
          src={course.image}
          alt={course.name}
          className='w-full h-full object-fill object-center'
        />
      </figure>
      <div className='w-full relative p-3 grid'>
        <div className='flex items-center text-xs justify-between mb-2'>
          <p className='text-[#4F547B] text-xs'>
            {course.instructor.name}
          </p>
          <div className='flex items-center text-xs space-x-2'>
            <span className='text-[#E59819]'>{course.rating}</span>
            <div className='flex items-center space-x-1 text-[#E59819]'>
              {Array.from({ length: Math.floor(course.rating) }).map(
                (_, i) => (
                  <span key={i}>
                    <AiFillStar />
                  </span>
                )
              )}
              {Array.from({
                length: 5 - Math.floor(course.rating),
              }).map((_, i) => (
                <span key={i}>
                  <AiOutlineStar />
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link to={`${path.courses}/${course.slug}`} className='font-semibold mb-2 cursor-pointer hover:underline group-hover:text-[#6440FB] duration-300'>
          {course.name}
        </Link>
        <div className='w-full flex items-center justify-center mt-2'>
          <a href={course.certificatedTerms} className="text-xs text-[#6440FB] text-center underline">Consultar los términos y condiciones para obtener el certificado.</a>
        </div>
      </div>
    </div>
  )
}

export default CompleteCourseCard