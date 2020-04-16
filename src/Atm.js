import React from "react";
import styled from "styled-components";
import Screen from "./Screen";
import Controls from "./Controls";

const Container = styled.div`
  background-color: #000;
  color: #0c0;
  font-family: monospace;
  font-size: 18px;
  min-height: 500px;
  margin: 20px auto;
  padding: 10px;
  text-align: center;
  width: calc(100vw - 120px);
`;

const Atm = ({ accounts }) => {
  const [
    accountBalances,
    setAccountBalances,
  ] = React.useState(accounts);

  const [
    inputStack,
    setInputStack,
  ] = React.useState([]);

  const [
    activeAccountId,
    setActiveAccountId,
  ] = React.useState();

  const inputHandler = (char) => {
    // Delete last character entered
    if (char === 'D') {
      setInputStack(inputStack => inputStack.slice(1));
    } else {
      setInputStack(inputStack => [char, ...inputStack]);
    }
  };

  return (
    <Container>
      <Screen
        accounts={accountBalances}
        activeAccountId={activeAccountId}
        setActiveAccountId={setActiveAccountId}
        inputStack={inputStack}
        setInputStack={setInputStack}
      />
      <Controls inputHandler={inputHandler} />
    </Container>
  );
};

export default Atm;
