/* eslint-disable react/prop-types */



const IconInfo  = ({ icon: Icon, children, className }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className='text-[20px]'>
        <Icon />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default IconInfo ;