import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import BarChart from './components/BarChart';
import CategoryButton from './components/CategoryButton';
import Footer from './components/Footer.js';
import Header from './components/Header';
import InfoBoard from './components/InfoBoard.js';
import InputDataDialog from './components/InputDataDialog.js';
import LineChart from './components/LineChart';
import ReturnButton from './components/ReturnButton';
import {initialInputData, messages} from './db';
import getTotalConsumption from './services/getTotalConsumption.js';

export default function App() {
  const [energyConsumptionHistory, setEnergyConsumptionHistory] = useState(initialInputData);
  const [messageText, setMessageText] = useState('How are you?');
  const [currentPage, setCurrentPage] = useState('home');

  const totalConsumption = getTotalConsumption(energyConsumptionHistory);
  const oldInputLength = initialInputData.length;
  const dailyTotalBudget = 1000;
  const chartInputData = updateChart();

  return (
    <>
      <Header showMessage={messageText} />
      {currentPage === 'electricity' && <ReturnButton onReturn={() => setCurrentPage('home')} />}
      <MainHeading>Energy-Budget-App</MainHeading>
      {currentPage === 'home' && (
        <>
          <CategoryButton
            lastInputValue={energyConsumptionHistory[0].value}
            lastInputIncrease={energyConsumptionHistory[0].increase}
            onSelect={() => setCurrentPage('electricity')}
          />
          <CategoryButton />
        </>
      )}
      {currentPage === 'electricity' && (
        <MainContainer>
          <InfoBoard
            energyConsumptionHistory={energyConsumptionHistory}
            dailyTotalBudget={dailyTotalBudget}
            totalConsumption={totalConsumption}
          />
          <InputDataList role="list">
            {energyConsumptionHistory.map(({date, value, id, increase}) => (
              <li key={id}>
                {date.toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}{' '}
                - {value.toLocaleString('de-DE')} watt/h - increase: {increase.toLocaleString('de-DE')}
              </li>
            ))}
            <LineChart lineChartData={chartInputData} />
            <BarChart barChartData={chartInputData} />
          </InputDataList>
          <InputDataDialog updateEnergyConsumption={updateEnergyConsumption} />
        </MainContainer>
      )}
      <Footer />
    </>
  );

  function updateChart() {
    const chartInputData = {
      labels: energyConsumptionHistory.reverse().map(input =>
        input.date.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      ),
      datasets: [
        {
          label: 'Consumption Data',
          data: energyConsumptionHistory.map(input => input.increase),
          borderColor: energyConsumptionHistory.reverse()[0].increase > dailyTotalBudget ? 'red' : 'green',
          borderWidth: '2',
        },
      ],
    };
    return chartInputData;
  }

  function updateEnergyConsumption(inputEnergyConsumptionValue) {
    const newInput = {
      id: nanoid(),
      date: new Date(),
      value: Number(inputEnergyConsumptionValue),
      increase: inputEnergyConsumptionValue - energyConsumptionHistory[0].value,
    };

    if (newInput.value >= energyConsumptionHistory[0].value) {
      setEnergyConsumptionHistory([newInput, ...energyConsumptionHistory]);
      if (oldInputLength !== energyConsumptionHistory.length) {
        setMessageText(messages.success);
      } else {
        setMessageText(messages.dataNeeded);
      }
      if (energyConsumptionHistory[0].increase > dailyTotalBudget) {
        setMessageText(messages[2].text);
      }
    } else {
      setMessageText('please input > or = ' + energyConsumptionHistory[0].value);
    }
  }
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
    padding: 4px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
      sans-serif;
    font-weight: bolder;
    font-size: 15px;
    border-bottom: 1px solid;
  }
`;
