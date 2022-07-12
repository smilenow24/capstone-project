import styled from 'styled-components';

export default function InfoBoard({energyConsumptionHistory, dailyTotalBudget, totalConsumption}) {
  const totalBudget = 30000;
  const formattedActualDate = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const saldoIncrease = energyConsumptionHistory[0].increase - dailyTotalBudget;
  const restBudget = totalBudget - totalConsumption.total;

  return (
    <Wrapper>
      <h2>{formattedActualDate}</h2>
      <ul>
        <li>
          total entries: <b>{energyConsumptionHistory.length}</b>
        </li>
        <li>
          total consumption: <b>{totalConsumption.total.toLocaleString('de-DE')}</b> watt/h
        </li>
        <li>
          total budget: <b>30000</b> - rest budget: <b>{restBudget}</b>
        </li>
        <li style={{color: totalConsumption.averageIncreaseRounded > dailyTotalBudget ? 'red' : '#2aff00'}}>
          daily average increase: <b>{totalConsumption.averageIncreaseRounded.toLocaleString('de-DE')}</b> watt/h
        </li>
        <li>
          accepted increase value: <b>{dailyTotalBudget} watt/h</b>
        </li>
        <li style={{color: saldoIncrease > dailyTotalBudget ? 'red' : '#2aff00'}}>
          saldo increase value: <b>{saldoIncrease} watt/h</b>
        </li>
      </ul>
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

  ul {
    width: 40vh;
    list-style: none;
    padding: 0.1vh;
    border-bottom: none;
  }

  li {
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }

  b {
    font-size: medium;
  }
`;
