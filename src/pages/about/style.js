import { styled } from "styled-components";
import { themes } from "../../services/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerAbout =styled.section`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width:60vw;
    min-height: 82vh;
    @media(max-width:1440px){
        width:100%;
        flex-direction: row;
        align-items: start;
        justify-content:center;
    }
    @media(max-width:900px){
        flex-direction: column;
        align-items: center;
        justify-content:center;
    }
`
    
const DisplayImage = styled.div`
    padding: 10px 10px 10px;
    margin: 10px;
    background-color: ${({theme}) => theme.colorTitles};
    border-radius: 3px;
    height: 100%;
    /* max-width: 820px; */
    animation-name: openningImage;
    animation-duration: 1s;
    @keyframes  openningImage{
        0% { opacity: 0.05; }
        100%{ opacity: 1; }
    }
    img{
        /* max-width:800px;
        max-height: 800px; */
        width:100%;
    }
    @media(max-width:1440px){
        max-width: 420px;
        img{
            max-width:400px;
            max-height: 400px;
        }
    }
    
    @media(max-width:500px){
        max-width:320px;
        img{
            max-width:300px;
        }
    }
`
const Text = styled.p`
    color:${({theme}) => theme.colorPrimary};
    font-weight:${({theme}) => theme === themes.dark ? 300 : 500};
    @media(max-width:500px){
        font-size: 1.4rem;
    }
`
const BoxSocialMedias = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: row;
    align-items:center;
    a > svg{
        color:${({theme}) => theme.colorTitles};
    }
    @media(max-width:900px){
        margin-top: 20px;
    }
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 0;
    gap: 8px;
    text-align: justify;
`
const Title = styled.h1`
    margin-bottom: 20px;
    font-family: ${ themes.font.fontSecondary};
    letter-spacing: 2px;
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme}) => theme.colorTitles};
    animation-name: openningText;
    animation-duration: 1s;
    @keyframes  openningText{
        0% { opacity: 0.05; }
        100%{ opacity: 1; }
    }
`
const StyleFontAwesomeIconSocialMediasAbout = styled(FontAwesomeIcon)`
    height: 60px;
    padding: 10px;
    @media(max-width:500px){
        height: 50px;
    }

`
export {Title, Description, DisplayImage, ContainerAbout, Text, StyleFontAwesomeIconSocialMediasAbout, BoxSocialMedias}