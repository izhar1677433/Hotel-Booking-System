import React, { useState } from "react";
import { Facebook, GitHub, Google } from "@mui/icons-material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerAvatar, setRegisterAvatar] = useState("");

  const LoginForm = () => {
    return (
      <div className="flex w-full max-w-4xl flex-col items-center rounded-2xl bg-white shadow-2xl transition duration-1000 ease-out md:w-1/3">
        <h2 className="p-3 text-3xl font-bold text-pink-500">Royal Heights</h2>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-blue-500"></div>
        <h3 className="pt-2 text-xl font-semibold text-blue-500">LogIn!</h3>
        <div className="m-4 flex items-center justify-center space-x-2">
          <div className="socialIcon">
            <a href="https://www.facebook.com/">
              <Facebook />
            </a>
          </div>
          <div className="socialIcon">
            <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">
              <GitHub />
            </a>
          </div>
          <div className="socialIcon ">
            <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S270332677%3A1753895650844520">
              <Google />
            </a>
          </div>
        </div>
        {/* Inputs */}
        <div className="flex flex-col items-center justify-center bg-white">
          <input
            type="email"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-gray-600 px-2 py-1 focus:border-blue-600 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-gray-600 px-2 py-1 focus:border-blue-600 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Password"
          ></input>
          <button className="m-2 w-2/5 rounded-2xl bg-blue-600 px-4 py-2 text-white shadow-md transition duration-200 ease-in hover:bg-white hover:text-blue-400">
            Sign In
          </button>
        </div>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-blue-600"></div>
        <p className="mt-4 text-sm text-blue-600">Don't have an account?</p>
        <p
          className="mb-4 cursor-pointer text-sm font-medium text-blue-600"
          onClick={() => setIsLogin(false)}
        >
          Create a New Account?
        </p>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div className="flex w-full max-w-4xl flex-col  items-center rounded-2xl bg-white  text-black shadow-2xl transition duration-1000 ease-in md:w-1/3">
        <h2 className="p-3 text-3xl font-bold text-pink-600">Royal Heights</h2>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-black"></div>
        <h3 className="pt-2 text-xl font-semibold text-blue-600">
          Create Account!
        </h3>
        <div className="m-4 flex items-center justify-center space-x-2">
          <div className="socialIcon border-black">
            <a href="https://www.facebook.com/">
              <Facebook className="size-2xl text-black" />
            </a>
          </div>
          <div className="socialIcon border-white">
            <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">
              <GitHub className="text-black" />
            </a>
          </div>
          <div className="socialIcon border-white">
            {" "}
            <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S270332677%3A1753895650844520">
              <Google className="text-black" />{" "}
            </a>
          </div>
        </div>
        {/* Inputs */}
        <div className="mt-2 flex flex-col  items-center justify-center">
          <input
            type="Text"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-gray-600 px-2 py-1 focus:border-blue-600 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder=" Full Name"
          ></input>
          <input
            type="email"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-gray-600 px-2 py-1 focus:border-blue-600 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-gray-600 px-2 py-1 focus:border-blue-600 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Password"
          ></input>
          <input
            type="password"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-gray-600 px-2 py-1 focus:border-blue-600 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Repeat Password"
          ></input>
          <button className="m-4 w-3/5 rounded-2xl bg-blue-600 px-4 py-2 text-white shadow-md transition duration-200 ease-in hover:bg-blue-500 hover:text-black">
           <a href="/Home"> Sign Up </a>
          </button>
        </div>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-white"></div>
        <p className="mt-4 text-sm text-black">
          <a href="http://localhost:5173/pages/Login">Already have an account?
            </a>
          </p>
        <p
          className="mb-4 cursor-pointer text-sm font-medium text-black"
          onClick={() => setIsLogin(true)}
        >
          Sign In to your Account?
        </p>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 md:py-2">
      <main className="flex w-full items-center px-2 md:px-20">
        <div className="hidden flex-1 flex-col space-y-1 md:inline-flex">
          <p className="text-6xl font-bold text-pink-500">Royal Heights</p>
          <p className="leading-1 text-black-400 text-lg font-medium">
            Explore your interests, meet new friends & expand your horions
            <br />Enjoy Your Vaccations
          </p>
          
        </div>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </main>
    </div>
  );
};

export default Login;
