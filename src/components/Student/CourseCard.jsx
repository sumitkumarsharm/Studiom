import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
    >
      {/* Thumbnail */}
      <img
        src={course.courseThumbnail}
        alt="Course Thumbnail"
        className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover"
      />

      {/* Card Body */}
      <div className="p-3 sm:p-4 text-left space-y-1.5 sm:space-y-2">
        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
          {course.courseTitle}
        </h3>

        {/* Educator */}
        <p className="text-xs sm:text-sm text-gray-500">
          {course.educator.name}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
          <p className="font-medium text-gray-700">{calculateRating(course)}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                className="w-3 h-3 sm:w-4 sm:h-4"
                src={
                  index < Math.round(calculateRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt="star"
              />
            ))}
          </div>
          <p className="text-gray-500">(154)</p>
        </div>

        {/* Price */}
        <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
