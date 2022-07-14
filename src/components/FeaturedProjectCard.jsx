/** @format */

const FeaturedProjectCard = () => {
  return (
    <div className='w-[300px] mb-4 p-2 rounded shadow border overflow-hidden bg-white'>
      <figure className='w-full h-[330px] bg-gray-300 rounded mb-2'></figure>
      <div className='px-2'>
        <h5 className='text-[#140342] font-medium mb-1'>Ali Tufan</h5>
        <p className='text-[#4F547B] text-sm'>
          Professional Web Developer
        </p>
        <p className='text-xs'>United States</p>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
