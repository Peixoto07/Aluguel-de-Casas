/* eslint-disable react/prop-types */

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import IconInfo from './IconInfo';
import Badeg from './Badge';

const House = ({ casa }) => {
  const {
    imageLg,
    type,
    city,
    address,
    bedrooms,
    bathrooms,
    surface,
    price
  } = casa;

  return (

    <div className='bg-white shadow-1 p-5 gap-4 grid grid-cols-1 rounded-xl w-full
    max-w-[600px] min-w-80 mx-auto cursor-pointer hover:shadow-2xl transition hover:scale-[1.02] '>
      <img className='mb-4 rounded-xl' src={imageLg} alt='' />
      <div className=' flex text-nowrap gap-x-2 text-sm '>
      <Badeg className='bg-green-500 '>{type}</Badeg>
  <Badeg className='bg-violet-500 '>{city}</Badeg>
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
        R${price}
      </div>
    </div>

  );


};

export default House;
