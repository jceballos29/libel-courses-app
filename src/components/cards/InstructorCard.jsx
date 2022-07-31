/** @format */

import React from 'react';
import { HiOutlinePlay } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { path } from 'routes';

const InstructorCard = ({ instructor }) => {
  return (
    <div className='group w-full h-96'>
      <figure className='w-full rounded overflow-hidden h-3/4 bg-gray-100'>
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className='w-full h-full object-cover object-center'
        />
      </figure>
      <div className='w-full h-1/4 pt-5'>
        <Link
          to={`${path.instructors}/${instructor.username}`}
          className='text-[#140342] font-bold mb-1 group-hover:text-[#6440FB] hover:underline cursor-pointer'>
          {instructor.name}
        </Link>
        <p className='text-sm text-[#4F547B] mb-2'>
          {instructor.title}
        </p>
        <div className='w-full text-xs flex items-center'>
          <div className='flex items-center text-[#4F547B]'>
            <HiOutlinePlay
              size={16}
              className='text-[#6A7A99] mr-1'
            />
            <span>{instructor.courses.length} Cursos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
