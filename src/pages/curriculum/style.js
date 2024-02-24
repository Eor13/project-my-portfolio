import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const ContainerCurriculum =styled.section`
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    padding: 2% 5%;
    width:70vw;
    min-height: 77vh;
    @media(max-width:1440px){
        width:100%;
    }
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
    @media(max-width:500px){
        font-size: 2.2rem;
    }
    
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
    @media(max-width:500px){
        font-size: 1.6rem;
        width: 100%;
    }
`
const Nota = styled.span`
    font-size: 2rem;
    background-color:${({theme}) => theme.colorOfTheEnds};
    font-family: ${ themes.font.fontSecondary};
    color: ${({theme}) => theme.colorPrimary};
    opacity: 0.6;
`

const Text = styled.p`
    padding: 0 15px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.colorPrimary};
    font-weight:${({theme}) => theme === themes.dark ? 300 : 500};
    font-size: 1.6rem;
    @media(max-width:500px){
        font-size: 1.4rem;
    }
`
const Logos = styled(FontAwesomeIcon)`
    width: 40px;
    height: 40px;
    padding-bottom: 8px;
`
const Ul = styled.ul`
    padding-left: 10px;
    list-style-position: inside;
    & li{
        color:${({theme})=> theme.colorPrimary};
        font-weight:${({theme}) => theme === themes.dark ? 300 : 500}; 
    };
`

const BoxHabilits = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    gap: 15px 30px;
    div{
        min-width: 48%;
    }
    @media(max-width:900px){
        flex-flow:column-reverse ;
    }
`
const HabilitsTec = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    & p{
        text-align: center;
        margin: 5px;
        color: ${({theme}) => theme.colorPrimary};
        padding: 0 15px;
        text-decoration: overline;
        font-weight:${({theme}) => theme === themes.dark ? 300 : 500};
        /* background-color:${({theme}) => theme === themes.dark ? "rgba(100, 100, 111, 0.429)" : "none"}; */
        border-radius: 5px;
    }
`
const ImgSpring = styled.img`
    width: 45px;
    padding-bottom: 8px;
    color: ${({theme}) => theme.colorPrimary};
    filter: invert( ${({theme}) => theme === themes.dark ? 1 : 0 } );
`
const ImgStyled = styled.img`
    width: 65px;
    color: ${({theme}) => theme.colorPrimary};
    filter: invert( ${({theme}) => theme === themes.dark ? 1 : 0 } );
`

export {HabilitsTec, BoxHabilits, ContainerCurriculum, TitlePrincipal, TitleSecondary, Nota, Ul, Text, Logos, ImgSpring, ImgStyled }