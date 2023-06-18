import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        console.warn(`name - ${name} not matched`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // this.props.onSignUp({ ...this.state });
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <h1 className="shadow-sm mt-5 p-3 text-center rounded">Log In</h1>
      <Row className="mt-10">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email address </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleChange}
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary btn-block" type="submit">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>

      <h6 className="mt-5 p-5 text-center text-secondary">
        {" "}
        Copyright © 2023 by Svita Svitlana. All rights reserved.
      </h6>
    </Container>
  );
}
