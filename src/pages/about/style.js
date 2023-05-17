import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const ContainerAbout =styled.section`
    display: flex;
    flex-direction: row;
    min-height: 85vh;

`
    
const DisplayImage = styled.div`
    padding: 10px 10px 0;
    margin: 10px 0;
    /* height: auto;
    /* display: flex;
    justify-content: center; */ */

`
const Text = styled.p`
    color:${({theme}) => theme.colorPrimary};
`


const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    padding: 20px 20px 0;
    gap: 8px;
    text-align: justify;
`
const Title = styled.h1`
    margin-bottom: 20px 0;
    font-family: ${ themes.font.fontSecondary};
    letter-spacing: 2px;
    font-size: 2rem;
    color: ${({theme}) => theme.colorTitles};

`
export {Title, Description, DisplayImage, ContainerAbout, Text}