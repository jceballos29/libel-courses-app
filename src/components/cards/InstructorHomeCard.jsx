/** @format */

import { HiOutlinePlay } from 'react-icons/hi';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { path } from 'routes';

const InstructorCard = ({ instructor }) => {
  return (
    <div className='group w-full flex flex-col items-center'>
      <figure className='relative w-44 h-44 rounded-full overflow-hidden shadow border bg-gray-300 mb-3'>
        <img src={instructor.avatar} alt={instructor.name} className="absolute "/>
        <div className='relative z-[1] w-full h-full flex items-center justify-center ease-in duration-200 opacity-0 invisible group-hover:visible group-hover:opacity-100 bg-[#1A064F]/60 text-white gap-5'>
          <a
            href={instructor.social.facebook}
            target={'_blank'}
            rel='noreferrer'
            className='text-white cursor-pointer hover:scale-150 duration-200'>
            <IoLogoFacebook />
          </a>
          <a
            href={instructor.social.twitter}
            target={'_blank'}
            rel='noreferrer'
            className='text-white cursor-pointer hover:scale-150 duration-200'>
            <IoLogoTwitter />
          </a>
          <a
            href={instructor.social.instagram}
            target={'_blank'}
            rel='noreferrer'
            className='text-white cursor-pointer hover:scale-150 duration-200'>
            <IoLogoInstagram />
          </a>
          <a
            href={instructor.social.linkedin}
            target={'_blank'}
            rel='noreferrer'
            className='text-white cursor-pointer hover:scale-150 duration-200'>
            <IoLogoLinkedin />
          </a>
        </div>
      </figure>
      <Link to={`${path.instructors}/${instructor.username}`} className='font-bold text-[#140342] mb-1 group-hover:text-[#6440FB] hover:underline cursor-pointer'>
        {instructor.name}
      </Link>
      <p className='text-sm text-[#4F547B] mb-2'>{instructor.title}</p>
      <div className='w-full text-xs flex items-center justify-center'>
        <div className='flex items-center text-[#4F547B]'>
          <HiOutlinePlay size={16} className='text-[#6A7A99] mr-1' />
          <span>{instructor.courses.length} Cursos</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
