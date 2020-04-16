import React from "react";
import styled from "styled-components";

const CurrencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const DepositContainer = styled.div``;

const Deposit = ({
  accounts,
  activeAccountId,
  setActiveAccountId,
  inputStack,
  setInputStack,
  setActiveScreen,
}) => {
  const activeAccount = activeAccountId && accounts.filter(a => a.pin === activeAccountId)[0];

  return (
    <DepositContainer>
      <div>Enter amount to deposit:</div>
      <div>&nbsp;</div>
      <div>{inputStack.join('').split('').reverse().join('')}</div>
    </DepositContainer>
  );
};

export default Deposit;
