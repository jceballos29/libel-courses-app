/** @format */

import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import {
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoPodium,
} from 'react-icons/io5';
import { NavLink, Outlet } from 'react-router-dom';
import { navigation, path } from 'routes';
import classNames from 'utils/classNames';

const index = () => {
  return (
    <section className='py-16 bg-[#F7F8FB]'>
      <Helmet>
        <title>Mi Portal</title>
        <meta name='description' content='Cursos' />
      </Helmet>
      <div className='container flex flex-col space-y-5'>
        <header className='mt-4 p-12 overflow-hidden bg-[#6440FB] rounded-xl text-white flex flex-col items-center space-y-8 lg:space-y-0 justify-center lg:flex-row  lg:justify-between'>
          <div className='flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0 items-center justify-center'>
            <figure className='w-32 h-32 rounded-full bg-gray-500 overflow-hidden'></figure>
            <div className='flex flex-col items-center justify-center text-center lg:text-left lg:justify-start lg:items-start'>
              <h2 className='mb-3'>Angie Cardenas</h2>
              <p className='flex items-center'>
                <IoMailOutline
                  size={18}
                  className='mr-2 text-white hidden lg:block'
                />{' '}
                angiecarde10@hotmail.com
              </p>
              <p className='flex items-center '>
                <IoPhonePortraitOutline
                  size={18}
                  className='mr-2 tet-white hidden lg:block'
                />
                +573112123450
              </p>
              <p className='flex items-center'>
                <IoLocationOutline
                  size={18}
                  className='mr-2 text-white hidden lg:block'
                />{' '}
                Bogotá, Colombia
              </p>
            </div>
          </div>
          <div className='w-full lg:max-w-max flex flex-col space-y-2'>
            <button className='px-4 py-2 bg-[#00FF84] text-[#1A064F] text-sm font-medium rounded cursor-pointer'>
              Perfil
            </button>
            <button className='px-4 py-2 bg-[#00FF84] text-[#1A064F] text-sm font-medium rounded cursor-pointer'>
              Contraseña
            </button>
          </div>
        </header>
        <div className='w-full h-full flex lg:space-x-5'>
          <aside className='hidden lg:block h-full w-60 px-4'>
            <NavLink
              end
              to={path.portal}
              className={({ isActive }) =>
                classNames(
                  'mb-6 px-4 py-2 rounded text-sm flex items-center cursor-pointer group hover:bg-[#1A064F] hover:text-white duration-150',
                  isActive
                    ? 'bg-[#1A064F] text-white'
                    : 'text-[#4F547B]'
                )
              }>
              <IoPodium size={20} className='mr-3' />
              <span>Dashboard</span>
            </NavLink>
            {navigation.user.map((section) => (
              <div key={section.id} className='w-full mb-6'>
                <div className='flex items-center space-x-4 mb-3'>
                  <span className='uppercase font-bold text-xs'>
                    {section.title}
                  </span>
                  <div className='flex-1 h-px bg-[#140342]' />
                </div>
                <div className='space-y-2'>
                  {section.items.map(({ Icon, label, id, to }) => (
                    <NavLink
                      end
                      to={to}
                      key={id}
                      className={({ isActive }) =>
                        classNames(
                          'px-4 py-2 rounded text-sm flex items-center cursor-pointer group hover:bg-[#1A064F] hover:text-white duration-150',
                          isActive
                            ? 'bg-[#1A064F] text-white'
                            : 'text-[#4F547B]'
                        )
                      }>
                      <Icon size={20} className='mr-3' />
                      <span>{label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </aside>
          <main className='flex-1'>
            <Suspense
              fallback={
                <div className='w-full h-full flex items-center justify-center'>
                  <div className='w-24 h-24 border-4 border-[#1A064F] border-l-[#4F547B]/50 rounded-full animate-spin' />
                </div>
              }>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </section>
  );
};

export default index;
