/** @format */

import React from 'react';
import { IoEllipse } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { path } from 'routes';
import { Tab } from '@headlessui/react';
import classNames from 'utils/classNames';

const BecomeAnInstructor = () => {
  const items = [
    {
      id: 1,
      title: 'Conviértete en instructor',
      content: [
        'Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, a diferencia de usar "Contenido aquí, contenido aquí", lo que hace que parezca un inglés legible.',
        'Muchos paquetes de autoedición y editores de páginas web ahora usan Lorem Ipsum como su modelo de texto predeterminado, y una búsqueda de "lorem ipsum" descubrirá muchos sitios web que aún están en su infancia.'
      ],
    },
    {
      id: 2,
      title: 'Normas del instructor',
      content: [
        'Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, a diferencia de usar "Contenido aquí, contenido aquí", lo que hace que parezca un inglés legible.',
      ]
    },
    {
      id: 3,
      title: 'Empieza con Cursos',
      content: [
        'Muchos paquetes de autoedición y editores de páginas web ahora usan Lorem Ipsum como su modelo de texto predeterminado, y una búsqueda de "lorem ipsum" descubrirá muchos sitios web que aún están en su infancia.',
      ]
    }
  ];

  return (
    <div className='mt-16'>
      <div className='bg-[#F5F7FE] w-full h-12'>
        <div className='container h-full flex items-center space-x-4'>
          <Link
            to={path.home}
            className='text-xs text-[#4F547B] hover:text-gray-900'>
            Inicio
          </Link>
          <IoEllipse size={6} className='text-[#4F547B]' />
          <span className='text-xs text-[#4F547B]'>
            Conviértete en instructor
          </span>
        </div>
      </div>
      <div className='pt-24 pb-10'>
        <div className='container'>
          <h2 className='text-center'>Conviértete en instructor</h2>
          <p className='text-[#4F547B] text-center'>
            Tenemos la misión de ofrecer cursos atractivos y
            seleccionados a un precio razonable.
          </p>
          <div className='pt-14 mb-20'>
            <Tab.Group as='div' className='max-w-4xl mx-auto'>
              <Tab.List className=" relative flex " >
                <div className=' w-full h-full border-b-2 top-0 left-0 absolute'/>

                 {
                    items.map(item => (
                      <Tab key={item.id}
                        className={
                          ({selected}) => classNames(
                            'relative z-[1] md:mr-6 text-sm pt-2 pb-3 border-b-2 font-medium outline-none focus:outline-none hover:text-[#6440FB] hover:border-[#6440FB] duration-200',
                            selected ? 'text-[#6440FB] border-[#6440FB]' : 'text-[#212529]',
                          )
                        }
                      >
                        {item.title}
                      </Tab>
                    ))
                 }
                
              </Tab.List>
              <Tab.Panels>
                {
                  items.map(item => (
                    <Tab.Panel key={item.id} className="pt-14">
                      {item.content.map((content, index) => (
                        <p key={index} className='text-sm text-left text-[#4F547B] mb-6'>
                          {content}
                        </p>
                      ))}
                    </Tab.Panel>
                  ))
                }
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className='py-14 px-4 lg:px-14 bg-[#F7F8FB] rounded-lg flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0'>
              <div className='w-full lg:w-1/2'>
              <h3 className='text-4xl text-[#140342] text-center lg:text-left'>Conviértete en instructor<br/><span className="text-[#6440FB]" >Hoy mismo</span></h3>
              </div>
              <div className='w-full lg:w-1/2 flex items-center justify-center'>
                <button className='px-6 py-4 bg-[#1A064F] text-white text-sm rounded-lg cursor-pointer font-medium'>Únete a nuestro equipo</button>
              </div>
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnInstructor;
