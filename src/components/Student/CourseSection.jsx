import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { AppContext } from "../../context/AppContext";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <section className="py-10 px-6 sm:px-10 lg:px-24 xl:px-40 bg-white">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
        Master your craft with the best{" "}
        <span className="font-bold text-blue-500 underline italic">
          mentors
        </span>
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
        Master your craft with the best mentors who guide you at every step,
        helping you grow faster, learn smarter, and achieve lasting success.
      </p>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10 md:mt-16">
        {allCourses?.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} uniw={index} />
        ))}
      </div>

      {/* Show All Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="border border-gray-300 text-gray-700 px-8 sm:px-10 py-3 rounded-lg 
                     hover:bg-gray-100 hover:shadow-md transition-all duration-300 text-sm sm:text-base font-medium"
        >
          Show all courses
        </Link>
      </div>
    </section>
  );
};

export default CourseSection;
