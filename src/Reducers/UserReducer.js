const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "REMOVE_USER":
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
