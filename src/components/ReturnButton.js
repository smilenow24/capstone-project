import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import iconReturnButton from '../imgicon/returnIcon.svg';

export default function ReturnButton() {
  const navigate = useNavigate();
  return (
    <>
      <ReturnFooterButton onClick={() => navigate(-1)}>
        <img name="returnButton" src={iconReturnButton} alt="return to main site button" />
      </ReturnFooterButton>
    </>
  );
}

const ReturnFooterButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 999px;
  border: solid 2px black;
  background-color: #d7dcde;

  .ReturnFooterButton:hover {
    width: 7vh;
    height: 7vh;
  }

  img {
    width: 1.8rem;
  }
`;
