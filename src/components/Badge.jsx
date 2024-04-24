/* eslint-disable react/prop-types */


const Badge = ({ className, children }) => {
  return (
    <div className={`rounded-full text-white px-3 h-max  ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
