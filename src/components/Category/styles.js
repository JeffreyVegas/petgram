import styled from "styled-components";
import { spinner } from "../../styles/animations";
import { Link as LinkRaoter } from "react-router-dom";

export const Link = styled(LinkRaoter)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  border: 1px solid #e1306c;
  padding: 1px;
  /* box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2); */
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 70px;
  width: 70px;
`;

export const Loading = styled.div`
  ${spinner()}
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #ccc;
`;
