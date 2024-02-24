import {useState} from "react";
import { ThemeTogglerButton } from "../buttons";
import { BoxName, ContainerNav, Link, Nav, Name, Ul, Menu} from "./style";

const NavBar =() =>{
    const [open, setOpen] = useState(false);
   
    return(
        <ContainerNav >
            <BoxName>
                <a href="/"><Name>Everson de Oliveira</Name></a>
            </BoxName>

            <ThemeTogglerButton/> 
            
            <Nav>
                <Menu open={open} onClick={() => setOpen(!open)}>
                    <div open={open}/>
                    <div open={open}/>
                    <div open={open}/>
                </Menu>
                
                <Ul open={open}>
                    <li> <Link open={open} href="/">Sobre</Link> </li>
                    <li> <Link open={open} href="/projects">Projetos</Link> </li>
                    <li> <Link open={open} href="/curriculum">Currículo</Link> </li>
                </Ul>
        
            </Nav>
        </ContainerNav>
    )
}
export {NavBar}