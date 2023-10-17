import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function SettingsNavigation() {
  const links = [
    "CourseDetails",
    "Sections",
    "Navigation",
    "Apps",
    "FeatureOptions",
    "Integrations",
  ];
  const { courseId } = useParams();
  const some = useLocation();

  console.log("pathname: ", some);

  return (
    <nav className="navbar navbar-expand-lg navbar-red">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/Settings/${link}`}
              className={`list-group-item ${
                "pathname".includes(link) && "active"
              } nav-link`}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SettingsNavigation;
