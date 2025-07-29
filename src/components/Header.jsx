import React, { useState, useEffect } from "react";

// import header logo
import LogoDark from "../assets/images/rooms/dark.svg";
import LogoWhite from "../assets/images/rooms/white.svg";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header className="header bg-transparent">
      <div
        className={`${
          header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
        } fixed z-50 w-full transition-all duration-500`}
      >
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* header logo */}
          <a href="/" className="bg-gray-100 ">
            {header ? (
              <img
                src={LogoWhite}
                alt="header logo"
                className="w-[80px] bg-transparent "
              />
            ) : (
              <img
                src={LogoDark}
                alt="header logo"
                className="w-[80px]  bg-transparent "
              />
            )}
          </a>

          {/* header menu */}
          <div className={`${header ? "text-primary" : "text-white"}`}>
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
              <a href="">Login</a>
            </button>
            <button className="hover:text-accen me-2 dark:focus:ring-blue-80 mb-2  rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
              {" "}
              <a href="">Signup</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
