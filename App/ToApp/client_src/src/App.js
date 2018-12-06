import React from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/Navbar";
import { Link } from "react-router-dom";

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/todo/add" className="btn-floating btn-large red">
        <i className="fa fa-plus" />'
      </Link>
    </div>
  </div>
);

export default App;
