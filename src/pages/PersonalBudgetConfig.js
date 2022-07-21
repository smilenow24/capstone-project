import {useState} from 'react';
import styled from 'styled-components';

export default function PersonalBudgetConfig() {
  const [actualBudget, setActualBudget] = useState(1400);
  console.log(handleBudgetEvent);
  return (
    <>
      <Wrapper>
        <ConfigHeadline>Personal Budget Configuration</ConfigHeadline>;
        <ConfigArticle>Please insert your daily-budget for enerergy consumption of every category</ConfigArticle>
        <ConfigArticleExplanation>
          This is the consumption you do not want to exceed on a daily basis
        </ConfigArticleExplanation>
        <form onSubmit={handleBudgetEvent}>
          <label htmlFor="budgetFieldElectric">Daily-Budget for electricity in watt/h</label>
          <span>Actual value: {actualBudget} watt/h</span>
          <input type="text" min="0" pattern="[0-9]{1,10}" id="budgetFieldElectric" name="budgetFieldElectric" />
          <button>submit</button>
        </form>
        <form>
          <label htmlFor="budgetFieldHeating">Daily-Budget for heating in watt/h</label>
          <span>Actual value: 1000 watt/h</span>
          <input type="text" min="0" pattern="[0-9]{1,10}" id="budgetFieldHeating" name="budgetFieldHeating" />
          <button>submit</button>
        </form>
        <form>
          <label htmlFor="budgetFieldMobility">Daily-Budget for mobility in km</label>
          <span>Actual value: 45 km</span>
          <input type="text" min="0" pattern="[0-9]{1,10}" id="budgetFieldMobility" name="budgetFieldMobility" />
          <button>submit</button>
        </form>
      </Wrapper>
    </>
  );

  function handleBudgetEvent(handleBudgetEvent) {
    handleBudgetEvent.preventDefault();
    const inputBudgetData = handleBudgetEvent.target;
    const inputBudgetDataValue = inputBudgetData.elements.budgetFieldElectric.value.trim();

    handleBudgetEvent.target.reset();
    setActualBudget(inputBudgetDataValue);
  }
}

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

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 0;
  padding: 2vh;
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
