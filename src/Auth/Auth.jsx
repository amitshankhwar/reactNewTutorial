import React from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  let loggedIn = false;

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default Auth;
