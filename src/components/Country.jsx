import React from "react";
import { FaAmazon } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Flag from "../components/assets/flag.png";
import Amazon from '../components/assets/amazon.png'

const Country = () => {
  return (
    <div className="flex justify-center items-center w-full mx-auto py-16 px-16 gap-6 border-t border-gray-600 sm:flex-col">
      <div>
      <img src={Amazon} className="w-27 h-9 mr-52"/>
      </div>
      <div className="text-gray-400 border border-gray-400 flex items-center   rounded-sm px-2 py-1 hover:text-gray-100  hover:border-gray-100">
        <CiGlobe className="mx-1 text-2xl" />
        <select name="Select Language" className="bg-black ">
          <option value="english">English USA</option>
          <option value="english">English UK</option>
          <option value="urdu">Urdu</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className="text-gray-400 border border-gray-400 py-1 px-2 rounded-sm hover:text-gray-100  hover:border-gray-100 hover:cursor-pointer">
        <p className="flex items-center ">$ USD-U.S.Dollar</p>
      </div>
      <div className="text-gray-400 border border-gray-400 bg-black flex justify-center  items-centerrounded-sm px-2 py-1 hover:text-gray-100  hover:border-gray-100 hover:cursor-pointer">
        <img src={Flag} className="w-5 h-4 mr-2 mt-1" />
        <p className="flex items-center">United States</p>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Country;
