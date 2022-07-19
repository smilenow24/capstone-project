import styled from 'styled-components';

import BarChart from '../components/BarChart';
import InfoBoardHeating from '../components/InfoBoardHeating.js';
import InputDataDialog from '../components/InputDataDialog.js';
import LineChart from '../components/LineChart';
import SetActiveChartButton from '../components/SetActiveChartButton.js';

export default function PageCategoryHeating({
  energyConsumptionHistory,
  dailyTotalBudget,
  totalConsumption,
  setActiveChart,
  activeChart,
  updateEnergyConsumption,
}) {
  const chartInputDataHeating = updateChartHeating();

  return (
    <MainContainer>
      <InfoBoardHeating
        energyConsumptionHistory={energyConsumptionHistory}
        dailyTotalBudget={dailyTotalBudget}
        totalConsumption={[totalConsumption.totalHeating, totalConsumption.averageIncreaseHeatingRounded]}
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
        <SetActiveChartButton onChartActiveEvent={() => setActiveChart(!activeChart)} />
        {activeChart && <LineChart lineChartData={chartInputDataHeating} />}
        {!activeChart && <BarChart barChartData={chartInputDataHeating} />}
      </ChartContainer>
      <InputDataDialog updateEnergyConsumption={updateEnergyConsumption} categoryToHandle={'heating'} />
    </MainContainer>
  );

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
}

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
