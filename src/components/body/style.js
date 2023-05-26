import {  styled } from "styled-components";

const Main = styled.main`
    background:${({theme}) => theme.colorSecondary};
    display:flex;
    flex-direction: column;
    justify-content:center;
    
    @media(max-width:600px){
        flex-wrap:wrap;
        align-items : center;
    }
`

export {Main};