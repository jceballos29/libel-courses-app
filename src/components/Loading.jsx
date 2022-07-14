/** @format */

const Loading = () => {
  return (
    <div className='w-full h-[calc(100vh_-_4rem)] flex items-center justify-center'>
      <div className='flex items-center'>
        <span className='inline-block w-2 h-20 bg-purple-900 opacity-50 rounded-full animate-scale-up'></span>
        <span className='inline-block w-2 h-28 bg-purple-900 opacity-50 rounded-full mx-4 animate-scale-up-25'></span>
        <span className='inline-block w-2 h-20 bg-purple-900 opacity-50 rounded-full animate-scale-up-5'></span>
      </div>
    </div>
  );
};

export default Loading;
