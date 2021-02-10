export const ProductReducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "isFetching":
      return {
        ...state,
        isFetching: true,
        isSuccess: false,
        isError: false,
      };

    case "isSuccess":
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case "isSeraching":
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
