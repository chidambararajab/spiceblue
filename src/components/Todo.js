import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";
// import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || !todo.date || !todo.time) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    console.log(todos);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <TodoLists
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default Todo;
