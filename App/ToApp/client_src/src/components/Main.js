import React from "react";
import { Switch, Route } from "react-router-dom";

import Todo from "./Todo";
import About from "./About";
import TodoDetails from "./TodoDetails";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Todo} />
      <Route exact path="/about" component={About} />
      <Route exact path="/todo/add" component={AddTodo} />
      <Route exact path="/todo/edit/:id" component={EditTodo} />
      <Route exact path="/todo/:id" component={TodoDetails} />
    </Switch>
  </main>
);

export default Main;
