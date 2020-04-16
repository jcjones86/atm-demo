import React from "react";
import styled from "styled-components";

const CurrencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const WithdrawContainer = styled.div``;

const Withdraw = ({
  accounts,
  activeAccountId,
  setActiveAccountId,
  inputStack,
  setInputStack,
  setActiveScreen,
}) => {
  const activeAccount = activeAccountId && accounts.filter(a => a.pin === activeAccountId)[0];

  return (
    <WithdrawContainer>
      <div>Enter amount to withdraw:</div>
      <div>&nbsp;</div>
      <div>{inputStack.join('').split('').reverse().join('')}</div>
    </WithdrawContainer>
  );
};

export default Withdraw;
