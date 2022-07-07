import {nanoid} from 'nanoid';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import CategoryButton from './components/CategoryButton';
import Header from './components/Header';
import InputDataDialog from './components/InputDataDialog.js';
import ReturnButton from './components/ReturnButton';
import {initialInputData} from './db';
import {messages} from './db';

export default function App() {
  const [inputs, setInputs] = useState(initialInputData);
  const [showMessage, setShowMessage] = useState(messages[0].text);
  const [toggle, setToggle] = useState(true);
  const [totalConsumption, setTotalConsumption] = useState({});
  const oldInputLength = initialInputData.length;
  const actualDate = new Date();
  const formattedActualDate = actualDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  useEffect(() => {
    function handleCalc() {
      const total = inputs.map(input => input.increase).reduce((a, b) => a + b, 0);
      const averageIncrease = total / inputs.length;
      const averageIncreaseRounded = Math.round(averageIncrease);
      setTotalConsumption({total, averageIncreaseRounded});
    }
    handleCalc();
  }, [inputs]);

  function updateInput(inputDataValue) {
    const newInput = {
      id: nanoid(),
      date: formattedActualDate,
      value: Number(inputDataValue),
      increase: inputDataValue - inputs[0].value,
    };

    if (newInput.value >= inputs[0].value) {
      setInputs([newInput, ...inputs]);
      if (oldInputLength !== inputs.length) {
        setShowMessage(messages[1].text);
      } else {
        setShowMessage(messages[2].text);
      }
    } else {
      setShowMessage('please input > or = ' + inputs[0].value);
    }
  }

  return (
    <>
      <Header showMessage={showMessage} />
      {!toggle && <ReturnButton onReturn={() => setToggle(!toggle)} />}
      <MainHeading>Energy-Budget-App</MainHeading>
      {toggle && <CategoryButton lastInputValue={inputs[0].value} onSelect={() => setToggle(!toggle)} />}
      {!toggle && (
        <MainContainer>
          <InfoBoard>
            <h2>{formattedActualDate}</h2>
            <ul>
              <li>total entries: {inputs.length}</li>
              <li>total consumption: {totalConsumption.total.toLocaleString('de-DE')} watt/h</li>
              <li>increase average: {totalConsumption.averageIncreaseRounded.toLocaleString('de-DE')} watt/h</li>
            </ul>
          </InfoBoard>
          <InputDataList role="list">
            {inputs.map(({date, value, id, increase}) => (
              <li key={id}>
                {date} - {value.toLocaleString('de-DE')} watt/h - increase: {increase.toLocaleString('de-DE')}
              </li>
            ))}
          </InputDataList>
          <InputDataDialog updateInput={updateInput} />
        </MainContainer>
      )}
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
`;

const InputDataList = styled.ul`
  list-style: none;
  overflow-y: auto;
  padding: 0.1px 20px 0.1px 20px;

  li {
    word-wrap: anywhere;
    padding: 4px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
      sans-serif;
    font-weight: bolder;
    font-size: 15px;
    border-bottom: 1px solid;
  }
`;

const InfoBoard = styled.section`
  display: flex;
  background-color: grey;
  border-radius: 20px;

  h2 {
    color: white;
    padding: 0.1vh 2vh 0.1vh 2vh;
    font-size: medium;
  }

  ul {
    width: 40vh;
    list-style: none;
    padding: 0.1vh;
    border-bottom: none;
  }

  li {
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }
`;
