import React from 'react';
import Filter from '../Filter/Filter';
import { Wrapper, H2, Ul, Li, P, Span, ListBtn } from './ContactsList.styled';

const ContactsList = ({ contacts, filter, onChange, onDelete }) => (
  <Wrapper>
    <H2>Contacts</H2>
    <Filter value={filter} onChange={onChange} />
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          <P>
            <Span>{name}</Span>: {number}
          </P>
          <ListBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </ListBtn>
        </Li>
      ))}
    </Ul>
  </Wrapper>
);

export default ContactsList;
