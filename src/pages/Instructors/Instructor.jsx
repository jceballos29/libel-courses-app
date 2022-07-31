/** @format */

import CourseCard from 'components/cards/CourseCard';
import NotFound from 'pages/NotFound';
import { useEffect, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet';
import {
  IoCaretForward,
  IoChevronBack,
  IoChevronForward,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { path } from 'routes';

const Instructor = () => {
  const { username } = useParams();
  const { instructors } = useSelector((state) => state.instructors);
  const [instructor, setInstructor] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const items = useMemo(() => {
    if (!instructor) {
      return [];
    }
    return instructor.courses;
  }
  , [instructor]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const instructor = instructors.find(
      (instructor) => instructor.username === username
    );
    setInstructor(instructor);
  }, [instructors, username]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  return instructor ? (
    <div className='mt-16'>
      <Helmet>
        <title>{instructor.name} | Libel Academy</title>
      </Helmet>
      <div className='hidden lg:block bg-[#F5F7FE] w-full h-12'>
        <div className='container h-full flex flex-wrap items-center space-x-4'>
          <Link
            to={path.home}
            className='text-xs font-medium text-[#4F547B] hover:text-gray-900'>
            Inicio
          </Link>
          <IoCaretForward size={12} className='text-[#4F547B]' />
          <Link
            to={path.instructors}
            className='text-xs font-medium text-[#4F547B] hover:text-gray-900'>
            Instructores
          </Link>
          <IoCaretForward size={12} className='text-[#4F547B]' />
          <span className='text-xs text-[#4F547B]'>
            {instructor.name}
          </span>
        </div>
      </div>
      <div className='container py-16'>
        <header className='w-full rounded-lg py-12 px-12 lg:px-40 bg-[#6440FB] mb-12 text-white relative'>
          <div className='flex items-center space-x-10'>
            <figure className='w-40 h-40 rounded-full bg-gray-300 overflow-hidden'>
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className='w-full h-full object-cover object-center'
              />
            </figure>
            <div>
              <h3 className='text-4xl'>{instructor.name}</h3>
              <p className='mb-5'>{instructor.title}</p>
              <div className='flex items-center space-x-4'>
                {[
                  {
                    Icon: IoLogoFacebook,
                    url: instructor.social.facebook,
                  },
                  {
                    Icon: IoLogoTwitter,
                    webkitURL: instructor.social.twitter,
                  },
                  {
                    Icon: IoLogoInstagram,
                    url: instructor.social.instagram,
                  },
                  {
                    Icon: IoLogoLinkedin,
                    URL: instructor.social.linkedin,
                  },
                ].map(({ Icon, url }, index) => (
                  <a
                    href={url}
                    target={'_blank'}
                    rel='noreferrer'
                    className='text-white cursor-pointer p-2 rounded-full hover:bg-white/10  duration-200'>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>
        <div>
          <h4 className='text-2xl font-bold mb-6'>Cursos</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center content-center'>
            {currentItems &&
              currentItems.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
          <ReactPaginate
            breakLabel='...'
            nextLabel={<IoChevronForward size={18} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={<IoChevronBack size={18} />}
            renderOnZeroPageCount={null}
            containerClassName='flex items-center justify-center space-x-8 font-bold'
            pageLinkClassName='hover:text-[#6440FB]'
            previousLinkClassName='flex items-center justify-center w-10 h-10 rounded-full text-[#6440FB] bg-[#E5F0FD] hover:bg-[#6440FB] hover:text-white'
            nextLinkClassName='flex items-center justify-center w-10 h-10 rounded-full text-[#6440FB] bg-[#E5F0FD] hover:bg-[#6440FB] hover:text-white'
            activeLinkClassName='text-[#6440FB] underline underline-offset-4 decoration-2'
          />
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default Instructor;
