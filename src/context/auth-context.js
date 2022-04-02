import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: "",
    token: "",
  });
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
