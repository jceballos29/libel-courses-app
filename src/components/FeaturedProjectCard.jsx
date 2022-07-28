/** @format */

import Image from "react-image-webp";

const FeaturedProjectCard = ({feature}) => {
  return (
    <div className='w-[260px] mb-4 p-2 rounded shadow border overflow-hidden bg-white'>
      <figure className='w-full h-[280px] bg-gray-300 rounded mb-2 overflow-hidden'>
        <Image webp={feature.imageWebp} src={feature.image} alt='alessio-rossi' className='h-full object-cover object-center' />
      </figure>
      <div className='px-2'>
        <h5 className='text-[#140342] font-medium mb-1'>{feature.name}</h5>
        <p className='text-[#4F547B] text-sm'>
          {feature.title}
        </p>
        <p className='text-xs'>{feature.country}</p>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
