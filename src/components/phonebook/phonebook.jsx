import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './phonebook.styled';
import { ContactForm } from 'components/contact-form/contact-form';
import { ContactList } from 'components/contacts/contact-list';
import { Filter } from 'components/filter/filter';

export class Phonebook extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const currentContacts = localStorage.getItem('contacts');
    if (currentContacts) {
      this.setState({
        contacts: JSON.parse(currentContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = values => {
    let check = this.state.contacts.find(
      contact => contact.name === values.name
    );

    if (check) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    let newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterHandle = value => {
    this.setState({
      filter: value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    let filteredList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredList;
  };

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter onFiltered={this.filterHandle} />
        <ContactList
          contactList={filteredContacts}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
