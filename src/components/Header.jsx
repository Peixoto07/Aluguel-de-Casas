import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.svg';
import useHouse from "../hook/useHouse";
import LoginPopup from "./Login";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const {handleLoginButtonClick, setIsSignUp} = useHouse();
  const [showMenu, setShowMenu] = useState(false);

  const handleSignInClick = () => {
    setIsSignUp(false);
    handleLoginButtonClick();
  };
  const handleSignUpClick = () => {
    setIsSignUp(true);
    handleLoginButtonClick();
  };





  return (

    <header className="py-4 transition mb-12 border-b fixed shadow-1 top-0 left-0 right-0 bg-white z-10">
  <div className=" gap-8 container mx-auto grid sm:flex justify-center sm:justify-between items-center">
    <div className="flex justify-between w-[90vw]" >
    <Link to={"/"}>
      <img src={Logo} alt="" />
    </Link>
    <button onClick={() => setShowMenu(!showMenu)} className=" sm:hidden" >
    {
      showMenu ? <IoMdClose size='2rem' color="gray"/> :<IoIosMenu size='2rem' color="gray"/> 
    }
 
    </button>
    </div>
    <div className={`${showMenu ? "" : "hidden"} transition-all sm:flex w-[90vw] sm:w-auto sm:mx-0  mx-auto text-center grid items-center gap-2`}>
      <Link onClick={handleSignInClick} className="hover:text-violet-900 px-4 py-3 rounded-lg border transition">Entrar</Link>
      <Link onClick={handleSignUpClick} className="bg-violet-700 hover:bg-violet-800 text-nowrap text-white px-4 py-3 rounded-lg transition">
        Cadastrar-se
      </Link>
    </div>
  </div>
  <LoginPopup />
</header>


  );
};

export default Header;
