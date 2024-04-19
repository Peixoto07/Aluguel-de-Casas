/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { housesData } from '../data';
import { faixaDePrecos } from '../data';

export const HouseContext = createContext();

export const HouseContextProvider = ({ children }) => {

  const [casas, setCasas] = useState(housesData);
  const [pais, setPais] = useState('Localização (qualquer)');
  const [paises, setPaises] = useState([]);
  const [propriedade, setPropriedade] = useState('Propriedade (qualquer)');
  const [propriedades, setPropriedades] = useState([]);
  const [preco, setPreco] = useState('Faixa de preço (qualquer)');
  const [precos, setPrecos] = useState([]);
  const [loading, setloading] = useState(false);

  
  useEffect(() => {
    const todosPaises = casas.map((casa) => casa.country);
  const paisesUnicos = ['Localização (qualquer)', ...new Set(todosPaises)];

  const todosTipos = casas.map((casa) => casa.type);
  const tiposUnicos = ['Propriedade (qualquer)', ...new Set(todosTipos)];

  
  const precosUnicos = faixaDePrecos.map(item => item.value);

  
  
  setPrecos(precosUnicos);
  setPaises(paisesUnicos);
  setPropriedades(tiposUnicos);
  
}, []);

const handleClick = ()=>{
  console.log('clicou');
};

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
  preco,
  setPreco,
  precos,
  setPrecos,
  loading,
  setloading,
  handleClick,
};
  return (
    <HouseContext.Provider value={valores}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
