import React, { useEffect, useState } from "react";
import axios from "axios";

const WorkingWithObjects = () => {
  const API_BASE = process.env.REACT_APP_API_BASE;

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  useEffect(() => {
    fetchAssignment();
  }, []);

  const URL = `${API_BASE}/a5/assignment`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };

  return (
    <div className="d-flex flex-column border p-3 gap-2">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a href={`${URL}`} className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href={`${URL}/title`} className="btn btn-primary me-2">
        Get Title
      </a>

      <h4>Modifying Properties</h4>

      <div className="d-flex gap-2 w-100">
        <input
          onChange={(e) =>
            setAssignment({
              ...assignment,
              title: e.target.value,
            })
          }
          value={assignment.title}
          className="form-control w-75"
          type="text"
        />
        <a
          href={`${URL}/title/${assignment.title}`}
          className="btn btn-primary float-end"
        >
          Update Title
        </a>
      </div>

      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      <h4>Modifying Score - Extra Credit </h4>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            score: e.target.value,
          })
        }
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number"
      />
      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2"
      >
        Update Score
      </a>

      <h4>Modifying Completion Status - Extra Credit</h4>
      <input
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            completed: e.target.checked,
          })
        }
        className="me-2"
      />
      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary"
      >
        Update Completion Status
      </a>
    </div>
  );
};
export default WorkingWithObjects;
