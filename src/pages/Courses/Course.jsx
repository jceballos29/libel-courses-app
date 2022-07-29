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
  IoDocumentOutline,
  IoChevronDown,
  IoVideocam,
  IoVideocamOutline,
  IoMegaphone,
  IoPersonSharp,
  IoBook,
  IoBarChartOutline,
  IoRibbonOutline,
  IoTelescopeOutline,
  IoPersonCircleOutline,
  IoCloudDownloadOutline,
} from 'react-icons/io5';
import { SiDiscord } from 'react-icons/si';
import ReactPlayer from 'react-player';
import { Disclosure, Transition } from '@headlessui/react';
import { Link, useParams } from 'react-router-dom';
import { path } from 'routes';
import { courses } from 'utils/backend';
import classNames from 'utils/classNames';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>{course.name}</title>
        <meta name='description' content={course.abstract} />
      </Helmet>
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
        <div className='w-full xl:w-2/3'>
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
            <div className='w-full flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-3 mb-2 text-sm'>
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
              <p className='hidden text-[#4F547B] xl:flex items-center'>
                <IoTimeOutline
                  size={16}
                  className='mr-1 text-[#6A7A99]'
                />
                <strong className='mr-1 font-semibold'>
                  Actualización:{' '}
                </strong>{' '}
                {new Date(course.updatedAt).getDate()}/
                {new Date(course.updatedAt).getFullYear()}
              </p>
            </div>
            <div className='text-[#4F547B] flex items-center mb-2'>
              <IoPersonCircleOutline
                size={16}
                className='mr-1 text-[#6A7A99]'
              />
              <strong className='mr-1 font-semibold'>
                Profesor:{' '}
              </strong>{' '}
              <span>{course.instructor.name}</span>
            </div>
            <div className='w-full flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-3  xl:hidden mb-2 text-sm'>
              <p className='text-[#4F547B] flex items-center'>
                <IoTimeOutline
                  size={16}
                  className='mr-1 text-[#6A7A99]'
                />
                <strong className='mr-1 font-semibold'>
                  Actualización:{' '}
                </strong>{' '}
                {new Date(course.updatedAt).getDate()}/
                {new Date(course.updatedAt).getFullYear()}
              </p>
              <p className='text-[#4F547B] flex items-center'>
                <IoBarChartOutline
                  size={16}
                  className='mr-1 text-[#6A7A99]'
                />
                <strong className='mr-1 font-semibold'>
                  Nivel:{' '}
                </strong>{' '}
                {course.level}
              </p>
              <p className='text-[#4F547B] flex items-center'>
                <IoRibbonOutline
                  size={16}
                  className='mr-1 text-[#6A7A99]'
                />
                <strong className='mr-1 font-semibold'>
                  Certificado:{' '}
                </strong>{' '}
                {course.certificate ? 'Sí' : 'No'}
              </p>
            </div>
            <h2 className='w-full my-6 xl:hidden'>
              $ {course.price} USD
            </h2>
            <button className='w-full lg:w-[400px] xl:hidden py-3 rounded border font-medium text-sm bg-[#6440FB] border-[#6440FB] text-white outline-none focus:outline-none'>
              Comprar Ahora
            </button>
          </header>
          <figure className='mt-16 bg-gray-500 w-full aspect-video rounded-lg overflow-hidden shadow-lg'>
            <ReactPlayer
              width='100%'
              height='100%'
              url={course.video}
              // playing={true}
            />
          </figure>

          <div className='w-full mt-16 lg:py-8 lg:px-6 lg:bg-white rounded-lg lg:shadow-lg'>
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
                    {course.lessons.length} Clases{' '}
                    <IoEllipse
                      size={6}
                      className='mx-2 text-[#6A7A99]'
                    />{' '}
                  </span>
                  <span className='flex items-center'>
                    {course.materials.length} Archivos{' '}
                    <IoEllipse
                      size={6}
                      className='mx-2 text-[#6A7A99]'
                    />{' '}
                  </span>
                  <span className='flex items-center'>
                    {course.feedbacks.length} Feedbacks
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
                          {course.discord.general && (
                            <li className='group hover:bg-purple-100 duration-150 p-1 rounded'>
                              <a
                                href={course.discord.general}
                                rel='noreferrer'
                                target={'_blank'}
                                className='flex items-center'>
                                <SiDiscord
                                  size={18}
                                  className='text-[#6A7A99] mr-4 group-hover:text-purple-800 duration-150'
                                />
                                <span className='group-hover:text-purple-800 group-hover:underline duration-150'>
                                  Discord General
                                </span>
                              </a>
                            </li>
                          )}
                          {course.discord.private && (
                            <li>
                              <a
                                href={course.discord.private}
                                rel='noreferrer'
                                target={'_blank'}
                                className='flex items-center'>
                                <SiDiscord
                                  size={18}
                                  className='text-[#6A7A99] mr-4'
                                />
                                <span>Discord Privado</span>
                              </a>
                            </li>
                          )}
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
                          <li className='flex items-center cursor-pointer hover:bg-purple-100 p-1 pr-2 rounded group'>
                            <IoDocument
                              size={18}
                              className='text-[#6A7A99] mr-4'
                            />
                            <span>Introducción</span>
                            <IoCloudDownloadOutline size={18} className='ml-auto' />
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
                        <span>Clases</span>
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
                          {course.lessons.map((lesson) => (
                            <li key={lesson._id}>
                              <Link
                                to={`${path.courses}/${course.slug}/clases/${lesson.number}`}
                                className='flex items-center cursor-pointer hover:bg-purple-100 p-1 rounded group'>
                                <IoVideocam
                                  size={18}
                                  className='text-[#6A7A99] mr-4 group-hover:text-purple-800 duration-150'
                                />
                                <span className='group-hover:text-purple-800 group-hover:underline'>
                                  {lesson.title}
                                </span>
                                <span className='ml-auto group-hover:text-purple-800'>
                                  {lesson.duration.hours > 0 &&
                                    `${lesson.duration.hours}:`}
                                  {lesson.duration.minutes < 10
                                    ? `0${lesson.duration.minutes}`
                                    : lesson.duration.minutes}
                                  :
                                  {lesson.duration.seconds < 10
                                    ? `0${lesson.duration.seconds}`
                                    : lesson.duration.seconds}
                                </span>
                              </Link>
                            </li>
                          ))}
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
                          {course.feedbacks.map((feedback) => (
                            <li key={feedback._id}>
                              <Link
                                to={`${path.courses}/${course.slug}/feedbacks/${feedback.number}`}
                                className='flex items-center cursor-pointer hover:bg-purple-100 p-1 rounded group'>
                                <IoMegaphone
                                  size={18}
                                  className='text-[#6A7A99] mr-4 group-hover:text-purple-800 duration-150'
                                />
                                <span className='group-hover:text-purple-800 group-hover:underline'>
                                  {feedback.date}
                                </span>
                                <span className='ml-auto group-hover:text-purple-800'>
                                  {feedback.duration.hours > 0 &&
                                    `${feedback.duration.hours}:`}
                                  {feedback.duration.minutes < 10
                                    ? `0${feedback.duration.minutes}`
                                    : feedback.duration.minutes}
                                  :
                                  {feedback.duration.seconds < 10
                                    ? `0${feedback.duration.seconds}`
                                    : feedback.duration.seconds}
                                </span>
                              </Link>
                            </li>
                          ))}
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
                <figure className='w-32 h-32 rounded-full bg-gray-300 mr-5 overflow-hidden'>
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className='w-full h-full object-cover'
                  />
                </figure>
                <div>
                  <h4 className='text-xl text-[#140342] font-bold mb-1'>
                    {course.instructor.name}
                  </h4>
                  <p className='text-[#4F547B] mb-2'>
                    {course.instructor.title}
                  </p>
                  <div className='flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 lg:items-center text-sm lg:space-x-3 text-[#4F547B]'>
                    <p className='text-[#cf8f29] flex items-center font-medium'>
                      <AiFillStar className='mr-1' />
                      {course.instructor.rating}
                    </p>
                    <p className='flex items-center'>
                      <IoPersonSharp className='text-[#6A7A99] mr-1' />{' '}
                      {course.instructor.students} Estudiantes
                    </p>
                    <p className='flex items-center'>
                      <IoBook className='text-[#6A7A99] mr-1' />
                      {course.instructor.courses} Cursos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12'>
              <h3 className='text-2xl font-bold mb-6'>
                Calificación de Estudiantes
              </h3>
              <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-3'>
                <div className='bg-white lg:bg-[#F5F7FE] rounded w-full lg:w-72 h-56 flex flex-col items-center justify-center'>
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
                <div className='bg-white lg:bg-[#F5F7FE] rounded flex-1 h-56 p-8 flex flex-col justify-between'>
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
        <div className='hidden w-full lg:w-1/3 xl:flex items-start justify-center'>
          <div className='sticky top-20 w-80 p-3 rounded-lg shadow-lg bg-white space-y-3'>
            <figure className='w-full aspect-video rounded bg-gray-300 overflow-hidden'>
              <img
                src={course.image}
                alt={course.name}
                className='w-full h-full object-fill object-center'
              />
            </figure>
            <h3 className='text-4xl text-center'>
              $ {course.price} USD
            </h3>
            <button className='w-full py-3 rounded border font-medium text-sm bg-[#6440FB] border-[#6440FB] text-white outline-none focus:outline-none'>
              Comprar Ahora
            </button>
            {/* <button className="w-full py-3 rounded border font-medium text-sm text-[#1A064F] border-[#1A064F] hover:text-white hover:bg-[#1A064F] duration-150">Comprar Ahora</button> */}
            <ul className='mt-10'>
              {[
                {
                  Icon: IoVideocamOutline,
                  name: 'Clases',
                  detail: course.lessons.length,
                },
                {
                  Icon: IoDocumentOutline,
                  name: 'Archivos',
                  detail: course.materials.length,
                },
                {
                  Icon: IoTimeOutline,
                  name: 'Duración',
                  detail: `${course.duration.hours}H ${course.duration.minutes}M`,
                },
                {
                  Icon: IoBarChartOutline,
                  name: 'Nivel',
                  detail: course.level,
                },
                {
                  Icon: IoRibbonOutline,
                  name: 'Certificado',
                  detail: course.certificate ? 'Sí' : 'No',
                },
                {
                  Icon: IoTelescopeOutline,
                  name: 'Acceso',
                  detail: `${course.access} ${
                    course.access > 1 ? 'Meses' : 'Mes'
                  }`,
                },
              ].map(({ Icon, name, detail }) => (
                <li
                  key={name}
                  className='w-full text-sm flex items-center justify-between py-2 border-b last:border-b-0'>
                  <strong className='flex items-center font-medium text-[#140342]'>
                    <Icon className='mr-2' size={16} />
                    {name}
                  </strong>
                  <span className='text-[#4F547B]'>{detail}</span>
                </li>
              ))}
            </ul>
            {course.certificatedTerms && (
              <a
                href={course.certificatedTerms}
                rel='noreferrer'
                target={'_blank'}
                className='my-8 text-xs text-purple-800 text-center leading-tight flex items-center justify-center hover:underline duration-300'>
                Terminos y condiciones <br />
                para certificarse
              </a>
            )}
          </div>
        </div>
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

export default Course;
