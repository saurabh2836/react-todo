import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

class TodoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }

  componentWillMount() {
    this.getMeetups();
  }
  getMeetups() {
    let todoId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/TodoModels/${todoId}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
      })
      .then(response => {
        this.setState({ details: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }
  onDelete() {
    let TodoId = this.state.details.id;

    axios
      .delete(`http://localhost:3000/api/TodoModels/${TodoId}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
      })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1>{this.state.details.topic}</h1>
        <ul className="collection">
          <li className="collection-item">Topic:{this.state.details.topic}</li>
          <li className="collection-item">Name:{this.state.details.name}</li>
        </ul>
        <Link className="btn" to={`/todo/edit/${this.state.details.id}`}>
          Edit
        </Link>
        <button onClick={this.onDelete.bind(this)} className="btn red right">
          Delete
        </button>
      </div>
    );
  }
}

export default TodoDetails;
