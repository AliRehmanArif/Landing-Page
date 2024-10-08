import React from "react";
// import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white flex justify-center item-center">
      <div className="max-w-[800px] w-full h-[calc(100vh_-_96px)] text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, Flexible financing for BTB, BTC, and SASS
          </p>
          {/* <Typed className="md:text-5xl sm:text-4xl text-xl  md:pl-4font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, and SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
