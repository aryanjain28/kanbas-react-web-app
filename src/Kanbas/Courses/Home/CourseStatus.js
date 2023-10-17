import {
  FaBan as BanIcon,
  FaCheck as TickIcon,
  FaFileImport as ImportIcon,
  FaArrowCircleRight as RightIcon,
  FaBullseye as BullsEyeIcon,
  FaChartLine as ChartIcon,
  FaBullhorn as BullHornIcon,
  FaBell as BellIcon,
} from "react-icons/fa";

const BUTTONS = [
  { label: "Import Existing Content", icon: <ImportIcon /> },
  { label: "Import From Commons", icon: <RightIcon /> },
  { label: "Choose Home Page", icon: <BullsEyeIcon /> },
  { label: "View Course Stream", icon: <ChartIcon /> },
  { label: "New Announcement", icon: <BullHornIcon /> },
  { label: "New Analytics", icon: <ChartIcon /> },
  { label: "View Course Notifications", icon: <BellIcon /> },
];

const CourseStatus = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-between">
        <button
          type="button"
          class="btn mx-1 w-50 btn-secondary d-flex align-items-center justify-content-center gap-2"
        >
          <BanIcon />
          Unpublish
        </button>
        <button
          type="button"
          class="btn mx-1 w-50 btn-success d-flex align-items-center justify-content-center gap-2"
        >
          <TickIcon />
          Published
        </button>
      </div>
      <div>
        <ul class="list-group my-3 gap-2 list-group-flush d-flex align-items-center justify-content-start">
          {BUTTONS.map(({ label, icon }, index) => (
            <li
              class="list-group-item bg-light border-0 w-100"
              key={index}
              style={{ height: 40 }}
            >
              {icon}
              <a
                style={{ textDecoration: "none" }}
                href="/"
                class="text-dark mx-2"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <br />
      <br />
      <br />

      <h6>To Do</h6>
      <hr class="p-0" />
      <div class="card border-0">
        <div class="card-body">
          <h5 class="card-title text-danger mx-2">
            <i class="text-danger fa-1 fa-solid fa-xs"></i>
            Grade A1 - ENV + HTML
          </h5>
          <p class="card-text">100 points | Sep 19 at 11:59pm</p>
        </div>
      </div>
    </>
  );
};

export default CourseStatus;
