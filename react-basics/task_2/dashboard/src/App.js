import React from "react";
import logo from "./alx-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <React.Fragment>
      <div className="App-header">
        <img src={logo} alt="This is a logo for ALX Africa"></img>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder="123@email.com"></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password"></input>
          </div>
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </React.Fragment>
  );
}

export default App;