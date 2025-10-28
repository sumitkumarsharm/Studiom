import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
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

const App = () => {
  const isprofessorPage = useMatch("/educator/*");
  return (
    <div className="text-defult min-h-screen bg-white ">
      {!isprofessorPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Professor />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-courses" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourcess />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
