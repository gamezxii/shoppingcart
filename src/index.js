import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartContextProvider from "./contexts/CartContext";
import ProductContextProvider from "./contexts/ProductContext";
import AuthContextProvider from "./contexts/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </AuthContextProvider>,

  document.getElementById("root")
);
