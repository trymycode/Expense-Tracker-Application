import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction, transactions } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    let key = transactions.length + 1;
    let transaction = { key, text, amount: +amount };
    addTransaction(transaction);
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control mb-2 p-2">
          <label htmlFor="text">Describe Expense</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control mb-2 p-2">
          <label htmlFor="amount">
            Amount (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
