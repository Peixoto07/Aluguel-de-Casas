/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import useHouse from '../hook/useHouse';
import House from './House';
import SkeletonLoader from './SkeletonLoader';
import NotFoundPage from './NotFoundPage';



const HouseList = () => {
  const { casas, loading } = useHouse();

  return (
    <section className=" mx-auto max-w-[1800px] sm:px-8 mb-20">

      {loading ? (
        <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <SkeletonLoader  count={6} />
        </div>
      ) : casas.length < 1 ? (
        <NotFoundPage />
      ) : (
        <div className="flex flex-wrap ">
          {casas.map((casa, index) => (
            <Link className="mb-8 xl:w-1/4 lg:w-1/3 md:w-1/2 p-4 w-full" to={`/property/${casa.id}`} key={index}>
              <House casa={casa} />
            </Link>
          ))}
        </div>
      )}


    </section>

  );
};

export default HouseList;
