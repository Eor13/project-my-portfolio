import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const ContainerNav  = styled.header`
    background-color: ${ ({theme}) => theme.colorOfTheEnds};
    display: flex;
    justify-content: space-evenly;
    align-items: center ;
    padding: 10px;
    min-height: 5vh;
    max-width: 100vw;

    @media (max-width: 600px) {
        justify-content: space-around;
    }
    
`
const BoxName =styled.div`
    display: flex;
    align-items: center;    
`
const Name = styled.h1`
    margin: 0;
    font-size: 3rem;
    color: ${themes.dark.colorSecondary};

    @media (max-width: 950px) {
        font-size: 2.5rem;
    }

    @media (max-width: 600px) {
        width: 135px;
        font-size: 2.2rem;
    }
`
const Nav = styled.nav`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    column-gap: 8px;
`
const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    flex-flow: row nowrap;

    li{
        padding: 10px;
    }

    @media(max-width:900px){
        flex-flow: column nowrap;
        background-color: ${ ({theme}) => theme.colorDetails};
        border-radius: 20px;
        display: ${({open})=>open? 'flex': 'none'};
        position: absolute;
        top: 60px;
        right: 15px;
        width: 120px;
    }
`

const Link =styled.a`
    margin: 0.3rem;
    font-size: 1.9rem;
    transition: background-color 0.5s ease-in-out;
    color: ${themes.dark.colorSecondary};

    &:hover{
    box-shadow:  0px 7px 2px 0px rgba(100, 100, 111, 0.429);
    background-color: ${({theme}) => theme.colorDetails};
    padding: 8px;
    border-radius: 25px;

    @media (max-width:900px) {
        background-color: ${({theme}) => theme.colorOfTheEnds};
        padding: 2px;
    }
}
`

const Menu = styled.div`
    display: none;
    height: 2rem;
    width: 2rem;
    z-index: 1;
    
    @media(max-width:900px){
        display: flex;
        justify-content: space-around;
        flex-flow:column nowrap; 
    }

    div{
        background-color: ${({open}) => open ? themes.dark.colorPrimary: themes.dark.colorSecondary};
        width: 3rem;
        height: 0.5rem;
        border-radius:10px;
        transform-origin: 5.5px;
        transition: 0.9s ease-in-out;


        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)': 'rotate(0)'};
        }
        
        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)': 'translateX(0)'};
            opacity: ${({open}) => open ? 0: 1};
        }

        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)': 'rotate(0)'};
        }
    }
` 

export {ContainerNav, BoxName, Name, Nav , Link, Ul, Menu };
