// initial state
export const initialState = {
  transactions: [
    { id: 1, text: "House Rent", amount: -10000 },

    { id: 2, text: "Salary", amount: 32000 },
  ],
  savingsTarget: {
    loading: false,
    amount: 0,
    reachedTarget: false,
  },
};
