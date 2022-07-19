import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import iconReturnButton from '../imgicon/returnIcon.png';

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
  width: 5vh;
  height: 5vh;
  border-radius: 999px;

  .ReturnFooterButton:hover {
    width: 7vh;
    height: 7vh;
  }

  img {
    width: 1.5rem;
  }
`;
