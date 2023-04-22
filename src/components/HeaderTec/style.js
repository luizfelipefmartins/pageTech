import styled from "styled-components";

export const StyleHeaderTec = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  .container {
    width: 100%;
    display: flex;
    padding: 5px 2px;
    justify-content: space-between;
    align-items: center;

    .btn__open {
      padding: 2px 10px;
      font-size: 20px;
      font-weight: 700;
      background-color: var(--grey3);
      color: var(--grey0);
      cursor: pointer;

      :hover {
        background-color: var(--grey2);
      }
    }
  }

  @media (min-width: 500px) {
    .container {
      width: 99.7vw;
      padding: 5px 20px 5px 5px;
      max-width: 500px;
      box-sizing: border-box;
    }
  }

  @media (min-width: 900px) {
    .container {
      width: 99.7vw;
      padding: 5px 20px 5px 5px;
      max-width: 900px;
      box-sizing: border-box;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 99.7vw;
      padding: 5px 15px 5px 5px;
      max-width: 900px;
      box-sizing: border-box;
    }
  }
`;
