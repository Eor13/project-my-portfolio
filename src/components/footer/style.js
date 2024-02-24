import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerFooter = styled.footer`
    background-color: ${ ({theme}) => theme.colorOfTheEnds};
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    min-height: 10vh;
    padding: 15px 0;
`
const ContactFooter = styled.address`
    text-align:center;
    margin: 0 10px;
`
const BoxContact = styled.address`
    display: flex;
    justify-content: space-between;
    align-items:center;
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
    color: ${ ({theme}) => theme.colorSecondary};
`
const Email = styled.p`
    color: ${({theme}) => theme.colorSecondary};
    font-size: 1.7rem;
    padding: 0 5px;
`
const StyleFontAwesomeIconSocialMedias = styled(FontAwesomeIcon)`
    width: 40px;
    height: 35px;
`
const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    height: 30px;
    padding:5px;
`
const StyleFontAwesomeIconWhatsapp = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colorSecondary};
    font-size: 60px;    
`


export {ContainerFooter, ContactFooter,BoxContact, Title,StyleFontAwesomeIconSocialMedias, StyleFontAwesomeIcon, StyleFontAwesomeIconWhatsapp, Email }