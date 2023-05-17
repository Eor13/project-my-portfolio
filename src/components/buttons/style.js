import {  styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonTheme = styled.button`
    background-color: ${({theme}) => theme.colorSecondary};
    padding: 10px ;
    border-radius: 30px;
    width: 6%;
    
    &:hover{
        transform: scale(1.1, 1.2);
    }
    `
const SpanTheme = styled.span`
    background-color: ${({theme}) => theme.colorPrimary};
    display: flex;
    border-radius: 50%;
    padding: 10px;
`

const StyleFontAwesomeIconArrowCircleUp = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colorPrimary};
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
    color: ${({theme}) => theme.colorPrimary};
    
    &:hover{
        box-shadow:  0px 7px 2px 0px rgba(100, 100, 111, 0.429);
        padding: 2px;
        background-color:${({theme}) => theme.colorDetails};
        border-radius:15px;
    }
`

export {ButtonTheme, SpanTheme, StyleFontAwesomeIconArrowCircleUp, LinksFooter}