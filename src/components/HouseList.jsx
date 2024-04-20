import { Link } from 'react-router-dom'; 
import useHouse from '../hook/useHouse';
import House from './House/House';


const HouseList = () => {
  const { casas, loading } = useHouse(); 

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
       
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-4'>
        
            {casas.map((casa, index) => (
              <Link className='mb-8' to={`/property/${casa.id}`} key={index}>
                <House casa={casa} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HouseList;
