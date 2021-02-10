export const Authreducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_FETCHING":
      return {
        ...state,
        isFetching: true,
        isError: false,
        isAuthenticated: false,
        me: null,
      };

    case "LOGIN_FAILED":
      return {
        ...state,
        isFetching: false,
        isError: true,
        isAuthenticated: false,
        me: action.payload,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: false,
        isAuthenticated: true,
        me: action.payload,
      };

    case "LOGIN_SIGNOUT":
      return {
        ...state,
        isFetching: false,
        isError: false,
        isAuthenticated: false,
        me: null,
      };

    default:
      return state;
  }
};
