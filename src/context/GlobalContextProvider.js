import React, { createContext, useReducer } from "react";
import AppReducer from "../reducer/AppReducer";
import TargetSavingsReducer from "../reducer/TargetSavingsReducer";
import {initialState} from "./InitialState";

// global context
export const GlobalContext = createContext(initialState);

// provider component to provide initial state to a component

export const GlobalProvider = ({ children }) => {
  // include reducer which will update the state
  const [state, dispatchAppAction] = useReducer(AppReducer, initialState);
  const [targetState, dispatchTargetAction] = useReducer(TargetSavingsReducer, initialState);

  // Action creators
  function deleteTransaction(id) {
    dispatchAppAction({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction) {
    dispatchAppAction({ type: "ADD_TRANSACTION", payload:  transaction});
  }
  function addTarget(target){
    console.log("addTarget is called", target);
    let Target = +target;
    dispatchTargetAction({type:"ADD_TARGET_AMOUNT", payload:Target})
  }

  return (
    <GlobalContext.Provider
      value={{
        // transactions related
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        // savings 
        savingsTarget: targetState.savingsTarget,
        addTarget
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
