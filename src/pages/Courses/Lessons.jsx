/** @format */

import { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { IoCaretForward, IoEllipseOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { path } from 'routes';
import classNames from 'utils/classNames';

const Lessons = () => {
  const { slug } = useParams();
  const { courses } = useSelector(state => state.courses);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = () => {
      const result = courses.find((course) => course.slug === slug);
      setCourse(result);
    };
    fetchCourse();
  }, [slug]);

  return course ? (
    <section className='mt-16'>
      <Helmet>
        <title>{course.name}</title>
        <meta name='description' content={course.abstract} />
      </Helmet>
      <div className='bg-[#F5F7FE] hidden lg:block  w-full h-12'>
        <div className='container h-full flex flex-wrap items-center space-x-4'>
          <Link
            to={path.home}
            className='text-xs font-medium text-[#4F547B] hover:text-gray-900'>
            Inicio
          </Link>
          <IoCaretForward size={12} className='text-[#4F547B]' />
          <Link
            to={path.courses}
            className='text-xs font-medium text-[#4F547B] hover:text-gray-900'>
            Nuestro Cursos
          </Link>
          <IoCaretForward size={12} className='text-[#4F547B]' />
          <Link
            to={`${path.courses}/${course.slug}`}
            className='text-xs font-medium text-[#4F547B] hover:text-gray-900'>
            {course.name}
          </Link>
        </div>
      </div>
      <div className='container lg:flex lg:space-x-4'>
        <div className='flex-1 pt-4 pb-16'>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
        <aside className='hidden lg:block bg-[#F5F7FE] w-96 px-4 pt-2'>
          <h4 className='text-lg font-semibold mb-4'>
            {course.name}
          </h4>
          <div className='w-full mb-4'>
            <div className='w-full h-1 rounded-full bg-[#CCE0F8]'>
              <div
                style={{
                  width: `${80}%`,
                }}
                className='h-1  rounded-full bg-[#6440FB]'
              />
            </div>
            <span className='text-xs'>
              <b>80</b>% Completado
            </span>
          </div>
          <ul>
            {course.lessons.map((lesson) => (
              <NavLink
                end
                key={lesson._id}
                to={`${path.courses}/${course.slug}/clases/${lesson.number}`}
                className={
                  ({isActive}) => classNames(
                    'bg-white cursor-pointer rounded mb-2 p-2 flex items-center hover:bg-purple-100 group',
                    isActive ? ' bg-purple-100' : 'bg-white',
                  )

                }>
                  
                <p className='text-sm font-bold flex items-center  group-hover:text-purple-800'>
                  <IoEllipseOutline className='mr-2 group-hover:text-purple-800' />
                  {lesson.number}. {lesson.title}
                </p>
                <p className='text-xs ml-auto text-[#6A7A99] group-hover:text-purple-500'>
                  {lesson.duration.hours > 0 &&
                    `${lesson.duration.hours}:`}
                  {lesson.duration.minutes < 10
                    ? `0${lesson.duration.minutes}`
                    : lesson.duration.minutes}
                  :
                  {lesson.duration.seconds < 10
                    ? `0${lesson.duration.seconds}`
                    : lesson.duration.seconds}
                </p>
              </NavLink>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  ) : (
    <section className='h-screen pt-16'>
      <Helmet>
        <title>Libel Academy</title>
      </Helmet>
      <div className='container'>
        <h2>Curso no encontrado.</h2>
      </div>
    </section>
  );
};

export default Lessons;
