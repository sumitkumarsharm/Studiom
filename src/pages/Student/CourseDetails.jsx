import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/Student/Loading";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const { id } = useParams();
  const {
    allCourses,
    calculateRating,
    calculateCourseDuration,
    calculateChapterTime,
    calculateNumberOfLectures,
  } = useContext(AppContext);
  const fetchCourseData = async () => {
    const findedCourse = allCourses.find((course) => course._id === id);
    setCourseData(findedCourse);
  };
  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="flex md:flex-wrap flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-10 pt-8 text-left">
        <div className="absolute top-0 left-0 w-full h-[500px] z-10 bg-linear-to-b from-cyan-100/70"></div>
        {/* left column */}
        <div className="max-w-xl z-20 text-gray-500">
          <h1 className="md:text-[36px] text-[26px] font-semibold text-gray-800 ">
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>
          {/* course rating and review */}
          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm py-3 ">
            <p className="font-medium text-gray-700">
              {calculateRating(courseData)}
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  src={
                    index < Math.round(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="star"
                />
              ))}
            </div>
            <p className="text-gray-500">
              ({courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length === 1 ? "Review" : "Reviews"})
            </p>
            <p>
              ({courseData.enrolledStudents.length}
              {courseData.enrolledStudents.length === 1
                ? " Student"
                : " Students"}
              )
            </p>
          </div>
          <p className="text-sm">
            Course By{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Harsh Sharma
            </span>
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Syllabus</h2>
            <div className="pt-5"></div>
          </div>
        </div>
        {/* right column */}
        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
