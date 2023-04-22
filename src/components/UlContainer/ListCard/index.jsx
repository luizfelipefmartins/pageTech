import { StyledList } from "./style";
import { ModalTech } from "../../Modal/ModalTech/index";
import { useContext, useState } from "react";
import { TechContext } from "../../../providers/techContext";

export const ListCard = ({ tech }) => {

  const {modal, setModal} = useContext(TechContext);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <StyledList onClick={() => openModal()}>
        <p>{tech.title}</p>
        <span>{tech.status}</span>
      </StyledList>
      {modal ? <ModalTech tech={tech} closeModal={closeModal} /> : null}
    </>
  );
};
