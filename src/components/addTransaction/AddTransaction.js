import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction, transactions } = useContext(GlobalContext);
  const [typeOfTransection, changedTypeOfTransection] = useState(null);
  const onSubmit = (e) => {
    if (typeOfTransection != null && amount) {
      e.preventDefault();
      let id = transactions.length + 1;
      let amountInNumber = amount && +amount;
      let amountWithType =
        typeOfTransection === "Incoming" ? amountInNumber : -amountInNumber;
      let transaction = { id, text, amount: amountWithType };
      addTransaction(transaction);
      setText("");
      setAmount(0);
    } else {
      alert("Please select type of transaction!");
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control mb-2 p-2">
          <label htmlFor="text">Describe Transaction</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control mb-2 p-2">
          <label htmlFor="amount"> Enter Amount</label>
          <p className="transaction-type mt-1">
            {" "}
            <label className="pr-1">
              <input
                type="radio"
                value="Incoming"
                className="pr-1 mr-2"
                checked={typeOfTransection === "Incoming"}
                onChange={() => changedTypeOfTransection("Incoming")}
              />
              Incoming
            </label>
            <label className="pr-1">
              <input
                type="radio"
                value="Outgoing"
                className="pr-1 mr-2"
                checked={typeOfTransection === "Outgoing"}
                onChange={() => changedTypeOfTransection("Outgoing")}
              />
              Outgoing
            </label>
          </p>
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
