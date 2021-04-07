import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./constant";

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**ADD TODO */
    case ADD_TODO:
      if (!action.note.text || !action.note.date || !action.note.time) {
        return { ...state };
      }

      const newTodos = [note, ...state.todos];
      return { ...state.todos, note };

    /**REMOVE TODO */
    case REMOVE_TODO:
      return { ...state, ...action.note };

    /**UPDATE TODO */
    case UPDATE_TODO:
      return { ...state, ...action.note };

    default:
      return state;
  }
};
