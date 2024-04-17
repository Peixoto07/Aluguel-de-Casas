/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

export const HouseContextProvider = ({ children }) => {

  const [casas, setCasas] = useState(housesData);
const [pais, setPais] = useState('Localização (qualquer)');
const [paises, setPaises] = useState([]);
const [propriedade, setPropriedade] = useState('Tipo de propriedade (qualquer)');
const [propriedades, setPropriedades] = useState([]);
const [preço, setPreço] = useState('Faixa de preço (qualquer)');
const [loading, setloading] = useState(false);

const valores = {
  casas,
  setCasas,
  pais,
  setPais,
  paises,
  setPaises,
  propriedade,
  setPropriedade,
  propriedades,
  setPropriedades,
  preço,
  setPreço,
  loading,
  setloading
};

  return (
    <HouseContext.Provider value={valores}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
