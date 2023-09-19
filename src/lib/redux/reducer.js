const initState = {
  accessToken: "",
  userFilter: {
    _id: "",
    username: "",
    email: "",
    admin: true,
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "setUser":
      const user = {
        ...state,
        ...action.payload,
      };
      return user;
    default:
      return state;
  }
};

export { rootReducer };
