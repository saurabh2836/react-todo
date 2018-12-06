import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      name: ""
    };
  }

  componentWillMount() {
    this.getTodos();
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  editToDo(newTodo) {
    axios
      .request({
        method: "put",
        url: `http://localhost:3000/api/TodoModels/${this.state.id}`,
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
        data: newTodo
      })
      .then(response => {
        this.props.history.push("/todo");
      })
      .catch(err => console.log(err));
  }
  getTodos() {
    let todoId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/TodoModels/${todoId}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
      })
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            topic: response.data.topic,
            name: response.data.name
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }
  onSubmit(e) {
    e.preventDefault();
    const newTodo = {
      topic: this.refs.topic.value,
      name: this.refs.name.value
    };
    this.editToDo(newTodo);
  }
  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1> Edit Todo Item </h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              type="text"
              name="topic"
              ref="topic"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.topic}
            />
            <label htmlFor="topic"> Topic </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="name"
              ref="name"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.name}
            />
            <label htmlFor="name"> Name </label>
          </div>
          <input type="submit" value="save" className="btn" />
        </form>
      </div>
    );
  }
}

export default EditTodo;
