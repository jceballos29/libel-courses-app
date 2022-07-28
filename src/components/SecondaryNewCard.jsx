/** @format */

import Image from 'react-image-webp';

const SecondaryNewCard = ({ element }) => {
  return (
    <a href={element.url} className='group flex h-24 space-x-5'>
      <figure className='w-24 rounded-lg aspect-square bg-[#E5F0FD] flex  overflow-hidden relative group'>
        <Image
          webp={element.imageWebp}
          src={element.image}
          alt='impresion-3d-blender'
          className='w-full h-full object-cover object-center'
        />
      </figure>
      <div className='flex-1 flex flex-col items-start justify-center'>
        <p className='uppercase font-medium text-[#6440FB] text-sm group-hover:text-[#242239] duration-300'>
          {element.category}
        </p>
        <h4 className='group-hover:text-[#6440FB] duration-300'>
          {element.title}
        </h4>
        <p className='text-xs text-[#4F547B]'>{element.date}</p>
      </div>
    </a>
  );
};

export default SecondaryNewCard;
