import React, { useContext } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Balance from "./components/balance/Balance";
import IncomeExpenses from "./components/income/IncomeExpenses";
import TransactionList from "./components/transactionList/TransactionList";
import AddTransaction from "./components/addTransaction/AddTransaction";
import { GlobalProvider } from "./context/GlobalContextProvider";
import TargetSavings from "./components/targetSavings/TargetSavings";
import { GlobalContext } from "./context/GlobalContextProvider";
function App() {
  return (
    <div className="container-fluid mt-2">
      <GlobalProvider>
        <Header />
        <div className="container">
          <section className="section1">
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </section>

          <section className="section2">
            <Balance />
            <TargetSavings />
          </section>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
