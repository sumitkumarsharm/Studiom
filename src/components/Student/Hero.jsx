import React from "react";
import { assets } from "../../assets/assets";
import Searchbar from "./Searchbar";
import Companies from "./Companies";
import CourseSection from "./CourseSection";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 md:px-0 pt-20 md:pt-36 space-y-8 text-center bg-linear-to-b from-cyan-100/70 to-white">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-gray-800 max-w-4xl mx-auto relative leading-snug">
        Empower your future by unlocking new{" "}
        <span className="text-blue-600">skills</span> and embracing lifelong{" "}
        <span className="text-blue-600">learning today</span>
        <img
          src={assets.sketch}
          alt="sketch underline"
          className="hidden md:block absolute -bottom-7 right-0 w-32 lg:w-44"
        />
      </h1>

      {/* Desktop / Tablet paragraph */}
      <p className="hidden md:block text-gray-600 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
        Welcome to <span className="font-semibold">Studiom</span>, where you can
        explore expertly designed courses that inspire growth, build skills, and
        open new career opportunities. Start learning today and transform your
        future with us.
      </p>

      {/* Mobile paragraph */}
      <p className="md:hidden text-gray-600 max-w-sm mx-auto text-sm leading-relaxed">
        Our expert instructors blend industry experience and teaching excellence
        to deliver practical, engaging courses that empower you to grow and
        succeed.
      </p>
      <Searchbar />
      <Companies />
      <CourseSection />
    </div>
  );
};

export default Hero;
