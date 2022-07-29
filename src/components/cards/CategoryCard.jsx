/** @format */

const CategoryCard = ({category}) => {
  return (
    <div className='w-full h-[160px] rounded overflow-hidden shadow group cursor-pointer relative'>
      <figure className='absolute top-0 left-0 w-full h-full bg-gray-600'>
        <img src={category.image} alt={category.name} className="w-full h-full object-cover object-center"/>
      </figure>
      <div className='w-full h-full flex flex-col items-center justify-center text-white bg-black/20 group-hover:bg-[#6440FB]/50 relative z-[5]'>
        <h5>{category.name}</h5>
        <p className='text-xs'>{category.courses}+ Cursos </p>
      </div>
    </div>
  );
};

export default CategoryCard;
