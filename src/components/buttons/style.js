import {  styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonTheme = styled.button`
    background-color: ${({theme}) => theme.colorSecondary};
    padding: 5px ;
    border-radius: 30px;

    &:hover{
        transform: scale(1.1, 1.2);
    }
    
    @media(max-width:500px){
        transform: scale(0.8, 0.9);
        
        &:hover{
            transform: scale(1, 1.1);
        }
    }
    `
const SpanTheme = styled.span`
    background-color: ${({theme}) => theme.colorPrimary};
    display: flex;
    border-radius: 50%;
    padding: 5px;
    
    img {
        max-height: 38px;
    }
`

const StyleFontAwesomeIconArrowCircleUp = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colorPrimary};
    margin: 15px 0;
    margin-left: 90vw;
    height: 40px;

    &:hover{
        box-shadow:  0px 7px 2px 0px rgba(100, 100, 111, 0.429);
        padding: 2px;
        border-radius: 25px;
    }

    @media(max-width:600px){
        height:35px;
        margin:10px 0;
    }
`
const LinksFooter = styled.a`
    transition: background-color 0.8s ease-in-out;
    color: ${({theme}) => theme.colorPrimary};
    margin-bottom: 10px;
    font-size: 1.7rem;
    
    &:hover{
        box-shadow:  0px 7px 2px 0px rgba(100, 100, 111, 0.429);
        padding: 5px;
        border-radius:15px;
    }
`

export { ButtonTheme, SpanTheme, StyleFontAwesomeIconArrowCircleUp, LinksFooter }