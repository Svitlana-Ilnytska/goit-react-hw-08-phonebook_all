import React from "react";
import { useSelector, useDispatch } from "react-redux";
import filterContact from "../../redux/contacts/contacts-actions";
import getFilter from "../../redux/contacts/contacts-selectors";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = (e) => dispatch(filterContact(e.target.value));

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={handleFilter}
        placeholder="Search..."
      ></input>
    </>
  );
};
export default Filter;
