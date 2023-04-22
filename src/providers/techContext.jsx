import { createContext, useContext, useState } from "react";
import { api } from "../service/api";
import { toast } from "react-toastify";
import { AuthContext } from "./providers";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, closeModal } = useContext(AuthContext);
  const [techs, setTechs] = useState(user.techs);
  const [modal, setModal] = useState(false);

  const submit = async (newTech) => {
    try {
      const response = await api.post("/users/techs", newTech);
      toast.success("Tecnologia Cadastrada com Sucesso");
      setTechs([...techs, response.data]);
      closeModal();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateTech = async (techId, data) => {
    try {
      const response = await api.put(`/users/techs/${techId}`, data);
      const newFilter = techs.filter((tech) => tech.id !== techId)
      setTechs([...newFilter, response.data])
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteTech = async (techId) => {
    try {
      const response = await api.delete(`/users/techs/${techId}`);
      const newListTech = techs.filter((tech) => tech.id !== techId);
      toast.success("Tecnologia deletada com Sucesso");
      setTechs(newListTech);
      setModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <TechContext.Provider
      value={{ submit, techs, deleteTech, modal, setModal, updateTech }}
    >
      {children}
    </TechContext.Provider>
  );
};
