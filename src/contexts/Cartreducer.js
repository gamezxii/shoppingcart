const sumItem = (basket) => {
  return basket
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);
};

const itemCount = (basket) => {
  return basket?.reduce((total, product) => total + product.quantity, 0);
};

export const CartReducer = (state, action) => {
  //console.log(`state => this is ${action}`);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.basket.find((item) => item.id === action.item.id)) {
        state.basket.push({
          ...action.item,
          quantity: 1,
        });
      }

      return {
        ...state,
        basket: [...state.basket],
        showpopup: true,
        total: sumItem(state.basket),
        unit: itemCount(state.basket),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        basket: [...state.basket.filter((item) => item.id !== action.item)],
        total: sumItem(state.basket.filter((item) => item.id !== action.item)),
        unit: itemCount(state.basket.filter((item) => item.id !== action.item)),
      };

    case "INCREASE":
      let indexItem = state.basket.findIndex((item) => item.id === action.item);
      state.basket[indexItem].quantity++;

      return {
        ...state,
        total: sumItem(state.basket),
        unit: itemCount(state.basket),
        basket: [...state.basket],
      };

    case "DECREASE":
      let decreeaseIndex = state.basket.findIndex(
        (item) => item.id === action.item
      );
      state.basket[decreeaseIndex].quantity--;

      return {
        ...state,
        total: sumItem(state.basket),
        unit: itemCount(state.basket),
        basket: [...state.basket],
      };

    case "CLEAR":
      return {
        ...state,
        basket: [],
        total: sumItem([]),
        unit: itemCount([]),
        isLoading: false,
      };

    case "SETPOPUP":
      return {
        ...state,
        showpopup: false,
      };

    case "ISLOADER":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
