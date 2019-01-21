import * as React from "react";
import * as ReactDOM from "react-dom";
import { TodoStore } from "./TodoStore";
import TodoApp from "./TodoApp";

ReactDOM.render(
  <TodoStore.Container>
    <TodoApp />
  </TodoStore.Container>,
  document.getElementById("root")
);
