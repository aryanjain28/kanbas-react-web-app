import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column gap-2">
        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <div className="d-flex w-100 justify-content-center gap-3">
          <button
            className="btn btn-success w-25"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="btn btn-primary w-25"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </div>
      </div>

      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item secondary"
              style={{ background: "#e2e3e5", marginTop: "30px" }}
            >
              <div className="d-flex justify-content-between">
                <h3>{module.name}</h3>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                </div>
              </div>

              <p>{module.description}</p>
              {module.lessons && (
                <ul className="list-group">
                  {module.lessons.map((lesson, index) => (
                    <li key={index} className="list-group-item">
                      <h4>{lesson.name}</h4>
                      <p>{lesson.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
