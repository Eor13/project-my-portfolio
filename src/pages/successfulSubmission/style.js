import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const ContainerSuccessful = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 75vh;
`

const Thanks = styled.p`
    width: 60%;
    text-align: center;
    font-size: 2rem;
    color: ${({theme}) => theme.colorPrimary};
    font-weight:${({theme}) => theme === themes.dark ? 300 : 500};
`

export {ContainerSuccessful, Thanks}