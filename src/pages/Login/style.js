import styled from "styled-components";

export const MainCont = styled.main`
  width: 100%;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35%;
    margin-bottom: 10%;
  }

  section {
    width: 18.5rem;
    max-width: 100%;
    height: 25.13rem;
    background-color: var(--grey3);
    box-shadow: 0rem 0.2rem 2.01rem -0.5rem rgba(0, 0, 0, 0.25);
    border-radius: 0.2rem;
  }

  section > div {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
  }

  section > form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
  }

  section > form > div {
    display: flex;
    flex-direction: column;
    gap: 0.63rem;
  }

  .error {
    color: var(--error);
    font-size: 0.75rem;
  }

  .loading {
    color: var(--grey0);
    font-size: 1rem;
    margin-left: 1rem;
  }

  section > form > div > input {
    padding: 0.63rem 0.94rem;
    font-size: 1.01rem;
    background-color: var(--grey2);
    border: 0.06rem solid var(--grey2);
    border-radius: 0.2rem;
    color: var(--grey0);
    font-size: 0.81rem;
  }

  section > form > div > input::placeholder {
    color: var(--grey05);
  }

  section > form > button {
    padding: 0.63rem 0.94rem;
    background-color: var(--primary);
    color: var(--grey0);
    border: 0.08rem solid var(--primary);
    border-radius: 0.25rem;
    font-weight: 500;
    font-size: 0.8rem;
  }

  .register {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
  }

  .register > p {
    color: var(--grey1);
    font-size: 0.6rem;
    font-weight: 600;
    text-align: center;
  }

  .register > a {
    padding: 0.63rem 0.94rem;
    text-decoration: none;
    text-align: center;
    background-color: var(--grey1);
    border: 0.08rem solid var(--grey1);
    border-radius: 0.25rem;
    font-weight: 500;
    font-size: 0.8rem;
    color: var(--grey0);
  }
`;
