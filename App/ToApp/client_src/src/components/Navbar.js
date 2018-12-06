import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Why ToDo ?
            </a>
            <a
              data-activates="main-menu"
              className="button-collapse show-on-large"
            >
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users" /> Todos
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-users" /> Todos
                </Link>
              </li>
              <li>
                <Link to="/todo/add">
                  <i className="fa fa-plus" /> Add Todos
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-question-circle" /> About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
