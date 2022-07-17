import styled from 'styled-components';

import configPersonalButton from '../imgicon/config-person.png';

export default function ConfigPersonalButton() {
  return (
    <ConfigButton>
      <img name="configButton" src={configPersonalButton} alt="personal basic data edit" />
    </ConfigButton>
  );
}

const ConfigButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 999px;
  position: relative;
  top: -7px;

  img {
    background-color: transparent;
  }
`;
