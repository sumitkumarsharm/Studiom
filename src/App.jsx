import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation, useMatch } from "react-router-dom";

import Home from "./pages/Student/Home";
import CoursesList from "./pages/Student/CoursesList";
import CourseDetails from "./pages/Student/CourseDetails";
import MyEnrollments from "./pages/Student/MyEnrollments";
import Player from "./pages/Student/Player";
import Loading from "./components/Student/Loading";
import Professor from "./pages/Professor/Professor";
import Dashboard from "./pages/Professor/Dashboard";
import AddCourse from "./pages/Professor/AddCourse";
import MyCourcess from "./pages/Professor/MyCourcess";
import StudentEnrolled from "./pages/Professor/StudentEnrolled";
import Navbar from "./components/Student/Navbar";
import Loader from "./components/Loader";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();
  const isProfessorPage = useMatch("/educator/*");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="text-default min-h-screen bg-white overflow-x-hidden">
      {!isProfessorPage && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/course-list"
            element={
              <PageWrapper>
                <CoursesList />
              </PageWrapper>
            }
          />
          <Route
            path="/course-list/:input"
            element={
              <PageWrapper>
                <CoursesList />
              </PageWrapper>
            }
          />
          <Route
            path="/course/:id"
            element={
              <PageWrapper>
                <CourseDetails />
              </PageWrapper>
            }
          />
          <Route
            path="/my-enrollments"
            element={
              <PageWrapper>
                <MyEnrollments />
              </PageWrapper>
            }
          />
          <Route
            path="/player/:courseId"
            element={
              <PageWrapper>
                <Player />
              </PageWrapper>
            }
          />
          <Route
            path="/loading/:path"
            element={
              <PageWrapper>
                <Loading />
              </PageWrapper>
            }
          />
          <Route
            path="/educator"
            element={
              <PageWrapper>
                <Professor />
              </PageWrapper>
            }
          >
            <Route path="educator" element={<Dashboard />} />
            <Route path="add-courses" element={<AddCourse />} />
            <Route path="my-courses" element={<MyCourcess />} />
            <Route path="student-enrolled" element={<StudentEnrolled />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
