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
      <ConsumptionDataInformation>
        <TotalListEntries>
          Your data list with {energyConsumptionHistory.heating.length} entries in watt/h:{' '}
        </TotalListEntries>

        <InputDataList role="list">
          {energyConsumptionHistory.heating.map(({date, value, id, increase}) => (
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
          {activeChart && <LineChart lineChartData={chartInputDataHeating} />}
          {!activeChart && <BarChart barChartData={chartInputDataHeating} />}
        </ChartContainer>
      </ConsumptionDataInformation>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  max-width: 60vh;
  margin: 45px 0 0 0;
`;

const TotalListEntries = styled.div`
  text-align: center;
  font-size: medium;
  font-weight: 600;
  margin: 1vh;
  color: #d7dcde;
`;

const ConsumptionDataInformation = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 42vh;
  margin-bottom: 10px;
  color: #d7dcde;
  background-color: #1f2f40;
  padding-bottom: 20px;
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
