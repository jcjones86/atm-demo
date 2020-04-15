import React from "react";
import styled from "styled-components";
import EnterPin from "./screens/EnterPin";

const ScreenContainer = styled.div`
  min-height: 400px;
`;

const Screen = ({
  accounts,
  activeAccount,
  setActiveAccount,
  inputStack,
  setInputStack,
}) => {
  return (
    <ScreenContainer>
      <h1>Grocer's Credit Union</h1>
      <EnterPin
        accounts={accounts}
        activeAccount={activeAccount}
        setActiveAccount={setActiveAccount}
        inputStack={inputStack}
        setInputStack={setInputStack}
      />
    </ScreenContainer>
  );
};

export default Screen;
