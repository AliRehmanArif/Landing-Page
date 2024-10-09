import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white">
      <FaReact className="text-9xl mr-2 text-[#00df9a]" />
      <h1 className="w-full text-3xl font-bold text-[#00df9a] hover:cursor-pointer">
        React.
      </h1>
      <ul className="hidden md:flex">
        <li className="mt-4">
          <a href="/" className="p-4 hover:text-[#00df9a]">
            Home
          </a>
        </li>
        <li className="mt-4">
          <a href="/" className="p-4 hover:text-[#00df9a]">
            Company
          </a>
        </li>
        <li className="mt-4">
          <a href="/" className="p-4 hover:text-[#00df9a]">
            Resources
          </a>
        </li>
        <li className="mt-4">
          <a href="/" className="p-4 hover:text-[#00df9a]">
            About
          </a>
        </li>
        <li className="mt-4">
          <a href="/" className="p-4 hover:text-[#00df9a]">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} className="hover:cursor-pointer"/> : <AiOutlineMenu size={20} className="hover:cursor-pointer"/>}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-black md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 hover:cursor-pointer">React.</h1>
        <ul className="uppercase p-4">
          <li className="mt-4">
            <a href="/" className="p-4 hover:text-[#00df9a]">
              Home
            </a>
          </li>
          <li className="mt-4">
            <a href="/" className="p-4 hover:text-[#00df9a]">
              Company
            </a>
          </li>
          <li className="mt-4">
            <a href="/" className="p-4 hover:text-[#00df9a]">
              Resources
            </a>
          </li>
          <li className="mt-4">
            <a href="/" className="p-4 hover:text-[#00df9a]">
              About
            </a>
          </li>
          <li className="mt-4">
            <a href="/" className="p-4 hover:text-[#00df9a]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
