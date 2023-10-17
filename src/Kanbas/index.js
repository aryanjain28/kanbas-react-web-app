import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import Courses from "./Courses";
import Account from "./Account";
import AccountEdit from "./Account/Edit";
import Dashboard from "./Dashboard";
import MainPage from "../Assignment";
import Lab from "../Labs/a3/index";

const Kanbas = () => {
  const { pathname } = useLocation();

  const hideNavigation = pathname.includes("Labs") || pathname === "/";

  return (
    <div className="d-flex h-100 w-100">
      {!hideNavigation && <KanbasNavigation />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-100 p-5">
              <MainPage />
            </div>
          }
        />
        <Route path="Kanbas/Labs" element={<Lab />} />

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
