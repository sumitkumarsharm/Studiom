import React, { useContext } from "react";
import TestimonyCard from "./TestimonyCard";
import { AppContext } from "../../context/AppContext";

const Testimonials = () => {
  const { allTestimonies } = useContext(AppContext);
  return (
    <div>
      <h2 className="text-center text-2xl md:3xl lg:text-4xl font-semibold">
        Testimonial's
      </h2>
      <p className=" md:block text-gray-600 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
        Real stories from learners who transformed their skills, boosted
        careers, and achieved goals through Studiom’s expert courses.
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 
        mt-10 mb-16 px-4 sm:px-6 md:px-10 lg:px-20 place-items-center"
      >
        {allTestimonies?.map((testimony, index) => (
          <TestimonyCard key={index} testimony={testimony} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
