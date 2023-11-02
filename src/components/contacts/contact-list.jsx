import { Contact } from "./contact";

export const ContactList = ({contactList, onDelete}) => {
  return (
    <ul>
      {contactList.map(contact => (
        <li key={contact.id}>
          <Contact name={contact.name} phone={contact.number} contId={contact.id} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
};
