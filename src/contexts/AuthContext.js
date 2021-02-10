import React, { createContext, useReducer } from "react";
import { Authreducer } from "./Authreducer";
import axios from "axios";
import { URLAPI } from "../services/api/until";

export const AuthContext = createContext();

const initialState = {
  me: null,
  isAuthenticated: false,
  isFetching: false,
  isError: false,
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Authreducer, initialState);

  const setStateToFetching = () => {
    dispatch({ type: "LOGIN_FETCHING" });
  };

  const setStateToError = (payload) => {
    dispatch({ type: "LOGIN_FAILED", payload });
  };

  const setStateToSuceess = (payload) => {
    dispatch({ type: "LOGIN_SUCCESS", payload });
  };

  const setStateToSignout = () => {
    dispatch({ type: "LOGIN_SIGNOUT" });
  };

  const SignInWithpassword = async ({ username, password, history }) => {
    setStateToFetching();
    await axios
      .post(URLAPI, {
        type: "login",
        username: username,
        password: password,
      })
      .then((res) => {
        const { message, status } = res.data;
        if (status === true) {
          setStateToSuceess(message);
          history.push("/");
        } else {
          setStateToError(message);
          alert(message);
        }
      })
      .catch((error) => setStateToError(error));
  };

  const Signout = () => {
    setStateToSignout();
  };

  const authValue = {
    ...state,
    SignInWithpassword,
    Signout,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
