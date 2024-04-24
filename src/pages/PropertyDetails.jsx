
import { Link, useParams } from "react-router-dom";
import { housesData } from "../data";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import Badge from '../components/Badge';
import IconInfo from "../components/IconInfo";

const inputOut = "px-4 h-14 text-sm w-full border border-gray-300 focus:border-violet-700 outline-none rounded";


const PropertyDetails = () => {
  const { id } = useParams();

  const casa = housesData.find(casa => {
    return casa.id === parseInt(id);
  });

  return (
    <section className="mt-24 pt-8">
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row  lg:items-center lg:justify-between'>
          <div className=" flex flex-col lg:flex-row  lg:items-center lg:justify-between w-[74%] xl:max-w-[768px] max-w-[628px] ">

            <div>
              <h2 className="text-2xl font-semibold">
                {casa.name}
              </h2>

              <h3 className="text-lg mb-4">
                {casa.address}
              </h3>

            </div>

            <div className=" w-max flex gap-x-2 mb-4 lg:mb-0">
              <Badge className='bg-green-500' >{casa.type}</Badge>
              <Badge className='bg-violet-500' >{casa.city}</Badge>
            </div>
          </div>
          <div className="text-3xl font-semibold lg:mb-0 mb-4 text-violet-600">
            R${casa.price}
          </div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={casa.imageLg} alt='' />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <IconInfo icon={BiBed}  >{casa.bedrooms} </IconInfo>
              <IconInfo icon={BiBath}  > {casa.bathrooms}</IconInfo>
              <IconInfo icon={BiArea} >{casa.surface} </IconInfo>
            </div>
            <div>{casa.description}</div>
          </div>
          <div className=" min-w-[300px] flex-1 bg-white w-full mb-8 border border-gray-300 
          rounded-lg px-6 py-8
          ">
            <div className=" flex items-center gap-x-4 mb-8 ">

              <div className=" w-16  p-1 border border-gray-300 rounded-full" >
                <img src={casa.agent.image} alt="agent image" />
              </div>

              <div>
                <div className="font-bold text-md">{casa.agent.name} </div>
                <Link to=''
                  className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>

            <form className="flex flex-col gap-4">
              <input className={inputOut} type="text" placeholder="Nome*" />
              <input className={inputOut} type="text" placeholder="Email*" />
              <input className={inputOut} type="text" placeholder="Telefone*" />

              <textarea
                className="px-4 h-36 text-sm w-full border border-gray-300 focus:border-violet-700 outline-none rounded"
                placeholder="Mensagem*" ></textarea>
              <div>
                <button className="w-full bg-violet-700 hover:bg-violet-800 text-white rounded p-4">
                  Enviar
                </button>

              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
