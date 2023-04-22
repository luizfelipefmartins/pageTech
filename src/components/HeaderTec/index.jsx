import { StyleHeaderTec } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../providers/providers";
import { ModalNewTech } from "../Modal/ModalNewTech";

export const HeaderTec = () => {
  const { isOpen, openMOdal } = useContext(AuthContext);

  return (
    <StyleHeaderTec>
      <div className="container">
        <h3 className="titleHome">Tecnologias</h3>
        <button className="btn__open" onClick={() => openMOdal()}>
          +
        </button>
        {isOpen ? <ModalNewTech /> : null}
      </div>
    </StyleHeaderTec>
  );
};
