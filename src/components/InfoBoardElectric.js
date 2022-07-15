import styled from 'styled-components';

export default function InfoBoard({energyConsumptionHistory, dailyTotalBudget, totalConsumption}) {
  const totalBudget = 30000;
  const formattedActualDate = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const saldoIncrease = energyConsumptionHistory.electric[0].increase - dailyTotalBudget;
  const restBudget = totalBudget - totalConsumption[0];

  return (
    <Wrapper>
      <h2>{formattedActualDate}</h2>
      <dl>
        <dt>total entries: {energyConsumptionHistory.electric.length}</dt>
        <dt>total consumption: {totalConsumption[0].toLocaleString('de-DE')}watt/h</dt>
        <dt>
          total budget: {totalBudget} - rest budget: {restBudget}
        </dt>
        <dt style={{color: totalConsumption[1] > dailyTotalBudget ? 'red' : '#2aff00'}}>
          daily average increase: {totalConsumption[1].toLocaleString('de-DE')} watt/h
        </dt>
        <dt>accepted increase value: {dailyTotalBudget} watt/h</dt>
        <dt style={{color: saldoIncrease > dailyTotalBudget ? 'red' : '#2aff00'}}>
          saldo increase value: {saldoIncrease} watt/h
        </dt>
      </dl>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  background-color: #053f72;
  border-radius: 20px;

  h2 {
    color: white;
    padding: 0.1vh 2vh 0.1vh 2vh;
    font-size: medium;
  }

  dl {
    width: 40vh;
    font-size: small;
    list-style: none;
    padding: 0.1vh;
    border-bottom: none;
  }

  dt {
    color: white;
  }

  dd {
    font-weight: 500;
  }

  b {
    font-size: medium;
  }
`;
