/* eslint-disable react/prop-types */

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import IconInfo from './IconInfo';

const House = ({ casa }) => {
  const {
    image,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price
  } = casa;

  return (

    <div className='bg-white shadow-1 p-5 gap-4 grid grid-cols-1 rounded-lg rounded-tl-[90px] w-full
    max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition hover:scale-[1.02] '>
      <img className='mb-4' src={image} alt='' />
      <div className=' flex gap-x-2 text-sm '>
        <div className='bg-green-500 rounded-full text-white px-3'>
          {type}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3'>
          {country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px] '>
        {address}
      </div>
      <div className=' flex gap-x-4 '>
        <IconInfo icon={BiBed} className='text-gray-600' >{bedrooms} </IconInfo> 
        <IconInfo icon={BiBath} className='text-gray-600' > {bathrooms}</IconInfo> 
        <IconInfo icon={BiArea} className='text-gray-600' >{surface} </IconInfo> 
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4 '>
        {price}
      </div>
    </div>

  );


};

export default House;
