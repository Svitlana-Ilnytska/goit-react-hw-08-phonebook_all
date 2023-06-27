import React from "react";
import { useSelector, useDispatch } from "react-redux";
import filterContact from "../../redux/contacts/contacts-actions";
import getFilter from "../../redux/contacts/contacts-selectors";

import { Input, Text } from "@chakra-ui/core";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = (e) => dispatch(filterContact(e.target.value));

  return (
    <>
      <Text textAlign="left">Find contacts by name</Text>

      <Input
        mb={4}
        type="text"
        value={value}
        onChange={handleFilter}
        placeholder="Search..."
      />
    </>
  );
};
export default Filter;
