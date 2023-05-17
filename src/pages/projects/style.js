import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const ContainerProjects = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
`
const Title = styled.h1`
    background-color: ${({theme}) => theme.colorTitles};
    font-family: ${themes.font.fontSecondary};
    color: ${({theme}) => theme.colorSecondary};
    letter-spacing: 2px;
    font-size: 2.5rem;
    font-weight: 700;
    padding: 8px;
    border-radius: 2px;
    width: 98%;
    margin: 10px auto;
`
const Intro =styled.p`
    color: ${({theme}) => theme.colorPrimary};
    text-align: justify;
    padding: 0 15px;
    font-size: 1.7rem;
`
const ListCardProjects = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    gap:30px 80px;
    margin: 30px 0 ;
`
export{ContainerProjects, Title, Intro, ListCardProjects }