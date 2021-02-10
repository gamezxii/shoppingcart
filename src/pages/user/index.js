import React, { useState, useEffect, useContext } from "react";
import "./homeuser.css";

import Purchase from "../../components/user/purchase";
import SidebarUser from "../../components/user/Sidebar";
import Profile from "../../components/user/account/Profile";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import PrivateRoute from "../../components/PrivateRoute";
import { URLAPI } from "../../services/api/until";

const Homeuser = () => {
  const { me } = useContext(AuthContext);
  const pathUrl = ["/user/purchase", "/user/account/profile", "changepassword"];

  const location = useLocation();

  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      await axios
        .post(URLAPI, {
          type: "queryWhereid",
          userid: me.id,
        })
        .then((res) => {
          const { status, history } = res.data;
          if (status === true) setHistoryData(history);
        })
        .catch((error) => console.log(error));
    };

    fetchHistory();
  }, []);

  return (
    <div className="homeuser">
      <div className="home__container">
        <SidebarUser />

        <div className="purchase">
          {location.pathname === pathUrl[0] && historyData.length > 0
            ? historyData.map((item) => <Purchase key={item.id} item={item} />)
            : []}
          {location.pathname === pathUrl[1] && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(Homeuser);
