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
    background-color: #0d2947;
    height: 100%;
    color: #d7dcde;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
