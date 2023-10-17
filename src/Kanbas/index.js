import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Account from "./Account";
import AccountEdit from "./Account/Edit";
import Dashboard from "./Dashboard";

const Kanbas = () => {
  return (
    <div className="d-flex h-100 w-100">
      <KanbasNavigation />
      <Routes>
        <Route path="Kanbas/Account" element={<Account />} />
        <Route path="Kanbas/Account/Edit" element={<AccountEdit />} />

        <Route path="Kanbas/Dashboard" element={<Dashboard />} />
        <Route path="Kanbas" element={<Navigate to="Kanbas/Dashboard" />} />
        <Route
          path="Kanbas/Courses"
          element={<Navigate to="/Kanbas/Dashboard" />}
        />
        <Route path="Kanbas/Courses/:courseId/*" element={<Courses />} />
        <Route path="Kanbas/Calendar" element={<h1>Calendar</h1>} />
        <Route path="Kanbas/" element={<Navigate to="Kanbas/Dashboard" />} />
      </Routes>
    </div>
  );
};
export default Kanbas;
