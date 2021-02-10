import React, { useContext } from "react";
import "./product.css";
import { BsFillTrashFill, BsFillPlusCircleFill } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import { addComma } from "../../services/format";

const Product = (props) => {
  const { id, title, image, price, quantity } = props;
  const { increase, decrease, removeItem } = useContext(CartContext);
  return (
    <div className="product__cart">
      <div className="product__image">
        <img src={image} alt="" />
      </div>

      <div className="product__list">
        <p className="text__right">{title}</p>
        <p className="text__right">Price: ฿{addComma(parseInt(price))}</p>
      </div>

      <div className="product__qty">
        <p>Qty: {quantity}</p>
      </div>

      <div className="product__btn">
        <button onClick={() => increase(id)} className="button_increase">
          <BsFillPlusCircleFill color="white" />{" "}
        </button>
        {quantity > 1 && (
          <button onClick={() => decrease(id)} className="button_decrease">
            <BsFillTrashFill />{" "}
          </button>
        )}

        {quantity === 1 && (
          <button onClick={() => removeItem(id)} className="button_decrease">
            <BsFillTrashFill />{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
