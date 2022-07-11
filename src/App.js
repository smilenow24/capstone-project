import {nanoid} from 'nanoid';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import BarChart from './components/BarChart';
import CategoryButton from './components/CategoryButton';
import Header from './components/Header';
import InputDataDialog from './components/InputDataDialog.js';
import LineChart from './components/LineChart';
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
  const differenceDate = inputs[0].date.getTime() - inputs[inputs.length - 1].date.getTime();
  const differenceDays = Math.round(differenceDate / (24 * 3600 * 1000)) + 1;
  const totalBudget = 30000;
  const increaseBudget = 1000;

  useEffect(() => {
    function handleCalc() {
      const total = inputs.map(input => input.increase).reduce((a, b) => a + b, 0);
      const averageIncrease = total / differenceDays;
      const averageIncreaseRounded = Math.round(averageIncrease);
      setTotalConsumption({total, averageIncreaseRounded});
    }
    handleCalc();
  }, [inputs, differenceDays]);

  console.log(differenceDays);

  function updateChart() {
    const xyz = {
      labels: inputs.reverse().map(input =>
        input.date.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      ),
      datasets: [
        {
          label: 'Consumption Data',
          data: inputs.map(input => input.increase),
          borderColor: inputs.reverse()[0].increase > increaseBudget ? 'red' : 'green',
          borderWidth: '2',
        },
      ],
    };
    return xyz;
  }

  function calcBudget() {
    const restBudget = totalBudget - totalConsumption.total;
    return restBudget;
  }

  console.log(differenceDays);

  function updateInput(inputDataValue) {
    const newInput = {
      id: nanoid(),
      date: actualDate,
      value: Number(inputDataValue),
      increase: inputDataValue - inputs[0].value,
    };

    if (newInput.value >= inputs[0].value) {
      setInputs([newInput, ...inputs]);
      if (oldInputLength !== inputs.length) {
        setShowMessage(messages.text.id[2]);
      } else {
        setShowMessage(messages[2].text);
      }
      if (inputs[0].increase > increaseBudget) {
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
      {toggle && (
        <CategoryButton
          lastInputValue={inputs[0].value}
          lastInputIncrease={inputs[0].increase}
          onSelect={() => setToggle(!toggle)}
        />
      )}
      {!toggle && (
        <MainContainer>
          <InfoBoard>
            <h2>{formattedActualDate}</h2>
            <ul>
              <li>
                total entries: <b>{inputs.length}</b>
              </li>
              <li>
                total consumption: <b>{totalConsumption.total.toLocaleString('de-DE')}</b> watt/h
              </li>
              <li>
                total budget: <b>30000</b> - rest budget: <b>{calcBudget()}</b>
              </li>
              <li>
                daily average increase: <b>{totalConsumption.averageIncreaseRounded.toLocaleString('de-DE')}</b> watt/h
              </li>
              <li>
                accepted increase value: <b>open</b>
              </li>
            </ul>
          </InfoBoard>
          <InputDataList role="list">
            {inputs.map(({date, value, id, increase}) => (
              <li key={id}>
                {date.toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}{' '}
                - {value.toLocaleString('de-DE')} watt/h - increase: {increase.toLocaleString('de-DE')}
              </li>
            ))}
            <LineChart lineChartData={updateChart()} />
            <BarChart barChartData={updateChart()} />
          </InputDataList>
          <InputDataDialog updateInput={updateInput} />
        </MainContainer>
      )}
    </>
  );
}

const MainHeading = styled.h1`
  width: 100%;
  padding-top: 70px;
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

  b {
    font-size: medium;
  }
`;
