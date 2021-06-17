import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import {Transaction} from "../singleTransaction/Transaction";
function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions && transactions.map((item,i) => {
          return (
            <Transaction item={item} key={i}/>
          );
        })}
      </ul>
    </>
  );
}

export default TransactionList;
