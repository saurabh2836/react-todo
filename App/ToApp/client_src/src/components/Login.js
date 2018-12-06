import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  loginUser(userData) {
    axios
      .request({
        method: "post",
        url: "http://localhost:3000/api/Users/login",
        data: userData
      })
      .then(response => {
        sessionStorage.setItem("token", response.data.id);
        this.props.history.push("/todo");
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };
    this.loginUser(userData);
  }
  render() {
    return (
      <div>
        <br />
        <h1> Login </h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="email" ref="email" />
            <label htmlFor="name">User</label>
          </div>
          <div className="input-field">
            <input type="password" name="password" ref="password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login" className="btn" />
        </form>
      </div>
    );
  }
}

export default Login;
