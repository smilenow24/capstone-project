import {Link} from 'react-router-dom';
import styled from 'styled-components';

import iconMenuButton from '../imgicon/input-list-icon.png';

export default function CategoryButton({onSelect, lastInputValue, lastInputIncrease, categoryIcon}) {
  return (
    <CategoryField>
      <IconContainer>
        <CategoryIcon src={categoryIcon} alt=" " />
      </IconContainer>
      <CategoryValues>Your last input: {lastInputValue} watt/h</CategoryValues>
      <CategoryValues>Last amount of increase: {lastInputIncrease} watt/h</CategoryValues>
      <LinkContainer to={onSelect} name="categoryButton" onClick={onSelect}>
        <CategoryIcon src={iconMenuButton} alt="category electricity button" />
      </LinkContainer>
    </CategoryField>
  );
}

const CategoryField = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 17vh;
  border-style: 4px solid white;
  background-color: black;
  margin: 4vh 3vh 4vh 3vh;
`;
const LinkContainer = styled(Link)`
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

  &:hover {
    width: 12vh;
    height: 12vh;
  }
`;

const CategoryValues = styled.span`
  color: #2aff00;
  font-size: 1rem;
  text-align: center;
`;

const CategoryIcon = styled.img`
  width: 8vh;
  height: 8vh;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgreen;
  height: 100%;
  width: 10vh;
`;
