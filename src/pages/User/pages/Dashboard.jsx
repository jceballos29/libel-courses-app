/** @format */

import CourseCard from 'components/cards/CourseCard';
import Top from 'components/widgets/Top';
import { courses } from 'utils/backend';
import React from 'react';
import {
  IoBan,
  IoTrophyOutline,
  IoSchoolOutline,
} from 'react-icons/io5';

const Dashboard = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5'>
        <Top title='Cursos' amount='10' Icon={IoTrophyOutline} />
        <Top
          title={'Cursos En Proceso'}
          amount={50}
          Icon={IoSchoolOutline}
        />
        <Top title={'Cursos Expirados'} amount={20} Icon={IoBan} />
      </div>
      <h3 className='text-2xl mb-5'>Cursos Recientes</h3>
        {courses.filter(
          (course) =>
            new Date(course.createdAt).getTime() >
            new Date(
              new Date().setDate(new Date().getDate() - 7)
            ).getTime()
        ).length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center content-center'>
            {courses
              .filter(
                (course) =>
                  new Date(course.createdAt).getTime() >
                  new Date(
                    new Date().setDate(new Date().getDate() - 7)
                  ).getTime()
              )
              .map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
          </div>
        ) : (
          <div>
            <h3 className='text-lg font-medium text-gray-600'>
            No hay cursos recientes
          </h3>
          </div>
        )}
    </section>
  );
};

export default Dashboard;
