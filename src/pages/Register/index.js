import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import { URLAPI } from "../../services/api/until.js";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [register, setRegister] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    tel: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    if (
      register.username !== "" &&
      register.password !== "" &&
      register.firstname !== "" &&
      register.lastname !== "" &&
      register.tel !== "" &&
      register.address !== ""
    ) {
      setIsLoading(true);
      await axios
        .post(URLAPI, {
          type: "register",
          ...register,
        })
        .then((response) => {
          const { message, status } = response.data;
          if (status === true) {
            setIsLoading(false);
            alert(message);
            history.push("/login");
          }
        })
        .catch((error) => console.log(error));
      console.log(register);
    } else {
      alert("Please input filed");
    }
  };

  return (
    <div className="register">
      {isLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      <div className="register__container">
        <h2>สมัครสมาชิก</h2>
        <div className="form__register">
          <div className="form__input">
            <input
              type="text"
              placeholder="Username"
              value={register.username}
              onChange={(text) =>
                setRegister({ ...register, username: text.target.value })
              }
            />
          </div>
          <div className="form__input">
            <input
              type="password"
              placeholder="Password"
              value={register.password}
              onChange={(text) =>
                setRegister({ ...register, password: text.target.value })
              }
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="First Name"
              value={register.firstname}
              onChange={(text) =>
                setRegister({ ...register, firstname: text.target.value })
              }
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="Lastname Name"
              value={register.lastname}
              onChange={(text) =>
                setRegister({ ...register, lastname: text.target.value })
              }
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="tel"
              value={register.tel}
              onChange={(text) =>
                setRegister({ ...register, tel: text.target.value })
              }
            />
          </div>
          <div className="form__input">
            <textarea
              rows="4"
              placeholder="Address..."
              value={register.address}
              onChange={(text) =>
                setRegister({ ...register, address: text.target.value })
              }
            ></textarea>
          </div>
          <button className="button_register" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
