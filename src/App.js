import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
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
import catElectIcon from './imgicon/cat-elect-icon.png';
import heaterIcon from './imgicon/heater-icon.png';
import getTotalConsumption from './services/getTotalConsumption.js';

export default function App() {
  const [energyConsumptionHistory, setEnergyConsumptionHistory] = useState(initialInputData);
  const [messageText, setMessageText] = useState('How are you?');

  const totalConsumption = getTotalConsumption(energyConsumptionHistory);
  const oldInputElectricLength = initialInputData.electric.length;
  //const oldInputHeatingLength = initialInputData.heating.length;
  const dailyTotalBudget = 1000;
  const chartInputData = updateChart();
  console.log(energyConsumptionHistory);
  console.log(totalConsumption);

  return (
    <>
      <Header showMessage={messageText} />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <MainHeading>Energy-Budget-App</MainHeading>
              <CategoryButton
                lastInputValue={energyConsumptionHistory.electric[0].value}
                lastInputIncrease={energyConsumptionHistory.electric[0].increase}
                onSelect={'/home/electric'}
                categoryIcon={catElectIcon}
              />
              <CategoryButton
                lastInputValue={energyConsumptionHistory.heating[0].value}
                lastInputIncrease={energyConsumptionHistory.heating[0].increase}
                onSelect={'/home/heating'}
                categoryIcon={heaterIcon}
              />
            </>
          }
        />
        <Route
          path="/home/electric"
          element={
            <MainContainer>
              <ReturnButton />
              <InfoBoard
                energyConsumptionHistory={energyConsumptionHistory.electric}
                dailyTotalBudget={dailyTotalBudget}
                totalConsumption={totalConsumption.totalElectric}
              />
              <InputDataList role="list">
                {energyConsumptionHistory.electric.map(({date, value, id, increase}) => (
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
          }
        ></Route>
        <Route
          path="/home/heating"
          element={
            <MainContainer>
              <ReturnButton />
              <InfoBoard
                energyConsumptionHistory={energyConsumptionHistory.heating}
                dailyTotalBudget={dailyTotalBudget}
                totalConsumption={totalConsumption.totalHeating}
              />
              <InputDataList role="list">
                {energyConsumptionHistory.heating.map(({date, value, id, increase}) => (
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
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );

  function updateChart() {
    const chartInputData = {
      labels: energyConsumptionHistory.electric.reverse().map(input =>
        input.date.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      ),
      datasets: [
        {
          label: 'Consumption Data',
          data: energyConsumptionHistory.electric.map(input => input.increase),
          borderColor: energyConsumptionHistory.electric.reverse()[0].increase > dailyTotalBudget ? 'red' : 'green',
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
      increase: inputEnergyConsumptionValue - energyConsumptionHistory.electric[0].value,
    };

    if (newInput.value >= energyConsumptionHistory.electric[0].value) {
      setEnergyConsumptionHistory([newInput, ...energyConsumptionHistory]);
      if (oldInputElectricLength !== energyConsumptionHistory.electric.length) {
        setMessageText(messages.success);
      } else {
        setMessageText(messages.dataNeeded);
      }
      if (energyConsumptionHistory.electric[0].increase > dailyTotalBudget) {
        setMessageText(messages[2].text);
      }
    } else {
      setMessageText('please input > or = ' + energyConsumptionHistory.electric[0].value);
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
