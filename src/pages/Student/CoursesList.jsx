import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Searchbar from "../../components/Student/Searchbar";
import CourseCard from "../../components/Student/CourseCard";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import Footer from "../../components/Student/Footer";

const CoursesList = () => {
  const { input } = useParams();
  const { navigate, filterCourse, filterCoursesByInput } =
    useContext(AppContext);

  useEffect(() => {
    filterCoursesByInput(input || "");
  }, [input]);

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 ">
              Course List
            </h1>
            <p className="text-gray-500">
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>{" "}
              / <span className="">Course List</span>
            </p>
          </div>
          <Searchbar data={input} />
        </div>
        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600">
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              className="cursor-pointer"
              onClick={() => navigate("/course-list")}
              alt=""
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-16 gap-3 px-2 md:p-0">
          {filterCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
