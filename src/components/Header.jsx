import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

import logo5 from "../assets/images/rooms/logo5.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
const handle =() => {
  Navigate("/Login")
}
  return (
    <header className="header ">
      <div
        className={`${
          header ? "py-3 shadow-lg" : " py-1"
        } fixed z-50 w-full transition-all duration-500 bg-gray-900 text-white`}
      >
        <div className="container mx-auto flex flex-col  items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* header logo */}
          <a href="/" className=" ">
            {header ? (
              <img
                src={logo5}
                alt="header logo"
                className="w-[80px] "
              />
            ) : (
              <img
                src={logo5}
                alt="header logo"
                className="w-[80px]  "
              />
            )}
          </a>

          {/* header menu */}
          <div className={`${header ? "" : "text-white"}`}>
            <ul className="flex items-center gap-x-6 font-tertiary text-[15px] uppercase tracking-[1.5px] lg:gap-x-8">
              <a href="/" className="transition hover:text-accent">
                Home
              </a>
              <a href="/rooms" className="transition hover:text-accent">
                Rooms
              </a>
              <a href="/restaurants" className="transition hover:text-accent">
                Restaurants
              </a>

              <a href="/contact" className="transition hover:text-accent">
                Contact
              </a>
              <a href="/about" className="transition hover:text-accent">
                About
              </a>
            </ul>
          </div>
          <div className="button flex flex-row justify-center gap-10 text-white float-right   ">
            <button className="hover:text-accen me-2 w-full  dark:focus:ring-blue-80 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 ">
              <a href="../pages/Login" >Login</a>
            </button>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
