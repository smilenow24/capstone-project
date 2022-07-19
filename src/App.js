import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import CategoryButton from './components/CategoryButton';
import Footer from './components/Footer.js';
import Header from './components/Header';
//import InputDataDialog from './components/InputDataDialog.js';
import StartDisplay from './components/StartDisplay.js';
import {initialInputData, messages} from './db';
import catElectIcon from './imgicon/cat-elect-icon.png';
import heaterIcon from './imgicon/heater-icon.png';
import mobilityIcon from './imgicon/mobility-icon.png';
import CategoryElectric from './pages/CategoryElectric.js';
import CategoryHeating from './pages/CategoryHeating.js';
import CategoryMobilitiy from './pages/CategoryMobility.js';
import getTotalConsumption from './services/getTotalConsumption.js';

export default function App() {
  const [energyConsumptionHistory, setEnergyConsumptionHistory] = useState(initialInputData);
  const [messageText, setMessageText] = useState('How are you?');
  const [activeChart, setActiveChart] = useState(true);

  const totalConsumption = getTotalConsumption(energyConsumptionHistory);

  const dailyTotalBudget = 1000;
  const oldInputElectricLength = initialInputData.electric.length;
  console.log(energyConsumptionHistory.mobility[0].value);
  //console.log(energyConsumptionHistory + ' ' + categoryToHandle[0].value);
  console.log(energyConsumptionHistory);
  return (
    <>
      <Header
        showMessage={messageText}
        handleConsumptionChange={energyConsumptionHistory}
        dailyTotalBudget={dailyTotalBudget}
      />
      <Routes>
        <Route path="/" element={<StartDisplay />} />
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
              <CategoryButton
                lastInputValue={energyConsumptionHistory.mobility[0].value}
                lastInputIncrease={energyConsumptionHistory.mobility[0].increase}
                onSelect={'/home/mobility'}
                categoryIcon={mobilityIcon}
              />
            </>
          }
        />
        <Route
          path="/home/electric"
          element={
            <CategoryElectric
              energyConsumptionHistory={energyConsumptionHistory}
              dailyTotalBudget={dailyTotalBudget}
              totalConsumption={totalConsumption}
              setActiveChart={setActiveChart}
              activeChart={activeChart}
              messageText={messageText}
              setEnergyConsumptionHistory={setEnergyConsumptionHistory}
              updateEnergyConsumption={updateEnergyConsumption}
            />
          }
        ></Route>
        <Route
          path="/home/heating"
          element={
            <CategoryHeating
              energyConsumptionHistory={energyConsumptionHistory}
              dailyTotalBudget={dailyTotalBudget}
              totalConsumption={totalConsumption}
              setActiveChart={setActiveChart}
              activeChart={activeChart}
              messageText={messageText}
              setEnergyConsumptionHistory={setEnergyConsumptionHistory}
              updateEnergyConsumption={updateEnergyConsumption}
            />
          }
        ></Route>
        <Route
          path="/home/mobility"
          element={
            <CategoryMobilitiy
              energyConsumptionHistory={energyConsumptionHistory}
              dailyTotalBudget={dailyTotalBudget}
              totalConsumption={totalConsumption}
              setActiveChart={setActiveChart}
              activeChart={activeChart}
              messageText={messageText}
              setEnergyConsumptionHistory={setEnergyConsumptionHistory}
              updateEnergyConsumption={updateEnergyConsumption}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );

  function updateEnergyConsumption(inputEnergyConsumptionValue, categoryToHandle) {
    const newInput = {
      id: nanoid(),
      date: new Date(),
      value: Number(inputEnergyConsumptionValue),
      increase: inputEnergyConsumptionValue - energyConsumptionHistory.`${categoryToHandle}`[0].value,
    };

    alert(`${categoryToHandle}`);

    if (newInput.value >= energyConsumptionHistory.electric[0].value) {
      if (`${categoryToHandle}` === 'electric') {
        setEnergyConsumptionHistory({
          electric: [newInput, ...energyConsumptionHistory.electric],
          heating: [...energyConsumptionHistory.heating],
          mobility: [...energyConsumptionHistory.mobility],
        });
        if (oldInputElectricLength !== energyConsumptionHistory.electric[0].length) {
          setMessageText(messages.success);
        } else {
          setMessageText('please input > or = ' + energyConsumptionHistory.electric[0].value);
        }
      }
    }
    if (`${categoryToHandle}` === 'heating') {
      setEnergyConsumptionHistory({
        electric: [...energyConsumptionHistory.electric],
        heating: [newInput, ...energyConsumptionHistory.heating],
        mobility: [...energyConsumptionHistory.mobility],
      });
    }
    if (`${categoryToHandle}` === 'mobility') {
      setEnergyConsumptionHistory({
        electric: [...energyConsumptionHistory.electric],
        heating: [...energyConsumptionHistory.heating],
        mobility: [newInput, ...energyConsumptionHistory.mobility],
      });
    }
  }
}

/*    if (oldInputElectricLength !== energyConsumptionHistory.categoryToHandle.length) {
        setMessageText(messages.success);
      } else {
        setMessageText(messages.dataNeeded);
      }
      if (energyConsumptionHistory.categoryToHandle[0].increase > dailyTotalBudget) {
        setMessageText(messages[2].text);
      }
    } else {
      setMessageText('please input > or = ' + energyConsumptionHistory.categoryToHandle[0].value);
    }
  } */

const MainHeading = styled.h1`
  width: 100%;
  padding-top: 70px;
  color: white;
  text-align: center;
`;
