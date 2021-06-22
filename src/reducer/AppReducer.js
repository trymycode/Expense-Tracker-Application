export default (state, action) => {
  // debugger;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,

        transactions: state.transactions.filter((x) => {
          console.log("***", x, action);
          return x.id !== action.payload;
        }),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
