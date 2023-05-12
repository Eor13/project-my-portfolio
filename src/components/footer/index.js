import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMailReplyAll, faPhone } from "@fortawesome/free-solid-svg-icons";
import { BoxContact, ContactFooter, ContainerFooter, Phone, StyleFontAwesomeIcon, StyleFontAwesomeIconSocialMedias, Title } from "./style";
import { LinkSocialMedias } from "../buttons";

const Footer =() =>{
    return(
        <ContainerFooter>
            <ContactFooter>
                <Title>Redes Sociais</Title>
                {/* <a className="default" href="https://github.com/Eor13" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithubAlt}/></a> */}
                <LinkSocialMedias href="https://github.com/Eor13">
                    <StyleFontAwesomeIconSocialMedias icon={faGithubAlt}/>
                </LinkSocialMedias>
                <LinkSocialMedias href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/">
                    <StyleFontAwesomeIconSocialMedias  icon={faLinkedinIn}/>
                </LinkSocialMedias>
                {/* <a className="default" href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a> */}
            </ContactFooter>
            <BoxContact>
                <ContactFooter>
                    <Title> <StyleFontAwesomeIcon icon={faPhone}/> Telefone</Title>
                    <Phone> (11)99271-4746</Phone>
                </ContactFooter>
                <ContactFooter>
                    <Title><StyleFontAwesomeIcon icon={faMailReplyAll}/> Email</Title>
                    <LinkSocialMedias href="eor1309@gmail.com" > eor1309@gmail.com</LinkSocialMedias>    
                </ContactFooter>
            </BoxContact>
        </ContainerFooter>
    );
};

export {Footer};