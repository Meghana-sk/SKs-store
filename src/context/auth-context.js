import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  useEffect(() => {
    (async () => {})();
  }, []);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
