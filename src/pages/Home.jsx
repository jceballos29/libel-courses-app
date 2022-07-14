/** @format */

import Image from 'react-image-webp';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

import headerBackground from 'images/home-header-background.png';
import headerBackgroundWebp from 'images/home-header-background-2.webp';
import onlineTraining1 from 'images/online-training 1.png';
import onlineTraining1Webp from 'images/online-training-1.webp';
import teacher1 from 'images/teacher 1.png';
import teacher1Webp from 'images/teacher-1.webp';
import web1 from 'images/web 1.png';
import web1Webp from 'images/web-1.webp';
import onlineCourse1 from 'images/online-course 1.png';
import onlineCourse1Webp from 'images/online-course-1.webp';
import creditCard1 from 'images/credit-card 1.png';
import creditCard1Webp from 'images/credit-card-1.webp';
import onlineLearning2 from 'images/online-learning 2.png';
import onlineLearning2Webp from 'images/online-learning-2.webp';
import line1 from 'images/Line 1.png';
import line2 from 'images/Line 2.png';
import line1Webp from 'images/Line-1.webp';
import line2Webp from 'images/Line-2.webp';

import CategoryCard from 'components/CategoryCard';
import CourseCard from 'components/CourseCard';
import InstructorCard from 'components/InstructorCard';
import FeaturedProjectCard from 'components/FeaturedProjectCard';
import PricingCard from 'components/PricingCard';
import { Link } from 'react-router-dom';
import { path } from 'routes';
import memberships from 'utils/memberships';
import { categories, courses } from 'utils/backend';

const Home = () => {
  return (
    <div>
      <header
        className='w-full bg-gray-200 relative text-white bg-no-repeat bg-cover bg-top-center'
        style={{
          backgroundImage: `url(${
            isWebpSupported ? headerBackgroundWebp : headerBackground
          })`,
        }}>
        <div className='py-32 lg:py-52 relative z-[3] bg-[#140342]/10'>
          <div className='container flex flex-col items-center justify-center'>
            <p className='text-[#00FF84] mb-3 font-bold'>
              Inicia tu curva de aprendizaje
            </p>
            <h1 className='text-white mb-6 w-full lg:w-3/5 leading-snug text-center'>
              Formamos especialistas para la industria 3D
            </h1>
            <Link
              to={path.courses}
              className='px-14 py-4 border border-white rounded-lg bg-white text-[#140342] font-medium hover:bg-transparent hover:text-white'>
              Ver Cursos
            </Link>
          </div>
        </div>
      </header>
      <div className='px-2 lg:px-6'>
        <section>
          <div className='container px-4 py-8 mx-auto flex flex-col md:flex-row gap-10 items-start justify-between '>
            <div className='flex'>
              <Image
                webp={onlineTraining1Webp}
                src={onlineTraining1}
                alt='logo'
                width={50}
                height={50}
              />
              <div className='ml-4 flex flex-col items-start'>
                <h3 className='text-xl'>500 Cursos en línea</h3>
                <p>Explora nuestros cursos</p>
              </div>
            </div>
            <div className='flex'>
              <Image
                webp={teacher1Webp}
                src={teacher1}
                alt='logo'
                width={50}
                height={50}
              />
              <div className='ml-4 flex flex-col items-start'>
                <h3 className='text-xl'>Instructores Expertos</h3>
                <p>El correcto instructor para ti</p>
              </div>
            </div>
            <div className='flex'>
              <Image
                webp={web1Webp}
                src={web1}
                alt='logo'
                width={50}
                height={50}
              />
              <div className='ml-4 flex flex-col items-start'>
                <h3 className='mt-2 text-xl'>Feedback online</h3>
                <p>Acompañamiento en vivo</p>
              </div>
            </div>
          </div>
        </section>
        <section className='section bg-[#F5F7FE] rounded-2xl text-[#140342]'>
          <div className='container'>
            <div className='mb-10 lg:mb-16 flex flex-col items-start justify-between lg:flex-row lg:items-center'>
              <div className='mb-4 lg:mb-0 w-full'>
                <h2 className='text-center'>Cursos Recientes</h2>
                <p className='text-center'>
                  Inicia tu curva de aprendizaje con acompañamiento en
                  vivo.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center content-center'>
              {courses.slice(0, 8).map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
            <div className='mt-14 w-full flex items-center justify-center'>
              <Link
                to={path.courses}
                className='py-4 px-7 rounded-lg bg-[#6440FB]/10 text-[#6440FB] font-medium hover:bg-[#6440FB] hover:text-white duration-150 flex items-center'>
                Ver Cursos{' '}
                <HiOutlineArrowSmRight size={20} className='ml-3' />
              </Link>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container mx-auto px-4'>
            <div className='mb-10 lg:mb-16 flex flex-col items-start justify-between lg:flex-row lg:items-center'>
              <div className='mb-4 lg:mb-0 w-full '>
                <h2 className='text-center'>Categorías</h2>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center content-center'>
              {categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </div>
        </section>
        <section className='section bg-[#F5F7FE] rounded-2xl text-[#140342]'>
          <div className='container'>
            <div className='mb-10 lg:mb-16 flex flex-col items-start justify-between lg:flex-row lg:items-center'>
              <div className='mb-4 lg:mb-0'>
                <h2>Estudiantes Destacados</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur.</p> */}
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center content-center'>
              {Array.from({ length: 4 }).map((_, index) => (
                <FeaturedProjectCard key={index} />
              ))}
            </div>
          </div>
        </section>
        <section className='section border-b'>
          <div className='container'>
            <div className='mb-10 lg:mb-16 flex flex-col items-start justify-between lg:flex-row lg:items-center'>
              <div className='mb-4 lg:mb-0'>
                <h2>Aprende con los mejores</h2>
              </div>
              <button className='py-4 px-7 rounded-lg bg-[#6440FB]/10 text-[#6440FB] font-medium hover:bg-[#6440FB] hover:text-white duration-150 flex items-center'>
                Todos los instructores{' '}
                <HiOutlineArrowSmRight size={20} className='ml-3' />
              </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-5 mb-20'>
              {Array.from({ length: 4 }).map((_, index) => (
                <InstructorCard key={index} />
              ))}
            </div>
            <p className='w-[80%] md:w-full mx-auto text-center'>
              ¿Quieres ayudar a las personas a aprender, crecer y ser
              profesionales?{' '}
              <span className='text-[#6440FB] cursor-pointer hover:underline'>
                Conviértete en instructor.
              </span>
            </p>
          </div>
        </section>
        <section className='section'>
          <div className='container flex flex-col items-center justify-center'>
            <h2 className='mb-4'>¿Cómo Funciona?</h2>
            {/* <p>10,000+ unique online course list designs</p> */}
            <div className='w-full mt-14 flex flex-col md:flex-row gap-20 md:gap-0 items-center md:items-baseline justify-between'>
              <div className='w-80 flex flex-col items-center justify-center'>
                <div className='w-28 h-28 bg-[#F7F8FB] mb-8 rounded-full relative flex items-center justify-center'>
                  <Image
                    webp={onlineCourse1Webp}
                    src={onlineCourse1}
                    alt='logo'
                    width={50}
                    height={50}
                  />
                  <div className='w-9 h-9 bg-[#1A064F] absolute -top-1.5 -left-0.5 rounded-full border-4 border-white flex items-center justify-center'>
                    <span className='text-white text-xs font-medium'>
                      01
                    </span>
                  </div>
                </div>
                <h5 className='font-medium text-[#140342] text-center normal-case'>
                  Explora nuestros cursos y encuentra el mejor para ti
                </h5>
              </div>
              <div className='hidden md:block'>
                <Image
                  webp={line1Webp}
                  src={line1}
                  alt='logo'
                  width={140}
                  height={14.5}
                />
              </div>
              <div className='w-80 flex flex-col items-center'>
                <div className='w-28 h-28 bg-[#F7F8FB] mb-8 rounded-full relative flex items-center justify-center'>
                  <Image
                    webp={creditCard1Webp}
                    src={creditCard1}
                    alt='logo'
                    width={50}
                    height={50}
                  />
                  <div className='w-9 h-9 bg-[#1A064F] absolute -top-1.5 -left-0.5 rounded-full border-4 border-white flex items-center justify-center'>
                    <span className='text-white text-xs font-medium'>
                      02
                    </span>
                  </div>
                </div>
                <h5 className='font-medium text-[#140342] text-center normal-case'>
                  Compra rápido y de forma segura.
                </h5>
              </div>
              <div className='hidden md:block'>
                <Image
                  webp={line2Webp}
                  src={line2}
                  alt='logo'
                  width={140}
                  height={14.5}
                  className='hidden md:block'
                />
              </div>
              <div className='w-80 flex flex-col items-center'>
                <div className='w-28 h-28 bg-[#F7F8FB] mb-8 rounded-full relative flex items-center justify-center'>
                  <Image
                    webp={onlineLearning2Webp}
                    src={onlineLearning2}
                    alt='logo'
                    width={50}
                    height={50}
                  />
                  <div className='w-9 h-9 bg-[#1A064F] absolute -top-1.5 -left-0.5 rounded-full border-4 border-white flex items-center justify-center'>
                    <span className='text-white text-xs font-medium'>
                      03
                    </span>
                  </div>
                </div>
                <h5 className='font-medium text-[#140342] text-center normal-case'>
                  ¡Eso es todo! Comienza a aprender de inmediato.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className='section bg-[#F5F7FE] rounded-2xl text-[#140342]'>
          <div className='container flex flex-col items-center justify-center'>
            <h2>Membresías</h2>
            <p>Aprende todo en un mismo lugar.</p>
            <div className='mt-10 lg:mt-16 flex flex-col lg:flex-row items-center justify-center gap-5'>
              {memberships.map((membership, index) => (
                <PricingCard key={index} pricing={membership} />
              ))}
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container flex flex-col items-center justify-center mb-16'>
            <h2 className='mb-4'>News & Events</h2>
            <p>10,000+ unique online course list designs</p>
          </div>
          <div className='flex flex-wrap items-star justify-center gap-5 gap-y-10'>
            <div className='w-full max-w-[410px] h-[488px]'>
              <figure className='w-full h-3/4 rounded-lg overflow-hidden bg-gray-300 mb-3'></figure>
              <div className='w-full h-1/4 flex flex-col items-start'>
                <h5 className='uppercase text-[#6440FB] text-sm font-medium mb-2'>
                  Education
                </h5>
                <h3 className='text-[#242239] text-xl mb-1'>
                  Eco-Education in Our Lives: We Can Change the Future
                </h3>
                <p className='text-sm text-[#4F547B]'>
                  December 16, 2022
                </p>
              </div>
            </div>
            <div className='w-full max-w-[410px] h-[488px]'>
              <figure className='w-full h-3/4 rounded-lg overflow-hidden bg-gray-300 mb-3'></figure>
              <div className='w-full h-1/4 flex flex-col items-start'>
                <h5 className='uppercase text-[#6440FB] text-sm font-medium mb-2'>
                  Education
                </h5>
                <h3 className='text-[#242239] text-xl mb-1'>
                  Eco-Education in Our Lives: We Can Change the Future
                </h3>
                <p className='text-sm text-[#4F547B]'>
                  December 16, 2022
                </p>
              </div>
            </div>
            <div className='w-full max-w-[410px] md:max-w-[840px] 2xl:max-w-[410px] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 gap-5 justify-items-start'>
              <div className='group flex'>
                <div className='mr-5 rounded-lg w-24 h-24 bg-[#E5F0FD] flex flex-col items-center justify-center group-hover:bg-[#6440FB] group-hover:text-white'>
                  <h3 className='text-3xl'>15</h3>
                  <p className='font-medium'>JUNE</p>
                </div>
                <div className='h-24 flex flex-col items-start justify-evenly'>
                  <p className='uppercase font-medium text-[#6440FB] text-sm'>
                    Courses
                  </p>
                  <h4>Medical Chemistry: The Molecular Basis</h4>
                </div>
              </div>
              <div className='group flex'>
                <div className='mr-5 rounded-lg w-24 h-24 bg-[#E5F0FD] flex flex-col items-center justify-center group-hover:bg-[#6440FB] group-hover:text-white'>
                  <h3 className='text-3xl'>15</h3>
                  <p className='font-medium'>JUNE</p>
                </div>
                <div className='h-24 flex flex-col items-start justify-evenly'>
                  <p className='uppercase font-medium text-[#6440FB] text-sm'>
                    Courses
                  </p>
                  <h4 className='text-base'>
                    Medical Chemistry: The Molecular Basis
                  </h4>
                </div>
              </div>
              <div className='group flex'>
                <div className='mr-5 rounded-lg w-24 h-24 bg-[#E5F0FD] flex flex-col items-center justify-center group-hover:bg-[#6440FB] group-hover:text-white'>
                  <h3 className='text-3xl'>15</h3>
                  <p className='font-medium'>JUNE</p>
                </div>
                <div className='h-24 flex flex-col items-start justify-evenly'>
                  <p className='uppercase font-medium text-[#6440FB] text-sm'>
                    Courses
                  </p>
                  <h4>Medical Chemistry: The Molecular Basis</h4>
                </div>
              </div>
              <div className='group flex'>
                <div className='mr-5 rounded-lg w-24 h-24 bg-[#E5F0FD] flex flex-col items-center justify-center group-hover:bg-[#6440FB] group-hover:text-white'>
                  <h3 className='text-3xl'>15</h3>
                  <p className='font-medium'>JUNE</p>
                </div>
                <div className='h-24 flex flex-col items-start justify-evenly'>
                  <p className='uppercase font-medium text-[#6440FB] text-sm'>
                    Courses
                  </p>
                  <h4>Medical Chemistry: The Molecular Basis</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
