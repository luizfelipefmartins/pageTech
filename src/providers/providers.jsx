import { createContext, useEffect, useState } from "react";
import { api } from "../service/api";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openMOdal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub: token"));

    const loadUser = async () => {
      try {
        if (!token) return;
        const { sub } = jwtDecode(token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const signIn = async (data) => {
    const response = await api.post("/sessions", data);
    const { user: userResponse, token: tokenResponse } = response.data;

    localStorage.setItem("@Kenziehub: token", JSON.stringify(tokenResponse));
    localStorage.setItem("@Kenziehub: user", JSON.stringify(userResponse));

    api.defaults.headers.common.Authorization = `Bearer ${tokenResponse}`;

    const toNavigate = location.state?.pathname || "/home";

    setUser(userResponse);
    navigate(toNavigate);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        loading,
        isOpen,
        setIsOpen,
        openMOdal,
        closeModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
