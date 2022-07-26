import {useState} from 'react';
import styled from 'styled-components';

export default function PersonalBudgetConfig() {
  const [actualBudget, setActualBudget] = useState([1400, 1200, 45]);

  return (
    <MainWrapper>
      <SectionWrapper>
        <ConfigHeadline>Personal Budget Configuration</ConfigHeadline>;
        <ConfigArticle>Please insert your daily-budget for enerergy consumption of every category</ConfigArticle>
        <ConfigArticleExplanation>
          This is the consumption you do not want to exceed on a daily basis
        </ConfigArticleExplanation>
        <form onSubmit={handleBudgetEvent} id={0}>
          <label htmlFor="0">Daily-Budget for electricity in watt/h</label>
          <span>Actual value: {actualBudget[0]} watt/h</span>
          <input type="text" min="0" pattern="[0-9]{1,10}" id={0} name="1" />
          <button>submit</button>
        </form>
        <form onSubmit={handleBudgetEvent} id={1}>
          <label htmlFor="1">Daily-Budget for heating in watt/h</label>
          <span>Actual value: {actualBudget[1]} watt/h</span>
          <input type="text" min="0" pattern="[0-9]{1,10}" id={1} name="2" />
          <button>submit</button>
        </form>
        <form onSubmit={handleBudgetEvent} id={2}>
          <label htmlFor="2">Daily-Budget for mobility in km</label>
          <span>Actual value: {actualBudget[2]} km</span>
          <input type="text" min="0" pattern="[0-9]{1,5}" id={2} name="3" />
          <button>submit</button>
        </form>
      </SectionWrapper>
    </MainWrapper>
  );

  function handleBudgetEvent(handleBudgetEvent) {
    handleBudgetEvent.preventDefault();
    const inputBudgetData = handleBudgetEvent.target;
    const inputBudgetDataId = parseInt(handleBudgetEvent.target.id);
    const inputBudgetDataValue = parseInt(inputBudgetData.elements[inputBudgetDataId].value);
    console.log(inputBudgetDataValue);
    console.log(actualBudget);
    console.log(inputBudgetDataId);

    const changedActualBudget = [...actualBudget];
    const newBudgetArray = changedActualBudget.splice(inputBudgetDataId, 1, inputBudgetDataValue);
    console.log(actualBudget);
    console.log(changedActualBudget);
    console.log(newBudgetArray);
    handleBudgetEvent.target.reset();
    setActualBudget(changedActualBudget);
  }
}

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ConfigHeadline = styled.h2`
  margin: 2vh;
  padding-top: 10vh;
  font-size: 3vh;
  text-align: center;
  color: #d7dcde;
`;

const ConfigArticle = styled.article`
  margin: 1vh;
  text-align: center;
  color: #d7dcde;
`;

const ConfigArticleExplanation = styled.article`
  margin-top: 1vh;
  margin-bottom: 4vh;
  text-align: center;
  color: #d7dcde;
  font-size: 1rem;
`;

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 2vh;
  max-width: 60vh;
  text-align: center;
  font-size: medium;
  color: #d7dcde;
  overflow: hidden;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  label {
    margin: 0;
    font-size: 1rem;
    width: 100%;
    padding: 0.5vh;
  }

  span {
    font-size: 1rem;
    width: 100%;
    margin: 0.5vh;
    text-align: center;
  }

  input {
    margin: 2vh;
    height: 4vh;
  }

  button {
    width: 10vh;
    height: 5vh;
    margin: 2vh;
    height: 4vh;
    background-color: green;
    border-style: none;
    font-size: medium;
    font-weight: 600;
    color: #d7dcde;
  }
`;
