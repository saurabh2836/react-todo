import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

class AddTodo extends Component {
  addTodo(newTodo) {
    console.log(newTodo);
    axios
      .request({
        method: "post",
        url: "http://localhost:3000/api/TodoModels",
        data: newTodo
      })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    e.preventDefault();
    const newTodo = {
      topic: this.refs.topic.value,
      name: this.refs.name.value
    };
    this.addTodo(newTodo);
  }
  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1> Add Todo Item</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="topic" ref="topic" />
            <label htmlFor="name">Topic</label>
          </div>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="todo">Name</label>
          </div>
          <input type="submit" value="save" className="btn" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
