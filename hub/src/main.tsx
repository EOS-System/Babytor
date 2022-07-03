import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Project from "./pages/project/Project";
import WindowBar from "./WindowBar";

ReactDOM.render(
  <React.StrictMode>
    <WindowBar />
    <Project />
  </React.StrictMode>,
  document.getElementById("root")
);
