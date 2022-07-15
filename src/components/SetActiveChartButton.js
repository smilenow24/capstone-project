import styled from 'styled-components';

import barChartIcon from '../imgicon/barchart-icon.png';

export default function setActiveChartButton({onChartActiveEvent}) {
  return (
    <ChangeChartButton onClick={onChartActiveEvent}>
      <img name="changeChartButton" src={barChartIcon} alt="barchart icon" />
    </ChangeChartButton>
  );
}

const ChangeChartButton = styled.button`
  width: 6vh;
  padding: 1px;
  border-radius: 10%;
  background-color: lightcyan;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 100px;

  img {
    width: 5vh;
  }
`;
