import {useState} from 'react';
import styled from 'styled-components';

import InputDataDialog from './components/InputDataDialog.js';
import { initialInputData } from "./db";



export default function App() {
  
  const [inputs, setInputs] = useState(initialInputData);
  
  let actualDate = new Date();
  let formattedActualDate = actualDate.toLocaleDateString()

  return (
    <>
    <H1>Energy-Budget-App</H1>
    <Main>
      <section><p>{formattedActualDate}</p></section>
      <ul>
      {inputs.map(({ date, value, id}) => (
          <li key={id}>
            <span>{date}  {value} kw</span>
          </li>
      ))}
      </ul>
      <InputDataDialog setInputs={setInputs} inputs={inputs} />
    </Main>
    </>
  );
}

const H1 = styled.h1`

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



