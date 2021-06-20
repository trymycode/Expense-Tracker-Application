export default (state, action) => {
    switch (action.type) {
      case "ADD_TARGET_AMOUNT":
        return {
          ...state,
          savingsTarget: action.payload
        };
       
      default:
        return state;
    }
  };
  