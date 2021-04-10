import axios from "axios";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOKEN } from "./constant";

// Here i used redux-thunk.
const addTodoAction = (todo) => async (dispatch) => {
  const url =
    "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303";

  try {
    const data = await axios({
      method: "post",
      url: url,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        assigned_user: "user_15f4808a77194be88c8d19414671d3c8",
        task_id: todo.todo.id,
        task_date: todo.todo.text,
        task_time: todo.todo.text,
        task_msg: todo.todo.text,
      },
    });

    console.log(data);

    dispatch({
      type: ADD_TODO,
      todo: todo,
    });
  } catch (error) {
    console.error(error);
  }
};

const removeTodoAction = (todo) => (dispatch) => {
  dispatch({
    type: REMOVE_TODO,
    todo: todo,
  });
};

const updateTodoAction = (todo) => (dispatch) => {
  dispatch({
    type: UPDATE_TODO,
    todo: todo,
  });
};

export { addTodoAction, removeTodoAction, updateTodoAction };
