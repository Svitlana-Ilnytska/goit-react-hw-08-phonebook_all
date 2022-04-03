import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-center">Phonebook</h1>
      <ContactForm />
      <h2 className="text-center">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
