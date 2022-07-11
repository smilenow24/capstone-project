import styled from 'styled-components';

import iconCategoryElect from '../imgicon/cat-elect-icon.png';
import iconMenuButton from '../imgicon/icon-menu-button.png';

export default function CategoryButton({onSelect, lastInputValue, lastInputIncrease}) {
  return (
    <CategoryField>
      <IconContainer>
        <img src={iconCategoryElect} alt=" " />
      </IconContainer>
      <span>Your last input: {lastInputValue} watt/h</span>
      <span>Last amount of increase: {lastInputIncrease} watt/h</span>
      <button name="categoryButton" onClick={onSelect}>
        <img src={iconMenuButton} alt="category electricity button" />
      </button>
    </CategoryField>
  );
}

const CategoryField = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 14vh;
  background-color: black;
  margin: 2vh 3vh 1vh 3vh;

  #LineChart {
    width: 50px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    height: 100%;
    background-color: darkred;
    border-width: 0;
    padding-right: 2vh;
    padding-left: 2vh;
  }

  img {
    width: 8vh;
    height: 8vh;
  }

  span {
    color: #2aff00;
    font-size: 1rem;
    text-align: center;
  }
`;

/*const ChartContainer = styled.div`
  height: 100%;
  width: 250px;
`;*/

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkred;
  height: 100%;
  width: 10vh;
`;
