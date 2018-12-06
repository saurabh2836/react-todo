import React, { Component } from "react";
import { Link } from "react-router-dom";

class Todoitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }
  render() {
    return (
      <li className="collection-item">
        <Link to={`/todo/${this.state.item.id}`}>{this.state.item.topic}</Link>
      </li>
    );
  }
}

export default Todoitem;
