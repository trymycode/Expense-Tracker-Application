import React, { useContext } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Balance from "./components/balance/Balance";
import IncomeExpenses from "./components/income/IncomeExpenses";
import TransactionList from "./components/transactionList/TransactionList";
import AddTransaction from "./components/addTransaction/AddTransaction";
import { GlobalProvider } from "./context/GlobalContextProvider";
import TargetSavings from "./components/targetSavings/TargetSavings";

function App() {
  
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <section>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </section>

        <section className="target-savings">
          <TargetSavings/>
        </section>
      </div>
    </GlobalProvider>
  );
}

export default App;
