import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMailReplyAll, faPhone } from "@fortawesome/free-solid-svg-icons";
import './footer.css';

const Footer =() =>{
    return(
        <footer className="containerFooter">
            <address className="redes">
                <h4 className="default">Redes Sociais</h4>
                <a className="default" href="https://github.com/Eor13" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithubAlt}/></a>
                <a className="default" href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a>
            </address>
            <address className="containerContact">
                <div className="contact">
                    <h4 className="default"> <FontAwesomeIcon className="icon" icon={faPhone}/> Telefone</h4>
                    <p className="default" > (11)99271-4746</p>
                </div>
                <div className="contact">
                    <h4 className="default"><FontAwesomeIcon className="icon" icon={faMailReplyAll}/> Email</h4>
                    <a className="default" href="eor1309@gmail.com" > eor1309@gmail.com</a>    
                </div>
            </address>
        </footer>
    );
};

export {Footer};