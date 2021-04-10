import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../ReduxPart/constant";

import { addTodoAction } from "../ReduxPart/action";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("0000:00:00");
  const [time, setTime] = useState("00:00");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
    if (props.edit) {
      setInput(props.todoProps.text);
      setDate(props.todoProps.date);
      setTime(props.todoProps.time);
    }
  }, [props.edit]);

  const handleTextChange = (e) => {
    setInput(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    {
      props.edit
        ? props.onSubmit({
            id: props.edit.id,
            text: input,
            date: date,
            time: time,
          })
        : dispatch(
            addTodoAction({
              type: ADD_TODO,
              todo: {
                id: Math.floor(Math.random() * 10000),
                text: input,
                date: date,
                time: time,
              },
            })
          );
    }
    setInput("");
    setDate("0000-00-00");
    setTime("00:00");
  };

  return (
    <Form onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <Container>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "#F1F1F1",
                padding: "30px",
              }}
            >
              <Card.Body>
                <Card.Title>{"Update a note with date & tme."}</Card.Title>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        style={{ width: "80.5%", alignItems: "center" }}
                        value={input}
                        type="text"
                        onChange={handleTextChange}
                        ref={inputRef}
                        name="text"
                        placeholder="Add text"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Form.Control
                      type="date"
                      defaultValue={date}
                      style={{
                        width: "40%",
                        alignItems: "center",
                        fontSize: "15px",
                      }}
                      onChange={handleDateChange}
                    />

                    <Form.Control
                      type="time"
                      defaultValue={time}
                      style={{
                        width: "40%",
                        alignItems: "center",
                        fontSize: "13px",
                      }}
                      onChange={handleTimeChange}
                    />
                  </Row>
                  <Row>
                    <Button
                      style={{
                        width: "84%",
                        alignItems: "center",
                        backgroundColor: "#3c5b97",
                        color: "#fff",
                      }}
                      type="submit"
                    >
                      UPDATE
                    </Button>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "#F1F1F1",
                padding: "30px",
              }}
            >
              <Card.Body>
                <Card.Title>{"Add a note with date & tme."}</Card.Title>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        style={{ width: "80.5%", alignItems: "center" }}
                        value={input}
                        type="text"
                        onChange={handleTextChange}
                        ref={inputRef}
                        name="text"
                        placeholder="Add text"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Form.Control
                      type="date"
                      onChange={handleDateChange}
                      style={{
                        width: "40%",
                        alignItems: "center",
                        fontSize: "15px",
                      }}
                    />

                    <Form.Control
                      type="time"
                      onChange={handleTimeChange}
                      style={{
                        width: "40%",
                        alignItems: "center",
                        fontSize: "13px",
                      }}
                    />
                  </Row>
                  <Row>
                    <Button
                      style={{
                        width: "84%",
                        alignItems: "center",
                        backgroundColor: "#3c5b97",
                        color: "#fff",
                      }}
                      type="submit"
                    >
                      Add
                    </Button>
                  </Row>
                </Form.Group>
              </Card.Body>
            </Card>
          </Container>
        </>
      )}
    </Form>
  );
};

export default TodoForm;
