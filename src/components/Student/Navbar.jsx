import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { navigate, isEducator, setIsEducator } = useContext(AppContext);

  return (
    <div
      className={`flex w-full items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-3 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <h1
        onClick={() => navigate("/")}
        className="cursor-pointer text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-indigo-600 tracking-wide font-serif select-none"
      >
        Studiom
      </h1>

      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
                className="cursor-pointer"
              >
                {isEducator ? "Professor Dashboard" : "Become Professor"}
              </button>{" "}
              |<Link to="/my-enrollments">My Enrollements</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>
      {/* for mobile view */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-2 text-sm">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
                className="cursor-pointer"
              >
                {isEducator ? "Professor Dashboard" : "Become Professor"}
              </button>{" "}
              <span className="text-gray-400">|</span>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()} aria-label="Sign In">
            <img src={assets.user_icon} alt="user icon" className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
