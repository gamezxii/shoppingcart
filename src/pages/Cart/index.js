import React, { useContext } from "react";
import Product from "./Product";
import "./cart.css";
import { CartContext } from "../../contexts/CartContext";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import shoppingbag from "../../services/assets/shoppingbag.png";
import Checkout from "../../components/Checkout";
import Loader from "../../components/Loader";

const Cart = () => {
  const { basket, isLoading } = useContext(CartContext);
  return (
    <div className="cart">
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : null}
      <Link to="/">
        <div className="cart__tohome ondisplay">
          <div>
            <BsArrowLeftShort className="icon" size={36} />
            <span>รถเข็น</span>
          </div>
        </div>
      </Link>
      {basket.length === 0 && (
        <Link to="/">
          <div className="cart__empty">
            <img src={shoppingbag} alt="" />
            <p>ถึงเค้าจะไม่ว่าง แต่เราว่างอยู่นะ!</p>
            <button>ช็อปปิ้งกันเลย</button>
          </div>
        </Link>
      )}
      {basket.length > 0 && (
        <div className="cart__items">
          {basket.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className="footer">
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default Cart;
