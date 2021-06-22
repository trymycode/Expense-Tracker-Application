import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { moneyFormatter } from "./../../utility/utility";
import "./targetSavings.scss";
function TargetSavings() {
  const { savingsTargetAmount, addTarget, controlLoader } =
    useContext(GlobalContext);
  const [amount, setTargetAmount] = useState(0);

  const changevalue = (e) => {
    console.log("changevalue", e.target.value);
    setTargetAmount(e.target.value);
  };
  const onSubmit = () => {
    addTarget(amount);
    setTargetAmount(0);
  };
  return (
    <>
      <label className="target-savings-title">Target Savings</label>
      <h1>
        &#8377;{" "}
        {controlLoader
          ? "LOADING..."
          : savingsTargetAmount && moneyFormatter(savingsTargetAmount)}
      </h1>
      <div className="form-control mt-2">
        <label>Enter new target amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => changevalue(e)}
          placeholder="Enter new target amount..."
        />
        <button className="btn" onClick={onSubmit}>
          Set Target
        </button>
      </div>
    </>
  );
}

export default TargetSavings;
