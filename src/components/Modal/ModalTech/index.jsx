import { FormUpdate } from "../../FormUpdate";
import { StyleModalTech } from "./style";

export const ModalTech = ({ tech, closeModal }) => {
  return (
    <StyleModalTech role="dialog">
      <div className="container__modal">
        <div className="modal__header">
          <h3>Tecnologia Detalhes</h3>
          <button className="close__btn" onClick={() => closeModal()}>
            X
          </button>
        </div>
        <FormUpdate tech={tech} closeModal={closeModal} />
      </div>
    </StyleModalTech>
  );
};
