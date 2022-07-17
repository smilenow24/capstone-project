import styled from 'styled-components';

export default function AnimateStartDisplay() {
  return (
    <AnimationContainer>
      <EnergyPowerBall></EnergyPowerBall>
      <span>--- Loading App... ---</span>
    </AnimationContainer>
  );
}

const AnimationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: -500px;
  left: 50%;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding-top: 10vh;
    color: white;
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
  animation: animateLoading 4s linear infinite;

  @keyframes animateLoading {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
