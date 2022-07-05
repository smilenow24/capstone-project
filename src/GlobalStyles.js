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
    background-color: #404040;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
