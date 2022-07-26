import {Link} from 'react-router-dom';
import styled from 'styled-components';

import iconMenuButton from '../imgicon/Vector-go.svg';

export default function CategoryButton({onSelect, lastInputValue, lastInputIncrease, categoryIcon}) {
  return (
    <CategoryField>
      <IconContainer>
        <CategoryIcon src={categoryIcon} alt=" " />
      </IconContainer>
      <CategoryValues>Your last input: {lastInputValue}</CategoryValues>
      <CategoryValues>Last amount of increase: {lastInputIncrease}</CategoryValues>
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
  margin: 4vh 3vh 4vh 4vh;
  border-radius: 20px;
`;
const LinkContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vh;
  height: 10vh;
  margin: 4px;
  border-width: 0;
  border-radius: 10%;
  padding-right: 3vh;
  padding-left: 3vh;

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
  margin: 3vh;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 5vh;
  padding-left: 9px;
`;
