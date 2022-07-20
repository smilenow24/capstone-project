import styled from 'styled-components';

import BarChart from '../components/BarChart';
import InfoBoardElectric from '../components/InfoBoardElectric.js';
import InputDataDialog from '../components/InputDataDialog.js';
import LineChart from '../components/LineChart';
import SetActiveChartButton from '../components/SetActiveChartButton.js';

export default function PageCategoryElectric({
  energyConsumptionHistory,
  dailyTotalBudget,
  totalConsumption,
  setActiveChart,
  activeChart,
  updateEnergyConsumption,
}) {
  const chartInputDataElectric = updateChartElectric();

  return (
    <MainContainer>
      <InfoBoardElectric
        energyConsumptionHistory={energyConsumptionHistory}
        dailyTotalBudget={dailyTotalBudget}
        totalConsumption={[totalConsumption.totalElectric, totalConsumption.averageIncreaseElectricRounded]}
      />
      <ConsumptionDataInformation>
        <TotalListEntries>
          Your data list with {energyConsumptionHistory.electric.length} entries in watt/h:{' '}
        </TotalListEntries>
        <InputDataList role="list">
          {energyConsumptionHistory.electric.map(({date, value, id, increase}) => (
            <li key={id}>
              {date.toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}{' '}
              - {value.toLocaleString('de-DE')} - increase: {increase.toLocaleString('de-DE')}
            </li>
          ))}
        </InputDataList>
        <ChartContainer>
          <SetActiveChartButton onChartActiveEvent={() => setActiveChart(!activeChart)} />
          {activeChart && <LineChart lineChartData={chartInputDataElectric} />}
          {!activeChart && <BarChart barChartData={chartInputDataElectric} />}
        </ChartContainer>
      </ConsumptionDataInformation>
      <InputDataDialog updateEnergyConsumption={updateEnergyConsumption} categoryToHandle={'electric'} />
    </MainContainer>
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
}

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  max-width: 60vh;
  margin: 45px 0 0 0;
  padding: 5px;
`;

const TotalListEntries = styled.div`
  text-align: center;
  font-size: medium;
  font-weight: 600;
  margin: 1vh;
`;

const ConsumptionDataInformation = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 40vh;
  background-color: lightblue;
  border-radius: 30px;
  border: solid 2px white;
  margin: 1vh 0 2vh 0;
`;

const ChartContainer = styled.section`
  height: 140px;
  width: 300px;

  &SetActiveChartButton {
    width: 200px;
  }
`;

const InputDataList = styled.ul`
  list-style: none;
  overflow-y: scroll;
  overscroll-behavior: show;
  line-height: normal;
  max-height: 85px;
  margin: 0;
  padding: 0.1px 10px 0.1px 10px;

  li {
    padding: 1px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
      sans-serif;
    font-weight: bolder;
    font-size: 14px;
    border-bottom: 1px solid;
  }
`;
