const MainPage = () => {
  return (
    <>
      <br />
      <br />

      <h1 style={{ textAlign: "center" }}>Hello and Welcome!</h1>

      <br />
      <br />
      <br />

      <div style={{ textAlign: "center" }}>
        <p>Please click below to access assignments and labs:</p>

        <table
          class="table w-25"
          // style="margin-left: auto; margin-right: auto"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <thead>
            <th>#</th>
            <th>Assignments</th>
            <th>Labs</th>
            <th>Score</th>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 10 }}>1.</td>
              <td style={{ padding: 10 }}>
                <a href="https://a1--graceful-froyo-3e6a82.netlify.app/kanbas">
                  Assignment-1
                </a>
              </td>
              <td style={{ padding: 10 }}>
                <a href="https://a1--graceful-froyo-3e6a82.netlify.app/labs/a1/index.html">
                  Lab-1
                </a>
              </td>
              <td>100 / 100</td>
            </tr>
            <tr>
              <td style={{ padding: 10 }}>2.</td>
              <td style={{ padding: 10 }}>
                <a href="https://a2--graceful-froyo-3e6a82.netlify.app/kanbas/nav/kanbasNav.html">
                  Assignment-2
                </a>
              </td>
              <td style={{ padding: 10 }}>
                <a href="https://a2--graceful-froyo-3e6a82.netlify.app/labs/a2/index.html">
                  Lab-2
                </a>
              </td>
              <td>100 / 100</td>
            </tr>

            <tr>
              <td style={{ padding: 10 }}>3.</td>
              <td style={{ padding: 10 }}>
                <a href="https://a3--graceful-froyo-3e6a82.netlify.app/Kanbas/Dashboard">
                  Assignment-3
                </a>
              </td>
              <td style={{ padding: 10 }}>
                <a href="https://a3--graceful-froyo-3e6a82.netlify.app/Kanbas/Labs">
                  Lab-3
                </a>
              </td>
              <td>100 / 100</td>
            </tr>

            <tr>
              <td style={{ padding: 10 }}>4.</td>
              <td style={{ padding: 10 }}>
                <a href="./#/Kanbas/Dashboard">Assignment-4</a>
              </td>
              <td style={{ padding: 10 }}>
                <a href="./#/Labs/a4">Lab-4</a>
              </td>
              <td>100 / 100</td>
            </tr>

            <tr>
              <td style={{ padding: 10 }}>5.</td>
              <td style={{ padding: 10 }}>
                <a href="./#/Kanbas/Dashboard">Assignment-5</a>
              </td>
              <td style={{ padding: 10 }}>
                <a href="./#/Labs/a5">Lab-5</a>
              </td>
              <td>--- / 100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <br />

      <div style={{ textAlign: "center" }}>
        <p>Name: Aryan Jain</p>
        <p>
          Email:
          <a href="mailto:jain.aryan@northeastern.edu">
            jain.aryan@northeastern.edu
          </a>
        </p>
      </div>
    </>
  );
};

export default MainPage;
