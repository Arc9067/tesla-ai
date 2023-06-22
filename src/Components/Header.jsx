import React from "react";


const Header = () => {
  return (
    <header className="py-3 w-full absolute top-0">
      <nav className="container flex justify-between items-center">
        <a href="" className="font-Tesla text-3xl uppercase header-logo">
          tesla ai
        </a>

        <div className="font-Tesla capitalize text-xl hidden lg:flex gap-10 items-center">
          <a href="" className="hover:text-gray-300 transition">
            about
          </a>
          <a href="" className="hover:text-gray-300 transition">
            home
          </a>
          <a href="" className="hover:text-gray-300 transition">
            tokenomics
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
