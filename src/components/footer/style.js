import { styled } from "styled-components";
import { themes } from "../../services/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerFooter = styled.footer`
    background-color: ${themes.dark.colorOfTheEnds};
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    min-height: 16vh;
    padding: 15px 0;
`
const ContactFooter = styled.address`
    text-align:center;
    margin: 0 10px;
    `
const BoxContact = styled.address`
    display: flex;
    column-gap: 50px;
    margin: 0 10px;
    
    @media (max-width:450px) {
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 10px;
        margin: 10px 10px;
    }
`
const Title =styled.h4`
    margin-bottom: 10px;
    font-size: 1.7rem;
    color: ${themes.dark.colorSecondary};
`
const StyleFontAwesomeIconSocialMedias = styled(FontAwesomeIcon)`
    width: 40px;
    height: 35px;
    margin: 0 5px;
    
    `
const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    height: 30px;
    padding:5px;
`
const StyleFontAwesomeIconWhatsapp = styled(FontAwesomeIcon)`
    height: 30px;
    width:30px;
    padding:5px;    
    background-color:#25D366;
    border-radius:50%;
    color: ${themes.dark.colorPrimary};
`


export {ContainerFooter, ContactFooter,BoxContact, Title,StyleFontAwesomeIconSocialMedias, StyleFontAwesomeIcon, StyleFontAwesomeIconWhatsapp }