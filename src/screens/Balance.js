import React from "react";
import styled from "styled-components";

const CurrencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const BalanceContainer = styled.div``;

const Balance = ({
  accounts,
  activeAccountId,
  setActiveAccountId,
  inputStack,
  setInputStack,
  setActiveScreen,
}) => {
  const activeAccount = activeAccountId && accounts.filter(a => a.pin === activeAccountId)[0];

  switch (inputStack.join('')) {
    case '1':
      setActiveScreen('WITHDRAW');
      setInputStack([]);
      break;
    case '2':
      setActiveScreen('DEPOSIT');
      setInputStack([]);
      break;
    case '3':
      setActiveScreen('ENTER_PIN');
      setActiveAccountId();
      setInputStack([]);
      break;
    default:
      break;
  }

  return (
    <BalanceContainer>
      <div>Balance: {CurrencyFormatter.format(activeAccount.balance)} </div>
      <div>Limit: {CurrencyFormatter.format(activeAccount.limit)}</div>
      <div>Withdrawn today: {CurrencyFormatter.format(activeAccount.withdrawn)}</div>
      <div>&nbsp;</div>
      <div>Withdraw: 1</div>
      <div>Deposit: 2</div>
      <div>Home: 3</div>
    </BalanceContainer>
  );
};

export default Balance;
