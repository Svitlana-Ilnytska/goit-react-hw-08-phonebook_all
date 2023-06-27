import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from "../../redux/contacts/contactsSlice";
import { getToken } from "../../redux/auth/auth-selectors";

import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/core";

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

    createContact({ contactName, token });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Box my={8} textAlign="left">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name </FormLabel>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Type name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel> Number</FormLabel>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Type number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormControl>
        <Button
          variantColor="teal"
          width="full"
          borderWidth={1}
          mt={4}
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </Box>
  );
}
