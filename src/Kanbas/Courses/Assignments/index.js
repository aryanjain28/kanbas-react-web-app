import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {
  FaCheckCircle as TickIcon,
  FaPenSquare as EditIcon,
  FaList as ListIcon,
  FaCaretDown as DownIcon,
  FaPlus as PlusIcon,
  FaEllipsisV as OptionsIcon,
} from "react-icons/fa";

const ButtonGroup = () => {
  return (
    <div class="d-flex align-items-center justify-content-between">
      <input
        id="assignments_search_input"
        placeholder="Search for Assignments"
        class="form-control w-25"
      />
      <div className="d-flex gap-3">
        <button
          class="d-flex align-items-center justify-content-center  gap-2 btn btn-outline-dark bg-light"
          type="button"
        >
          <PlusIcon />
          Group
        </button>
        <button
          class="d-flex align-items-center justify-content-center  gap-2 btn btn-danger"
          type="button"
        >
          <PlusIcon />
          Assignment
        </button>
        <button class="btn btn-outline-dark bg-light" type="button">
          <OptionsIcon />
        </button>
      </div>
    </div>
  );
};

const Assignments = () => {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div class="col mx-5 d-xs-none d-sm-none d-md-none d-lg-block d-xl-block">
      <ButtonGroup />
      <hr />

      <div class="list-group list-group-flush ">
        <div class="list-group list-group-item list-group-flush m-0 p-0">
          <div class="row d-flex align-items-center justify-content-between m-0 p-0 py-3 bg-light">
            <div class="col-2 h5 w-25">
              <i class="fa-solid fa-list-ul mx-3 fa-lg"></i>
              <DownIcon />
              Assignments
            </div>
            <div class="col h5 d-flex w-100 align-items-center justify-content-end gap-4">
              <div class="border p-2" style={{ borderRadius: 50 }}>
                40% of Total
              </div>
              <PlusIcon />
              <OptionsIcon />
            </div>
          </div>
        </div>

        {courseAssignments.map((courseAssignment) => {
          return (
            <div class="list-item py-0" key={courseAssignment._id}>
              <div
                class="card"
                style={{
                  borderTop: 0,
                  borderBottom: 0,
                  borderRight: 0,
                  borderLeft: "5px green solid",
                  borderRadius: 0,
                }}
              >
                <div class="row d-flex align-items-center justify-content-start">
                  <div class="col-1 d-flex mx-3 gap-3">
                    <ListIcon fontSize={20} />
                    <EditIcon fontSize={20} className="text-success" />
                  </div>

                  <div class="col">
                    <div class="card-body">
                      <Link
                        class="card-title h5 text-dark"
                        style={{ textDecoration: "none" }}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${courseAssignment._id}`}
                      >
                        {courseAssignment.title}
                      </Link>

                      <div class="card-text text-muted">
                        Week 0 | Setup - Week Starting on Monday September 5th
                        (9/5/2022) Module |
                      </div>
                      <div class="card-text text-muted">
                        Due Sep 18, 2022 at 11:59pm | 100 pts
                      </div>
                    </div>
                  </div>

                  <div class="col-1 d-flex justify-content-between">
                    <TickIcon fontSize={20} className="text-success" />
                    <OptionsIcon />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignments;
