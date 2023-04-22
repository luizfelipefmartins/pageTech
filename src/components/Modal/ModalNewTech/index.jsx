import { useContext } from "react";
import { FormNewTech } from "../../FormNewTech";
import { AuthContext } from "../../../providers/providers";
import { StyleModalNewTech } from "./style";

export const ModalNewTech = () => {
  const { closeModal } = useContext(AuthContext);

  return (
    <StyleModalNewTech role="dialog">
      <div className="container__modal">
        <div className="modal__header">
          <h3>Cadastrar Tecnologia</h3>
          <button className="close__btn" onClick={() => closeModal()}>
            X
          </button>
        </div>
        <FormNewTech />
      </div>
    </StyleModalNewTech>
  );
};
