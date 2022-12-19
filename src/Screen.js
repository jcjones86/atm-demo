import React from "react";
import styled from "styled-components";
import EnterPin from "./screens/EnterPin";
import Balance from "./screens/Balance";
import Withdraw from "./screens/Withdraw";
import Deposit from "./screens/Deposit";

const ScreenContainer = styled.div`
  min-height: 225px;
`;

const Screen = ({
  accounts,
  setAccounts,
  activeAccountId,
  setActiveAccountId,
  inputStack,
  setInputStack,
}) => {
  const [
    activeScreen,
    setActiveScreen,
  ] = React.useState('ENTER_PIN');

  return (
    <ScreenContainer>
      <h1>Grocer's Credit Union</h1>
      {activeScreen === 'ENTER_PIN' && (
        <EnterPin
          accounts={accounts}
          activeAccountId={activeAccountId}
          setActiveAccountId={setActiveAccountId}
          inputStack={inputStack}
          setInputStack={setInputStack}
          setActiveScreen={setActiveScreen}
        />
      )}
      {activeScreen === 'BALANCE' && (
        <Balance
          accounts={accounts}
          activeAccountId={activeAccountId}
          setActiveAccountId={setActiveAccountId}
          inputStack={inputStack}
          setInputStack={setInputStack}
          setActiveScreen={setActiveScreen}
        />
      )}
      {activeScreen === 'WITHDRAW' && (
        <Withdraw
          accounts={accounts}
          setAccounts={setAccounts}
          activeAccountId={activeAccountId}
          setActiveAccountId={setActiveAccountId}
          inputStack={inputStack}
          setInputStack={setInputStack}
          setActiveScreen={setActiveScreen}
        />
      )}
      {activeScreen === 'DEPOSIT' && (
        <Deposit
          accounts={accounts}
          setAccounts={setAccounts}
          activeAccountId={activeAccountId}
          setActiveAccountId={setActiveAccountId}
          inputStack={inputStack}
          setInputStack={setInputStack}
          setActiveScreen={setActiveScreen}
        />
      )}
    </ScreenContainer>
  );
};

export default Screen;
