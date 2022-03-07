import React, { useState } from "react";
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from "../../redux/contacts/contactsSlice";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { data: contacts } = useFetchContactsQuery();
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

    const theSameContact = contacts.some((contact) =>
      contact.name.toLowerCase().includes(contactName.name.toLowerCase())
    );

    if (theSameContact)
      return alert(`${contactName.name}  is already in contacts.`);

    createContact(contactName);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.wrapInput}>
        Name
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.wrapInput}>
        Number
        <br />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
}
