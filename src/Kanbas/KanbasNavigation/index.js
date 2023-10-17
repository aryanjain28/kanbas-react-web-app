import { Link, useLocation } from "react-router-dom";

import { RiDashboard3Fill } from "react-icons/ri";
import {
  FaUser as UserIcon,
  FaBook as BookIcon,
  FaCalendar as CalendarIcon,
  FaInbox as InboxIcon,
  FaHistory,
  FaCameraRetro,
  FaShareSquare,
  FaQuestionCircle,
} from "react-icons/fa";

import NU_LOGO from "../../assets/images/NU_LOGO.png";

// CSS
import "./index.css";

// Constants
const _ICONS = [
  {
    id: 1,
    name: "universityLogo",
    label: "",
    icon: <img alt="logo" className="w-100" src={NU_LOGO} />,
  },
  {
    id: 2,
    name: "account",
    label: "Account",
    icon: <UserIcon className="wd-icon wd-user-icon" />,
  },
  {
    id: 3,
    name: "dashboard",
    label: "Dashboard",
    icon: <RiDashboard3Fill className="wd-icon" />,
  },
  {
    id: 4,
    name: "courses",
    label: "Courses",
    icon: <BookIcon className="wd-icon" />,
  },
  {
    id: 5,
    name: "calendar",
    label: "Calendar",
    icon: <CalendarIcon className="wd-icon" />,
  },
  {
    id: 6,
    name: "inbox",
    label: "Inbox",
    icon: <InboxIcon className="wd-icon" />,
  },
  {
    id: 7,
    name: "history",
    label: "History",
    icon: <FaHistory className="wd-icon" />,
  },
  {
    id: 8,
    name: "studio",
    label: "Studio",
    icon: <FaCameraRetro className="wd-icon" />,
  },
  {
    id: 9,
    name: "commons",
    label: "Commons",
    icon: <FaShareSquare className="wd-icon" />,
  },
  {
    id: 10,
    name: "help",
    label: "Help",
    icon: <FaQuestionCircle className="wd-icon" />,
  },
];

const KanbasNavigation = () => {
  const { pathname } = useLocation();

  return (
    <div
      className="list-group wd-kanbas-navigation h-100"
      style={{ width: 250 }}
    >
      {_ICONS.map(({ id, name, label, icon }) => (
        <Link
          key={id}
          to={`/Kanbas/${label}`}
          className={`list-group-item ${
            pathname.includes(label) ? "active" : ""
          }`}
        >
          {icon}
          <br />
          {label}
        </Link>
      ))}
    </div>
  );
};
export default KanbasNavigation;
