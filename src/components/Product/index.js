import React, { useContext } from "react";
import "./product.css";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { addComma } from "../../services/format";

const Product = (props) => {
  const { addProduct, basket, increase, setPopup } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { id, image, title, price } = props;
  const history = useHistory();

  const checkproduct = (product) => {
    return basket.find((item) => item.id === product);
  };
  const onClickfunction = () => {
    if (isAuthenticated) {
      addProduct({ id, image, title, price });
      setTimeout(() => {
        setPopup();
      }, 2500);
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="product">
      <img className="img-fuild" src={image} alt="" />
      <p className="product__title">{title}</p>
      <h3 className="product__price">฿{addComma(parseInt(price))}</h3>
      <div className="product__textright">
        {/* <a className="" href="/"></a> */}
        {!checkproduct(id) && (
          <button onClick={onClickfunction} className="btn-product">
            Add to cart
          </button>
        )}
        {!!checkproduct(id) && (
          <button onClick={() => increase(id)} className="btn-product">
            Add more
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
