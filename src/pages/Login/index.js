import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [account, setAccount] = useState({ username: "test", password: "123456" });
  const history = useHistory();

  const { SignInWithpassword, isFetching } = useContext(AuthContext);

  const handleLogin = async () => {
    if (account.username !== "" && account.password !== "") {
      SignInWithpassword({ ...account, history });
    } else {
      alert("Plase input username or password !");
    }
  };
  return (
    <div className="login">
      {isFetching && (
        <div className="loader">
          <Loader />
        </div>
      )}
      <div className="login__container">
        <p>เข้าสู่ระบบ</p>
        <div className="input">
          <input
            type="text"
            value={account.username}
            onChange={(text) =>
              setAccount({ ...account, username: text.target.value })
            }
          />
          <input
            type="password"
            value={account.password}
            onChange={(text) =>
              setAccount({ ...account, password: text.target.value })
            }
          />
        </div>
        <button className="btn-login" onClick={handleLogin}>
          เข้าสู่ระบบ
        </button>
        <div className="registers">
          <Link to="/register">สมัครสมาชิก</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
