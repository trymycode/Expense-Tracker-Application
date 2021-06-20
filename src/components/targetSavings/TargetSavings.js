import React, { useContext , useState} from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { moneyFormatter } from "./../../utility/utility";
function TargetSavings() {
  const { savingsTarget,addTarget } = useContext(GlobalContext);
  const [amount, setTargetAmount] = useState(0);
 
  return (
    <>
      <h4>Target Savings</h4>
      <h1>&#8377;{amount}</h1>
      <div className="form-control">
        <input
          type="number"
          value={amount}
          onChange={(e) => setTargetAmount(e.target.value)}
          placeholder="Enter new target amount..."
        />
        <button className="btn" onClick={()=>addTarget(amount)}>Set Target</button>
      </div>
    </>
  );
}

export default TargetSavings;
