import React, { useState } from "react";

function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h2>Array State Variable</h2>
      <button className="btn btn-success" onClick={addElement}>
        Add Element
      </button>
      <ul style={{ listStyleType: "none" }}>
        {array.map((item, index) => (
          <li key={index}>
            <div className="p-2 border d-flex justify-content-between">
              <p className="" style={{ fontSize: 25 }}>
                {item}
              </p>
              <button
                className="btn btn-danger"
                onClick={() => deleteElement(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayStateVariable;
