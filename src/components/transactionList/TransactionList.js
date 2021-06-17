import React from "react";

function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-&#8377;400</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="plus">
          Cash <span>+&#8377;700</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </>
  );
}

export default TransactionList;
