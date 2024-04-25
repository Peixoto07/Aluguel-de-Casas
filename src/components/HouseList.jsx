/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import useHouse from '../hook/useHouse';
import House from './House';
import SkeletonLoader from './SkeletonLoader';
import NotFoundPage from './NotFoundPage';



const HouseList = () => {
  const { casas, loading } = useHouse();

  return (
    <section className=" mx-auto max-w-[1800px] py-8 xl:py-10 xxl:py-24">

      {loading ? (
        <div  className="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-2">
          <SkeletonLoader  count={8} />
        </div>
      ) : casas.length < 1 ? (
        <NotFoundPage />
      ) : (
        <div className="flex gap-y-4 flex-wrap ">
          {casas.map((casa, index) => (
            <Link className="mb-4 px-3 xl:w-1/3 xxl:w-1/4 lg:w-1/3 md:w-1/2 w-full" to={`/property/${casa.id}`} key={index}>
              <House casa={casa} />
            </Link>
          ))}
        </div>
      )}


    </section>

  );
};

export default HouseList;
