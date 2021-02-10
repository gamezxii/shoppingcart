import React, { createContext, useReducer } from "react";
import { CartReducer } from "./Cartreducer";

export const CartContext = createContext();

const initialState = {
  basket: [],
  showpopup: false,
  total: 0,
  unit: 0,
  isLoading: false,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({
      type: "ADD_ITEM",
      item: payload,
    });
  };

  const removeItem = (payload) => {
    dispatch({
      type: "REMOVE_ITEM",
      item: payload,
    });
  };

  const increase = (payload) => {
    dispatch({
      type: "INCREASE",
      item: payload,
    });
  };

  const decrease = (payload) => {
    dispatch({
      type: "DECREASE",
      item: payload,
    });
  };

  const setPopup = () => {
    dispatch({
      type: "SETPOPUP",
    });
  };

  const removeitemAll = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  const hanldeLoader = () => {
    dispatch({
      type: "ISLOADER",
    });
  };

  

  const contextValuse = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeItem,
    setPopup,
    removeitemAll,
    hanldeLoader,
  };

  return (
    <CartContext.Provider value={contextValuse}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
