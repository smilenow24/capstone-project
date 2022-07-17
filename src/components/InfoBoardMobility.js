import styled from 'styled-components';

export default function InfoBoardMobility({energyConsumptionHistory, dailyTotalBudget, totalConsumption}) {
  const totalBudget = 30000;
  const formattedActualDate = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const saldoIncrease = energyConsumptionHistory.mobility[0].increase - dailyTotalBudget;
  const restBudget = totalBudget - totalConsumption[0];
  console.log(totalConsumption[1]);
  return (
    <Wrapper>
      <h2>{formattedActualDate}</h2>
      <dl>
        <dt>total entries: {energyConsumptionHistory.mobility.length}</dt>
        <dt>total consumption: {totalConsumption[0].toLocaleString('de-DE')}km</dt>

        <dt>
          total budget: {totalBudget} - rest budget: {restBudget}
        </dt>
        <dt style={{color: totalConsumption[1] > dailyTotalBudget ? 'red' : '#2aff00'}}>
          daily average increase: {totalConsumption[1].toLocaleString('de-DE')} km
        </dt>
        <dt>accepted increase value: {dailyTotalBudget} km</dt>
        <dt style={{color: saldoIncrease > dailyTotalBudget ? 'red' : '#2aff00'}}>
          saldo increase value: {saldoIncrease} km
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
