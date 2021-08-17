import styled from "styled-components";
import { fadeIn } from "../../styles/animations";
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
  padding: 3px;
`;

export const Img = styled.img`
  ${fadeIn()}
  height: 100%;
  width: 100%;
  border-radius: 3px;
`;
