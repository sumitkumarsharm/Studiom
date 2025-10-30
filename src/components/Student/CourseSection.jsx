import React from "react";
import { Link } from "react-router-dom";

const CourseSection = () => {
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Master your craft with the best{" "}
        <span className="font-bold text-blue-500 underline italic">
          mentors{" "}
        </span>
        .
      </h2>
      <p className="text-sm md:text-base text-gray-800 mt-3 ">
        Master your craft with the best mentors who guide you at every step,
        helping you grow faster, learn smarter, and achieve lasting success.
      </p>

      {/* individual card */}
      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/20 px-10 py-3 rounded"
      >
        show all courses
      </Link>
    </div>
  );
};

export default CourseSection;
