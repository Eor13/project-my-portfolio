import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMailReplyAll, faPhone } from "@fortawesome/free-solid-svg-icons";
import './footer.css';

const Footer =() =>{
    return(
        <footer className="containerFooter">
                <address className="redes">
                    <h4 className="title">Redes Sociais</h4>
                    <a href="https://github.com/Eor13" target="_blank"><FontAwesomeIcon className="icon" icon={faGithubAlt}/></a>
                    <a href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                </address>
                <address className="contact">
                    <h4 className="title">Telefone</h4>
                    <p> <FontAwesomeIcon className="icon" icon={faPhone} /> (11) 99271-4746</p>
                    <h4 className="title">Email</h4>
                    <a href="eor1309@gmail.com" ><FontAwesomeIcon className="icon" icon={faMailReplyAll} /> eor1309@gmail.com</a>    
                </address>

        </footer>
    );
};

export {Footer};