/** @format */

const CategoryCard = ({category}) => {
  return (
    <div className='w-full h-[160px] rounded overflow-hidden shadow group cursor-pointer relative'>
      <figure className='absolute top-0 left-0 w-full h-full bg-gray-600'>
        <img src={category.image} alt={category.name} className="w-full h-full object-cover object-center"/>
      </figure>
      <div className='w-full h-full flex flex-col items-center justify-center text-white bg-[#0B0322]/60 group-hover:bg-[#6440FB]/80 relative z-[5]'>
        <h5 className="text-2xl font-medium">{category.name}</h5>
        <p className='text-xs'>{category.courses.length} Cursos </p>
      </div>
    </div>
  );
};

export default CategoryCard;
