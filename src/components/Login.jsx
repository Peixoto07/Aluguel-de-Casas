import { useState } from "react";
import useHouse from "../hook/useHouse";
import { IoMdClose } from "react-icons/io";

const LoginPopup = () => {
    const { handleLoginButtonClick, showLoginPopup, setIsSignUp, isSignUp } = useHouse();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleSignUpClick = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário enviado com sucesso!");
    };

    return (
        <>
            {showLoginPopup && (
                <div
                    id="login-popup"
                    tabIndex="-1"
                    className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
                    onClick={handleLoginButtonClick}
                >
                    <div
                        className="relative p-4 w-[30rem] h-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative bg-white rounded-lg shadow">

                            <button
                                type="button"
                                className="flex p-4 justify-end w-full"
                            >
                                <IoMdClose onClick={handleLoginButtonClick} size='1.5rem' color="gray"/>
                            </button>

                            <div className="flex gap-8 flex-col p-5">

                                <div className="text-center">
                                    <p className="mb-3 text-2xl font-semibold leading-5 text-violet-600">
                                        {isSignUp ? "Cadastre-se" : "Faça login na sua conta"}
                                    </p>
                                    <p className="mt-2 text-sm leading-4 text-slate-600">
                                        Acesse sua conta e aproveite todos os benefícios
                                    </p>
                                </div>

                                <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
                                    {isSignUp && (
                                        <>
                                            <div className="flex gap-4">
                                                <div className="w-1/2">
                                                    <label htmlFor="firstName" className="sr-only">
                                                        Nome
                                                    </label>
                                                    <input
                                                        name="firstName"
                                                        type="text"
                                                        autoComplete="given-name"
                                                        required={true}
                                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
                                                        placeholder="Nome"
                                                        value={firstName}
                                                        onChange={handleFirstNameChange}
                                                    />
                                                </div>
                                                <div className="w-1/2">
                                                    <label htmlFor="lastName" className="sr-only">
                                                        Sobrenome
                                                    </label>
                                                    <input
                                                        name="lastName"
                                                        type="text"
                                                        autoComplete="family-name"
                                                        required={true}
                                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
                                                        placeholder="Sobrenome"
                                                        value={lastName}
                                                        onChange={handleLastNameChange}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <label htmlFor="email" className="sr-only">
                                        Endereço de e-mail
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required={true}
                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <label htmlFor="password" className="sr-only">
                                        Senha
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required={true}
                                        className=" block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
                                        placeholder="Senha"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />

                                    <p className="mb-3  text-sm text-gray-500">
                                        <a href="/" className="text-blue-800 hover:text-violet-400">
                                            Esqueceu sua senha?
                                        </a>
                                    </p>
                                    <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-violet-700 p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 hover:bg-violet-800 focus:ring-violet-900 focus:ring-offset-1 disabled:bg-gray-400">
                                        {isSignUp ? "Cadastrar" : "Continuar"}
                                    </button>
                                </form>

                                <div className="mt-6 text-center text-lg text-slate-600">
                                    {isSignUp ? "Já possui uma conta? " : "Não tem uma conta? "}
                                    <button
                                        onClick={handleSignUpClick}
                                        className="font-medium text-[#4285f4] focus:outline-none"
                                    >
                                        {isSignUp ? "Faça Login" : "Cadastre-se"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginPopup;
