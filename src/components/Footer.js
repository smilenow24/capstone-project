import {Link} from 'react-router-dom';
import styled from 'styled-components';

import ReturnButton from '../components/ReturnButton.js';
import dashButton from '../imgicon/dash-button.png';

import ConfigPersonalButton from './ConfigPersonalButton.js';

export default function Footer({handleOnClickMessage}) {
  return (
    <FooterMenu className="StyledFooterMenu">
      <ReturnButton />
      <Link onClick={handleOnClickMessage} className="StyledDashLink" to={'/home'}>
        <img src={dashButton} alt="home button" />
      </Link>
      <ConfigPersonalButton />
    </FooterMenu>
  );
}

const FooterMenu = styled.footer`
  height: 55px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  padding-top: 5px;

  .StyledDashLink {
    width: 80px;
    height: 80px;
    background-color: #d7dcde;
    border-style: solid red 3px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    position: relative;
    top: -15px;
    justify-content: center;
  }

  .StyledDashLink:hover {
    width: 90px;
    height: 90px;
    border: 7px solid #2065b0;
    position: relative;
    top: -20px;
  }
`;
