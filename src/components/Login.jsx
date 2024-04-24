import { useState } from "react";
import useHouse from "../hook/useHouse";

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
                                onClick={handleLoginButtonClick}
                                type="button"
                                className="flex p-4 justify-end w-full"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="#c6c7c7"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close popup</span>
                            </button>

                            <div className="flex gap-8 flex-col p-5">


                                <div className="text-center">
                                    <p className="mb-3 text-2xl font-semibold leading-5 text-violet-600">
                                        {isSignUp ? "Sign up" : "Login to your account"}
                                    </p>
                                    <p className="mt-2 text-sm leading-4 text-slate-600">
                                        You must be logged in to perform this action.
                                    </p>
                                </div>

                                <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
                                    {isSignUp && (
                                        <>
                                            <div className="flex gap-4">
                                                <div className="w-1/2">
                                                    <label htmlFor="firstName" className="sr-only">
                                                        First Name
                                                    </label>
                                                    <input
                                                        name="firstName"
                                                        type="text"
                                                        autoComplete="given-name"
                                                        required={true}
                                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
                                                        placeholder="First Name"
                                                        value={firstName}
                                                        onChange={handleFirstNameChange}
                                                    />
                                                </div>
                                                <div className="w-1/2">
                                                    <label htmlFor="lastName" className="sr-only">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        name="lastName"
                                                        type="text"
                                                        autoComplete="family-name"
                                                        required={true}
                                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
                                                        placeholder="Last Name"
                                                        value={lastName}
                                                        onChange={handleLastNameChange}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required={true}
                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required={true}
                                        className=" block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />

                                    

                                    <p className="mb-3  text-sm text-gray-500">
                                        <a href="/forgot-password" className="text-blue-800 hover:text-violet-400">
                                            Reset your password?
                                        </a>
                                    </p>
                                    <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-violet-700 p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 hover:bg-violet-800 focus:ring-violet-900 focus:ring-offset-1 disabled:bg-gray-400">
                                        {isSignUp ? "Sign Up" : "Continue"}
                                    </button>
                                </form>

                                <div className="mt-6 text-center text-sm text-slate-600">
                                    {isSignUp ? "Already have an account? " : "Dont have an account? "}
                                    <button
                                        onClick={handleSignUpClick}
                                        className="font-medium text-[#4285f4] focus:outline-none"
                                    >
                                        {isSignUp ? "Log In" : "Sign up"}
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
