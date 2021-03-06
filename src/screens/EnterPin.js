import React from "react";
import styled from "styled-components";

const EnterPinContainer = styled.div``;

const EnterPin = ({
  accounts,
  setActiveAccountId,
  inputStack,
  setInputStack,
  setActiveScreen,
}) => {
  const reversedStack = inputStack.join('').split('').reverse().join('');

  // Possible PIN match
  if (reversedStack.length === 4) {
    const matched = accounts.filter(a => a.pin === reversedStack);

    if (matched && matched.length > 0) {
      setActiveAccountId(matched[0].pin);
      // clear input stack
      setInputStack([]);
      // set active screen to balance
      setActiveScreen('BALANCE');
    }
  }

  return (
    <EnterPinContainer>
      <h1>Enter PIN:</h1>
      <div>{reversedStack}</div>
    </EnterPinContainer>
  )
};

export default EnterPin;
