import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false, //if user is logged in or not
  login: (token) => {}, //function that changes isLoggedIn state
  logout: () => {},
});
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};
export const AuthContextProvider = (props) => {
  // const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token; //if token is not empty this will return true , if empty return false

  const LogoutHandler = () => {
    setToken(null);
    // localStorage.removeItem("token");
  };
  const LoginHandler = (token) => {
    setToken(token);
    // localStorage.setItem("token", token);

    // const remainingTime = calculateRemainingTime(expirationTime);

    // setTimeout(LogoutHandler, remainingTime);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: LoginHandler,
    logout: LogoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
