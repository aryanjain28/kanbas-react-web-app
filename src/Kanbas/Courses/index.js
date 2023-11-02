import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades/index";
import { Breadcrumb } from "./BreadCrumb";

function Courses({ courses }) {
  return (
    <div className="d-flex flex-column w-100">
      <Breadcrumb />
      <hr />

      <div className="d-flex">
        <CourseNavigation />
        <div className="overflow-y-scroll m-3 w-100">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Assignments/New" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
