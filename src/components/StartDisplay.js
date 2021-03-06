import styled from 'styled-components';

export default function AnimateStartDisplay() {
  return (
    <MainWrapper>
      <SectionWrapper>
        <MainHeader>Energy-Budget-App</MainHeader>
        <AnimationContainer>
          <EnergyPowerBall></EnergyPowerBall>
          <span>Loading App...</span>
        </AnimationContainer>
      </SectionWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 95vh;
  max-width: 65vh;
  background: #0d2947;
`;

const MainHeader = styled.h1`
  margin-top: 20vh;
  color: #d7dcde;
  font-size: 70px;
  padding-left: 3vh;
  padding-right: 3vh;
`;

const AnimationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vh;
  height: 10vh;
  margin-bottom: 30vh;

  span {
    padding-top: 16vh;
    font-size: 1rem;
    color: white;
    animation: animate 3s linear;
    animation-iteration-count: 4;

    @keyframes animate {
      0% {
        transform: scale(0.5);
      }
      50% {
        transform: scale(0.7);
      }
      100% {
        transform: scale(0.5);
      }
    }
  }
`;

const EnergyPowerBall = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  border-radius: 999px;
  border: 8px solid #24ecdd;
  border-top: 4px solid blue;
  box-shadow: 1 9 8 1px #24ecdd, 4 2 8 1px #24ecdd;
  animation: animateLoading 4s linear;
  animation-iteration-count: 3;

  @keyframes animateLoading {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
