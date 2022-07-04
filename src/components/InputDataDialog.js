import styled from 'styled-components';

export default function InputDataDialog({updateInput}) {
    return (
        <FormInputData onSubmit={handleSubmit}>
            <label htmlFor="inputfield">Enter your energy consumption - watt/h:</label>
            <input
                type="text" min="0" maxLength={20} pattern="([0-9]+)"
                id="inputfield" name="inputfield" required />
            <button>Submit</button>
        </FormInputData>

    );

    function handleSubmit(inputEvent) {
        inputEvent.preventDefault();
        const inputData = inputEvent.target;
        const inputDataValue = inputData.elements.inputfield.value.trim();

        updateInput(inputDataValue);

        inputData.reset();
    }
}

const FormInputData = styled.form`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    background-color: grey;
    border-radius: 10px;
    padding: 10px;

    label {
        text-align: center;
        color: white;
        width: 100%; 
    }

    input {
        width: 100%; 
    }

    button {
        height: 2em;
        color: black;
        font-weight: 600;
        background-color: lightblue;
        width: 100%;
        border-radius: 10px;
    }

`
