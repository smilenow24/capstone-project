import styled from "styled-components";
//import { messages } from "../db";

export default function Header() {
    //const [messages, setMessages] = useState(null)
    //const giveMessage = () => setMessages(db[message.id=])
  return (
    <Top>
      <Smile>
        <Eye>
          <div></div>
          <div></div>
        </Eye>
        <Mouth />
      </Smile>
      <Speechbubble>
        <div>Hallo</div>
      </Speechbubble>
    </Top>
  );
}

/*function handleMessage () => {

    function UserMessage(updateInput.value) {
        return <h1>{(message.id[1])}</h1>;
      }
      
      function UserMessage(updateInput.value) {
        return <h1>{(message.id=[2])}</h1>;
      }

    function Message(updateInput.value) {
        if (updateInput) {
          return <UserMessage />;
        }
        return <UserMessage />;
      }
};*/



const Top = styled.section`
  height: 50px;
  width: 100%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
`;

const Speechbubble = styled.article`
  height: 60px;
  width: 150px;
  background-color: grey;
  position: relative;
  top: 30px;
  left: 130px;
  border-radius: 111px;

  div {
    width: 0px;
    height: 0px;
    border-top: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid grey;
    position: relative;
    top: -10px;
    color: white;
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
