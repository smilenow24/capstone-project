import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import InputDataDialog from './components/InputDataDialog.js';
import { initialInputData } from "./db";

export default function App() {
  
  const [inputs, setInputs] = useState(initialInputData);
  
  const actualDate = new Date();
  const formattedActualDate = actualDate.toLocaleDateString()

  function updateInput(inputDataValue) {
    const newInput = {
      id: nanoid(),
      date: formattedActualDate,
      value: inputDataValue,
  };

  setInputs([newInput, ...inputs]);
}

  return (
    <>
    <MainHeading>Energy-Budget-App</MainHeading>
    <Main>
      <section><h2>{formattedActualDate}</h2></section>
      <ul>
      {inputs.map(({ date, value, id}) => (
          <li key={id}>
            {date}  {value} kw
          </li>
      ))}
      </ul>
      <InputDataDialog updateInput={updateInput} />
    </Main>
    </>
  );
}

const MainHeading = styled.h1`

  color: blue;
  text-align: center;

`

const Main = styled.main`

  padding: 10px;
  background-color: lightblue;
  
  section {
    display: flex;
    justify-content: center;
    background-color: grey;
  }

  h2 {
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



