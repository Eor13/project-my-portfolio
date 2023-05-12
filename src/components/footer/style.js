import { styled } from "styled-components";
import { themes } from "../../services/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerFooter = styled.footer`
    background-color: ${themes.colorOfTheEnds};
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 16vh;
    padding: 15px;
`
const ContactFooter = styled.address`
    text-align:center;
`
const BoxContact = styled.address`
    display: flex;
    column-gap: 50px;
`
const Title =styled.h4`
    margin-bottom: 10px;
    font-size: 1.7rem;
    color: ${themes.colorBackground};
`
const StyleFontAwesomeIconSocialMedias = styled(FontAwesomeIcon)`
    width: 35px;
    height: 35px;
`
const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    padding-right: 10px;
    width: 20px;
    height: 20px;
`
const Phone = styled.p`
    margin-bottom: 10px;
    font-size: 1.7rem;
    color: ${themes.colorBackground};
`

export {ContainerFooter, ContactFooter,BoxContact, Title,StyleFontAwesomeIconSocialMedias, StyleFontAwesomeIcon, Phone}