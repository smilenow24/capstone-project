import {Link} from 'react-router-dom';
import styled from 'styled-components';

import iconMenuButton from '../imgicon/input-list-icon.png';

export default function CategoryButton({onSelect, lastInputValue, lastInputIncrease, categoryIcon}) {
  return (
    <CategoryField>
      <IconContainer>
        <img src={categoryIcon} alt=" " />
      </IconContainer>
      <span>Your last input: {lastInputValue} watt/h</span>
      <span>Last amount of increase: {lastInputIncrease} watt/h</span>
      <Link className="LinkContainer" to={onSelect} name="categoryButton" onClick={onSelect}>
        <img src={iconMenuButton} alt="category electricity button" />
      </Link>
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

  .LinkContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    height: 10vh;
    margin: 4px;
    background-color: darkred;
    border-width: 0;
    border-radius: 10%;
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

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkred;
  height: 100%;
  width: 10vh;
`;
