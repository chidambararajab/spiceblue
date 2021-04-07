import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Button, Card, Container, Row } from "react-bootstrap";

const TodoLists = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", date: "", time: "" });

  const submitUpdate = (value, date, time) => {
    updateTodo(edit.id, value, date, time);
    setEdit({
      id: null,
      value: "",
      date: "",
      time: "",
    });
  };

  return (
    <Card style={{ width: "18rem" }}>
      {edit.id && <TodoForm edit={edit} onSubmit={submitUpdate} />}
      <Container>
        {todos.map((todo) => (
          <Row key={todo.id}>
            <Container>
              <Row>{`Note: ${todo.text}`}</Row>
              <Row>{`Date: ${todo.date}  Time: ${todo.time}`}</Row>
              <Row>
                <Button
                  style={{
                    backgroundColor: "gray",
                    color: "#fff",
                  }}
                  onClick={() =>
                    setEdit({
                      id: todo.id,
                      value: todo.text,
                      date: todo.date,
                      time: todo.time,
                    })
                  }
                >
                  edit
                </Button>
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                  }}
                  onClick={() => removeTodo(todo.id)}
                >
                  del
                </Button>
              </Row>
            </Container>
          </Row>
        ))}
      </Container>
    </Card>
  );
};

export default TodoLists;
