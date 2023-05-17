import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const ContainerCurriculum =styled.section`
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: 2% 5%;
    /* min-height: 80vh; */
`
const TitlePrincipal =styled.h1`
    background-color: ${({theme}) => theme.colorTitles};
    font-family: ${ themes.font.fontSecondary};
    color: ${({theme}) => theme.colorPrimary};
    font-size: 3.5rem;
    letter-spacing: 2px;
    border-radius: 2px;
    width: 98%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
`
const TitleSecondary =styled.h3`
    background-color: ${({theme}) => theme.colorOfTheEnds};
    font-family: ${ themes.font.fontSecondary};
    color: ${({theme}) => theme.colorSecondary};
    letter-spacing: 2px;
    border-radius: 2px;
    font-size: 2rem;
    width: 98%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
`
const Nota = styled.span`
    font-size: 2rem;
    background-color:${({theme}) => theme.colorOfTheEnds};
    font-family: ${ themes.font.fontSecondary};
    color: ${({theme}) => theme.colorPrimary};
    opacity: 0.6;
`

const Text = styled.p`
    text-align: justify;
    padding: 0 15px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.colorPrimary};
    font-size: 1.6rem;
`
const Ul = styled.ul`
    padding-left: 10px;
    list-style-position: inside;
    & li{
        color:${({theme})=> theme.colorPrimary}; 
    };
`

const BoxHabilits = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    gap: 15px;
    & div{
        min-width: 48%;
    }
`
const HabilitsTec = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export {HabilitsTec, BoxHabilits, ContainerCurriculum, TitlePrincipal, TitleSecondary, Nota, Ul, Text}