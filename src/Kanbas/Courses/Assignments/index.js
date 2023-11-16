import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import * as client from "./client";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaCheckCircle as TickIcon,
  FaPenSquare as EditIcon,
  FaList as ListIcon,
  FaCaretDown as DownIcon,
  FaPlus as PlusIcon,
  FaEllipsisV as OptionsIcon,
  FaTrashAlt as DeleteIcon,
} from "react-icons/fa";

const ButtonGroup = ({ cid }) => {
  const init = {
    _id: "",
    name: "",
    course: "",
    description: "",
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  };

  const dispatch = useDispatch();

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

        <Link
          class="d-flex align-items-center justify-content-center  gap-2  btn btn-danger"
          style={{ textDecoration: "none" }}
          to={`/Kanbas/Courses/${cid}/Assignments/New`}
          onClick={() => dispatch(setAssignment(init))}
        >
          <PlusIcon />
          Assignment
        </Link>

        <button class="btn btn-outline-dark bg-light" type="button">
          <OptionsIcon />
        </button>
      </div>
    </div>
  );
};

const Assignments = () => {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );

  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const [showConfirmationIndex, setShowConfirmationIndex] = useState(-1);

  useEffect(() => {
    client
      .findAssignmentsForCourse(courseId)
      .then((assignments) => dispatch(setAssignments(assignments)));
  }, [courseId, dispatch]);

  const handleConfirmDelete = (aid) => {
    handleDeleteAssignment(aid);
    setShowConfirmationIndex(-1);
  };

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  return (
    <div className="mx-5 d-xs-none d-sm-none d-md-none d-lg-block d-xl-block">
      <ButtonGroup cid={courseId} />
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

        {courseAssignments.map((courseAssignment, index) => {
          return (
            <div className="list-item" key={courseAssignment._id}>
              <div
                style={{
                  borderTop: 0,
                  borderBottom: 0,
                  borderRight: 0,
                  borderLeft: "5px green solid",
                  borderRadius: 0,
                }}
              >
                <div class="row d-flex align-items-center justify-content-start py-4">
                  <div class="col-1 d-flex mx-3 gap-3 align-items-center">
                    <ListIcon fontSize={20} />
                    <Link
                      class="card-title h5 text-dark"
                      style={{ textDecoration: "none" }}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${courseAssignment._id}`}
                      onClick={() => dispatch(setAssignment(courseAssignment))}
                    >
                      <EditIcon fontSize={20} className="text-success" />
                    </Link>
                    <DeleteIcon
                      fontSize={20}
                      className="text-danger"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowConfirmationIndex(
                          showConfirmationIndex === index ? -1 : index
                        );
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                  <div class="col">
                    <div class="card-body">
                      <Link
                        class="card-title h5 text-dark"
                        style={{ textDecoration: "none" }}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${courseAssignment._id}`}
                        onClick={() =>
                          dispatch(setAssignment(courseAssignment))
                        }
                      >
                        {courseAssignment.name}
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

                {showConfirmationIndex === index && (
                  <div className="d-flex align-items-center border p-2 mx-3 gap-3">
                    Are you sure?
                    <button
                      onClick={() => setShowConfirmationIndex(-1)}
                      className="btn btn-outline-dark"
                    >
                      No
                    </button>
                    <button
                      onClick={() => handleConfirmDelete(courseAssignment._id)}
                      className="btn btn-danger"
                    >
                      Yes
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assignments;
