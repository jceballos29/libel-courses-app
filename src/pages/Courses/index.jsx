/** @format */

import axios from 'axios';
import CourseCard from 'components/cards/CourseCard';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { IoEllipse } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { path } from 'routes';

const Courses = () => {

  // const { courses } = useSelector(state => state.courses);
  // const [filter, setFilter] = useState(0);
  const [courses, setCourses] = useState([])
  // const [categories, setCategories] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: coursesResponse } = await axios.get(`/courses`);
        setCourses(coursesResponse.data);
      } catch (error) {
        setCourses([]);
      }
    }
    fetchData();
  }, [])
  

  return (
    <section className='mt-16'>
      <Helmet>
        <title>Cursos | Libel Academy</title>
      </Helmet>
      <div className='bg-[#F5F7FE] w-full h-12'>
        <div className='container h-full flex items-center space-x-4'>
          <Link
            to={path.home}
            className='text-xs text-[#4F547B] hover:text-gray-900'>
            Inicio
          </Link>
          <IoEllipse size={6} className='text-[#4F547B]' />
          <span className='text-xs text-[#4F547B]'>
            Nuestro Cursos
          </span>
        </div>
      </div>
      <div className='pt-24 pb-32'>
        <div className='container'>
          <h2>Nuestros Cursos</h2>
          <p className='text-[#4F547B]'>
          Inicia tu curva de aprendizaje con acompañamiento en vivo.
          </p>
          <div className='pt-24 flex items-center justify-between'>
            <div className='hidden lg:block w-72'></div>
            <div className='flex-1'>
              <div className="flex items-center justify-between pb-8">
              <p className='text-sm text-[#4F547B]'>
                Mostrando <b className='text-[#140342]'>{courses.length}</b> resultados
              </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center content-center'>
              {
                courses.map((course) => (
                  <CourseCard key={course._id} element={course} />
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
