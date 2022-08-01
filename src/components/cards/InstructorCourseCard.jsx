/** @format */
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineDocumentText,
} from 'react-icons/hi';
import { IoBookmarkOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from 'routes';


const InstructorCourseCard = ({ element }) => {

  return (
    <div
      // to={`${path.courses}/${course.slug}`}
      className='group w-full rounded overflow-hidden shadow border bg-white'>
      <figure className='relative w-full h-[210px] bg-gray-300 overflow-hidden'>
        <img
          src={element.image}
          alt={element.name}
          className='w-full h-full object-fill object-center group-hover:scale-125 duration-300'
        />
        <div className='absolute w-full h-full top-0 left-0 group-hover:bg-[#140342]/50 duration-300' />
        <div className='absolute w-8 h-8 bg-white top-2 right-2 rounded cursor-pointer flex items-center justify-center z-[1]'>
          <IoBookmarkOutline size={20} />
        </div>
        <div className='w-full absolute top-2 left-0 px-2 flex flex-col items-start space-y-1'>
          {element.featured && (
            <span className='text-[10px] text-white font-medium bg-purple-800 rounded-full px-2 py-1'>
              Destacado
            </span>
          )}          
          
          {/* {course.enrolledStudents.length > 100 && (
            <span className='text-[10px] text-white font-medium bg-indigo-600 rounded-full px-2 py-1'>
              Popular
            </span>
          )} */}
          {new Date(
            new Date().setDate(new Date().getDate() - 30)
          ).getTime() < new Date(element.createdAt).getTime() && (
            <span className='text-[10px] text-white font-medium bg-pink-600 rounded-full px-2 py-1'>
              Nuevo
            </span>
          )}
        </div>
      </figure>
      <div className='w-full relative px-3 py-2 grid'>
        <div className='flex items-center text-xs gap-3 mb-2'>
          <span className='text-[#E59819]'>{element.rating}</span>
          <div className='flex items-center gap-1 text-[#E59819]'>
            {Array.from({ length: Math.floor(element.rating) }).map(
              (_, i) => (
                <span key={i}>
                  <AiFillStar />
                </span>
              )
            )}
            {Array.from({
              length: 5 - Math.floor(element.rating),
            }).map((_, i) => (
              <span key={i}>
                <AiOutlineStar />
              </span>
            ))}
          </div>
          <span className='text-[#4F547B]'>({element.reviews.length})</span>
        </div>
        
        <Link
          to={`${path.courses}/${element.slug}`}
          className='cursor-pointer h-[60px] font-semibold mb-2 group-hover:text-[#6440FB] hover:underline duration-300'>
          {element.name}
        </Link>

        <div className='text-[#4F547B] w-full flex items-center justify-between'>
          <div className='flex items-center'>
            <HiOutlineDocumentText
              size={16}
              className='text-[#6A7A99] mr-1'
            />
            <p className='text-xs leading-none'>
              {element.lessons.length} Clases
            </p>
          </div>
          <div className='flex items-center'>
            <HiOutlineClock
              size={16}
              className='text-[#6A7A99] mr-1'
            />
            <p className='text-xs leading-none'>
              {element.duration.hours}h {element.duration.minutes}m
            </p>
          </div>
          <div className='flex items-center'>
            <HiOutlineChartBar
              size={16}
              className='text-[#6A7A99] mr-1'
            />
            <p className='text-xs leading-none'>{element.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCourseCard;
