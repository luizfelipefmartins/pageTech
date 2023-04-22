import styled from "styled-components";

export const MainContainer = styled.main`
  div > header {
    margin-top: 1rem;
    padding: 40px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div > header > a {
    background-color: var(--grey3);
    padding: 10px 15px;
    text-decoration: none;
    color: var(--grey0);
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
  }

  div > section {
    padding: 30px 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sectionTwo {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 500px) {
    div > section {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .sectionTwo {
      align-items: flex-start;
    }
  }
`;
