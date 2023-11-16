import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  FaCheckCircle as TickIcon,
  FaEllipsisV as OptionsIcon,
  FaPlusCircle as PlusIcon,
} from "react-icons/fa";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment as selectAssignment,
} from "../assignmentsReducer";
import * as client from "../client";

const AssignmentEditor = () => {
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const { courseId } = useParams();
  const { pathname } = useLocation();

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    });
  };
  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };
  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  return (
    <div class="col mx-5">
      <form>
        <div class="d-flex justify-content-between">
          <div class="d-flex text-success align-items-center gap-3">
            <TickIcon className="text-success" />
            <div class="h6 m-0 font-weight-bold">Published</div>
            <button class="btn btn-outline-dark bg-light" type="button">
              <OptionsIcon className="text-muted" />
            </button>
          </div>
        </div>

        <hr />

        <div class="d-flex flex-column align-items-center justify-content-center gap-4">
          <div class="d-flex flex-column w-100">
            <h3 class="h6 float-left">Assignment ID</h3>

            <input
              class="form-control w-100"
              value={assignment._id}
              placeholder="Assignment Name"
              onChange={(e) =>
                dispatch(
                  selectAssignment({ ...assignment, _id: e.target.value })
                )
              }
            />
          </div>

          <div class="d-flex flex-column w-100">
            <h3 class="h6 float-left">Assignment Name</h3>

            <input
              class="form-control w-100"
              value={assignment.name}
              placeholder="Assignment Name"
              onChange={(e) =>
                dispatch(
                  selectAssignment({ ...assignment, name: e.target.value })
                )
              }
            />
          </div>

          <textarea
            class="form-control w-100"
            cols="30"
            rows="5"
            onChange={(e) =>
              dispatch(
                selectAssignment({ ...assignment, description: e.target.value })
              )
            }
          >
            {assignment.description}
          </textarea>

          <div class="row w-75 align-items-center justify-content-center">
            <div class="col-3">Points</div>
            <div class="col">
              <input class="form-control" id="points" />
            </div>
          </div>

          <div class="row w-75 align-items-center justify-content-center">
            <div class="col-3">Assignment Group</div>
            <div class="col">
              <select class="form-control">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="Quizzes">Quizzes</option>
                <option value="Projects">Projects</option>
                <option value="Exams">Exams</option>
              </select>
            </div>
          </div>

          <div class="row w-75 align-items-center justify-content-center">
            <div class="col-3"></div>
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label">
                  Do not count this assignment towards the find grade.
                </label>
              </div>
            </div>
          </div>

          <div class="row w-75 align-items-start justify-content-center">
            <div class="col-3">Submission Type</div>
            <div class="col">
              <div class="border p-3" style={{ borderRadius: 3 }}>
                <select class="form-control w-75">
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>

                <div class="h5 my-3 p3-">Online Entry Options</div>

                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label"> Text Entry </label>
                </div>

                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label"> Website URL </label>
                </div>

                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label"> Media Recordings </label>
                </div>

                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label">Student Annotation</label>
                </div>

                <div class="form-check my-3">
                  <input class="form-check-input" type="checkbox" value="" />
                  <label class="form-check-label"> File Uploads </label>
                </div>
              </div>
            </div>
          </div>

          <div class="row w-75 align-items-start justify-content-center">
            <div class="col-3">Assign</div>
            <div class="col">
              <div
                class="d-flex flex-column border p-3 gap-3"
                style={{ borderRadius: 3 }}
              >
                <div>
                  <div class="h6">Assign To</div>
                  <select class="form-control">
                    <option value="Everyone">Everyone</option>
                    <option value="notEveryone">Not Everyone</option>
                    <option value="some">None</option>
                  </select>
                </div>

                <div>
                  <div class="h6">Due</div>
                  <input
                    class="form-control w-100"
                    type="date"
                    value={assignment.dueDate}
                    onChange={(e) =>
                      dispatch(
                        selectAssignment({
                          ...assignment,
                          dueDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div class="row">
                  <div class="col-6">
                    <div class="h6">Available form</div>
                    <input
                      class="form-control w-100"
                      type="date"
                      value={assignment.availableFromDate}
                      onChange={(e) =>
                        dispatch(
                          selectAssignment({
                            ...assignment,
                            availableFromDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>

                  <div class="col-6">
                    <div class="h6">Until</div>
                    <input
                      class="form-control w-100"
                      type="date"
                      value={assignment.availableUntilDate}
                      onChange={(e) =>
                        dispatch(
                          selectAssignment({
                            ...assignment,
                            availableUntilDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>

                <button class="btn btn-outline-dark" type="button">
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>

          <hr class="my-1 w-100" />

          <div class="d-flex align-items-center justify-content-between w-100">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" />
              <label class="form-check-label">
                Notify users that this content is changed.
              </label>
            </div>

            <div className="d-flex gap-2">
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-secondary"
              >
                Cancel
              </Link>

              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger"
                onClick={() =>
                  pathname.includes("New")
                    ? handleAddAssignment()
                    : handleUpdateAssignment()
                }
              >
                Save
              </Link>
            </div>
          </div>

          <hr class="my-1 w-100" />
        </div>
      </form>
    </div>
  );
};

export default AssignmentEditor;
