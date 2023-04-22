import styled from "styled-components";

export const FormStyledModal = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

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

  .btn__closeModal {
    background-color: var(--primary);
    padding: 0.63rem 0.94rem;
    color: var(--grey0);
    font-size: 0.8rem;
    font-weight: 500;
    border: 0.07rem solid var(--primary);
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
`;
