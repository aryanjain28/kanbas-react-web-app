import { useParams } from "react-router-dom";
import { BsFillGearFill as SettingsIcon } from "react-icons/bs";
import {
  FaFilter as FunnelIcon,
  FaFileExport as ExportIcon,
  FaCheck as TickIcon,
} from "react-icons/fa";

import "./index.css";
import database from "../../Database";

const Grades = () => {
  const { courseId } = useParams();
  const assignments = database.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = database.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  console.log(assignments);

  return (
    <div className="w-100 mx-5" style={{ marginRight: 20 }}>
      {/* <!-- <select id="select_gradeBook">
            <option selected value="gradebook">Gradebook</option>
            <option value="somthing_else">Something Else</option>
            <option value="some_string">Some String</option>
          </select> --> */}

      <div class="d-flex align-items-center justify-content-end gap-2">
        <button class="btn btn-outline-dark bg-light" type="button">
          <TickIcon className="text-success mx-2" />
          Import
        </button>

        <div class="dropdown">
          <button
            class="btn btn-outline-dark border-1 bg-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <ExportIcon className="text-muted mx-2" />
            Export
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Import
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Do Something
                </a>
              </li>
            </ul>
          </button>
        </div>

        <button class="btn btn-outline-dark bg-light" type="button">
          <SettingsIcon className="m-1" />
        </button>
      </div>

      <hr />

      <div class="row d-flex align-items-center justify-content-between">
        <div class="col">
          <h2 class="h6">Student Names</h2>
          <input
            class="form-control"
            id="student_search_input"
            placeholder="Search Students"
          />
        </div>

        <div class="col">
          <h2 class="h6">Assignment Names</h2>
          <input
            class="form-control"
            id="assignments_search_input"
            placeholder="Search Assignments"
          />
        </div>
      </div>

      <button
        class="btn bg-light p-2 my-2 btn-lg btn-outline-dark"
        type="button"
      >
        <FunnelIcon className="text-muted mx-2" />
        Apply Filters
      </button>

      <table class="table table-striped border" style={{ borderRadius: 5 }}>
        <thead style={{ verticalAlign: "middle" }}>
          <th className="py-3">Student Name</th>
          {assignments.map((assignment) => (
            <th className="py-3">
              {assignment.title}
              <br />
              Out of 100
            </th>
          ))}
        </thead>

        <tbody>
          {enrollments.map((enrollment) => {
            const user = database.users.find(
              (user) => user._id === enrollment.user
            );
            return (
              <tr>
                <td class="text-danger">
                  {user.firstName} {user.lastName}
                </td>
                {assignments.map((assignment) => {
                  const grade = database.grades.find(
                    (grade) =>
                      grade.student === enrollment.user &&
                      grade.assignment === assignment._id
                  );
                  return (
                    <td>
                      {Math.random() > 0.5 ? (
                        <input
                          style={{ maxWidth: 100, textAlign: "center" }}
                          class="form-control"
                          placeholder="100"
                          value={grade?.grade || "-"}
                        />
                      ) : (
                        grade?.grade || ""
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}

          {/* <tr>
            <td class="text-danger">Captain America</td>
            <td>

            </td>
            <td>41</td>
            <td>93</td>
            <td>34</td>
            <td>24</td>
            <td>53</td>
            <td>43</td>
          </tr>

          <tr>
            <td class="text-danger">Ironman</td>
            <td>10</td>
            <td>
              <input
                class="form-control"
                placeholder="100"
                size="5"
                value="100"
              />
            </td>
            <td>23</td>
            <td>34</td>
            <td>34</td>
            <td>88</td>
            <td>14</td>
          </tr>

          <tr>
            <td class="text-danger">Black Widow</td>
            <td>2</td>
            <td>53</td>
            <td>
              <input
                class="form-control"
                placeholder="100"
                size="5"
                value="100"
              />
            </td>
            <td>53</td>
            <td>11</td>
            <td>42</td>
            <td>72</td>
          </tr>

          <tr>
            <td class="text-danger">Hulk</td>
            <td>34</td>
            <td>24</td>
            <td>63</td>
            <td>
              <input
                class="form-control"
                placeholder="100"
                size="5"
                value="100"
              />
            </td>
            <td>42</td>
            <td>88</td>
            <td>92</td>
          </tr>

          <tr>
            <td class="text-danger">Black Panther</td>
            <td>61</td>
            <td>53</td>
            <td>5</td>
            <td>34</td>
            <td>
              <input
                class="form-control"
                placeholder="100"
                size="5"
                value="100"
              />
            </td>
            <td>23</td>
            <td>53</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
export default Grades;
