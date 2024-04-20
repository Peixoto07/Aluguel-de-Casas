/* eslint-disable react/prop-types */


const Badge  = ({ icon: Icon, info }) => {
  return (
    <div className='flex items-center text-gray-600 gap-1'>
      <div className='text-[20px]'>
        <Icon />
      </div>
      <div>{info}</div>
    </div>
  );
};

export default Badge ;