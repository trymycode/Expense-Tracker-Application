import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { moneyFormatter } from "./../../utility/utility";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts =
    transactions && transactions.map((transaction) => transaction.amount);

  const income =
    amounts &&
    amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts &&
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1;
  return (
    <div className="inc-exp-container">
      <div>
        <label>Income</label>
        <p className="money plus">&#8377;{moneyFormatter(income)}</p>
      </div>
      <div>
        <label>Expense</label>
        <p className="money minus">&#8377;{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
