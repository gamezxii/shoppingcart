import React, { useContext } from "react";
import "./checkout.css";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { URLAPI } from "../../services/api/until";
import { addComma } from "../../services/format";

const Checkout = () => {
  const { total, unit, removeitemAll, basket, hanldeLoader } = useContext(
    CartContext
  );

  const { me } = useContext(AuthContext);

  const hanldeCheckout = async (text) => {
    hanldeLoader();
    await axios
      .post(URLAPI, {
        type: "inserthistory",
        userid: me.id,
        products: text,
      })
      .then((res) => {
        const { status } = res.data;
        if (status === true) {
          setTimeout(() => {
            removeitemAll();
          }, 2000);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="checkout">
      <button onClick={() => removeitemAll()}>ลบ</button>
      <div className="checkout__summary">
        <div className="checkout__summary-text">
          รวมค่าสินค้า ({unit} สินค้า):
        </div>
        <div className="checkout__summary-total">฿{addComma(parseInt(total))}</div>
      </div>
      <div className="checkout__media">
        <div className="checkout__media-text">รวมทั้งหมด:</div>
        <div className="checkout__media-total">
          ฿{addComma(parseInt(total))}
        </div>
      </div>
      <div className="checkout__process">
        <button onClick={() => hanldeCheckout(basket)}>สั่งสินค้า</button>
      </div>
    </div>
  );
};

export default Checkout;
