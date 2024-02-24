import { faGithubAlt, faLinkedinIn,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BoxContact, ContactFooter, ContainerFooter, StyleFontAwesomeIcon, StyleFontAwesomeIconSocialMedias, Title, StyleFontAwesomeIconWhatsapp, Email } from "./style";
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
                    <Title><StyleFontAwesomeIcon icon={faEnvelope}/> Email</Title>
                    <Email> eversonoribeiro@outlook.com</Email>
                </ContactFooter> 
                <LinkSocialMedias href="https://wa.me/5511992714746">
                    <StyleFontAwesomeIconWhatsapp  icon={faWhatsapp} /> 
                </LinkSocialMedias>
            </BoxContact>
        </ContainerFooter>
    );
};

export {Footer};