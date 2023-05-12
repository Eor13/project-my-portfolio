import { styled } from "styled-components";
import { themes } from "../../services/themeContext";

const ContainerNav  = styled.header`
    background-color: ${ themes.colorOfTheEnds};
    display: flex;
    justify-content: space-between;
    align-items: center ;
    padding: 10px;
    min-height: 5vh;
`

const BoxName =styled.div`
    display: flex;
    align-items: center;    
`
const Name = styled.h1`
    margin: 0;
    font-size: 3rem;
    color: ${props => props.theme.colorText};
`
const Menu = styled.nav`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    column-gap: 8px;
`


const Link =styled.a`
    margin: 0.3rem;
    font-size: 1.9rem;
    transition: background-color 0.5s ease-in-out;
    color: ${ props => props.theme.colorText};

    &:hover{
    box-shadow:  0px 7px 2px 0px rgba(100, 100, 111, 0.429);
    background-color: ${props => props.theme.colorDetails};
    padding: 8px;
    border-radius: 25px;
}
`

export {ContainerNav, BoxName, Name, Menu , Link }
