import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';


import InputDataDialog from './components/InputDataDialog.js';

const initialInputData = [
  {
    id: nanoid(),
    date: "20.06.2022",
    value: "119.000"
  },
  {
    id: nanoid(),
    date: "15.06.2022",
    value: "118.000"
  },
  {
    id: nanoid(),
    date: "10.06.2022",
    value: "112.000"
  }
];

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
      {inputs.map(({ date, value}) => (
          <li key={nanoid()}>
            <span>{date}  {value} kw</span>
          </li>
      ))}
      </ul>
      <InputDataDialog onInputData={addInputs} />
    </Main>
    </>
  );

  function addInputs(allInput) {
    setInputs([allInput, ...inputs]);
  }

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



