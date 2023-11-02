import { ButtonDelete } from "./contact.styled";

export const Contact = ({ name, phone, id, onDelete }) => {
  return (
    <div>
      {name} - {phone} <ButtonDelete onClick={() => onDelete(id)}>Delete</ButtonDelete>
    </div>
  );
};
