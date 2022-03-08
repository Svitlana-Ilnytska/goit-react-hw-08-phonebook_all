import React from "react";
// import { NavLink } from "react-router-dom";

import { Navbar, Container, Nav, Image } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-ukraine-icon-circle-png-image_1817366.jpg"
            height="35"
            rounded
          />{" "}
          Ukrainian phonebook
        </Navbar.Brand>

        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="register">Sign Up</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="login">Log In</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
