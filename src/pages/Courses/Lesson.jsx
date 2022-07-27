/** @format */

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link, useParams } from 'react-router-dom';
import { path } from 'routes';
import { courses } from 'utils/backend';

const Lesson = () => {
  const { slug, number } = useParams();
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const fetchCourse = () => {
      const result = courses.find((course) => course.slug === slug);
      const lesson = result.lessons.find(
        (lesson) => lesson.number === parseInt(number)
      );
      setCourse(result);
      setLesson(lesson);
    };
    fetchCourse();
  }, [slug, number]);

  return lesson ? (
    <>
      <figure className='bg-gray-500 w-full aspect-video rounded-lg overflow-hidden shadow-lg'>
        <ReactPlayer
          width='100%'
          height='100%'
          className='react-player'
          url={lesson.video}
          // playing={true}
          controls={true}
        />
        {/* <iframe src="https://player.vimeo.com/video/683923972"  width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      </figure>
      <div className='mt-4 lg:pl-1'>
        <div className='w-full flex items-center justify-between mb-4 '>
          <h3 className='text-2xl font-bold '>{lesson.title}</h3>
          {lesson.number === course.lessons.length ? (
            <button className='px-4 py-2 cursor-pointer rounded bg-purple-800 text-white font-medium hover:bg-purple-900'>
            Completar
          </button>
            
          ) : (
            <Link
              to={`${path.courses}/${course.slug}/clases/${
                lesson.number + 1
              }`}
              className='px-4 py-2 cursor-pointer rounded bg-purple-800 text-white font-medium hover:bg-purple-900'>
              Completar y Continuar
            </Link>
          )}
        </div>
        <p className='text-[#4F547B]'>{lesson.description}</p>
      </div>
    </>
  ) : (
    <>
      <h3>Clase no encontrada</h3>
    </>
  );
};

export default Lesson;
