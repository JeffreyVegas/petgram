import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Input = styled.input`
  height: 30px;
  min-width: 250px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  &:focus {
    border: 1px solid #e1306c;
  }
  &:disabled {
    opacity: 0.3;
  }
`;
export const Button = styled.button`
  color: white;
  border-radius: 5px;
  height: 30px;
  min-width: 250px;
  background: #c13584;
  cursor: pointer;
`;
