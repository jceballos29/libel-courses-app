import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { path } from 'routes';
import { courses } from 'utils/backend';

const Feedback = () => {

  const { slug, number } = useParams();
  const [course, setCourse] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchCourse = () => {
      const result = courses.find((course) => course.slug === slug);
      const feedback = result.feedbacks.find(
        (feedback) => feedback.number === parseInt(number)
      );
      setCourse(result);
      setFeedback(feedback);
    };
    fetchCourse();
  }, [slug, number]);

  return feedback ? (
    <>
      <figure className='bg-gray-500 w-full aspect-video rounded-lg overflow-hidden shadow-lg'>
        <ReactPlayer
          width='100%'
          height='100%'
          className='react-player'
          url={feedback.video}
          playing={true}
          controls={true}
        />
        {/* <iframe src="https://player.vimeo.com/video/683923972"  width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      </figure>
      <div className='mt-4 lg:pl-1'>
        <div className='w-full flex items-center justify-between mb-4 '>
          <h3 className='text-2xl font-bold '>{feedback.title}</h3>
          {feedback.number < course.feedbacks.length && (<Link
              to={`${path.courses}/${course.slug}/clases/${
                feedback.number + 1
              }`}
              className='px-4 py-2 cursor-pointer rounded bg-purple-800 text-white font-medium hover:bg-purple-900'>
              Siguiente
            </Link>)}
        </div>
        <p className='text-[#4F547B]'>{feedback.description}</p>
      </div>
    </>
  ) : (
    <>
      <h3>Clase no encontrada</h3>
    </>
  );
}

export default Feedback