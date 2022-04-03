import React from "react";
import { useSelector, useDispatch } from "react-redux";
import filterContact from "../../redux/contacts/contacts-actions";
import getFilter from "../../redux/contacts/contacts-selectors";

import { Row, Col, Form } from "react-bootstrap";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = (e) => dispatch(filterContact(e.target.value));

  return (
    <>
      <p className="mt-2 p-2 text-center text-secondary">
        Find contacts by name
      </p>
      <Row className="mt-10">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-lg">
          <Form.Control
            type="text"
            value={value}
            onChange={handleFilter}
            placeholder="Search..."
          />
        </Col>
      </Row>
    </>
  );
};
export default Filter;
