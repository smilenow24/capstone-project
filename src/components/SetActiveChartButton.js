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
  border-radius: 10%;
  display: flex;
  justify-content: center;
  position: fixed;
  border: none;
  top: 350px;
  left: 320px;
  padding: 0.3vh 0.3vh 0.3vh 0.3vh;

  img {
    width: 5vh;
    height: 4vh;
  }
`;
