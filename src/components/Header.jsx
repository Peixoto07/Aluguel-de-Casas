import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.svg';
import useHouse from "../hook/useHouse";
import LoginPopup from "./Login";

const Header = () => {
  const {handleLoginButtonClick, setIsSignUp} = useHouse();

  const handleSignInClick = () => {
    setIsSignUp(false);
    handleLoginButtonClick();
  };
  const handleSignUpClick = () => {
    setIsSignUp(true);
    handleLoginButtonClick();
  };



  return (

    <header className="py-6 mb-12 border-b fixed shadow-1 top-0 left-0 right-0 bg-white z-10">
  <div className="container mx-auto flex justify-between items-center">
    <Link to={"/"}>
      <img src={Logo} alt="" />
    </Link>
    <div className="flex items-center gap-6">
      <Link onClick={handleSignInClick} className="hover:text-violet-900 transition">Entrar</Link>
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
