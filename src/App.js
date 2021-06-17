import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Balance from "./components/balance/Balance";
import IncomeExpenses from "./components/income/IncomeExpenses";
import TransactionList from "./components/transactionList/TransactionList";
import AddTransaction from "./components/addTransaction/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
