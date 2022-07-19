import styled from 'styled-components';

export default function Header({showMessage, handleConsumptionChange}) {
  console.log(handleConsumptionChange.electric[0].increase);
  return (
    <Top>
      <Smile handleConsumptionChange={handleConsumptionChange}>
        <EyeContainer>
          <Eye></Eye>
          <Eye></Eye>
        </EyeContainer>
        <Mouth>
          <MouthLeft />
          <MouthRight />
        </Mouth>
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
  background-color: green;
  position: relative;
  top: 30px;
  left: 133px;
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
  border-left: 20px solid green;
  position: relative;
  top: -20px;
`;

const Smile = styled.div`
  height: 100px;
  width: 100px;
  border-style: solid 2px;
  border-radius: 50%;
  position: absolute;
  top: -25px;
  display: flex;
  justify-content: center;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  background: ${({handleConsumptionChange}) =>
    handleConsumptionChange.electric[0].increase < 1100
      ? 'linear-gradient(80deg, #578e23, #2aff00, #578e23);'
      : 'linear-gradient(80deg, #a52c26, #ff5961, #a52c26);'};
  animation: animateHeader 5s linear;

  @keyframes animateHeader {
    0% {
      transform: rotate(2deg);
    }
    100% {
      transform: rotate(120deg);
    }
  }
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
  border-radius: 50%;
  background-color: darkblue;
`;

const Mouth = styled.section`
  display: flex;
  justify-content: center;
`;

const MouthLeft = styled.div`
  height: 3px;
  width: 28px;
  transform: rotate(18deg);
  padding: 1px;
  background-color: white;
  border-radius: 1111px;
  position: relative;
  top: -6px;
  left: 3px;
`;
const MouthRight = styled.div`
  height: 3px;
  width: 25px;
  transform: rotate(162deg);
  padding: 1px;
  background-color: white;
  border-radius: 1111px;
  position: relative;
  top: -6px;
  right: 3px;
`;
