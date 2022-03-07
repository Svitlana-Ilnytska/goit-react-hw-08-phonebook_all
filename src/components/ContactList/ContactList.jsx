import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/contacts/contactsSlice";

import css from "./ContactList.module.css";

const filterAllContacts = (contacts, filter) => {
  return contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filterAll = useSelector((state) => state.filter);
  const items = filterAllContacts(contacts, filterAll);

  
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ul className={css.wrapList}>
      { items?.map((item) => (
        <li key={item.id} className={css.wrapItem}>
          <ContactItem
            {...item}
            onDeleteContact={() => deleteContact(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
