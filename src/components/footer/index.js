import { faGithubAlt, faLinkedinIn,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BoxContact, ContactFooter, ContainerFooter, StyleFontAwesomeIcon, StyleFontAwesomeIconSocialMedias, Title, StyleFontAwesomeIconWhatsapp } from "./style";
import { LinkSocialMedias } from "../buttons";

const Footer =() =>{
    return(
        <ContainerFooter>
            <ContactFooter>
                <Title>Redes Sociais</Title>
                <LinkSocialMedias href="https://github.com/Eor13">
                    <StyleFontAwesomeIconSocialMedias icon={faGithubAlt}/>
                </LinkSocialMedias>
                <LinkSocialMedias href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/">
                    <StyleFontAwesomeIconSocialMedias  icon={faLinkedinIn}/>
                </LinkSocialMedias>
            </ContactFooter>
            <BoxContact>
                <ContactFooter>
                    <Title> <StyleFontAwesomeIconWhatsapp icon={faWhatsapp} /> Telefone</Title>
                    <LinkSocialMedias href="https://wa.me/5511992714746"> (11)99271-4746</LinkSocialMedias>
                </ContactFooter>
                <ContactFooter>
                    <Title><StyleFontAwesomeIcon icon={faEnvelope}/> Email</Title>
                    <LinkSocialMedias href="/contact"> eor1309@gmail.com</LinkSocialMedias>    
                </ContactFooter>
            </BoxContact>
        </ContainerFooter>
    );
};

export {Footer};