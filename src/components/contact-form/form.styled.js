import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 140px;
  margin: 20px 0;
  background-color: #e3e3e3;
  border: 2px solid #d5d5d5;
  border-radius: 5px;

  &:hover,
  &:active {
    background-color: #949494;
    border-color: #747474;
    cursor: pointer;
  }
`;
