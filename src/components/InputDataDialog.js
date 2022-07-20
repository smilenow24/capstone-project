import styled from 'styled-components';

export default function InputDataDialog({updateEnergyConsumption, categoryToHandle}) {
  return (
    <FormInputData onSubmit={handleSubmit}>
      <label htmlFor="inputfield">Enter actual meter reading:</label>
      <input type="text" min="0" pattern="[0-9]{1,10}" id="inputfield" name="inputfield" required />
      <button>Submit</button>
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
  background-color: #053f72;
  border-radius: 10px;
  border: solid 2px white;
  padding: 10px;

  label {
    text-align: start;
    color: white;
    font-weight: 600;
    font-size: medium;
    width: 100%;
  }

  input {
    width: 27vh;
    height: 2em;
    margin-right: 2vh;
  }

  button {
    height: 2em;
    font-weight: 600;
    background-color: green;
    color: white;
    width: 20vh;
    border: solid 2px white;
    border-radius: 5px;
  }
`;
