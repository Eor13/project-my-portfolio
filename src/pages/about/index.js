import { faGithubAlt, faLinkedinIn,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ButtonScrollTop, ButtonScrollTopAbout, LinkSocialMedias} from "../../components/buttons";
import { ContainerAbout, DisplayImage, Title , Text, Description, StyleFontAwesomeIconSocialMediasAbout, BoxSocialMedias} from "./style";
import {StyleFontAwesomeIconWhatsapp} from "../../components/footer/style.js"
import i_am2 from "../../images/iam.jpeg";

const About = () => {
    return(
        <>
            <ContainerAbout>
                <DisplayImage>
                    <img src={i_am2}  alt="Everson"/>
                </DisplayImage>
                <Description>  
                    <Title>Olá, Seja bem-Vindo!</Title>
                    <Text>Sou um profissional em ascensão e em transição de carreira para área de tecnologia, busco a primeira oportunidade como Desenvolvedor para aplicar os conhecimentos técnicos já obtidos em estudos e aprimorar cada vez mais o meu desenvolvimento pessoal e profissional.</Text>
                    <Text>Destaco-me no ambiente corporativo com as principais habilidades pessoais: organização, pro atividade, responsabilidade, ética, resiliência, facilidade em trabalhar em equipe e aptidão para novos desafios.</Text>
                    <Text>Tenho alta facilidade de aprender e curiosidade no conhecimento que ainda não está em meu radar, a fim de construir uma carreira sólida na área que desejo atuar.</Text>
                    <BoxSocialMedias>
                        <LinkSocialMedias href="https://github.com/Eor13">
                            <StyleFontAwesomeIconSocialMediasAbout icon={faGithubAlt}/>
                        </LinkSocialMedias>
                        <LinkSocialMedias href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/">
                            <StyleFontAwesomeIconSocialMediasAbout  icon={faLinkedinIn}/>
                        </LinkSocialMedias>
                        <LinkSocialMedias href="https://wa.me/5511992714746">
                            <StyleFontAwesomeIconWhatsapp  icon={faWhatsapp} /> 
                        </LinkSocialMedias>
                    </BoxSocialMedias>
                </Description>
            </ContainerAbout>
            <ButtonScrollTopAbout link=''/>
        </>
    )
}

export {About};