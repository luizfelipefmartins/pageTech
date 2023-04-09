import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    vertical-align: baseline;
	    line-height: 150%;
        font-family: 'Inter', sans-serif;
    }

    ol, ul {
	    list-style: none;
    }

    body {
        background-color: var(--grey4);
    }

    :root {
        --grey4: #121214;
        --grey3: #212529;
        --grey2: #343B41;
        --grey1: #868E96;
        --grey05:#868E96;
        --grey0: #F8F9FA;
        --primary: #FF577F;
        --secundary: #FF427F;
        --terceary: #59323F;
        --sucess: #3FE864;
        --error: #E83F5B; 


        .title {
            font-weight: 700;
            font-size: 0.9rem;
            color: var(--grey0);
        }

        .titleHome {
            font-weight: 700;
            font-size: 1.13rem;
            color: var(--grey0);
        }

        .subTitleTwo {
            font-size: 1rem;
            color: var(--grey0);
        }

        .label {
            font-size: 0.61rem;
            color: var(--grey0);
        }

        .subTitle {
            font-size: 0.6rem;
            color: var(--grey1);
        }
        
        .subTitleHome {
            font-size: 12px;
            color: var(--grey1);
        }
    }

` 