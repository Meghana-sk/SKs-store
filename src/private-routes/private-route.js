import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const PrivateRoutes = () => {
  const { authState } = useAuth();
  if (authState.user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export { PrivateRoutes };
