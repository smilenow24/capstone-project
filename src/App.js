import {useState} from 'react';
import styled from 'styled-components';

import InputDataDialog from './components/InputDataDialog.js';


export default function App() {
  
  const [inputs, setInputs] = useState([]);
  
  let actualDate = new Date();
  let formattedActualDate = actualDate.toLocaleDateString()
  
  return (
  
    <Main>
      <section><p>{formattedActualDate}</p></section>
      <ul>
      {inputs.map((input, index) => (
        <li key={index}>
          {formattedActualDate} {input}
        </li>
      ))}
      </ul>
      <InputDataDialog onInputData={addInputs} />
    </Main>

  );

  function addInputs(inputDataValue) {
    setInputs([inputDataValue, ...inputs]);
  }

}


const Main = styled.main`

  padding: 10px;
  
  section {
    display: flex;
    justify-content: center;
    background-color: grey;
  }

  p {
    color: white;
  }

  ul {
    list-style: none;
    overflow-y: auto;
  };

  li {
    word-wrap: anywhere;
  }
`;



