import { Effects, Store, createConnectedStore } from "undux";
import uuid = require("uuid");

const uuidv4 = uuid.v4;

interface TodoState {
  tasks: Todo[];
}

interface Todo {
  id: string;
  task: string;
}

const initialState: TodoState = {
  tasks: [
    {
      id: uuidv4(),
      task: "initial task",
    },
  ],
};

export const TodoStore = createConnectedStore(initialState);

export type TodoStoreProps = {
  store: Store<TodoState>;
};
