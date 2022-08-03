import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import styled from 'styled-components';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12- 56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89- 12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17- 79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91- 26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <DivApp>
        <Form onSubmit={this.addContact} />

        <ContactsList
          contacts={filteredContacts}
          filter={filter}
          onChange={this.onFilterChange}
          onDelete={this.onDeleteContact}
        />
      </DivApp>
    );
  }
}

export default App;

const DivApp = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
