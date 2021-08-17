import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  height: 100%;
  text-decoration: none;
  width: 100%;
  font-size: 2rem;
  &[aria-current] {
    color: #000;
  }
`;
