import { StyledListUl } from './ContactList.styled';

export const ContactList = ({ contacts, deletedContact }) => {
  return (
    <StyledListUl>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => deletedContact(contact.id)}>Delete</button>
        </li>
      ))}
    </StyledListUl>
  );
};
