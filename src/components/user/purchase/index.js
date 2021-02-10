import React from "react";
import "./purchase.css";
import { sumtotal } from "../../../services/format";

const Purchase = (props) => {
  const {
    product_title,
    product_price,
    product_quantity,
    product_image,
  } = props.item;
  return (
    <div className="purchase" role="main">
      <div className="order-card__container">
        <div className="order-content-item__list">
          <div className="order_content-item__product">
            <div className="order_content-item__image">
              <img src={product_image} alt="" />
            </div>
            <div className="order_content-item__detail">
              <div className="order-content__item__name">{product_title}</div>
              <div className="order-content__item__variation">
                ตัวเลือกสินค้า: สีขาว
              </div>
              <div className="order-content__item__quantity">
                x {product_quantity}
              </div>
            </div>
            <div className="order_content-item__price">
              <div className="shopee-price--original">
                ราคาต่อชิ้น: ฿{product_price}
              </div>
              <div className="shopee-price--primary">
                รวมทั้งหมด: ฿{sumtotal(product_quantity, product_price)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
