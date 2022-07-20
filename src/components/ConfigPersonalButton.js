import {Link} from 'react-router-dom';
import styled from 'styled-components';

import configPersonalButton from '../imgicon/config-person.png';

export default function ConfigPersonalButton() {
  return (
    <ConfigButton to={'/home/personalbudget'}>
      <img name="configButton" src={configPersonalButton} alt="personal basic data edit" />
    </ConfigButton>
  );
}

const ConfigButton = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  border: solid 2px black;
`;
