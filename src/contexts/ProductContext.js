import React, { createContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";
import { products } from "../services/api/products";

export const ProductContext = createContext();

const initialState = {
  data: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const dofeed = async () => {
    dispatch({
      type: "isSuccess",
      payload: products,
    });
  };

  const handleSearch = (payload) => {
    dispatch({
      type: "isSeraching",
      payload: payload,
    });
  };

  const contextValue = {
    ...state,
    dofeed,
    handleSearch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
