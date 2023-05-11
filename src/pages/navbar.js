import { ThemeTogglerButton } from "../components/themeTogglerButton";
import "./navbar.css";
// import lodding from "../images/climbing-stairs.png";

const NavBar =() =>{
    return(
        <header className="container">
            <div>
                {/* <img src={lodding} alt="Aprimorando..."/> */}
                <a href="/"><h1 className="default">Everson de Oliveira</h1></a>
            </div>
            <ThemeTogglerButton />  
            <nav>
                <li><a className="default" href="/">Sobre</a></li>
                <li><a className="default" href="/projects">Projetos</a></li>
                <li><a className="default" href="/curriculum">Currículo</a></li>
                <li><a className="default" href="/contact">Contato</a></li>
            </nav>
        </header>
    )
}
export {NavBar}