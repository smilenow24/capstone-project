import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import BarChart from './components/BarChart';
import CategoryButton from './components/CategoryButton';
import Footer from './components/Footer.js';
import Header from './components/Header';
import InfoBoardElectric from './components/InfoBoardElectric.js';
import InfoBoardHeating from './components/InfoBoardHeating.js';
import InputDataDialog from './components/InputDataDialog.js';
import LineChart from './components/LineChart';
import ReturnButton from './components/ReturnButton';
import SetActiveChartButton from './components/SetActiveChartButton.js';
import {initialInputData, messages} from './db';
import catElectIcon from './imgicon/cat-elect-icon.png';
import heaterIcon from './imgicon/heater-icon.png';
import getTotalConsumption from './services/getTotalConsumption.js';

export default function App() {
  console.log(updateEnergyConsumption2);
  const [energyConsumptionHistory, setEnergyConsumptionHistory] = useState(initialInputData);
  console.log(energyConsumptionHistory);
  const [messageText, setMessageText] = useState('How are you?');
  const [activeChart, setActiveChart] = useState(true);

  const totalConsumption = getTotalConsumption(energyConsumptionHistory);
  console.log(energyConsumptionHistory);
  const oldInputElectricLength = initialInputData.electric.length;
  console.log(initialInputData.electric.length);
  //const oldInputHeatingLength = initialInputData.heating.length;
  const dailyTotalBudget = 1000;
  const chartInputDataElectric = updateChartElectric();
  const chartInputDataHeating = updateChartHeating();

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
              <InfoBoardElectric
                energyConsumptionHistory={energyConsumptionHistory}
                dailyTotalBudget={dailyTotalBudget}
                totalConsumption={[totalConsumption.totalElectric, totalConsumption.averageIncreaseElectricRounded]}
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
              </InputDataList>
              <ChartContainer>
                <SetActiveChartButton onChartActiveEvent={() => setActiveChart(!activeChart)} />
                {activeChart && <LineChart lineChartData={chartInputDataElectric} />}
                {!activeChart && <BarChart barChartData={chartInputDataElectric} />}
              </ChartContainer>
              <InputDataDialog updateEnergyConsumption={updateEnergyConsumption1} />
            </MainContainer>
          }
        ></Route>
        <Route
          path="/home/heating"
          element={
            <MainContainer>
              <ReturnButton />
              <InfoBoardHeating
                energyConsumptionHistory={energyConsumptionHistory}
                dailyTotalBudget={dailyTotalBudget}
                totalConsumption={totalConsumption}
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
              </InputDataList>
              <ChartContainer>
                <SetActiveChartButton
                  activeChart={activeChart}
                  onChartActiveEvent={() => setActiveChart(!activeChart)}
                />
                {activeChart && <LineChart lineChartData={chartInputDataHeating} />}
                {!activeChart && <BarChart barChartData={chartInputDataHeating} />}
              </ChartContainer>
              <InputDataDialog updateEnergyConsumption={updateEnergyConsumption2} />
            </MainContainer>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );

  function updateChartElectric() {
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

  function updateChartHeating() {
    const chartInputData = {
      labels: energyConsumptionHistory.heating.reverse().map(input =>
        input.date.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      ),
      datasets: [
        {
          label: 'Consumption Data',
          data: energyConsumptionHistory.heating.map(input => input.increase),
          borderColor: energyConsumptionHistory.heating.reverse()[0].increase > dailyTotalBudget ? 'red' : 'green',
          borderWidth: '2',
        },
      ],
    };
    return chartInputData;
  }

  function updateEnergyConsumption1(inputEnergyConsumptionValue) {
    const newInput1 = {
      id: nanoid(),
      date: new Date(),
      value: Number(inputEnergyConsumptionValue),
      increase: inputEnergyConsumptionValue - energyConsumptionHistory.electric[0].value,
    };

    if (newInput1.value >= energyConsumptionHistory.electric[0].value) {
      setEnergyConsumptionHistory({
        electric: [newInput1, ...energyConsumptionHistory.electric],
        heating: [...energyConsumptionHistory.heating],
      });
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

  function updateEnergyConsumption2(inputEnergyConsumptionValue) {
    const newInput2 = {
      id: nanoid(),
      date: new Date(),
      value: Number(inputEnergyConsumptionValue),
      increase: inputEnergyConsumptionValue - energyConsumptionHistory.heating[0].value,
    };
    console.log(newInput2);
    setEnergyConsumptionHistory({
      electric: [...energyConsumptionHistory.electric],
      heating: [newInput2, ...energyConsumptionHistory.heating],
    });
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
  margin: 60px 20px 20px 20px;
  padding: 10px;
  background-color: lightblue;
  border-radius: 30px;
`;

const ChartContainer = styled.section`
  height: 100px;
  width: 320px;
  margin-bottom: 6vh;
`;

const InputDataList = styled.ul`
  list-style: none;
  overflow-y: scroll;
  overscroll-behavior: show;
  line-height: normal;
  max-height: 100px;
  padding: 0.1px 20px 0.1px 20px;

  li {
    padding: 1px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
      sans-serif;
    font-weight: bolder;
    font-size: 12px;
    border-bottom: 1px solid;
  }
`;
