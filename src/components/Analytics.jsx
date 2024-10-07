import React from "react";
import Laptop from "../components/assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col my-4">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="mx:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            eveniet optio et necessitatibus error ad nulla ducimus temporibus
            architecto minima? Laboriosam magnam nisi minima voluptatem soluta.
            Quam eaque officia dolorum.
          </p>
          <button className="bg-black text-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>

        </div>
      </div>
    </div>
  );
}

export default Analytics;
