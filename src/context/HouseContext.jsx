/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { housesData } from '../data';
import { faixaDePrecos } from '../data';

export const HouseContext = createContext();

export const HouseContextProvider = ({ children }) => {

  const [casas, setCasas] = useState(housesData);
  const [pais, setPais] = useState('Qualquer localização');
  const [paises, setPaises] = useState([]);
  const [propriedade, setPropriedade] = useState('Qualquer propiedade');
  const [propriedades, setPropriedades] = useState([]);
  const [preco, setPreco] = useState('Qualquer valor');
  const [precos, setPrecos] = useState([]);
  const [loading, setloading] = useState(false);


  useEffect(() => {
    const todosPaises = casas.map((casa) => casa.country);
    const paisesUnicos = ['Qualquer localização', ...new Set(todosPaises)];

    const todosTipos = casas.map((casa) => casa.type);
    const tiposUnicos = ['Qualquer propiedade', ...new Set(todosTipos)];


    const precosUnicos = faixaDePrecos.map(item => item.value);



    setPrecos(precosUnicos);
    setPaises(paisesUnicos);
    setPropriedades(tiposUnicos);

  }, []);

  const handleClick = () => {
    const precoMin = parseInt(preco.split(' ')[0]);
    const precoMax = parseInt(preco.split(' ')[2]);
  
    const isQualquerValor = (valor) => valor.split(' ').includes('Qualquer');
  
    const filtraCasas = housesData.filter((casa) => {
      const precoDasCasas = parseInt(casa.price);
  
      const atendeFiltroPais = isQualquerValor(pais) || casa.country === pais;
      const atendeFiltroTipo = isQualquerValor(propriedade) || casa.type === propriedade;
      const atendeFiltroPreco = isQualquerValor(preco) || (precoDasCasas >= precoMin && precoDasCasas <= precoMax);
  
      return atendeFiltroPais && atendeFiltroTipo && atendeFiltroPreco;
    });
  setCasas(filtraCasas);

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
