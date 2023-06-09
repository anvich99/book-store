import { createGlobalStyle } from "styled-components";
import { Colors, resetStyle } from "ui";

export const GlobalStyles = createGlobalStyle`
${resetStyle};
body{
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.Primary};
  background-color: ${Colors.White};
}

`;
