//import {useState} from 'react';
import styled from 'styled-components';


const initialInputData = [
    {
      date: "20.06.2022",
      value: "119.000"
    },
    {
      date: "15.06.2022",
      value: "118.000"
    },
    {
      date: "10.06.2022",
      value: "112.000"
    }
  ];

  // const [data, setData] = useState(initialInputData);

export default function InputDataDialog({onInputData}) {
    return (
        <FormInputData onSubmit={handleSubmit}>
            <label htmlFor="inputfield">Please insert data:</label>
            <input
                type="number"
                id="inputfield" name="inputfield" maxLength={20} required />
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
