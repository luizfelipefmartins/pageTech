import styled from "styled-components";

export const MainRegister = styled.main`
    width: 100%;

    div > header {
        width: 90%;
        max-width: 270px;
        margin: 0 auto;
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
    }

    div > header > a {
        padding: 0.63rem 0.94rem;
        background-color: var(--grey3);
        border-radius: 4px;
        text-decoration: none;
        color: var(--grey0);
        font-size: 0.75rem;
        font-weight: 600;
    }

    .formContainer {
        width: 100%;
        background-color: var(--grey3);
        margin-top: 2rem;
    }


    div > form {
        width:90%;
        padding: 0.63rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        box-shadow: 0rem 0.25rem 2.5rem -0.63rem rgba(0, 0, 0, 0.25);
        border-radius: 0.25rem;
    }

    .error {
        color: var(--error);
        font-size: 0.75rem;
    }


    div > form > h3 {
        margin-top: 2rem;
        text-align: center;
    }

    div > form > span {
        text-align: center;
    }

    div > form > div {
        display: flex;
        flex-direction: column;
        gap: 0.63rem;
    }

    div > form > div > input {
        padding: 0.63rem 0.94rem;
        font-size: 1.01rem;
        background-color: var(--grey2);
        border: 0.06rem solid var(--grey2);
        border-radius: 0.2rem;
        color: var(--grey0);
        font-size: 0.81rem;
    }

    div > form > select {
        padding: 0.63rem 0.94rem;
        font-size: 1.01rem;
        background-color: var(--grey2);
        border: 0.06rem solid var(--grey2);
        border-radius: 0.2rem;
        color: var(--grey0);
        font-size: 0.81rem;
    }

    div > form > button {
        padding: 0.63rem 0.94rem;
        background-color: var(--terceary);
        color: var(--grey0);
        border: 0.08rem solid var(--terceary);
        border-radius: 0.25rem;
        font-weight: 500;
        font-size: 1rem;
    }
    
`