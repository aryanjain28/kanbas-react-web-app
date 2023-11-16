import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { FaBars, FaGlasses } from "react-icons/fa";

const Breadcrumb = () => {
  const { pathname } = useLocation();

  const breadcrumbs = pathname.split("/");
  breadcrumbs.shift();
  breadcrumbs.shift();
  breadcrumbs.shift();
  const breadcrumblinks = [];

  var tempLink = "";
  for (let i = 0; i < breadcrumbs.length; i++) {
    tempLink += "/" + breadcrumbs[i];
    breadcrumblinks.push(tempLink);
  }

  return (
    <div class="d-flex align-items-center justify-content-between m-3">
      <div className="d-flex align-items-center gap-2">
        <FaBars className="text-danger" />
        <nav>
          <ol class="breadcrumb m-0">
            {breadcrumbs.map((link, index) => (
              <li class={`breadcrumb-item `}>
                <Link
                  key={index}
                  to={`/Kanbas/Courses${breadcrumblinks[index]}`}
                  className={` ${
                    index === breadcrumbs.length - 1
                      ? "text-dark"
                      : "text-danger"
                  } `}
                  style={{ textDecoration: "none" }}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <button
        class="btn btn-light p-2 px-3 gap-2 mx-2"
        id="edit_profile"
        type="button"
        style={{
          border: "1px lightgray solid",
          borderRadius: "2px",
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <FaGlasses />
          Student View
        </div>
      </button>
    </div>
  );
};

export default Breadcrumb;
