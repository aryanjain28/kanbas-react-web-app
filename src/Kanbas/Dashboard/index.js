import db from "../Database";
import React, { useState } from "react";
import "./index.css";

import { Link } from "react-router-dom";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const getRandomColor = () => {
    const index = Math.floor(Math.random() * 8);
    return [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      // "light",
    ][index];
  };

  return (
    <div>
      <div className="m-4 px-3 w-100">
        <h1 className="display-4">Dashboard</h1>
        <hr />

        <div className="m-3 w-100">
          <h4 className="h4">Published Courses ({courses.length})</h4>
          <hr />

          <input
            value={course.name}
            className="form-control my-3"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control my-3"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control my-3"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <div className="d-flex gap-2 p-2">
            <button className="btn btn-success" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-primary" onClick={updateCourse}>
              Update
            </button>
          </div>

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
                      {/* <Link
                        className={`text-${color}`}
                        style={{ textDecoration: "none" }}
                        to={`/Kanbas/Courses/${course._id}`}
                      >
                        {course.name}
                      </Link> */}

                      <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className={`d-flex flex-column text-${color}`}
                        style={{ textDecoration: "none" }}
                      >
                        {course.name}

                        <div className="d-flex align-items-center justify-content-start p-2 gap-3">
                          <button
                            className="btn btn-warning"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-danger"
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
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
    </div>
  );
}

export default Dashboard;
