import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./constant";

const initialState = {
  todos: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    /**ADD TODO */
    case ADD_TODO:
      console.log(state.todos);
      return { ...state, todos: [...state.todos, action.todo.todo] };

    /**REMOVE TODO */
    case REMOVE_TODO:
      console.log(state.todos);
      return {
        ...state,
        todos: [...state.todos].filter((x) => x.id !== action.todo.todo.id),
      };

    /**UPDATE TODO */
    case UPDATE_TODO:
      const updatedTodos = [...state.todos].map((stateTodo) =>
        stateTodo.id === action.todo.todo.id ? action.todo.todo : stateTodo
      );
      return { ...state, todos: [...updatedTodos] };

    default:
      return state;
  }
};
export default Reducer;
