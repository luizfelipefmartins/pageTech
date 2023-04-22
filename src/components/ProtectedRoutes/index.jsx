import { useContext } from "react";
import { AuthContext } from "../../providers/providers";
import { Navigate, Outlet } from "react-router-dom";
import { TechProvider } from "../../providers/techContext";

export const ProtectedRoutes = () => {
  const { loading } = useContext(AuthContext);
  const getUser = localStorage.getItem("@Kenziehub: user");
  const user = JSON.parse(getUser);

  if (!user) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <p className="loading">Buscansado Usuario...</p>;
  }

  return (
    <TechProvider>
      <Outlet />
    </TechProvider>
  );
};
