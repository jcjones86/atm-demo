import React from "react";
import styled from "styled-components";

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin: 10px auto;
`;

const Button = styled.button`
  background-color: #000;
  border: 2px solid #0c0;
  color: #0c0;
  font-size: 18px;
  padding: 5px;
  margin: 0 10px;
  width: 80px;
  outline: none;

  &:active {
    background-color: #0c0;
    color: #000;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Controls = ({ inputHandler }) => {
  return (
    <ControlsContainer>
      <Row>
        <Button onClick={() => inputHandler('1')}>1</Button>
        <Button onClick={() => inputHandler('2')}>2</Button>
        <Button onClick={() => inputHandler('3')}>3</Button>
      </Row>
      <Row>
        <Button onClick={() => inputHandler('4')}>4</Button>
        <Button onClick={() => inputHandler('5')}>5</Button>
        <Button onClick={() => inputHandler('6')}>6</Button>
      </Row>
      <Row>
        <Button onClick={() => inputHandler('7')}>7</Button>
        <Button onClick={() => inputHandler('8')}>8</Button>
        <Button onClick={() => inputHandler('9')}>9</Button>
      </Row>
      <Row>
        <Button onClick={() => inputHandler('D')}>DEL</Button>
        <Button onClick={() => inputHandler('0')}>0</Button>
        <Button onClick={() => inputHandler('K')}>OK</Button>
      </Row>
    </ControlsContainer>
  );
};

export default Controls;
