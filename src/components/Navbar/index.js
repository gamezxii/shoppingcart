import React, { useContext } from "react";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import store from "../../services/assets/store.png";

const Navbar = () => {
  const { basket } = useContext(CartContext);
  const { isAuthenticated, me, Signout } = useContext(AuthContext);
  return (
    <div id="myHeader" className="header">
      <div className="header__login">
        {!isAuthenticated && (
          <div className="header-width-login">
            <Link to="/register">สมัครสมาชิกใหม่</Link>
            <div className="navbar__link-separator"></div>
            <Link to="/login">เข้าสู่ระบบ</Link>
          </div>
        )}
        {isAuthenticated && (
          <div className="header-width-login__pass">
            <div className="header__avatar">
              <img
                src="https://image.flaticon.com/icons/png/512/147/147144.png"
                alt=""
              />
              <span>{me.username}</span>
              <div className="hide">
                <div>
                  <Link to="/user/account/profile">บัญชีของฉัน</Link>
                </div>
                <div>
                  <Link to="/user/purchase">การซื้อ</Link>
                </div>
                <div>
                  <Link to="/login" onClick={Signout}>
                    ออกจากระบบ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header-width-search">
        <Link to="/">
          <img className="header__logo" src={store} alt="" />
        </Link>

        <div className="header__end">
          <Link to="/cart">
            <div className="header__optionBasket">
              <span className="header__countbasket">{basket.length}</span>
              <FaShoppingCart className="header__icon" />
            </div>
          </Link>
          <Link to="/user/account/profile">
            <div className="avatar">
              <img
                src="https://image.flaticon.com/icons/png/512/147/147144.png"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
