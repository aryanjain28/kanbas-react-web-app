import { Link } from "react-router-dom";
import database from "../Database";

import "./index.css";

const getRandomColor = () => {
  const index = Math.floor(Math.random() * 8);
  return [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
  ][index];
};

const Dashboard = () => {
  const courses = database.courses;

  return (
    <div className="m-4 px-3 w-100">
      <h1 className="display-4">Dashboard</h1>
      <hr />

      <div className="m-3 w-100">
        <h4 className="h4">Published Courses ({courses.length})</h4>
        <hr />

        <div className="row align-items-center justify-content-start gap-5 m-2">
          {courses.map((course) => {
            const color = getRandomColor();
            return (
              <div
                className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 card  shadow border-0 p-0"
                style={{ width: "22rem" }}
              >
                <div
                  className={`card-header w-100 border-0 bg-${color}`}
                  style={{ height: "12rem" }}
                >
                  <i className="m-1 fa-solid fa-ellipsis-vertical text-white fa-2x"></i>
                </div>
                <div className="card-body">
                  <h5 className={`card-title text-truncate`}>
                    <Link
                      className={`text-${color}`}
                      style={{ textDecoration: "none" }}
                      to={`/Kanbas/Courses/${course._id}`}
                    >
                      {course.name}
                    </Link>
                  </h5>
                  <h4 className="card-title text-secondary text-truncate">
                    CS4530.12361.202410
                  </h4>
                  <p className="card-text text-secondary text-truncate">
                    CS 4550_01 Fall 2023 Web Development
                  </p>
                  <i className="fa-solid fa-pen-to-square text-secondary"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
