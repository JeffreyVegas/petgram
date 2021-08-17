import styled from "styled-components";

export const Conteiner = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const Title = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
`;

export const Question = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #666;
  span {
    color: #e1306c;
    cursor: pointer;
  }
`;
