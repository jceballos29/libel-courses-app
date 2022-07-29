/** @format */

import React from 'react';

const Top = ({ title, amount, Icon }) => {
  return (
    <div className='px-8 py-6 border rounded w-full bg-white shadow flex items-center justify-between'>
      <div>
        <p className='text-[#4F547B] text-sm font-medium mb-4'>
          {title}
        </p>
        <h3 className='text-[#140342] text-4xl font-bold'>
          {amount}
        </h3>
      </div>
      <Icon size={42} className='text-[#6440FB]' />
    </div>
  );
};

export default Top;
