import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ButtonScrollTop } from "../../components/buttons";
import { LinkSocialMedias } from "../../components/buttons";
import { ContainerAbout, DisplayImage, Title , Text, Description, StyleFontAwesomeIconSocialMediasAbout } from "./style";
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
                    <Text>😀Sou Developer Front-end Junior e estou em constante aprendizado e aperfeiçoamento de minhas habilidades e conhecimentos, estou à procura da minha primeira oportunidade como desenvolver Front-end Júnior.</Text>
                    <Text>🧠Possuo conhecimento em HTML5, CSS3, ECMAscript, React,Context API, Redux, Git , GitHub,  Consumo de API, testes automatizados com JEST, deploy de aplicação via Vercel e Github, Java, Spring, MySQl e PostegreSQL.</Text>
                    <Text>💺Estou em transição de carreira para área de tecnologia no momento, venho da área administrativa de empresas em que sempre tive contato com aplicativos, sistema de Gerenciamento, Sites e seus técnicos, no qual sempre tiver facilidade em entender a lógica por trás de seus funcionamentos, dessa maneira despertando-me interesse na área de Tech.</Text>
                    <Text>📚Finalizei o curso de desenvolver Front-end pela plataforma @DevQuest. Recentemente terminei um Bootcamp voltado ao aprendizado de Java e Spring pela plataforma @Dio, neste meses também aprendi sobre Banco de Dados SQL e NoSQL e estou aplicando o conhecimento adquirido em ambas linguagens em alguns projetos, tendo sempre em mente escrever um código limpo de fácil manutenção. </Text>
                    <Text>🚶‍♂️Assim, está em meus planos aprender Typescript, por entender que é aproxima etapa como desenvolver Front End, salientando que estou disposto a aprender linguagens que não estão em meu radar de atenção no atual momento caso necessário.</Text>
                    <Text>👨Além de tudo, sou organizado, proativo, responsável, ético, resiliente, ademais possuo facilidade com trabalho em equipe e gosto de desafios.</Text>    
                    <Text>😃Desta forma, estou aberto para novos desafios para que possa desenvolver-me profissionalmente e pessoalmente com o intuito de ser um ativo para empresa, por fim tendo a possibilidade de construir uma carreira sólida na área.</Text>
                    <div>
                    <LinkSocialMedias href="https://github.com/Eor13">
                        <StyleFontAwesomeIconSocialMediasAbout icon={faGithubAlt}/>
                    </LinkSocialMedias>
                    <LinkSocialMedias href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/">
                        <StyleFontAwesomeIconSocialMediasAbout  icon={faLinkedinIn}/>
                    </LinkSocialMedias>
                    </div>
                </Description>
            </ContainerAbout>
            <ButtonScrollTop link=''/>   
        </>
    )
}

export {About};