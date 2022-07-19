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
  width: 90%;
  margin: 65px 20px 20px 20px;
  padding: 10px;
  background-color: lightblue;
  border-radius: 30px;
`;

const ChartContainer = styled.section`
  height: 150px;
  width: 300px;
  margin-bottom: 1vh;

  &SetActiveChartButton {
    width: 200px;
  }
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
    font-size: 14px;
    border-bottom: 1px solid;
  }
`;
