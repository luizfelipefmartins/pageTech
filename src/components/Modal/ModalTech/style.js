import styled from "styled-components";

export const StyleModalTech = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .container__modal {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--grey3);
    width: 90%;
    max-width: 23.06rem;
    color: var(--grey4);
    border-radius: 4px;

    h3 {
      color: var(--grey0);
    }

    .close__btn {
      padding: 5px 10px;
      background-color: transparent;
      color: var(--grey1);
    }
  }

  .modal__header {
    padding: 15px 10px 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey2);
  }
`;
