import styled from 'styled-components';

export default function InputDataDialog({updateEnergyConsumption, categoryToHandle}) {
  return (
    <FormInputData onSubmit={handleSubmit}>
      <label htmlFor="inputfield">Enter actual meter reading:</label>
      <input type="text" min="0" pattern="[0-9]{1,10}" id="inputfield" name="inputfield" required />
      <button>submit</button>
    </FormInputData>
  );

  function handleSubmit(inputEvent) {
    inputEvent.preventDefault();
    const inputEnergyConsumptionData = inputEvent.target;
    const inputEnergyConsumptionValue = inputEnergyConsumptionData.elements.inputfield.value.trim();

    inputEvent.target.reset();
    updateEnergyConsumption(inputEnergyConsumptionValue, categoryToHandle);
  }
}

const FormInputData = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  padding: 10px;
  padding-left: 20px;
  max-width: 375px;
  @media (min-width: 376px) {
    justify-content: center;
    padding-left: 0;
  }

  label {
    text-align: start;
    color: #d7dcde;
    font-weight: 600;
    font-size: medium;
    margin-bottom: 2px;
    @media (min-width: 376px) {
      margin-bottom: 7px;
    }
  }

  input {
    width: 27vh;
    height: 2em;
    margin-right: 2vh;
    margin-bottom: 1vh;
    @media (min-width: 376px) {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  button {
    height: 2em;
    font-weight: 600;
    background-color: green;
    color: white;
    width: 20vh;
    border-style: none;
    border-radius: 5px;
  }
`;
