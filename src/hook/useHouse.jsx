import { useContext } from "react";
import { HouseContext } from "../context/HouseContext";


export default function useHouse  ()  {
    const context = useContext(HouseContext);
    return context;
}

