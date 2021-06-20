import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { moneyFormatter } from "./../../utility/utility";

function Balance() {
  const { transactions, savingsTarget } = useContext(GlobalContext);

  const amounts =
    transactions && transactions.map((transaction) => transaction.amount);

  const total = amounts && amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>&#8377;{moneyFormatter(total)}</h1>
    </>
  );
}

export default Balance;
