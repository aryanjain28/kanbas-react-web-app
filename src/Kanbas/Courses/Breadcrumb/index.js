import { Link, useLocation } from "react-router-dom";
import "./index.css";

const CourseNavigation = () => {
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
    <div class="d-flex align-items-center justify-content-start m-3">
      <i class="fa-solid fa-bars fa-2x text-danger"></i>
      <nav>
        <ol class="breadcrumb m-0">
          {breadcrumbs.map((link, index) => (
            <li class={`breadcrumb-item `}>
              <Link
                key={index}
                to={`/Kanbas/Courses${breadcrumblinks[index]}`}
                className={` ${
                  index === breadcrumbs.length - 1 ? "text-dark" : "text-danger"
                } `}
                style={{ textDecoration: "none" }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* <button
          class="btn btn-light p-2 px-3 gap-2 mx-2"
          id="edit_profile"
          type="button"
          style={{
            border: "1px lightgray solid",
            borderRadius: "2px",
          }}
        >
          <i style={{ color: "gray" }} class="fa-solid fa-glasses mx-3"></i>
          Student View
        </button> */}
    </div>
  );
};

export default CourseNavigation;
