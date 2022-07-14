/** @format */

import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
  IoCaretForward,
  //IoEllipse,
  IoCheckmarkCircleOutline,
  IoPersonOutline,
  IoTimeOutline,
} from 'react-icons/io5';
import ReactPlayer from 'react-player';
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
      <div className='hidden lg:block bg-[#E5F0FD] w-full h-12'>
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
      <div className='pb-32 container'>
        <div className='py-16 lg:py-24 lg:pr-96'>
          <header>
            <h2 className='w-full mb-5'>{course.name}</h2>
            <p className='w-full text-[#4F547B] text-lg mb-3'>
              Use XD to get a job in UI Design, User Interface, User
              Experience design, UX design & Web Design
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
          <figure className='my-16 bg-gray-500 w-full aspect-video rounded-lg overflow-hidden shadow'>
            <ReactPlayer
              width='100%'
              height='100%'
              url='https://www.youtube.com/watch?v=qyG2LYBv_Ww&t=5s&ab_channel=LIBELACADEMY'
              playing={true}
            />
          </figure>
          <div className='w-full p-7 bg-white rounded-lg shadow'>
            <div>
              <h3 className='text-2xl font-bold mb-3'>Descripción</h3>
              <p className='text-gray-700'>
                Phasellus enim magna, varius et commodo ut, ultricies
                vitae velit. Ut nulla tellus, eleifend euismod
                pellentesque vel, sagittis vel justo. In libero urna,
                venenatis sit amet ornare non, suscipit nec risus. Sed
                consequat justo non mauris pretium at tempor justo
                sodales. This course is aimed at people interested in
                UI/UX Design. We’ll start from the very beginning and
                work all the way through, step by step. If you already
                have some UI/UX Design experience but want to get up
                to speed using Adobe XD then this course is perfect
                for you too! First, we will go over the differences
                between UX and UI Design. We will look at what our
                brief for this real-world project is, then we will
                learn about low-fidelity wireframes and how to make
                use of existing UI design kits.
              </p>
            </div>
            <div className='mt-8'>
              <h3 className='text-2xl font-bold mb-3'>¿Qué aprenderás?</h3>
              <ul>
                <IoCheckmarkCircleOutline size={22}/>
              </ul>
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
