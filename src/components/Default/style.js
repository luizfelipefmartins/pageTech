import styled from "styled-components";

export const StyledDiv = styled.div`
    max-width: ${({contWid}) => contWid ? contWid : 320}px;
    margin: 0 auto;
    padding: 10px;
`

export const StyledDivTwo = styled.div`
    width: 100%;
    max-width: ${({contWid}) => contWid ? contWid : 320}px;
    margin: 0 auto;
`

export const StyledDefault = styled.div`
    max-width: ${({contWid}) => contWid ? contWid : 320}px;
    margin: 0 auto;
    padding: 10px;

    @media (min-width:500px){
        max-width: 500px;
    }

    @media (min-width:900px){
        max-width: 900px;
    }
`