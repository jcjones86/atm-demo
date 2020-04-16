import React from "react";
import styled from "styled-components";

const DepositContainer = styled.div``;

const Deposit = ({
  accounts,
  setAccounts,
  activeAccountId,
  inputStack,
  setInputStack,
  setActiveScreen,
}) => {
  // reverse stack and concatenate strings
  const input = inputStack.join('').split('').reverse().join('');

  if (inputStack.length > 0) {
    switch (inputStack[0]) {
      case 'K':
        const amount = parseInt(input.substr(0, input.length-1));

        // add to balance
        setAccounts(accounts => {
          const account = accounts.filter(a => a.pin === activeAccountId)[0];
          account.balance += amount;
          return accounts;
        });
        setInputStack([]);
        setActiveScreen('ENTER_PIN');
        break;
      case 'D':
        setInputStack(s => s.slice(1));
        break;
      default:
        break;
    }
  }

  return (
    <DepositContainer>
      <div>Enter amount to deposit:</div>
      <div>&nbsp;</div>
      <div>{inputStack.join('').split('').reverse().join('')}</div>
    </DepositContainer>
  );
};

export default Deposit;
