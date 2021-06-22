import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import Delete from "./../../images/delete-icon.svg";
export const Transaction = ({ item }) => {
  let sign = item.amount < 0 ? "-" : "+";
  let class_name = item.amount < 0 ? "minus" : "plus";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={class_name}>
      {item.text}{" "}
      <span>
        {sign}&#8377;{Math.abs(item.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(item.id)}>
        <img src={Delete} alt={"delete"}/>
      </button>
    </li>
  );
};
