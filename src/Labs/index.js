import React from "react";
import Assignment3 from "./a3";
import Nav from "../Nav";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Assignment4 } from "./a4";
import store from "./store";
import { Provider } from "react-redux";
import MainPage from "../Assignment";

function Labs() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <h1>Labs</h1>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default Labs;
