const Settings = () => {
  return (
    <div>
      <div class="d-flex flex-column gap-3 w-100">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Course Details
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" href="../navigation/index.html">
              Navigation
            </a>
          </li>
        </ul>

        <div class="row">
          <div class="col-2">Image:</div>
          <div class="col">
            <input class="form-control w-50" type="file" />
          </div>
        </div>

        <div class="row">
          <div class="col-2">Name:</div>
          <div class="col">
            CS4550 12631 Web Development SEC 01 Fall 2023 [BOS-1-TR]
          </div>
        </div>

        <div class="row">
          <div class="col-2">Course Code:</div>
          <div class="col">CS4550.12631.202410</div>
        </div>

        <div class="row">
          <div class="col-2">Blueprint Course:</div>
          <div class="col">No</div>
        </div>

        <div class="row">
          <div class="col-2">Course Template:</div>
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Enable course as a Course Template
              </label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-2">Time Zone:</div>
          <div class="col">
            <select class="form-control w-50">
              <option>Eastern Time (US & Canada) (-05:00/-04:00)</option>
              <option>Western Time (US & Canada) (-05:00/-04:00)</option>
              <option>Southern Time (US & Canada) (-05:00/-04:00)</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-2">SIS ID:</div>
          <div class="col">CS4550.12631.202410</div>
        </div>

        <div class="row">
          <div class="col-2">Subaccount:</div>
          <div class="col">CS Undergrd</div>
        </div>

        <div class="row">
          <div class="col-2">Term:</div>
          <div class="col">202410_1_Fall 2023 Semester Full Term</div>
        </div>

        <div class="row">
          <div class="col-2">Participation:</div>
          <div class="col">
            <select class="form-control w-50">
              <option>Term</option>
              <option>Semester</option>
              <option>Full Time</option>
            </select>
            <p>
              Course participation is limited to <b>term</b> start and end
              dates.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-2">Start:</div>
          <div class="col">
            <input class="form-control w-50" type="date" />
          </div>
        </div>

        <div class="row">
          <div class="col-2">End:</div>
          <div class="col">
            <input class="form-control w-50" type="date" />
          </div>
        </div>

        <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Restrict students from viewing course before term start date
              </label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Restrict students from viewing course after term start date
              </label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-2">Default due time:</div>
          <div class="col">
            <select class="form-control w-50">
              <option>Account default (11:59pm)</option>
              <option>Morning (09:00am)</option>
            </select>
            <br />
            <p style={{ fontSize: 12 }}>
              This influences the user interface for setting due dates. It does
              not change the time due for any existing assignments.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-2">Language:</div>
          <div class="col">
            <select class="form-control w-50">
              <option>Not set (user-configurable, defaults to English)</option>
              <option>Hindi</option>
              <option>Germany</option>
            </select>
            <br />
            <p style={{ fontSize: 12 }}>
              This will override any user/system language preferences. This is
              only recommended for foreign language courses
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-2">File Storage:</div>
          <div class="col">10000 megabytes</div>
        </div>

        <div class="row">
          <div class="col-2">File Copyright:</div>
          <div class="col">
            Copyright and license information must be provided for files before
            they Dare published.
          </div>
        </div>

        <div class="row">
          <div class="col-2">Visibility:</div>
          <div class="col">
            <p>
              If you need to make your course public please contact your
              administrator/support.
            </p>

            <select class="form-control w-50" disabled>
              <option>Course</option>
            </select>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Include this course in the public course index
              </label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-2">Format:</div>
          <div class="col">
            <select class="form-control w-50">
              <option>On-Campus</option>
              <option>Offline</option>
              <option>Online</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-2">Mastery Paths:</div>
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Enable individual learning paths for students based on
                assessment
              </label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-2">Description:</div>
          <div class="col">
            <textarea class="form-control w-50" rows="4"></textarea>
            <a href="#" style={{ color: "red", textDecoration: "none" }}>
              more options
            </a>
          </div>
        </div>

        <hr />
        <div class="w-100 d-flex flex-column align-items-end justify-content-end">
          <button class="w-25 btn btn-danger mb-5 float-right">
            Update Course Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
