import styled from "styled-components";

import iconCategoryElect from "../imgicon/cat-elect-icon.png";
import iconMenuButton from "../imgicon/icon-menu-button.png";

export default function CategoryButton({onSelect, lastInputValue, onReturn}){

    return(
    <CategoryField>
        <div>
            <img src={iconCategoryElect} alt=" "/>
        </div>
        <span>Your last input: {lastInputValue} watt/h</span>
        <button name="categoryButton" onClick={onSelect}>
            <img src={iconMenuButton} alt="category electricity button"/>
        </button>
    </CategoryField>
    )
}

const CategoryField = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 14vh;
    display: flex;
    background-color: black;
    margin: 2vh 3vh 1vh 3vh;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: darkred;
        height: 100%;
        width: 10vh; 
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vh;
        height: 100%;
        background-color: darkred;
        border-width: 0;
        padding-right: 2vh;
        padding-left: 2vh;
    }

    img {
        width: 8vh;
        height: 8vh;

    }

    span {
        color: #2AFF00;
    } 
`

