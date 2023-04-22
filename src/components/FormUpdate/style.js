import styled from "styled-components";

export const StyleFormup = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      padding: 0.63rem 0.94rem;
      background-color: var(--grey2);
      color: var(--grey0);
      border: 0.06rem solid var(--grey0);
      border-radius: 0.2rem;
    }
  }

  select {
    padding: 10px 15px;
    background-color: var(--grey2);
    color: var(--grey0);
  }

  .container__btn {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 10px;

    .btn__close--modalEdit {
      padding: 10px 25px;
      border: 1px solid var(--pri-btn);
      background-color: var(--pri-btn);
      border-radius: 4px;
      font-size: 13px;
      font-weight: 500;
      color: var(--grey0);
    }

    .btn__close--modalDelete {
      padding: 10px 15px;
      background-color: var(--grey1);
      border: 1px solid var(--grey1);
      border-radius: 4px;
      color: var(--grey0);
      font-size: 13px;
      font-weight: 500;
    }
  }
`;
