import styled from 'styled-components';

export default function Header({showMessage, handleConsumptionChange, categoryToHandle}) {
  return (
    <Top>
      <Smile handleConsumptionChange={handleConsumptionChange} categoryToHandle={categoryToHandle}>
        <EyeContainer>
          <Eye></Eye>
          <Eye></Eye>
        </EyeContainer>
        <Mouth>
          <MouthLeft handleConsumptionChange={handleConsumptionChange} categoryToHandle={categoryToHandle} />
          <MouthRight handleConsumptionChange={handleConsumptionChange} categoryToHandle={categoryToHandle} />
        </Mouth>
      </Smile>
      <Speechbubble handleConsumptionChange={handleConsumptionChange} categoryToHandle={categoryToHandle}>
        <SpeechBubbleTriangle handleConsumptionChange={handleConsumptionChange} categoryToHandle={categoryToHandle} />
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
  position: relative;
  top: 30px;
  left: 133px;
  border-radius: 111px;
  border-style: solid;
  overflow-wrap: break-word;
  max-width: 150px;
  height: 67px;
  padding: 0.1px;
  display: flex;
  align-items: center;
  background-color: ${({handleConsumptionChange}) =>
    handleConsumptionChange.electric[0].increase < 1100 ? 'green' : 'darkred'};

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
  position: relative;
  top: -20px;
  border-left: ${({handleConsumptionChange}) =>
    handleConsumptionChange.electric[0].increase < 1100 ? '20px solid green;' : '20px solid darkred'};
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
  height: 4px;
  width: 28px;
  padding: 1px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  top: -6px;
  right: -2px;
  transform: ${({handleConsumptionChange}) =>
    handleConsumptionChange.electric[0].increase < 1100 ? 'rotate(22deg)' : 'rotate(166deg)'};
`;
const MouthRight = styled.div`
  height: 4px;
  width: 25px;
  transform: rotate(162deg);
  padding: 1px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  top: -6px;
  right: 3px;
  transform: ${({handleConsumptionChange}) =>
    handleConsumptionChange.electric[0].increase < 1100 ? 'rotate(162)' : 'rotate(195deg)'};
`;
