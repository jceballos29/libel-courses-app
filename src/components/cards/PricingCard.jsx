/** @format */

import { HiOutlineCheck } from 'react-icons/hi';

const PricingCard = ({ pricing }) => {
  return (
    <div className='w-full rounded shadow overflow-hidden'>
      <div className='px-10 py-8 md:px-14 md:py-10 bg-[#1A064F] text-white relative'>
        <div className='text-center relative z-[1]'>
          <h5 className='text-base font-semibold'>{pricing.name}</h5>
          <h3 className='text-5xl mt-2 mb-1'>${pricing.price} USD</h3>
          <p className='text-xl line-through'>
            ${pricing.before} USD
          </p>
        </div>
      </div>
      <div className='p-10 md:p-14 bg-white text-[#4F547B]'>
        <p className='mb-8'>{pricing.description}</p>
        <ul className='mb-8'>
          {pricing.benefits.map((item, index) => (
            <li
              key={index}
              className='text-sm flex items-center mb-4'>
              <HiOutlineCheck
                size={18}
                className='text-[#0044EB] mr-2'
              />
              {item}
            </li>
          ))}
        </ul>
        <a
          href={pricing.url}
          className='block text-center w-full bg-[#6440FB]/10 text-[#6440FB] font-medium py-4 px-7 rounded-lg hover:bg-[#6440FB] hover:text-white duration-150'>
          Comienza Ahora
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
