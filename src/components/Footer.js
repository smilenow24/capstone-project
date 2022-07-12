import styled from 'styled-components';

import dashButton from '../imgicon/dash-button.png';

export default function Footer() {
  return (
    <FooterMenu>
      <button>
        <img src={dashButton} alt="home button" />
      </button>
    </FooterMenu>
  );
}

const FooterMenu = styled.header`
  height: 50px;
  width: 100%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;

  button {
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    border-radius: 999px;
    position: relative;
    top: -15px;
    display: flex;
    justify-content: center;
  }

  img {
    color: black;
    position: relative;
    top: 2px;
  }
`;
