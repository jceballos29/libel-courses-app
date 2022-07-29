/** @format */

import Image from 'react-image-webp';

const PrimaryNewCard = ({element}) => {
  
  return (
    <a
      href={element.url}
      className='w-full max-w-[400px] h-[488px] group'>
      <figure className='w-full aspect-square rounded-lg overflow-hidden bg-gray-900 mb-3 flex items-center justify-center'>
        <Image
          webp={element.imageWebp}
          src={element.image}
          alt={element.title}
          className='h-full object-contain object-center'
        />
      </figure>
      <div className='w-full h-1/4 flex flex-col items-start'>
        <h5 className='uppercase text-[#6440FB] text-sm font-medium mb-2 group-hover:text-[#242239] duration-300'>
          {element.category}
        </h5>
        <h3 className='text-[#242239] text-xl mb-1 group-hover:text-[#6440FB] duration-300'>
          {element.title}
        </h3>
        <p className='text-sm text-[#4F547B]'>{element.date}</p>
      </div>
    </a>
  );
};

export default PrimaryNewCard;
