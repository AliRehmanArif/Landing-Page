import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic impedit
          dolores nostrum magni exercitationem rem praesentium excepturi
          explicabo vitae. Aliquid tempora possimus earum quod? Esse veritatis
          natus totam porro numquam.
        </p>
        <div className="flex w-fit my-6 gap-2 md:gap-5">
          <FaFacebookSquare className="hover:text-blue-700 text-3xl hover:cursor-pointer hover:scale-105"/>
          <FaInstagram className="hover:text-pink-600 text-3xl hover:cursor-pointer hover:scale-105" />
          <FaTwitterSquare className="hover:text-black hover:bg-slate-300 text-3xl hover:cursor-pointer hover:scale-105" />
          <FaGithubSquare className="hover:text-black hover:bg-slate-300 text-3xl hover:cursor-pointer hover:scale-105" />
          <FaDribbbleSquare className="hover:text-pink-300  hover:bg-pink-600 text-3xl hover:cursor-pointer hover:scale-105" />
        </div>
      </div>
      <div className="grid-cols-2 grid  md:flex justify-between md:mx-10 mt-6">
        <div>
          <h6 className="font-bold text-gray-400">Solutions</h6>
          <ul>
            <li className="mt-4 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Analytics</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Marketing</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Commerce</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-gray-400">Support</h6>
          <ul>
            <li className="mt-4 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Pricing</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Documentation</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Guides</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">API status</li>
          </ul>
        </div>
        <div className="pt-10 md:pt-0 ">
          <h6 className="font-bold text-gray-400">Company</h6>
          <ul>
            <li className="mt-4 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">About</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Blog</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Jobs</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Press</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Careers</li>
          </ul>
        </div>
        <div  className="pt-10 md:pt-0 ">
          <h6 className="font-bold text-gray-400">Legal</h6>
          <ul>
            <li className="mt-4 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Claim</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Policy</li>
            <li className="my-2 text-sm hover:cursor-pointer hover:border-b hover:w-max hover:border-gray-600">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
