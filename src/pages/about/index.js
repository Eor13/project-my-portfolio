import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ButtonScrollTop } from "../../components/buttons";
import { LinkSocialMedias } from "../../components/buttons";
import{ StyleFontAwesomeIconSocialMedias } from "../../components/footer/style";
import { ContainerAbout, DisplayImage, Title , Text, Description } from "./style";
// import i_am from "../../images/i'm.png"
import i_am2 from "../../images/iam.jpeg"

const About = () => {
    return(
        <>
            <ContainerAbout>
                <DisplayImage>
                    {/* <img src="http://placekitten.com/g/500/600" alt="Everson"/> */}
                    {/* <img src={i_am} alt="Everson"/> */}
                    <img src={i_am2} width={'400px'} alt="Everson"/>
                    
                </DisplayImage>
                <Description>  
                    <Title>Olá, Seja bem-Vindo!</Title>
                    <Text>😀Sou Developer Front-end Junior e estou em constante aprendizado e aperfeiçoamento de minhas habilidades e conhecimentos, estou à procura da minha primeira oportunidade como desenvolver Front-end Júnior.</Text>
                    <Text>🧠Possuo conhecimento em HTML5, CSS3, ECMAscript, React,Context API, Redux, Git , GitHub, Consumo de API, testes automatizados com JEST e deploy de aplicação via Vercel e Github.</Text>
                    <Text>💺Estou em transição de carreira para área de tecnologia no momento, venho da área administrativa de empresas em que sempre tive contato com aplicativos, sistema de Gerenciamento, Sites e seus técnicos, no qual sempre tiver facilidade em entender a lógica por trás de seus funcionamentos, dessa maneira despertando-me interesse na área de Tech.</Text>
                    <Text>📚Atualmente finalizei o curso de desenvolver Front-end pela plataforma @DevQuest, e estou aplicando o conhecimento adquirido em alguns projetos, tendo sempre em mente escrever um código limpo de fácil manutenção.</Text>
                    <Text>🚶‍♂️Assim, está em meus planos buscar uma qualificação em uma Linguagem de Back-end e um sistema de gerenciamento de banco de dados para ter uma melhor compreensão da integração do sistema.</Text>
                    <Text>👨Além de tudo, sou organizado, proativo, responsável, ético, resiliente, ademais possuo facilidade com trabalho em equipe e gosto de desafios.</Text>
                    <Text>😃Desta forma, estou aberto para novos desafios para que possa desenvolver-me profissionalmente e pessoalmente com o intuito de ser um ativo para empresa, por fim tendo a possibilidade de construir uma carreira sólida na área.</Text>
                    <div>
                    <LinkSocialMedias href="https://github.com/Eor13">
                        <StyleFontAwesomeIconSocialMedias icon={faGithubAlt}/>
                    </LinkSocialMedias>
                    <LinkSocialMedias href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/">
                        <StyleFontAwesomeIconSocialMedias  icon={faLinkedinIn}/>
                    </LinkSocialMedias>
                    </div>
                </Description>
            </ContainerAbout>
            <ButtonScrollTop link='/'/>   
        </>
    )
}

export {About};