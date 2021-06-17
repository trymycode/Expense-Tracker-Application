import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Balance from "./components/balance/Balance";
import IncomeExpenses from "./components/income/IncomeExpenses";
import TransactionList from "./components/transactionList/TransactionList";
import AddTransaction from "./components/addTransaction/AddTransaction";
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
