import axios from "axios";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOKEN } from "./constant";

const addTodoActionn = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo,
  };
};

const removeTodoAction = (todo) => {
  return {
    type: REMOVE_TODO,
    todo: todo,
  };
};

const updateTodoAction = (todo) => {
  return {
    type: UPDATE_TODO,
    todo: todo,
  };
};

// POST or ADD todo.
// Here i used redux-thunk.
const addTodoAction = (todo) => async (dispatch) => {
  const url =
    "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303";

  const addedTodo = {
    task_id: todo.todo.id,
    assigned_user: "user_15f4808a77194be88c8d19414671d3c8",
    task_date: todo.todo.text,
    task_time: todo.todo.text,
    task_msg: todo.todo.text,
  };

  try {
    const data = await axios.post(url, todo.todo, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/json",
        "Content-Type": "application/vnd.myapp.type+json",
      },
    });

    console.log(data);

    console.log(
      "Added Todo: " +
        " id: " +
        todo.todo.id +
        " text: " +
        todo.todo.text +
        " date: " +
        todo.todo.date +
        " time: " +
        todo.todo.time
    );

    dispatch({
      type: ADD_TODO,
      todo: todo,
    });
  } catch (error) {
    console.error(error);
  }
};

// URL : https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303
// Method : POST
// Headers : {
//             'Authorization': 'Bearer ' + <access_token from login step>,
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           }
// Body :    {
//             assigned_user:  <user_id from profile step>,
//             task_date: <date in 'YYYY-MM-DD' format from date field in task>,
//             task_time: <time from time field in task>,integer format send seconds
//             task_msg: <task description from task description field in task>
//            }

export { addTodoAction, removeTodoAction, updateTodoAction };
