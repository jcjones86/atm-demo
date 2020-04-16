import React from "react";
import styled from "styled-components";

const WithdrawContainer = styled.div``;

const Withdraw = ({
  accounts,
  setAccounts,
  activeAccountId,
  inputStack,
  setInputStack,
  setActiveScreen,
}) => {
  const [error, setError] = React.useState('');

  // reverse stack and concatenate strings
  const input = inputStack.join('').split('').reverse().join('');

  if (inputStack.length > 0 && !error) {
    switch (inputStack[0]) {
      case 'K':
        const amount = parseInt(input.substr(0, input.length-1));
        const account = accounts.filter(a => a.pin === activeAccountId)[0];

        if (amount > account.balance) {
          setError('Withdraw amount greater than balance');
          setTimeout(() => {
            setInputStack([]);
            setError('');
          }, 2000);
        } else if ((amount + account.withdrawn) > account.limit) {
          setError('Daily withdrawal limit reached');
          setTimeout(() => {
            setInputStack([]);
            setError('');
          }, 2000);
        } else {
          setAccounts(accounts => {
            const account = accounts.filter(a => a.pin === activeAccountId)[0];
            account.withdrawn += amount;
            account.balance -= amount;
            return accounts;
          });
          setInputStack([]);
          setActiveScreen('ENTER_PIN');
          break;
        }
        break;
      case 'D':
        setInputStack(s => s.slice(1));
        break;
      default:
        break;
    }
  }

  return (
    <WithdrawContainer>
      <div>Enter amount to withdraw:</div>
      <div>&nbsp;</div>
      <div>{inputStack.join('').split('').reverse().join('')}</div>
      <div>{error}</div>
    </WithdrawContainer>
  );
};

export default Withdraw;
