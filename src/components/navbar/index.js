import { themes } from "../../services/themeContext";
import { ThemeTogglerButton } from "../themeTogglerButton";
import { BoxName, ContainerNav, Link, Menu, Name } from "./style";

const NavBar =() =>{
    console.log(themes)
    return(
        <ContainerNav >
            <BoxName>
                <a href="/"><Name>Everson de Oliveira</Name></a>
            </BoxName>
            <ThemeTogglerButton/> 
            <Menu>
                <Link href="/">Sobre</Link>
                <Link href="/projects">Projetos</Link>
                <Link href="/curriculum">Currículo</Link>
                <Link href="/contact">Contato</Link>
            </Menu>
        </ContainerNav>
    )
}
export {NavBar}