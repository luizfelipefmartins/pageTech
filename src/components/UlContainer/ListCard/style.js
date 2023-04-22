import styled from "styled-components";

export const StyledList = styled.li`
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey4);
  border-radius: 4px;
  color: var(--grey0);

  p {
    font-size: 0.88rem;
    color: var(--grey0);
    font-weight: 700;
  }

  span {
    font-size: 0.75rem;
    color: var(--grey1);
  }

  :hover {
    background-color: #343b41;

    span {
      color: var(--grey0);
    }
  }
`;
