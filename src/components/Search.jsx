/* eslint-disable no-unused-vars */

import Dropdown from './Dropdown';
import { MdOutlinePriceChange } from "react-icons/md";
import { RiHome5Line, RiMapPinLine, RiSearch2Line, RiWallet3Line } from 'react-icons/ri';
import useHouse from '../hook/useHouse';



const Search = () => {
    const {handleClick, casas, setPreco, precos, preco, paises, pais, setPais, propriedade, setPropriedade, propriedades } = useHouse();
     

    return (
        <div className='px-[30px] py-6 max-w-[1024px]
    mx-auto flex flex-col lg:flex-row justify-between
    gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1
    bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
            <Dropdown
                items={paises}
                selectedItem={pais}
                setSelectedItem={setPais}
                icon={RiMapPinLine}
                title="Localização"
            />

            <Dropdown
                items={propriedades}
                selectedItem={propriedade}
                setSelectedItem={setPropriedade}
                icon={RiHome5Line}
                title="Tipo de propiedade"
            />
            <Dropdown
                items={precos}
                selectedItem={preco}
                setSelectedItem={setPreco}
                icon={MdOutlinePriceChange}
                title="Faixa de preço"
            />
        
           
            <button onClick={handleClick} className=' bg-violet-700 hover:bg-violet-800 
                transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center
                 items-center text-white text-lg'>
                <RiSearch2Line />
            </button>
        </div>
    );
};
export default Search;
