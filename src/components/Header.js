import styled from 'styled-components';

export default function Header({showMessage}) {
  return (
    <Top>
      <Smile>
        <EyeContainer>
          <Eye></Eye>
          <Eye></Eye>
        </EyeContainer>
        <Mouth />
      </Smile>
      <Speechbubble>
        <SpeechBubbleTriangle />
        <span>{showMessage}</span>
      </Speechbubble>
    </Top>
  );
}

const Top = styled.header`
  height: 50px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  position: fixed;
  top: -6px;
`;

const Speechbubble = styled.div`
  background-color: grey;
  position: relative;
  top: 30px;
  left: 140px;
  border-radius: 111px;
  border-style: solid;
  overflow-wrap: break-word;
  max-width: 165px;
  height: 67px;
  padding: 0.1px;
  display: flex;
  align-items: center;

  span {
    max-width: 140px;
    color: white;
    margin-top: 2px;
    font-size: 1rem;
    position: relative;
    left: -20px;
  }
`;

const SpeechBubbleTriangle = styled.div`
  width: 0.1px;
  height: 0.1px;
  border-top: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid grey;
  position: relative;
  top: -20px;
`;

const Smile = styled.div`
  height: 100px;
  width: 100px;
  background-color: #5d6abf;
  border-style: solid 2px;
  border-radius: 1111px;
  position: absolute;
  top: -25px;
  display: flex;
  justify-content: center;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  background: linear-gradient(90deg, #099, #f4f, #0099);
  animation: animate 3s linear;
`;

const EyeContainer = styled.div`
  width: 90px;
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Eye = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 1111px;
  background-color: darkblue;
`;

const Mouth = styled.div`
  height: 8px;
  width: 60px;
  padding: 1px;
  background-color: white;
  border-radius: 1111px;
`;
