import React from "react";
import Atm from "./Atm";

const accounts = [
  {
    pin: "0000",
    balance: 1500,
    limit: 500,
    withdrawn: 0,
  },
  {
    pin: "1234",
    balance: 5000,
    limit: 750,
    withdrawn: 0,
  },
  {
    pin: "9999",
    balance: 15000,
    limit: 1500,
    withdrawn: 0,
  }
];

const App = () => (
  <div className="App">
    <Atm accounts={accounts} />
  </div>
);

export default App;
