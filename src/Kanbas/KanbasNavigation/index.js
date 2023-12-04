import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import {
  FaBook,
  FaInbox,
  FaHistory,
  FaCameraRetro,
  FaShareSquare,
  FaQuestionCircle,
} from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import logo from "../img/NEULogo.png";

import "./index.css";

function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    {
      name: "Account",
      icon: <BiUserCircle className="wd-icon wd-user-icon" />,
    },
    { name: "Dashboard", icon: <RiDashboard3Fill className="wd-icon" /> },
    { name: "Courses", icon: <FaBook className="wd-icon" /> },
    { name: "Calendar", icon: <BsFillCalendar2WeekFill className="wd-icon" /> },
    { name: "Inbox", icon: <FaInbox className="wd-icon" /> },
    { name: "History", icon: <FaHistory className="wd-icon" /> },
    { name: "Studio", icon: <FaCameraRetro className="wd-icon" /> },
    { name: "Commons", icon: <FaShareSquare className="wd-icon" /> },
    { name: "Help", icon: <FaQuestionCircle className="wd-icon" /> },
  ];

  const getActivator = (pathname) =>
    pathname.includes("signin") ||
    pathname.includes("signup") ||
    pathname.includes("users") ||
    pathname.includes("account") ||
    pathname.includes("Account");

  return (
    <div
      className="d-flex h-100 position-fixed flex-column text-white align-items-center kanbas-navigation"
      style={{ width: 85, background: "black" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center text-white text-decoration-none mt-3"
      >
        <img width="60" src={logo} alt="Northeastern University Logo" />
      </Link>
      <ul className="nav flex-column text-white mt-3">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <Link
              to={`/Kanbas/${link.name}`}
              className={`list-group-item ${
                link.name === "Account"
                  ? getActivator(pathname) && "active"
                  : pathname.includes(link.name) && "active"
              }`}
            >
              <div className="d-flex flex-column align-items-center">
                {link.icon}
                <div
                  className={
                    link.name === "Account"
                      ? getActivator(pathname)
                        ? "text-danger"
                        : "text-white"
                      : pathname.includes(link.name)
                      ? "text-danger"
                      : "text-white"
                  }
                >
                  {link.name}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
