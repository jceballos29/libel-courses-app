/** @format */

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link, useParams } from 'react-router-dom';
import { path } from 'routes';
import { MdMenuOpen } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Player } from 'video-react';

const Lesson = () => {
  const { slug, number } = useParams();
  const { courses } = useSelector((state) => state.courses);
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
        {/* <ReactPlayer
            width='100%'
            height='100%'
            className='react-player'
            url={lesson.video}
            playing={true}
            controls={true}
          /> */}
        {/* <video id='videoPlayer' width='100%' height="100%" controls autoPlay >
          <source src="http://35.225.41.97:5000/v1/files/dacab57e-672a-4748-9e72-3db8879c85a8.mp4" type='video/mp4' />
        </video> */}
        {/* <iframe src={lesson.video}  width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <Player
          playsInline
          poster={course.image}
          src={lesson.video}
          width="100%"
          height="100%"
          controls={true}
          preload="auto"
        />
      </figure>
      <div className='mt-4 lg:pl-1'>
        <div className='w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between mb-4 lg:mb-8'>
          <h3 className='text-2xl font-bold '>{lesson.title}</h3>
          <div className='flex items-center space-x-3 lg:space-x-0 mb-8 lg:mb-0'>
            <button className='lg:hidden p-2 cursor-pointer rounded bg-purple-800 text-white font-medium hover:bg-purple-900'>
              <MdMenuOpen size={24} />
            </button>
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
