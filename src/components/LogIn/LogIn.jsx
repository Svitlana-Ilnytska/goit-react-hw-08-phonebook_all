import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useLogInUserMutation} from '../../redux/auth/authSlice';
import {tokenAuth, logInAuth} from '../../redux/auth/auth-actions'

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data: user, isSuccess, isError, error }] = useLogInUserMutation();
  const dispatch = useDispatch();
  const history = useHistory();
  

    useEffect(() => {
      if (isSuccess) {
          dispatch(tokenAuth(user.token));
          dispatch(logInAuth(true));
          history.push('/contacts'); 
          console.log('loginned');
      }
      if (isError) {            
          switch (error.status) {
              case 400:
                alert('Login error.');
              default:
                alert('Unknworn error.');
          }
      }
  }, [user, isSuccess, isError, error, dispatch, history]);


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
    const user = {
      email: email,
      password: password,
  };
      login(user);    
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
