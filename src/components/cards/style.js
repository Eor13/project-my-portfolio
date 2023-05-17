import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const Card = styled.div`
    background-color: ${({theme}) => themes.dark.colorDetails};
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    max-width: 40%;
    align-items: center;
`

const Title =styled.h3`
    border-radius: 8px 8px  0 0;
    background-color: ${({theme}) => theme.colorOfTheEnds};
    margin-bottom: 2px;
    width: 80%;
    font-size: 2.2rem;
`
const  Description =styled.p`
    color: ${themes.dark.colorSecondary};
`
const DisplayImage =styled.img`
    border-radius: 15px 0;
    width: 100%;
    max-height: 350px;
    margin-bottom: 15px;
    border:8px solid ${({theme}) => theme.colorOfTheEnds};
`
const ButtonLink =styled.button`
    /* background-color: ${themes.colorDetails}; */
    background-color: ${({theme}) => theme.colorOfTheEnds};
    border-radius: 30px;
    padding: 8px;
    justify-content: end;
    align-items: start;
    margin-top: 15px;
    transition: background-color 0.2s ease-in-out;
    &:hover{
    box-shadow:  0px 7px 2px 0px rgba(100, 100, 111, 0.705);
    padding: 8px;
    border-radius: 25px;
    transform: scale(1.1,1.1);
    }
`
const LinkExt =styled.a`
    color: ${({theme}) => theme.colorSecondary};
`


export{Card, Title, Description, DisplayImage,ButtonLink, LinkExt}