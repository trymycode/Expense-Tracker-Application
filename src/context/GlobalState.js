import React, { createContext, useReducer } from "react";
import AppReducer from "../reducer/AppReducer";
// initial state
const initialState = {
  transactions: [
    { id: 1, text: "House Rent", amount: -10000 },
    { id: 2, text: "Car Rent", amount: -3000 },
    { id: 3, text: "Grocery", amount: -5000 },
    { id: 4, text: "Medical", amount: -2000 },
    { id: 5, text: "Salary", amount: 32000 },
  ],
};
// global context
export const GlobalContext = createContext(initialState);

// provider component to provide initial state to a component

export const GlobalProvider = ({ children }) => {
  // include reducer which will update the state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload:  transaction});
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
