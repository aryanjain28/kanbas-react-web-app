import React from "react";
import { useParams } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import {
  FaEllipsisV as OptionsIcon,
  FaCheckCircle as TickIcon,
  FaPlus as PlusIcon,
} from "react-icons/fa";

const ModuleList = () => {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <ul className="list-group w-100">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li class="list-group-item px-2 my-3 d-flex align-items-center justify-content-between border-1 bg-light">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <OptionsIcon className="text-muted" />
              {module.name}
            </div>
            <div class="d-flex align-items-center gap-3">
              <TickIcon className="text-success" />
              <PlusIcon className="text-muted" />
              <OptionsIcon className="text-muted" />
            </div>
          </li>
        ))}
    </ul>
  );
};
export default ModuleList;
