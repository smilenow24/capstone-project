import styled from 'styled-components';

export default function InfoBoardMobility({energyConsumptionHistory, dailyTotalBudget, totalConsumption}) {
  const totalBudget = 1350;
  const formattedActualDate = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const saldoIncrease = energyConsumptionHistory.mobility[0].increase - dailyTotalBudget;
  const restBudget = totalBudget - totalConsumption[0];
  return (
    <Wrapper>
      <dl>
        <h2>{formattedActualDate}</h2>
        <dt>total consumption: {totalConsumption[0].toLocaleString('de-DE')} km</dt>

        <dt>
          total budget: {totalBudget.toLocaleString('de-DE')} - rest budget: {restBudget.toLocaleString('de-DE')}
        </dt>
        <dt style={{color: totalConsumption[1] > dailyTotalBudget ? 'red' : '#2aff00'}}>
          daily average increase: {totalConsumption[1].toLocaleString('de-DE')} km
        </dt>
        <dt>accepted increase value: {dailyTotalBudget} km</dt>
        <dt style={{color: saldoIncrease < dailyTotalBudget ? 'red' : '#2aff00'}}>
          saldo increase value: {saldoIncrease} km
        </dt>
      </dl>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 60vh;
  border-radius: 20px;
  margin: 1vh 0 0 0;
  text-align: center;
  line-height: 3.3vh;
  padding-top: 5px;

  h2 {
    margin: 0;
    color: #d7dcde;
    font-size: medium;
  }

  dl {
    font-size: 2vh;
    list-style: none;
    padding: 0.1vh;
    border-style: 1px solid black;
  }

  dt {
    color: #d7dcde;
    font-size: 1rem;
  }

  dd {
    font-weight: 500;
  }

  b {
    font-size: large;
  }
`;
