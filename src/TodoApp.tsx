import * as React from "react";
import { TodoStore, TodoStoreProps } from "./TodoStore";
import { css, StyleSheet } from "aphrodite";
import uuid from "uuid";

const uuidv4 = uuid.v4;

const styles = StyleSheet.create({
  layout: {
    textAlign: "center",
    height: "100vh",
    margin: "30 auto",
  },
  task: {
    listStyleType: "none",
  },
});

const TodoApp: React.SFC<TodoStoreProps> = props => {
  const { store } = props;
  let inputNode;

  return (
    <div className={css(styles.layout)}>
      <h1>Todo App</h1>
      <ul>
        {store.get("tasks").map((item, index) => (
          <li className={css(styles.task)} key={item.id}>
            {index + 1}. {item.task}
          </li>
        ))}
      </ul>
      <p>
        <input type="text" ref={node => (inputNode = node)} />
        {"　"}
        <button
          onClick={() => {
            store.set("tasks")([
              ...store.get("tasks"),
              {
                id: uuidv4(),
                task: inputNode.value,
              },
            ]);
            inputNode.value = "";
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
};

export default TodoStore.withStore(TodoApp);
