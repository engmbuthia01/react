import React from "react";
import logo from "./alx-logo.jpg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App-header">
        <img src={logo} alt="This is a logo for ALX Africa"></img>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - ALX</p>
      </div>
    </React.Fragment>
  );
}

export default App;