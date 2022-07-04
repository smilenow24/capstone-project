import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import Header from "./components/Header";
import InputDataDialog from './components/InputDataDialog.js';
import { initialInputData } from "./db";
import { messages } from "./db";

export default function App() {
  
  const [inputs, setInputs] = useState(initialInputData);
  const [showMessage, setShowMessage] = useState(messages[0].text);
  
  const oldInputLength = initialInputData.length;
  const actualDate = new Date();
  const formattedActualDate = actualDate.toLocaleDateString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'})

  function updateInput(inputDataValue) {
    const newInput = {
      id: nanoid(),
      date: formattedActualDate,
      value: Number(inputDataValue),
  };
 
  if (newInput.value >= inputs[0].value)
      {setInputs([newInput, ...inputs])
    if (oldInputLength !== inputs.length)
      {setShowMessage(messages[1].text)}
    else
      {setShowMessage(messages[2].text)}
    }
  else 
    {setShowMessage("please input > or = " + inputs[0].value)}

}

  return (
    <>
    <Header showMessage={showMessage} />
    <MainHeading>Energy-Budget-App</MainHeading>
    <MainContainer>
      <section>
        <h2>{formattedActualDate}</h2>
        <div>
          <article>total entries: {inputs.length}</article>
          <article>total consumption: 7000</article>
          <article>daily average: 700</article>
        </div>
      </section>
      <ul>
      {inputs.map(({ date, value, id, increase}) => (
          <li key={id}>
            {date} - {value} watt/h - increase: NaN {increase}
          </li>
      ))}
      </ul>
      <InputDataDialog updateInput={updateInput} />
    </MainContainer>
    </>
  );
}

const MainHeading = styled.h1`
  padding-top: 15px;
  color: white;
  text-align: center;
`

const MainContainer = styled.main`
  height: 100%;
  margin: 20px;
  padding: 10px;
  background-color: lightblue;
  border-radius: 30px;
  
  section {
    display: flex;
    background-color: grey;
    border-radius: 20px;
    
  }

  div {
    padding: 1vh;

  }

  h2 {
    color: white;
    padding: 0vh 2vh 0vh 2vh;
  }

  article {
    color: white;
    width: 200px;
    font-size: 16px;
    font-weight: 500;
  }

  ul {
    list-style: none;
    overflow-y: auto;
    padding: 0px 20px 0px 20px;
  };

  li {
    word-wrap: anywhere;
    padding: 4px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bolder;
    font-size: 16px;
    border-bottom: 1px solid;
  }
`;



