import { keyframes, css } from "styled-components";

const fadeInkeyframes = keyframes`
from{
  filter: blur(5px);
  opacity: 0;
}
to{
  filter: blur(0);
  opacity: 1;
}
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInkeyframes} ${type};
  `;
// SPINNER
const spinnerKeyFrame = keyframes`
 0%{
   transform: rotate(0deg);
 }
 100%{
   transform: rotate(360deg);
 }
`;

export const spinner = ({ time = "1.5s", type = "ease infinite" } = {}) =>
  css`
    animation: ${time} ${spinnerKeyFrame} ${type};
  `;
