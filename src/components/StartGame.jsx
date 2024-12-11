import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="/images/dice.png" />{" "}
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  color: white;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #484242;
  }
`;
