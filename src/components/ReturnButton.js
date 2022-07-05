import styled from "styled-components";

import iconReturnButton from "../imgicon/returnIcon.png";

export default function ReturnButton({onReturn}){

    return(
    <ReturnHeaderButton onClick={onReturn}>
        <img src={iconReturnButton} alt="return to main site button"/>
    </ReturnHeaderButton>
    )
}

const ReturnHeaderButton = styled.button`
    width: 10vh;
    height: 10vh;
    border-radius: 999px;
    position: fixed;
    top: 10px;
    left: 10px;
`

