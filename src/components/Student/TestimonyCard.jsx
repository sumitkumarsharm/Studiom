import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TestimonyCard = ({ testimony }) => {
  const { calculateTestimonialsRate } = useContext(AppContext);
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-sm bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center bg-gray-100 px-4 sm:px-5 py-4 sm:py-5">
        <img
          src={testimony.image}
          alt={testimony.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-200"
        />
        <div className="ml-3 sm:ml-4">
          <div className="text-base sm:text-lg font-semibold text-gray-800">
            {testimony.name}
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            {testimony.role}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-5 py-4 sm:py-6 flex flex-col gap-4 sm:gap-6 text-start">
        {/* Stars */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                i < Math.round(testimony.rating)
                  ? "text-orange-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049.927a1 1 0 011.902 0l1.157 3.565a1 1 0 00.95.69h3.753c.969 0 1.371 1.24.588 1.81l-3.034 2.204a1 1 0 00-.364 1.118l1.158 3.565c.293.904-.755 1.653-1.538 1.118L10 13.347l-3.034 2.204c-.782.535-1.831-.214-1.538-1.118l1.158-3.565a1 1 0 00-.364-1.118L3.188 6.992c-.783-.57-.38-1.81.588-1.81h3.753a1 1 0 00.95-.69L9.049.927z" />
            </svg>
          ))}
        </div>

        {/* Feedback */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
          {testimony.feedback}
        </p>

        {/* Read more link */}
        <a
          href="#"
          className="text-blue-600 text-sm sm:text-base font-medium hover:underline self-start"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default TestimonyCard;
