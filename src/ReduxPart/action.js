import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./constant";

const addTodoAction = (note) => {
  return {
    type: ADD_TODO,
    note,
  };
};

const removeTodoAction = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

const updateTodoAction = (id) => {
  return {
    type: UPDATE_TODO,
    id: props.value,
  };
};

export { addTodoAction, removeTodoAction, updateTodoAction };
