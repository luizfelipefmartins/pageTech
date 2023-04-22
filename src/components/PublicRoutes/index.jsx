import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/providers";


export const PublicRoutes = () => {
  const { user } = useContext(AuthContext);
  return !user ? <Outlet /> : <Navigate to="/home" />;
};
