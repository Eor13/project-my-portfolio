import "./navbar.css";
import lodding from "../images/lodding.gif";

const NavBar =() =>{
    return(
        <header className="container">
            <div>
                <img src={lodding} alt="Aprimorando..."/>
                <a href="/"><h1>Everson de Oliveira</h1></a>
            </div>
            <nav>
                <li><a href="/">Sobre</a></li>
                <li><a href="/projects">Projetos</a></li>
                <li><a href="/curriculum">Currículo</a></li>
                <li><a href="/contact">Contato</a></li>
            </nav>
        </header>
    )
}
export {NavBar}