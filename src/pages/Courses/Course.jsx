/** @format */

import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
  IoCaretForward,
  IoEllipse,
  IoCheckmarkCircleOutline,
  IoPersonOutline,
  IoTimeOutline,
  IoDocument,
  IoChevronDown,
  IoVideocam,
  IoMegaphone,
  IoPersonSharp,
  IoBook,
} from 'react-icons/io5';
import { SiDiscord } from 'react-icons/si';
import ReactPlayer from 'react-player';
import { Disclosure, Transition } from '@headlessui/react';
import { Link, useParams } from 'react-router-dom';
import { path } from 'routes';
import { courses } from 'utils/backend';
import classNames from 'utils/classNames';

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
    <section className='mt-16 bg-[#F5F7FE]'>
      <div className='hidden lg:block bg-white w-full h-12'>
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
      <div className='container flex py-16'>
        <div className='w-full lg:w-2/3'>
          <header>
            <div className='flex items-center space-x-4 mb-3'>
              {course.featured && (
                <span className='text-xs text-white font-medium bg-purple-800 rounded-full px-4 py-2'>
                  Destacado
                </span>
              )}
              {new Date(
                new Date().setDate(new Date().getDate() - 30)
              ).getTime() < new Date(course.createdAt).getTime() && (
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
          </header>
          <figure className='mt-16 bg-gray-500 w-full aspect-video rounded-lg overflow-hidden shadow-lg'>
            <ReactPlayer
              width='100%'
              height='100%'
              url={course.video}
              // playing={true}
            />
          </figure>

          <div className='w-full mt-16 py-8 lg:px-6 bg-white rounded-lg shadow-lg'>
            <div>
              <h3 className='text-2xl font-bold mb-6'>Descripción</h3>
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
              <h3 className='text-2xl font-bold mb-6'>Requisitos</h3>
              <ul className='space-y-2 lg:pl-6'>
                {course.requirements.map((item, i) => (
                  <li
                    key={i}
                    className='flex items-start  text-[#4F547B]'>
                    <IoCaretForward
                      size={18}
                      className='text-[#6A7A99] mr-2 mt-1'
                    />
                    <span className='w-10/12'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-12 '>
              <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold mb-4 lg:mb-0'>
                  Contenido del curso
                </h3>
                <div className='text-xs flex items-center text-[#4F547B]'>
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
              </div>
              <div className='lg:px-6'>
                <Disclosure
                  as='div'
                  className='mt-6 border rounded-lg duration-300'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          'flex w-full items-center justify-between rounded-lg px-6 py-4 text-left text-lg font-medium text-[#4F547B] hover:bg-[#e5e7eb] focus:outline-none duration-300',
                          open
                            ? 'bg-[#e5e7eb] shadow rounded-t-lg rounded-b-none'
                            : 'bg-[#F7F8FB]'
                        )}>
                        <span>Discord</span>
                        <IoChevronDown
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-[#6A7A99]`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter='transition duration-300 ease-in'
                        enterFrom='transform -translate-y-3 opacity-0'
                        enterTo='transform translate-y-0 opacity-100'
                        leave='transition duration-300 ease-out'
                        leaveFrom='transform translate-y-0 opacity-100'
                        leaveTo='transform -translate-y-3 opacity-0'>
                        <Disclosure.Panel
                          as='ul'
                          className='p-4 text-sm text-gray-500 space-y-2 duration-300 overflow-hidden'>
                          <li className='flex items-center'>
                            <SiDiscord
                              size={18}
                              className='text-[#6A7A99] mr-4'
                            />
                            <span>Discord General</span>
                          </li>
                          <li className='flex items-center'>
                            <SiDiscord
                              size={18}
                              className='text-[#6A7A99] mr-4'
                            />
                            <span>Discord Privado</span>
                          </li>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as='div'
                  className='mt-6 border rounded-lg duration-300'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          'flex w-full items-center justify-between rounded-lg px-6 py-4 text-left text-lg font-medium text-[#4F547B] hover:bg-[#e5e7eb] focus:outline-none duration-300',
                          open
                            ? 'bg-[#e5e7eb] shadow rounded-t-lg rounded-b-none'
                            : 'bg-[#F7F8FB]'
                        )}>
                        <span>Lecciones</span>
                        <IoChevronDown
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-[#6A7A99]`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter='transition duration-300 ease-in'
                        enterFrom='transform -translate-y-3 opacity-0'
                        enterTo='transform translate-y-0 opacity-100'
                        leave='transition duration-300 ease-out'
                        leaveFrom='transform translate-y-0 opacity-100'
                        leaveTo='transform -translate-y-3 opacity-0'>
                        <Disclosure.Panel
                          as='ul'
                          className='p-4 text-sm text-gray-500 space-y-2 duration-300'>
                          <li className='flex items-center'>
                            <IoVideocam
                              size={18}
                              className='text-[#6A7A99] mr-4'
                            />
                            <span>Introducción</span>
                            <span className='ml-auto'>05:34</span>
                          </li>
                          <li className='flex items-center'>
                            <IoVideocam
                              size={18}
                              className='text-[#6A7A99] mr-4'
                            />
                            <span>Introducción</span>
                            <span className='ml-auto'>05:34</span>
                          </li>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as='div'
                  className='mt-6 border rounded-lg duration-300'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          'flex w-full items-center justify-between rounded-lg px-6 py-4 text-left text-lg font-medium text-[#4F547B] hover:bg-[#e5e7eb] focus:outline-none duration-300',
                          open
                            ? 'bg-[#e5e7eb] shadow rounded-t-lg rounded-b-none'
                            : 'bg-[#F7F8FB]'
                        )}>
                        <span>Materiales</span>
                        <IoChevronDown
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-[#6A7A99]`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter='transition duration-300 ease-in'
                        enterFrom='transform -translate-y-3 opacity-0'
                        enterTo='transform translate-y-0 opacity-100'
                        leave='transition duration-300 ease-out'
                        leaveFrom='transform translate-y-0 opacity-100'
                        leaveTo='transform -translate-y-3 opacity-0'>
                        <Disclosure.Panel
                          as='ul'
                          className='p-4 text-sm text-gray-500 space-y-2 duration-300'>
                          <li className='flex items-center'>
                            <IoDocument
                              size={18}
                              className='text-[#6A7A99] mr-4'
                            />
                            <span>Introducción</span>
                          </li>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as='div'
                  className='mt-6 border rounded-lg duration-300'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          'flex w-full items-center justify-between rounded-lg px-6 py-4 text-left text-lg font-medium text-[#4F547B] hover:bg-[#e5e7eb] focus:outline-none duration-300',
                          open
                            ? 'bg-[#e5e7eb] shadow rounded-t-lg rounded-b-none'
                            : 'bg-[#F7F8FB]'
                        )}>
                        <span>Feedbacks</span>
                        <IoChevronDown
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-[#6A7A99]`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter='transition duration-300 ease-in'
                        enterFrom='transform -translate-y-3 opacity-0'
                        enterTo='transform translate-y-0 opacity-100'
                        leave='transition duration-300 ease-out'
                        leaveFrom='transform translate-y-0 opacity-100'
                        leaveTo='transform -translate-y-3 opacity-0'>
                        <Disclosure.Panel
                          as='ul'
                          className='p-4 text-sm text-gray-500 space-y-2 duration-300'>
                          <li className='flex items-center'>
                            <IoMegaphone
                              size={18}
                              className='text-[#6A7A99] mr-4'
                            />
                            <span>Introducción</span>
                          </li>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
            <div className='mt-12'>
              <h3 className='text-2xl font-bold mb-6'>Instructor</h3>
              <div className='lg:pl-6 flex items-center'>
                <figure className='w-32 h-32 rounded-full bg-gray-300 mr-5'></figure>
                <div>
                  <h4 className='text-xl text-[#140342] font-bold mb-1'>
                    Nombre Apellido
                  </h4>
                  <p className='text-[#4F547B] mb-2'>
                    President of Sales
                  </p>
                  <div className='flex items-center text-sm space-x-3 text-[#4F547B]'>
                    <p className='text-[#cf8f29] flex items-center font-medium'>
                      <AiFillStar className='mr-1' />
                      4.5
                    </p>
                    <p className='flex items-center'>
                      <IoPersonSharp className='text-[#6A7A99] mr-1' />{' '}
                      124 Estudiantes
                    </p>
                    <p className='flex items-center'>
                      <IoBook className='text-[#6A7A99] mr-1' /> 12
                      Cursos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12'>
              <h3 className='text-2xl font-bold mb-6'>
                Calificación de Estudiantes
              </h3>
              <div className='flex'>
                <div className='bg-[#F5F7FE] rounded w-72 h-56 flex flex-col items-center justify-center mr-3'>
                  <h3 className='text-6xl font-medium mb-3'>
                    {course.rating}
                  </h3>
                  <div className='mb-3 flex items-center space-x-1 text-[#E59819]'>
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
                  <p className='text-[#4F547B]'>Calificación</p>
                </div>
                <div className='bg-[#F5F7FE] rounded flex-1 h-56 p-8 flex flex-col justify-between'>
                  <div className='flex items-center text-sm space-x-4'>
                    <div className='flex-1 h-1 rounded-full bg-[#CCE0F8]'>
                      <div
                        style={{
                          width: `${70}%`,
                        }}
                        className='h-1 rounded-full bg-[#6440FB]'></div>
                    </div>
                    <div className='flex items-center space-x-1 text-[#E59819]'>
                      {Array.from({
                        length: 5,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiFillStar />
                        </span>
                      ))}
                      {Array.from({
                        length: 0,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <div className='w-6 text-right'>
                      <span>70%</span>
                    </div>
                  </div>
                  <div className='flex items-center text-sm space-x-4'>
                    <div className='flex-1 h-1 rounded-full bg-[#CCE0F8]'>
                      <div
                        style={{
                          width: `${15}%`,
                        }}
                        className='h-1  rounded-full bg-[#6440FB]'></div>
                    </div>
                    <div className='flex items-center space-x-1 text-[#E59819]'>
                      {Array.from({
                        length: 4,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiFillStar />
                        </span>
                      ))}
                      {Array.from({
                        length: 1,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <div className='w-6 text-right'>
                      <span>15%</span>
                    </div>
                  </div>
                  <div className='flex items-center text-sm space-x-4'>
                    <div className='flex-1 h-1 rounded-full bg-[#CCE0F8]'>
                      <div
                        style={{
                          width: `${40}%`,
                        }}
                        className='h-1  rounded-full bg-[#6440FB]'></div>
                    </div>
                    <div className='flex items-center space-x-1 text-[#E59819]'>
                      {Array.from({
                        length: 3,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiFillStar />
                        </span>
                      ))}
                      {Array.from({
                        length: 2,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <div className='w-6 text-right'>
                      <span>40%</span>
                    </div>
                  </div>
                  <div className='flex items-center text-sm space-x-4'>
                    <div className='flex-1 h-1 rounded-full bg-[#CCE0F8]'>
                      <div
                        style={{
                          width: `${30}%`,
                        }}
                        className='h-1  rounded-full bg-[#6440FB]'></div>
                    </div>
                    <div className='flex items-center space-x-1 text-[#E59819]'>
                      {Array.from({
                        length: 2,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiFillStar />
                        </span>
                      ))}
                      {Array.from({
                        length: 3,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <div className='w-6 text-right'>
                      <span>30%</span>
                    </div>
                  </div>
                  <div className='flex items-center text-sm space-x-4'>
                    <div className='flex-1 h-1 rounded-full bg-[#CCE0F8]'>
                      <div
                        style={{
                          width: `${80}%`,
                        }}
                        className='h-1  rounded-full bg-[#6440FB]'></div>
                    </div>
                    <div className='flex items-center space-x-1 text-[#E59819]'>
                      {Array.from({
                        length: 1,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiFillStar />
                        </span>
                      ))}
                      {Array.from({
                        length: 4,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <div className='w-6 text-right'>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12'>
              <h3 className='text-2xl font-bold mb-6'>Comentarios</h3>
              <div className='lg:px-6'>
                <div className='flex items-start pb-6 border-b mb-6'>
                  <figure className='w-16 h-16 rounded-full bg-gray-300 mr-5'></figure>
                  <div className='flex-1'>
                    <div className='flex items-center space-x-2 mb-2'>
                      <h4 className='text-xl'>Ali Tufan</h4>
                      <span className='text-xs text-[#4F547B]'>
                        3 days Ago
                      </span>
                    </div>
                    <div className='flex items-center space-x-1 text-[#E59819] mb-3'>
                      {Array.from({
                        length: 4,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiFillStar />
                        </span>
                      ))}
                      {Array.from({
                        length: 5 - 4,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <h5 className='text-lg mb-2'>
                      The best LMS Design
                    </h5>
                    <p className='text-[#4F547B]'>
                      This course is a very applicable. Professor Ng
                      explains precisely each algorithm and even tries
                      to give an intuition for mathematical and
                      statistic concepts behind each algorithm. Thank
                      you very much.
                    </p>
                  </div>
                </div>
                <div className='flex items-start pb-6 border-b mb-6'>
                  <figure className='w-16 h-16 rounded-full bg-gray-300 mr-5'></figure>
                  <div className='flex-1'>
                    <div className='flex items-center space-x-2 mb-2'>
                      <h4 className='text-xl'>Ali Tufan</h4>
                      <span className='text-xs text-[#4F547B]'>
                        3 days Ago
                      </span>
                    </div>
                    <div className='flex items-center space-x-1 text-[#E59819] mb-3'>
                      {Array.from({
                        length: 4,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiFillStar />
                        </span>
                      ))}
                      {Array.from({
                        length: 5 - 4,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <h5 className='text-lg mb-2'>
                      The best LMS Design
                    </h5>
                    <p className='text-[#4F547B]'>
                      This course is a very applicable. Professor Ng
                      explains precisely each algorithm and even tries
                      to give an intuition for mathematical and
                      statistic concepts behind each algorithm. Thank
                      you very much.
                    </p>
                  </div>
                </div>
                <div className='flex items-start mb-6'>
                  <figure className='w-16 h-16 rounded-full bg-gray-300 mr-5'></figure>
                  <div className='flex-1'>
                    <div className='flex items-center space-x-2 mb-2'>
                      <h4 className='text-xl'>Ali Tufan</h4>
                      <span className='text-xs text-[#4F547B]'>
                        3 days Ago
                      </span>
                    </div>
                    <div className='flex items-center space-x-1 text-[#E59819] mb-3'>
                      {Array.from({
                        length: 4,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiFillStar />
                        </span>
                      ))}
                      {Array.from({
                        length: 5 - 4,
                      }).map((_, i) => (
                        <span key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                    </div>
                    <h5 className='text-lg mb-2'>
                      The best LMS Design
                    </h5>
                    <p className='text-[#4F547B]'>
                      This course is a very applicable. Professor Ng
                      explains precisely each algorithm and even tries
                      to give an intuition for mathematical and
                      statistic concepts behind each algorithm. Thank
                      you very much.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden w-full lg:w-1/3 lg:flex items-start justify-center'>
          <div className='sticky top-20 w-80 p-3 rounded-lg shadow-lg bg-white space-y-3'>
            <figure className="w-full aspect-video rounded bg-gray-300 overflow-hidden">
              <img src={course.image} alt={course.name} className='w-full h-full object-fill object-center'/>
            </figure>
            <h3 className="text-4xl text-center">$ {course.price} USD</h3>
            <button className="w-full py-5 rounded border font-medium text-sm bg-[#6440FB] border-[#6440FB] text-white">Añadir al Carrito</button>
            <button className="w-full py-5 rounded border font-medium text-sm text-[#1A064F] border-[#1A064F] hover:text-white hover:bg-[#1A064F] duration-150">Comprar Ahora</button>
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
