/** @format */
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineDocumentText,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { path } from 'routes';

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`${path.courses}/${course.slug}`}
      className='group w-[300px] rounded overflow-hidden shadow border bg-white'>
      <figure className='relative w-full h-[210px] bg-gray-300 overflow-hidden'>
        <img
          src={course.image}
          alt={course.name}
          className='w-full h-full object-fill object-center group-hover:scale-125 duration-300'
        />
        <div className='absolute w-full h-full top-0 left-0 group-hover:bg-[#140342]/50 duration-300'></div>
      </figure>
      <div className='w-full relative px-3 py-2 grid'>
        <div className='flex items-center text-xs gap-3 mb-4'>
          <span className='text-[#E59819]'>{course.rating}</span>
          <div className='flex items-center gap-1 text-[#E59819]'>
            {Array.from({ length: Math.floor(course.rating) }).map((_, i) => (
              <span key={i}>
                <AiFillStar />
              </span>
            ))}
            {Array.from({ length: 5 - Math.floor(course.rating) }).map((_, i) => (
              <span key={i}>
                <AiOutlineStar />
              </span>
            ))}
          </div>
          <span className='text-[#4F547B]'>({course.reviews})</span>
        </div>
        <h4 className='h-[80px] font-semibold mb-2 group-hover:text-[#6440FB] duration-300'>
          {course.name}
        </h4>
        <div className='text-[#4F547B] w-full flex items-center justify-between'>
          <div className='flex items-center'>
            <HiOutlineDocumentText
              size={16}
              className='text-[#6A7A99] mr-1'
            />
            <p className='text-xs leading-none'>
              {course.lessons} Lessons
            </p>
          </div>
          <div className='flex items-center'>
            <HiOutlineClock
              size={16}
              className='text-[#6A7A99] mr-1'
            />
            <p className='text-xs leading-none'>
              {course.duration.hours}h {course.duration.minutes}m
            </p>
          </div>
          <div className='flex items-center'>
            <HiOutlineChartBar
              size={16}
              className='text-[#6A7A99] mr-1'
            />
            <p className='text-xs leading-none'>{course.level}</p>
          </div>
        </div>
        <div className='w-full flex items-center justify-between border-t pt-2 mt-2 '>
          <div className='flex items-center'>
            <figure className='w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2'>
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className='w-full h-full object-cover object-center'
              />
            </figure>
            <p className='text-[#4F547B] text-xs'>
              {course.instructor.name}
            </p>
          </div>
          <h5>${course.price}</h5>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
