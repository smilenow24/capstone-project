//import {useState} from 'react';
import styled from "styled-components";

export default function Header({showmessages}) {

return (
    <Top>
      <Smile>
        <Eye>
          <div></div>
          <div></div>
        </Eye>
        <Mouth />
      </Smile>
      <Speechbubble><div></div>
        <span>{showmessages}</span>
      </Speechbubble>
    </Top>
  );
}

const Top = styled.section`
  height: 50px;
  width: 100%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
`;

const Speechbubble = styled.div`
  
  background-color: grey;
  position: relative;
  top: 30px;
  left: 140px;
  border-radius: 111px;
  border-style: 2px solid;
  border-color: blue;
  overflow-wrap: break-word;
  hyphens: manual;
  height: auto;
  width: auto;
  padding: 0px;

  div {
    width: 0px;
    height: 0px;
    border-top: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid grey;
    position: relative;
    top: -10px;
  }

  span {
    max-height: 70px;
    max-width: 100px;
    position: relative;
    top: -35px;
    left: 10px;
    margin: 5px;
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }

`;

const Smile = styled.div`
  height: 100px;
  width: 100px;
  background-color: grey;
  border-radius: 1111px;
  position: absolute;
  top: -25px;
  display: flex;
  justify-content: center;
  gap: 14px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Eye = styled.div`
  width: 90px;
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  div {
    height: 15px;
    width: 15px;
    background-color: white;
    border-radius: 1111px;
    background-color: blue;
  }
`;

const Mouth = styled.div`
  height: 8px;
  width: 60px;
  padding: 1px;
  background-color: white;
  border-radius: 1111px;
`;

