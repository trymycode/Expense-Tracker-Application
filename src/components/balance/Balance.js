import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { moneyFormatter } from "./../../utility/utility";
import "./balance.scss";
function Balance() {
  const { transactions, savingsTargetAmount } = useContext(GlobalContext);

  const amounts =
    transactions && transactions.map((transaction) => transaction.amount);

  const total = amounts && amounts.reduce((acc, item) => (acc += item), 0);
  let reachedTarget = total >= savingsTargetAmount ? true : false;
  return (
    <div className="mt-2 ">
      <h4 className="balance-title mb-2">Your Current Balance</h4>
      <h1>&#8377;{moneyFormatter(total)}</h1>

      {savingsTargetAmount != 0 && reachedTarget && (
        <div class="alert alert-success mt-2" role="alert">
          Well done!
          <br />
          You have successfully reached the target savings.
        </div>
      )}
      {savingsTargetAmount === 0 && (
        <div class="alert alert-info mt-2" role="alert">
          Set a savings target value.
        </div>
      )}
      {savingsTargetAmount != 0 && savingsTargetAmount > total && (
        <div class="alert alert-primary mt-2" role="alert">
          You have to save Rs. {savingsTargetAmount - total} to reach the target
          savings.
        </div>
      )}
    </div>
  );
}

export default Balance;
