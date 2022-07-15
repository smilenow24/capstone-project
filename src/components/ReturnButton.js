import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import iconReturnButton from '../imgicon/returnIcon.png';

export default function ReturnButton() {
  const navigate = useNavigate();
  return (
    <>
      <ReturnHeaderButton onClick={() => navigate(-1)}>
        <img name="returnButton" src={iconReturnButton} alt="return to main site button" />
      </ReturnHeaderButton>
    </>
  );
}

const ReturnHeaderButton = styled.button`
  width: 10vh;
  height: 10vh;
  border-radius: 999px;
  position: fixed;
  top: 10px;
  left: 10px;
`;
