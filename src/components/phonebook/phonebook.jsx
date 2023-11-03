import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './phonebook.styled';
import { ContactForm } from 'components/contact-form/contact-form';
import { ContactList } from 'components/contacts/contact-list';
import { Filter } from 'components/filter/filter';

export const Phonebook = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = values => {
    let check = contacts.find(contact => contact.name === values.name);
    if (check) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    let newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const filterHandle = value => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onAdd={addContact} />

      <h2>Contacts</h2>
      <Filter onFiltered={filterHandle} />
      <ContactList contactList={filteredContacts} onDelete={deleteContact} />
    </Container>
  );
};
