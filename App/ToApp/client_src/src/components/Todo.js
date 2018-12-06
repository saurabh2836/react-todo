import React, { Component } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      toDoData: []
    };
  }

  componentWillMount() {
    this.getTodos();
  }
  getTodos() {
    axios
      .get("http://localhost:3000/api/TodoModels")
      .then(response => {
        this.setState(
          {
            toDoData: response.data
          },
          () => {}
        );
      })
      .catch(err => console.log(err));
  }
  render() {
    const todoItems = this.state.toDoData.map((todo, i) => {
      return <TodoItem key={todo.id} item={todo} />;
    });
    return (
      <div>
        <h1> Todo List </h1> <ul className="collection"> {todoItems} </ul>
      </div>
    );
  }
}

export default Todo;
