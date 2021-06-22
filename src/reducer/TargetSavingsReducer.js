export default (state, action) => {
  switch (action.type) {
    case "ADD_TARGET_AMOUNT":
      return {
        ...state,
        savingsTarget: { ...state.savingsTarget, amount: action.payload },
      };
    case "LOADING":
      return {
        ...state,
        savingsTarget: { ...state.savingsTarget, loading: action.payload },
      };

    default:
      return state;
  }
};
