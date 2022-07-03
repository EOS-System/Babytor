import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Editor from "./pages/project/Editor";
import WindowBar from "./WindowBar";

ReactDOM.render(
  <React.StrictMode>
    <WindowBar />
    <Editor />
  </React.StrictMode>,
  document.getElementById("root")
);

export class Main {
  init() {
    //...
    const main = document.getElementById("editor");
    if (main === null) return;

    main.style.width = window.innerWidth + "px";
    main.style.height = window.innerHeight + "px";

    var sizes = {
      win1: 0.75,
      win2: 0.7,
      win3: 0.3,
    };

    //let resizerThickness = 10;
    //Resizable.initialise("main", sizes, resizerThickness);
    Resizable.initialise("main", sizes, 5);

    window.addEventListener("resize", () => {
      Resizable.activeContentWindows[0].changeSize(
        window.innerWidth,
        window.innerHeight
      );
      Resizable.activeContentWindows[0].childrenResize();
    });
  }
}

new Main().init();
