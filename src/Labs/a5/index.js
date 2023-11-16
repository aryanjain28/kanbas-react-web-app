import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE;

  return (
    <div className="d-flex flex-column gap-4 p-5">
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${API_BASE}/a5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <h2>Simple API Examples</h2>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}

export default Assignment5;
