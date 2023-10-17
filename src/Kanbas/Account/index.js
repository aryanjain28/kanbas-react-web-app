import { Link } from "react-router-dom";
import "./index.css";
function Account() {
  return (
    <div
      class="d-flex flex-column h-100 float-left w-100"
      style={{ paddingLeft: "6rem", paddingRight: "1rem" }}
    >
      <div class="d-flex align-items-center justify-content-between mx-5 py-3">
        <div class="d-flex align-items-center justify-content-center gap-3">
          <i class="fa-solid fa-bars fa-2x text-danger"></i>
          <h3 class="display-6 my-0 mx-4">Aryan Jain's Profile</h3>
        </div>
      </div>
      <hr class="mx-5" />

      <div class="d-flex h-100 float-left w-100">
        <div class="list-group mx-5 my-0">
          <a
            href="#"
            class="list-group-item list-group-item-action w-100 border-0"
            style={{ color: "#de0d0d", fontSize: 22 }}
          >
            Notifications
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action w-100"
            style={{
              color: "black",
              fontSize: 22,
              border: 0,
              borderLeft: "3px black solid",
            }}
          >
            Profile
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action w-100 border-0"
            style={{ color: "#de0d0d", fontSize: 22 }}
          >
            Files
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action w-100 border-0"
            style={{ color: "#de0d0d", fontSize: 22 }}
          >
            Settings
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action w-100 border-0"
            style={{ color: "#de0d0d", fontSize: 22 }}
          >
            ePortfolios
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action w-100 border-0"
            style={{ color: "#de0d0d", fontSize: 22 }}
          >
            Shared Content
          </a>

          <a
            href="#"
            class="list-group-item list-group-item-action w-100 border-0"
            style={{ color: "#de0d0d", fontSize: 22 }}
          >
            The Hub
          </a>

          <a
            href="#"
            class="list-group-item list-group-item-action w-100 border-0"
            style={{ color: "#de0d0d", fontSize: 22 }}
          >
            Quickly Course Tools
          </a>

          <a
            href="#"
            class="list-group-item list-group-item-action w-100 border-0"
            style={{ color: "#de0d0d", fontSize: 22 }}
          >
            Global Announcements
          </a>
        </div>

        <table border="0" class="table">
          <tbody>
            <tr valign="baseline">
              <td>
                <table>
                  <tr valign="baseline">
                    <td class="border-0">
                      <div class="d-flex align-items-start justify-content-between">
                        <i
                          class="fa-solid fa-user fa-8x p-5 mb-3"
                          style={{
                            color: "grey",
                            border: "1px grey solid",
                            borderRadius: "100%",
                          }}
                        ></i>

                        <a href="edit.html">
                          <button
                            class="btn btn-light p-2 px-3 gap-2 mx-2"
                            id="edit_profile"
                            type="button"
                            style={{
                              border: "1px lightgray solid",
                              borderRadius: 2,
                            }}
                          >
                            <i
                              style={{ color: "gray" }}
                              class="fa-solid fa-pencil mx-1"
                            ></i>
                            Edit Profile
                          </button>
                        </a>
                      </div>
                      <h2>Aryan Jain</h2>

                      <div class="my-5"></div>

                      <h3>Contact</h3>
                      <p>
                        No registered services, you can add some on the
                        <a
                          style={{ textDecoration: "none", color: "#de0d0d" }}
                          href="#"
                        >
                          settings
                        </a>
                        page
                      </p>

                      <h3>Biography</h3>
                      <p>
                        MSCS student @ Northeastern | Teaching Assistant CS4530
                        | Ex-SDE @ Josh Softwares | Ex-Wolffkraft | TS | JS |
                        React | Node | Python | Deep Learning | Reinforcement
                        Learning
                      </p>

                      <h3>Links</h3>
                      <div
                        class="d-flex align-items-center justify-content-start gap-2"
                        style={{ fontSize: 18 }}
                      >
                        <i
                          class="fa-solid fa-link"
                          style={{ color: "grey" }}
                        ></i>
                        <a
                          href="https://www.youtube.com/watch?v=yvv13q691bE&ab_channel=WebDevTV"
                          style={{ color: "#de0d0d", textDecoration: "none" }}
                        >
                          YouTube
                        </a>
                        <i
                          class="fa-solid fa-file-export"
                          style={{ color: "#de0d0d" }}
                        ></i>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Account;
