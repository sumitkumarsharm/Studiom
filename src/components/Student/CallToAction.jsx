import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="my-2">
      <h2 className="text-center text-2xl md:3xl lg:text-4xl font-semibold">
        Next-gen learning for next-gen creators
      </h2>
      <p className=" md:block text-gray-600 max-w-3xl mx-auto mt-3  text-xs lg:text-sm leading-relaxed">
        At Studiom, learn future-ready skills anytime, anywhere — empowering
        creators to grow, innovate, and shape tomorrow’s world.
      </p>
      <div className="flex gap-2 md:gap-5 items-center justify-center flex-col md:flex-row my-4 md:my-6 ">
        <button className="px-6 py-1 cursor-pointer hover:scale-105 transition-all duration-200 text-white bg-blue-500 rounded">
          Get Started
        </button>
        <button className="capitalize cursor-pointer hover:scale-105 transition-all duration-200">
          Learn More...
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
