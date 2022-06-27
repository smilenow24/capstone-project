import styled from 'styled-components';

export default function InputDataDialog({onInputData}) {
    return (
        <FormInputData onSubmit={handleSubmit}>
            <label htmlFor="inputfield">Please insert data:</label>
            <input id="inputfield" name="inputfield" />
            <button>Submit</button>
        </FormInputData>

    );

    function handleSubmit(inputEvent) {
        inputEvent.preventDefault();
        const inputData = inputEvent.target;
        const inputDataValue = inputData.elements.inputfield.value.trim();
        onInputData(inputDataValue);
        inputData.reset();
    }

}

const FormInputData = styled.form`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    background-color: grey;

    label {
        text-align: center;
        color: white;
        width: 100%; 
    }

    input {
    
        width: 100%; 
    }

    button {
        color: white;
        background-color: green;
        width: 100%;
    }

`
