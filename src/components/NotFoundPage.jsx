import { BsHouseX } from "react-icons/bs";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center  gap-4 py-20">
      <BsHouseX className=" size-32 text-gray-200 " />
      <div className="flex flex-col items-start">
        <h1 className=" text-6xl font-bold text-gray-400 mb-2">404</h1>
        <h2 className="text-xl font-bold text-gray-400 mb-2">Página não encontrada</h2>
        <p className=" text-gray-400">Pesquise novamente</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
