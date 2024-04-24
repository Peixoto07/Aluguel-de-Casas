/* eslint-disable react/prop-types */


const SkeletonCard = () => (
  <div className='mt-8 p-5 gap-4 grid grid-cols-1 rounded-lg bg-slate-50 w-full max-w-[352px] mx-auto cursor-pointer animate-pulse'>
    <div className='bg-gray-300 h-40 w-full rounded-lg'></div>
    
    <div className='text-lg font-semibold max-w-[260px] bg-gray-300 h-6 rounded-lg'></div>
    <div className='flex gap-x-4'>
      <div className='bg-gray-300 rounded-full text-gray-300 h-6 w-14'></div>
      <div className='bg-gray-300 rounded-full text-gray-300 h-6 w-14'></div>
      <div className='bg-gray-300 rounded-full text-gray-300 h-6 w-14'></div>
    </div>
    <div className='text-lg font-semibold text-gray-300 mb-4 h-6 w-24 bg-gray-300 rounded-lg'></div>
  </div>
);

const SkeletonLoader = ({ count }) => {
  const skeletons = Array.from({ length: count }).map((_, index) => (
    <SkeletonCard  key={index} />
  ));

  return <>{skeletons}</>;
};

export default SkeletonLoader;
