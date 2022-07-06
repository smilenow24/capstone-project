import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import CategoryButton from './components/CategoryButton';
import Header from "./components/Header";
import InputDataDialog from './components/InputDataDialog.js';
import ReturnButton from './components/ReturnButton';
import { initialInputData } from "./db";
import { messages } from "./db";

export default function App() {
  
  const [inputs, setInputs] = useState(initialInputData);
  const [showMessage, setShowMessage] = useState(messages[0].text);
  const [toggle, setToggle] = useState(true);
  const [totalConsumption, setTotalConsumption] = useState({});
  const oldInputLength = initialInputData.length;
  const actualDate = new Date();
  const formattedActualDate = actualDate.toLocaleDateString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'})
  //const lastIncrease = inputDataValue - inputs[0].value

  function updateInput(inputDataValue) {
    const newInput = {
      id: nanoid(),
      date: formattedActualDate,
      value: Number(inputDataValue),
      increase: inputDataValue - inputs[0].value
  };
  console.log(inputs[0].value)
  console.log(newInput.increase)

  if (newInput.value >= inputs[0].value)
      {setInputs([newInput, ...inputs]);
        console.log(newInput.value)
    if (oldInputLength !== inputs.length)
      {setShowMessage(messages[1].text)}
    else 
      {setShowMessage(messages[2].text)}
    }
  else 
    {setShowMessage("please input > or = " + inputs[0].value)}


    function handleCalc() { 
      const total = inputs.map(input => input.increase).reduce((a, b) => a + b, 0)
      const dailyAverage = total / inputs.length
        return setTotalConsumption({total, dailyAverage})
    }
    handleCalc()
    console.log(handleCalc())
}
  return (
    <>
    <Header showMessage={showMessage} />
    {(toggle === false) && <ReturnButton onReturn={() => setToggle(!toggle)} />}
    <MainHeading>Energy-Budget-App</MainHeading>
    {(toggle === true) &&
    <CategoryButton lastInputValue={inputs[0].value} onSelect={() => setToggle(!toggle)} />}
    {(toggle === false) &&
    <MainContainer>
      <section>
        <h2>{formattedActualDate}</h2>
        <div>
          <article>total entries: {inputs.length}</article>
          <article>total consumption: {totalConsumption.total}</article>
          <article>daily average: {totalConsumption.dailyAverage}</article>
        </div>
      </section>
      <ul>
      {inputs.map(({date, value, id, increase}) => (
          <li key={id}>
            {date} - {value} watt/h - increase: {increase}
          </li>
      ))}
      </ul>
      <InputDataDialog updateInput={updateInput} />
    </MainContainer>}
    </>
  );


}

const MainHeading = styled.h1`
  width: 100%;
  padding-top: 15px;
  color: white;
  text-align: center;
`;

const MainContainer = styled.main`
  height: 100%;
  width: 90%;
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
    padding: 0.1vh 2vh 0.1vh 2vh;
    font-size: medium;
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
    padding: 0.1px 20px 0.1px 20px;
  }

  li {
    word-wrap: anywhere;
    padding: 4px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bolder;
    font-size: 15px;
    border-bottom: 1px solid;
  }
`;



