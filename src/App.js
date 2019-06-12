import React from "react";
import "./App.css";
import Controlls from "./components/Controlls";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="app">
      <Controlls />
      <Preview />
      {/* <div className="settings">Settings it will be here</div> */}
      {/* <div className="result" /> */}
    </div>
  );
}

export default App;
