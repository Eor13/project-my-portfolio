import {  styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ButtonTheme = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
    background-color: ${({theme}) => theme.colorSecondary};
    border:none;
    width:40px;
    height:40px;
    border-radius: 30px;
    
    @media(max-width:500px){
        transform: scale(0.8, 0.9);
        &:hover{
            transform: scale(1, 1.1);
        }
    }
`
const StyleFontAwesomeIconCircle = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colorPrimary};
    font-size:36px;
`

const StyleFontAwesomeIconArrowCircleUp = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colorOfTheEnds};
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
    color: ${({theme}) => theme.colorSecondary};

    font-size: 1.7rem;
    padding: 0 5px;
`
const ButtonScroll =styled.a`
    display:none;
    @media(max-width:900px){
        display:block;
    }
`

export {StyleFontAwesomeIconCircle, ButtonTheme, StyleFontAwesomeIconArrowCircleUp, LinksFooter, ButtonScroll }