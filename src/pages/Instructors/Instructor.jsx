/** @format */

import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';
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
import { Link, useParams } from 'react-router-dom';
import { path } from 'routes';
import axios from 'axios';
import InstructorCourseCard from 'components/cards/InstructorCourseCard';

const Instructor = () => {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [instructor, setInstructor] = useState(null);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: instructorResponse } = await axios.get(
          `/instructors/${username}`
        );
        const { data: courseResponse } = await axios.get(
          `/courses/instructor/${instructorResponse.data._id}`
        );
        setInstructor(instructorResponse.data);
        setItems(courseResponse.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setInstructor(null);
        setItems([]);
      }
    };
    fetchData();
  }, [username]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  return !isLoading ? (
    instructor ? (
      <div className='mt-16'>
        <Helmet>
          <title>{instructor.name} | Libel Academy</title>
        </Helmet>
        <div className='hidden md:block bg-[#F5F7FE] w-full h-12'>
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
                  <InstructorCourseCard
                    key={course._id}
                    element={course}
                  />
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
    )
  ) : (
    <div className='py-48 mt-16 flex items-center justify-center'>
      <div className='flex items-center'>
        <span className='inline-block w-2 h-20 bg-purple-900 opacity-50 rounded-full animate-scale-up'></span>
        <span className='inline-block w-2 h-28 bg-purple-900 opacity-50 rounded-full mx-4 animate-scale-up-25'></span>
        <span className='inline-block w-2 h-20 bg-purple-900 opacity-50 rounded-full animate-scale-up-5'></span>
      </div>
    </div>
  );
};

export default Instructor;
