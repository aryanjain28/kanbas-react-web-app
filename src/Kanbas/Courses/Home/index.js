import {
  FaPlus as PlusIcon,
  FaCheck as TickIcon,
  FaEllipsisV as OptionsIcon,
} from "react-icons/fa";
import "./index.css";
import React from "react";
import { IoIosCloudUpload, IoIosPlay } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { AiFillHome, AiOutlineLineChart, AiOutlineBell } from "react-icons/ai";
import { BsFillMegaphoneFill } from "react-icons/bs";
import ModuleList from "../Modules/ModuleList";
import CourseStatus from "./CourseStatus";

export const ButtonGroup = () => {
  return (
    <div class="d-flex w-100 align-items-center justify-content-end">
      <button
        class="btn mx-1 btn-light btn-outline-dark border-1"
        type="button"
      >
        Collapse All
      </button>
      <button
        class="btn btn-light mx-1 btn-outline-dark border-1"
        type="button"
      >
        View Progress
      </button>

      <div class="dropdown">
        <button
          class="d-flex align-items-center gap-2 btn btn-light btn-outline-dark border-1 dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <PlusIcon />
          Publish All
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                All
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Publish
              </a>
            </li>
          </ul>
        </button>
      </div>

      <button
        class="d-flex align-items-center gap-2 btn mx-1 btn-danger border-1"
        type="button"
      >
        <TickIcon />
        Module
      </button>
      <button
        class="p-2 btn btn-light mx-1 btn-outline-dark border-1"
        type="button"
      >
        <OptionsIcon />
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="row w-100">
      <div className="col-8">
        <ButtonGroup />
        <hr class="w-100" />
        <ModuleList />
      </div>

      <div className="col-4">
        <CourseStatus />
      </div>
    </div>
  );
};
export default Home;
