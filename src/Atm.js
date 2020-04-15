import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #0c0;
  font-family: monospace;
  font-size: 16px;
  min-height: 500px;
  margin: 20px auto;
  padding: 10px;
  text-align: center;
  width: calc(100vw - 120px);
`;

const Atm = ({ accounts }) => {
  return (
    <Container>
      <h1>ATM Interface</h1>
    </Container>
  );
};

export default Atm;
