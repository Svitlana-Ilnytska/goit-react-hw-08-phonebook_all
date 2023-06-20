import React from "react";
import { useSelector } from "react-redux";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/contacts/contactsSlice";
import {getToken} from "../../redux/auth/auth-selectors";

import ContactItem from "../ContactItem/ContactItem";

import css from "./ContactList.module.css";

const filterAllContacts = (contacts, filter) => {
  return contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const token = useSelector(getToken);
  const { data: contacts } = useFetchContactsQuery(token);


  const filterAll = useSelector((state) => state.filter);
  const items = filterAllContacts(contacts, filterAll);

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={css.wrapList}>
      { items?.map(({ id, name, number }) => (
        <li key={id} className={css.wrapItem}>
          <ContactItem
           id={id}
           name={name}
           number={number}
           onDeleteContact={() => deleteContact({id, token})}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
