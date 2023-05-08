import { createGlobalStyle } from "styled-components";
import { Colors } from ".";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body{
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.Primary};
  background-color: ${Colors.White};
}
h1{
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  color: ${Colors.Primary};
}
h2{
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${Colors.Primary};
}
h3{
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.Primary};
}
`;
