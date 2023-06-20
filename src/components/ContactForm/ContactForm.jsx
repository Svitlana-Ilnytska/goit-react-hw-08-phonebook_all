import React, { useState } from "react";
import { useSelector } from 'react-redux';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from "../../redux/contacts/contactsSlice";
import {getToken} from "../../redux/auth/auth-selectors";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const token = useSelector(getToken);

  const { data: contacts } = useFetchContactsQuery(token);
  const [createContact] = useCreateContactMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        console.warn(`name - ${name} not matched`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactName = {
      name: name,
      number: number,
    };
    
    const theSameContact = contacts?.some((contact) =>
      contact.name.toLowerCase().includes(contactName.name.toLowerCase())
    );

    if (theSameContact)
      return alert(`${contactName.name}  is already in contacts.`);

    createContact({contactName, token });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Container>
      <Row className="mt-10">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label> Number</Form.Label>
              <Form.Control
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Form.Group>
            <Button variant="primary btn-block" type="submit">
              Add contact
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
