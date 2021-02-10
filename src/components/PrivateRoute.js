import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = (Component) => {
  const AuthRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
      return <Component />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return AuthRoute;
};

export default PrivateRoute;
