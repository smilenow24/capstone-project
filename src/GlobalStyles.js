import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.125rem;
    font-family: sans-serif;
    background: linear-gradient(70deg, black, blue);
    height: 90vh;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
