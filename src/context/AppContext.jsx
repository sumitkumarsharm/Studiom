import { createContext, useEffect, useState } from "react";
import { dummyCourses, dummyTestimonial } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const [allCourses, setAllCourses] = useState([]);
  const [allTestimonies, setAllTestimonies] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [filterCourse, setFilterCourse] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch all courses (currently from dummy data)
  const fetchAllCourses = async () => {
    try {
      setAllCourses(dummyCourses);
      setAllTestimonies(dummyTestimonial);
      setFilterCourse(dummyCourses); // initially show all
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const filterCoursesByInput = (input = "") => {
    if (!input.trim()) {
      setFilterCourse(allCourses);
      return;
    }

    const filtered = allCourses.filter((course) =>
      course.courseTitle.toLowerCase().includes(input.toLowerCase()),
    );
    setFilterCourse(filtered);
  };
  // ✅ Calculate average rating for a course
  const calculateRating = (course) => {
    const { courseRatings } = course;
    if (!Array.isArray(courseRatings) || courseRatings.length === 0) return 0;

    const totalRating = courseRatings.reduce(
      (sum, r) => sum + (r.rating || 0),
      0,
    );
    return (totalRating / courseRatings.length).toFixed(1);
  };

  const calculateTestimonialsRate = (testimony) => {
    const { rating } = testimony;
    if (!Array.isArray(rating) || rating.length === 0) return 0;

    const totalRating = rating.reduce((sum, r) => sum + (r.rating || 0), 0);
    return (totalRating / rating.length).toFixed(1);
  };

  // ✅ Fetch data on mount
  useEffect(() => {
    fetchAllCourses();
  }, []);

  // ✅ Context value
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    allTestimonies,
    calculateTestimonialsRate,
    filterCourse,
    setFilterCourse,
    filterCoursesByInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
