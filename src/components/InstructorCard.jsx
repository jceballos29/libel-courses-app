/** @format */

import { AiFillStar } from 'react-icons/ai';
import { HiOutlineAcademicCap, HiOutlinePlay } from 'react-icons/hi';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5';

const InstructorCard = () => {
  return (
    <div className='group w-full flex flex-col items-center'>
      <figure className='relative w-44 h-44 rounded-full overflow-hidden shadow border bg-gray-300 mb-3'>
        <div className='relative w-full h-full flex items-center justify-center ease-in duration-200 opacity-0 invisible group-hover:visible group-hover:opacity-100 bg-[#1A064F]/60 text-white gap-5'>
          <IoLogoFacebook />
          <IoLogoTwitter />
          <IoLogoInstagram />
          <IoLogoLinkedin />
        </div>
      </figure>
      <div className='text-xs flex items-center text-[#E59819] mb-2'>
        <AiFillStar className='mr-2' />
        <span>4.5</span>
      </div>
      <h5 className='text-[#140342] mb-1 group-hover:text-[#6440FB] hover:underline cursor-pointer'>
        Brooklyn Simmons
      </h5>
      <p className='text-sm text-[#4F547B] mb-4'>Web Designer</p>
      <div className='w-full text-xs flex items-center justify-center gap-4'>
        <div className='flex items-center text-[#4F547B]'>
          <HiOutlineAcademicCap
            size={16}
            className='text-[#6A7A99] mr-1'
          />
          <span>692 Students</span>
        </div>
        <div className='flex items-center text-[#4F547B]'>
          <HiOutlinePlay size={16} className='text-[#6A7A99] mr-1' />
          <span>15 Courses</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
