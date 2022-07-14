/** @format */

import Image from 'react-image-webp';

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5';

import LogoLibel from 'images/logo-libel.png';
import LogoLibelWebp from 'images/logo-libel.webp';
import { Link } from 'react-router-dom';
import { path } from 'routes';
import { categories } from 'utils/backend';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-800 text-white'>
      <div className='container'>
        <div className='py-6 flex flex-col lg:flex-row lg:items-center justify-between w-full border-b border-gray-200/10 '>
          <Image
            webp={LogoLibelWebp}
            src={LogoLibel}
            alt='logo'
            width={190}
            height={60}
          />
          <div className='flex flex-col lg:flex-row lg:items-center mt-6'>
            <h4 className='uppercase font-medium text-sm mb-4 lg:mb-0 lg:mr-6'>
              Sigue nuestras redes sociales
            </h4>
            <div className='flex items-center justify-start space-x-2'>
              <div className='rounded-full p-1.5 hover:bg-white/40 cursor-pointer'>
                <IoLogoFacebook size={18} />
              </div>
              <div className='rounded-full p-1.5 hover:bg-white/40 cursor-pointer'>
                <IoLogoTwitter size={18} />
              </div>
              <div className='rounded-full p-1.5 hover:bg-white/40 cursor-pointer'>
                <IoLogoInstagram size={18} />
              </div>
              <div className='rounded-full p-1.5 hover:bg-white/40 cursor-pointer'>
                <IoLogoLinkedin size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-8 grid grid-cols-1 lg:grid-cols-4 space-y-12 lg:space-y-0'>
          <ul className='space-y-2'>
            {[
              'Inicio',
              'Cursos',
              'Escuelas',
              'Masters',
              'Acerca de',
            ].map((item, index) => (
              <li
                key={index}
                className='uppercase w-fit font-medium cursor-pointer hover:text-gray-600'>
                {item}
              </li>
            ))}
          </ul>

          <div className='lg:col-span-2'>
            <h3 className='uppercase font-medium mb-4'>Categorías</h3>
            <ul className='pl-4 grid grid-cols-2 lg:grid-cols-3 gap-2'>
              {
                categories.map((category) => (
                  <li
                  key={category.id}
                  className='capitalize text-left text-sm font-light text-gray-400 cursor-pointer hover:text-gray-600'>
                  {category.name}
                </li>
                ))
              }
            </ul>
          </div>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <button className='w-[250px] py-2 px-4 rounded-lg font-medium bg-[#6440FB] text-white accent-[#6440FB] duration-150 flex items-center justify-center'>
              Solicita Asesoría
            </button>
            <button className='w-[250px] py-2 px-4 rounded-lg font-medium bg-[#6440FB] text-white accent-[#6440FB] duration-150 flex items-center justify-center'>
              Trabaja con nosotros
            </button>
            <button className='w-[250px] py-2 px-4 rounded-lg font-medium bg-[#6440FB] text-white accent-[#6440FB] duration-150 flex items-center justify-center'>
              Crea tu cuenta
            </button>
          </div>
        </div>
        <div className='w-full py-6 text-xs border-t border-gray-200/10 flex items-center justify-center flex-col md:flex-row md:justify-between text-gray-400'>
          <p className='flex flex-col lg:flex-row items-center mb-4 lg:mb-0'>
            &copy; {new Date().getFullYear()} Libel Academy.{' '}
            <span>Todos los derechos reservados.</span>
          </p>
          <div className='flex items-center gap-5'>
            <Link
              to={path.privacy_policy}
              className='hover:text-white cursor-pointer'>
              Política de Privacidad
            </Link>
            <Link
              to={path.terms_and_conditions}
              className='hover:text-white cursor-pointer'>
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
