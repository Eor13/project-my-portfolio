import { styled } from "styled-components";

const ContainerProjects = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
`
const Title = styled.h1`
    background-color: ${props => props.theme.colorTitles};
    font-family: ${props => props.theme.fontSecondary};
    color: ${props => props.theme.colorBackground};
    letter-spacing: 2px;
    font-size: 2.5rem;
    padding: 8px;
    border-radius: 2px;
    width: 98%;
    margin: 10px auto;
`
const Intro =styled.p`
    text-align: justify;
    padding: 0 15px;
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