import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';
const Banner = () => {
  return (
    <section className=' h-full max-h-[670px] mb-4  lg:mb-8 xxl:mb-20 '>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex
flex-col items-center lg:items-start
text-center lg:text-left justify-center flex-1
px-4 lg:px-0'>

          <h1 className='text-4xl lg:text-[58px]
font-semibold leading-none mb-6'>
            O <span className='text-violet-700' >Aluguel </span>
            Dos Sonhos Está Aqui.
          
          </h1>
          <p className='max-w-[480px] mb-8'>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Debitis
            magnam est autem minus expedita accusantium
            quam fugit distinctio
            molestias incidunt!
          </p>
        </div>
        {/* image */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>

      <Search />
    </section >
  );
};

export default Banner;
