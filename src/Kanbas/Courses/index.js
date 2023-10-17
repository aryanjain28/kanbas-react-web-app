import { Navigate, Route, Routes } from "react-router-dom";

import CourseNavigation from "../Courses/CourseNavigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Home from "./Home";
import Grades from "./Grades";
import Breadcrumb from "./Breadcrumb";
import Settings from "./Settings";
import "./index.css";
import ModuleList from "./Modules/ModuleList";

const Courses = () => {
  return (
    <div className="w-100">
      <Breadcrumb />
      <hr />

      <div className="d-flex">
        <CourseNavigation />

        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor />}
          />

          <Route path="Grades" element={<Grades />} />
          <Route path="Settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Courses;
