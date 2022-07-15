import {Link} from 'react-router-dom';
import styled from 'styled-components';

import dashButton from '../imgicon/dash-button.png';

export default function Footer() {
  return (
    <FooterMenu>
      <Link className="StyledLink" to={'/home'}>
        <img src={dashButton} alt="home button" />
      </Link>
    </FooterMenu>
  );
}

const FooterMenu = styled.footer`
  height: 50px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;

  .StyledLink {
    width: 80px;
    height: 80px;
    background-color: white;
    border-style: solid red 3px;
    display: flex;
    align-items: center;
    border-radius: 999px;
    position: relative;
    top: -15px;
    justify-content: center;
  }
  img {
    color: black;
    position: relative;
    top: 2px;
  }
`;
