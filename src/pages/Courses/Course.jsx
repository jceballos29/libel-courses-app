/** @format */

import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
  IoCaretForward,
  IoEllipse,
  IoCheckmarkCircleOutline,
  IoPersonOutline,
  IoTimeOutline,
  IoChevronUp,
} from 'react-icons/io5';
import ReactPlayer from 'react-player';
import { Disclosure, Transition } from '@headlessui/react';
import { Link, useParams } from 'react-router-dom';
import { path } from 'routes';
import { courses } from 'utils/backend';

const Course = () => {
  const { slug } = useParams();
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
      <div className='hidden lg:block bg-[#F5F7FE] w-full h-12'>
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
          <span className='text-xs text-[#4F547B]'>
            {course.name}
          </span>
        </div>
      </div>
      <div className='pb-32'>
        <header className='py-16 lg:py-24 bg-[#F5F7FE]'>
          <div className='container'>
            <div className='lg:pr-96'>
              <div className='flex items-center space-x-4 mb-3'>
                {course.featured && (
                  <span className='text-xs text-white font-medium bg-purple-800 rounded-full px-4 py-2'>
                    Destacado
                  </span>
                )}
                {new Date(
                  new Date().setDate(new Date().getDate() - 30)
                ).getTime() <
                  new Date(course.createdAt).getTime() && (
                  <span className='text-xs text-white font-medium bg-pink-600 rounded-full px-4 py-2'>
                    Nuevo
                  </span>
                )}
                {course.enrolledStudents.length > 100 && (
                  <span className='text-xs text-white font-medium bg-indigo-600 rounded-full px-4 py-2'>
                    Popular
                  </span>
                )}
              </div>
              <h2 className='w-full my-6'>{course.name}</h2>
              <p className='w-full text-[#4F547B] mb-3'>
                {course.abstract}
              </p>
              <div className='w-full flex flex-col lg:flex-row lg:items-center lg:space-x-3 mb-2 text-sm'>
                <div className='flex items-center'>
                  <span className='text-[#cf8f29] font-medium mr-2'>
                    {course.rating}
                  </span>
                  <div className='flex items-center space-x-1 text-[#E59819]'>
                    {Array.from({
                      length: Math.floor(course.rating),
                    }).map((_, i) => (
                      <span key={i}>
                        <AiFillStar />
                      </span>
                    ))}
                    {Array.from({
                      length: 5 - Math.floor(course.rating),
                    }).map((_, i) => (
                      <span key={i}>
                        <AiOutlineStar />
                      </span>
                    ))}
                  </div>
                  <span className='text-[#4F547B] ml-2'>
                    ({course.reviews} calificaciones)
                  </span>
                </div>
                <p className='text-[#4F547B] flex items-center'>
                  <IoPersonOutline
                    size={16}
                    className='mr-1 text-[#6A7A99]'
                  />
                  {course.enrolledStudents.length} Estudiantes
                </p>
                <p className='text-[#4F547B] flex items-center'>
                  <IoTimeOutline
                    size={16}
                    className='mr-1 text-[#6A7A99]'
                  />
                  Actualización: {course.updatedAt}
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className='container'>
          <div className='lg:pr-96'>
            <figure className='my-16 bg-gray-500 w-full aspect-video rounded-lg overflow-hidden shadow'>
              <ReactPlayer
                width='100%'
                height='100%'
                url={course.video}
                // playing={true}
              />
            </figure>
            <div className='w-full p-7'>
              <div>
                <h3 className='text-2xl font-bold mb-6'>
                  Descripción
                </h3>
                <p className='text-[#4F547B] lg:pl-6'>
                  {course.description}
                </p>
              </div>
              <div className='mt-12'>
                <h3 className='text-2xl font-bold mb-6'>
                  ¿Qué aprenderás?
                </h3>
                <ul className='space-y-2 lg:pl-6'>
                  {course.whatYouLearn.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-center text-[#4F547B]'>
                      <IoCheckmarkCircleOutline
                        size={24}
                        className='text-[#6A7A99] mr-2'
                      />
                      <span className='w-10/12'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12'>
                <h3 className='text-2xl font-bold mb-6'>
                  ¿A quién va dirigido?
                </h3>
                <ul className='space-y-2 lg:pl-6'>
                  {course.audience.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-baseline  text-[#4F547B]'>
                      <IoEllipse
                        size={12}
                        className='text-[#6A7A99] mr-2'
                      />
                      <span className='w-10/12'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12'>
                <h3 className='text-2xl font-bold mb-6'>
                  Requisitos
                </h3>
                <ul className='space-y-2 lg:pl-6'>
                  {course.requirements.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-center  text-[#4F547B]'>
                      <IoCaretForward
                        size={18}
                        className='text-[#6A7A99] mr-2'
                      />
                      <span className='w-10/12'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 '>
                <h3 className='text-2xl font-bold mb-3'>
                  Contenido del curso
                </h3>
                <div className='text-xs flex items-center text-[#4F547B] lg:pl-6'>
                  <span className='flex items-center'>
                    {course.lessons} Clases{' '}
                    <IoEllipse
                      size={6}
                      className='mx-2 text-[#6A7A99]'
                    />{' '}
                  </span>
                  <span className='flex items-center'>
                    {course.materials} Archivos{' '}
                    <IoEllipse
                      size={6}
                      className='mx-2 text-[#6A7A99]'
                    />{' '}
                  </span>
                  <span className='flex items-center'>
                    {course.feedbacks} Feedbacks
                  </span>
                </div>
                <div className='lg:px-6'>
                  <Disclosure as='div' className='mt-6'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-4 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                          <span>Le</span>
                          <IoChevronUp
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Transition
                          enter='transition duration-300 ease-out'
                          enterFrom='transform scale-95 opacity-0'
                          enterTo='transform scale-100 opacity-100'
                          leave='transition duration-100 ease-out'
                          leaveFrom='transform scale-100 opacity-100'
                          leaveTo='transform scale-95 opacity-0'>
                          <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500 '>
                            If you're unhappy with your purchase for
                            any reason, email us within 90 days and
                            we'll refund you in full, no questions
                            asked.
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className='h-screen pt-16'>
      <div className='container'>
        <h2>Curso no encontrado.</h2>
      </div>
    </section>
  );
};

export default Course;
