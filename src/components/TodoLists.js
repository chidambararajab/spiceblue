import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { REMOVE_TODO } from "../ReduxPart/constant";
import { updateTodoAction, removeTodoAction } from "../ReduxPart/action";

const TodoLists = () => {
  const [edit, setEdit] = useState({});

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const submitUpdate = ({ id, text, date, time }) => {
    console.log(text + " ," + date + " ," + time);
    dispatch(
      updateTodoAction({
        type: REMOVE_TODO,
        todo: { id: id, text: text, date: date, time: time },
      })
    );
    setEdit({});
  };

  return (
    <Card style={{ width: "18rem" }}>
      <>
        {todos &&
          todos.map((todo) => (
            <Row key={todo.id}>
              <Container>
                {edit.id && edit.id === todo.id ? (
                  <TodoForm
                    edit={edit}
                    todoProps={todo}
                    onSubmit={submitUpdate}
                  />
                ) : (
                  <>
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
                        onClick={() =>
                          dispatch(
                            removeTodoAction({ type: REMOVE_TODO, todo: todo })
                          )
                        }
                      >
                        del
                      </Button>
                    </Row>
                  </>
                )}
              </Container>
            </Row>
          ))}
      </>
    </Card>
  );
};

export default TodoLists;
