import React, { createContext, useContext, useState } from "react";

const AuthContex = createContext();

export function useAuthContext() {
  return useContext(AuthContex);
}

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  function activeUser(token) {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  }

  function removeUser() {
    setIsAuth(false);
    window.sessionStorage.removeItem("token");
    __APOLLO_CLIENT__.resetStore();
  }

  const value = {
    isAuth,
    activeUser,
    removeUser,
  };

  return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>;
}
