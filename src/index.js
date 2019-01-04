import React from "react";
import ReactDOM from "react-dom";
import ComponentOne from "./componentOne";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ComponentOne />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
