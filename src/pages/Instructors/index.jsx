/** @format */

import InstructorCard from 'components/cards/InstructorCard';
import { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  IoChevronBack,
  IoChevronDown,
  IoChevronForward,
  IoEllipse,
} from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from 'routes';
import { Listbox, Transition } from '@headlessui/react';
import { Helmet } from 'react-helmet';

const sorted = [
  { id: 0, name: '-----' },
  { id: 1, name: 'Nombre' },
  { id: 2, name: 'Cursos' },
];

const Instructors = () => {
  const { instructors } = useSelector((state) => state.instructors);
  const [currentItems, setCurrentItems] = useState(null);
  const [items, setItems] = useState(instructors);
  const [sort, setSort] = useState(sorted[0]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    if (sort.id === 1) {
      setItems(
        [...instructors].sort((a, b) => (a.name < b.name ? -1 : 1))
      );
    }
    else if (sort.id === 2) {
      setItems(
        [...instructors].sort((a, b) => (b.courses.length - a.courses.length))
      );
    } else {
      setItems(instructors);
    }
  }, [sort, instructors]);

  return (
    <div className='mt-16'>
      <Helmet>
        <title>Instructores | Libel Academy</title>
      </Helmet>
      <div className='bg-[#F5F7FE] w-full h-12'>
        <div className='container h-full flex items-center space-x-4'>
          <Link
            to={path.home}
            className='text-xs text-[#4F547B] hover:text-gray-900'>
            Inicio
          </Link>
          <IoEllipse size={6} className='text-[#4F547B]' />
          <span className='text-xs text-[#4F547B]'>Instructores</span>
        </div>
      </div>
      <div className='pt-24 pb-32'>
        <div className='container'>
          <h2 className='text-center'>Instructores</h2>
          <p className='text-[#4F547B] text-center'>
            Nuestros maestros son especialistas en cada una de las
            áreas.
          </p>
          <div className='pt-24 flex items-center justify-between pb-10'>
            <p className='text-sm text-[#4F547B]'>
              Mostrando{' '}
              <b className='text-[#140342]'>{items.length}</b>{' '}
              resultados
            </p>
            <div className='flex items-center space-x-4'>
              <span className='text-sm text-[#4F547B]'>
                Ordenar por:{' '}
              </span>
              <Listbox value={sort} onChange={setSort}>
                <div className='relative'>
                  <Listbox.Button className='w-40 px-4 py-2 text-[#4F547B] bg-[#EEF2F6] rounded flex items-center justify-between'>
                    <span>{sort.name}</span>
                    <IoChevronDown size={16} />
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {sorted.map((item) => (
                        <Listbox.Option
                          key={item.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 px-4 text-[#4F547B] ${
                              active
                                ? 'bg-[#EEF2F6] text-[#140342]'
                                : 'text-[#4F547B]'
                            }`
                          }
                          value={item}>
                          {({ selected }) => (
                            <>
                              <span
                                className={`h-full w-full flex items-center justify-between truncate ${
                                  selected
                                    ? 'font-medium text-[#140342]'
                                    : 'font-normal text-[#4F547B]'
                                }`}>
                                {item.name}
                              </span>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center content-center mb-14'>
            {currentItems &&
              currentItems.map((instructor) => (
                <InstructorCard
                  key={instructor._id}
                  instructor={instructor}
                />
              ))}
          </div>
          <ReactPaginate
            breakLabel='...'
            nextLabel={<IoChevronForward size={18} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={<IoChevronBack size={18} />}
            renderOnZeroPageCount={null}
            containerClassName='flex items-center justify-center space-x-8 font-bold'
            pageLinkClassName='hover:text-[#6440FB]'
            previousLinkClassName='flex items-center justify-center w-10 h-10 rounded-full text-[#6440FB] bg-[#E5F0FD] hover:bg-[#6440FB] hover:text-white'
            nextLinkClassName='flex items-center justify-center w-10 h-10 rounded-full text-[#6440FB] bg-[#E5F0FD] hover:bg-[#6440FB] hover:text-white'
            activeLinkClassName='text-[#6440FB] underline underline-offset-4 decoration-2'
          />
        </div>
      </div>
    </div>
  );
};

export default Instructors;
