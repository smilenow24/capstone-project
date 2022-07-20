import styled from 'styled-components';

export default function PersonalBudgetConfig() {
  return (
    <>
      <ConfigHeadline>Personal Budget Configuration</ConfigHeadline>;
      <ConfigArticle>Please insert your daily-budget for enerergy consumption of every category</ConfigArticle>
      <ConfigArticleExplanation>
        This is the consumption you do not want to exceed on a daily basis
      </ConfigArticleExplanation>
      <Wrapper>
        <ConfigForm>
          <label>Daily-Budget for electricity in watt/h</label>
          <span>Actual value: 1000 watt/h</span>
          <input type="text" min="0" pattern="[0-9]{1,10}" id="budgetFieldElectric" name="inputfield" />
          <button>submit</button>
          <label>Daily-Budget for heating in watt/h</label>
          <span>Actual value: 1000 watt/h</span>
          <input type="text" min="0" pattern="[0-9]{1,10}" id="budgetFieldHeating" name="inputfield" />
          <button>submit</button>
          <label>Daily-Budget for mobility in km</label>
          <span>Actual value: 1000 km</span>
          <input type="text" min="0" pattern="[0-9]{1,10}" id="budgetFieldMobility" name="inputfield" />
          <button>submit</button>
        </ConfigForm>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ConfigHeadline = styled.h2`
  margin: 0;
  padding-top: 13vh;
  text-align: center;
  color: white;
`;

const ConfigArticle = styled.article`
  margin: 0.5vh;
  text-align: center;
  color: white;
`;

const ConfigArticleExplanation = styled.article`
  margin: 1vh;
  text-align: center;
  color: white;
  font-size: 1rem;
`;

const ConfigForm = styled.form`
  display: flex;
  justify-content: center;
  width: 60vh;
  flex-wrap: wrap;
  margin: 0;
  padding-top: 2vh;
  text-align: center;
  font-size: medium;
  color: white;

  label {
    margin: 0;
    font-size: 1rem;
    width: 100%;
    padding: 0.5vh;
  }

  span {
    font-size: 1rem;
    width: 100%;
    margin: 0.1vh;
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
    color: white;
  }
`;
