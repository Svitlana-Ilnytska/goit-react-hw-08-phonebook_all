import React, { useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useCreateUserMutation} from '../../redux/auth/authSlice';
import {tokenAuth, logInAuth} from '../../redux/auth/auth-actions'
 
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser,{ data: user, isSuccess, isError, error }] = useCreateUserMutation();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (user) {
        dispatch(tokenAuth(user.token));
        dispatch(logInAuth(true));
        history.push('/contacts');   
        console.log('registered');
    }
    if (isError) {            
        switch (error.status) {
            case 400:
                alert('User creation error.');
            default:
              alert('Unknworn error.');
        }
    }
}, [user, isSuccess, isError, error, dispatch, history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

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

      const user = {
      name: name,
      email: email,
      password: password,
  };  
      createUser(user);
      reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <h1 className="shadow-sm mt-5 p-3 text-center rounded">Sign Up</h1>
      <Row className="mt-10">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={handleSubmit}>
            <Form.Group  className="mb-2"  controlId="formBasicLogin">
              <Form.Label>Login </Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleChange}
                name="name"
                placeholder="Enter login"
              />
            </Form.Group>

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
              Sign Up
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
