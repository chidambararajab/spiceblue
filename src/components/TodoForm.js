import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const inputRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date: date,
      time: time,
    });
    setInput("");
    setDate(null);
    setTime(null);
  };

  return (
    <Form onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <Container>
            <Card style={{ width: "18rem", backgroundColor: "#aaaaaa" }}>
              <Card.Body>
                <Card.Title>{"Update a note with date & tme."}</Card.Title>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        style={{ width: "80%", alignItems: "center" }}
                        defaultValue={input}
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
                      style={{ width: "40%", alignItems: "center" }}
                    />

                    <Form.Control
                      type="time"
                      defaultValue={time}
                      style={{ width: "40%", alignItems: "center" }}
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
      ) : (
        <>
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
                      style={{ width: "80%", alignItems: "center" }}
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
                    ref={dateRef}
                    style={{ width: "40%", alignItems: "center" }}
                  />

                  <Form.Control
                    type="time"
                    onChange={handleTimeChange}
                    ref={timeRef}
                    style={{ width: "40%", alignItems: "center" }}
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
        </>
      )}
    </Form>
  );
};

export default TodoForm;
