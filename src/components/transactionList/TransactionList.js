import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { Transaction } from "../singleTransaction/Transaction";
function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h2>History</h2>
      <ul className="list">
        {transactions &&
          transactions.map((item, i) => {
            return <Transaction item={item} key={i} />;
          })}
      </ul>
    </>
  );
}

export default TransactionList;
