import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdLibraryBooks } from "react-icons/md";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthContext";
const SidebarUser = () => {
  const { Signout } = useContext(AuthContext);
  return (
    <div className="list__menu">
      <Link to="">
        <div className="homeuser__brief">
          <div className="homeuser__avatar">
            <img
              className="homeuser__avatar_img"
              src="https://image.flaticon.com/icons/png/512/147/147144.png"
              alt=""
            />
          </div>
          <p className="homeuser__name">Gamezxii</p>
        </div>
      </Link>
      <Link className="homeuser__menu" to="/user/account/profile">
        <FaUserAlt />
        <p>บัญชีของฉัน</p>
      </Link>
      <Link className="homeuser__menu" to="/user/purchase">
        <MdLibraryBooks />
        <p>การซื้อของฉัน</p>
      </Link>
      <Link className="homeuser__menu" to="/login" onClick={Signout}>
        <FaSignOutAlt />
        <p>ออกจากระบบ</p>
      </Link>
    </div>
  );
};

export default SidebarUser;
