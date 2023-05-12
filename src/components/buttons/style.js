import { styled } from "styled-components";
import { themes } from "../../services/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonTheme = styled.button`
    // background: ${themes.colorText};    
    padding: 10px ;
    border-radius: 30px;
    width: 6%;
    
    &:hover{
        transform: scale(1.1, 1.2);
    }
`
const SpanTheme = styled.span`
    // background: ${themes.colorBackgroung}
    display: flex;
    border-radius: 50%;
    padding: 10px;
`

const StyleFontAwesomeIconArrowCircleUp = styled(FontAwesomeIcon)`
    // color: t${themes.colorText};
    // background: ${themes.colorBackgroung};
    margin: 0 0 5px 90%;
    width: 40px;
    height: 40px;
    
    &:hover{
    box-shadow:  0px 7px 2px 0px rgba(100, 100, 111, 0.429);
    padding: 2px;
    border-radius: 25px;
    }
`
const LinksFooter = styled.a`
    transition: background-color 0.8s ease-in-out;
    
    &:hover{
        box-shadow:  0px 7px 2px 0px rgba(100, 100, 111, 0.429);
        padding: 5px;
    }
`




export {ButtonTheme, SpanTheme, StyleFontAwesomeIconArrowCircleUp, LinksFooter}