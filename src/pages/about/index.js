import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';
import { useContext } from 'react';
import { ThemeContext } from '../../services/themeContext';
import { ButtonScrollTop } from "../../components/buttons";

const About = () => {
    return(
        <>
            <section className="containerAbout">
                <div className="iAm">
                    <img src="http://placekitten.com/g/500/600" alt="Everson"/>
                    
                </div>
                <div className="description">  
                    <h1>Olá, Seja bem-Vindo!</h1>
                    <P>😀Sou Developer Front-end Junior e estou em constante aprendizado e aperfeiçoamento de minhas habilidades e conhecimentos, estou à procura da minha primeira oportunidade como desenvolver Front-end Júnior.</P>
                    <P>🧠Possuo conhecimento em HTML5, CSS3, ECMAscript, React,Context API, Redux, Git , GitHub, Consumo de API, testes automatizados com JEST e deploy de aplicação via Vercel e Github.</P>
                    <P>💺Estou em transição de carreira para área de tecnologia no momento, venho da área administrativa de empresas em que sempre tive contato com aplicativos, sistema de Gerenciamento, Sites e seus técnicos, no qual sempre tiver facilidade em entender a lógica por trás de seus funcionamentos, dessa maneira despertando-me interesse na área de Tech.</P>
                    <P>📚Atualmente finalizei o curso de desenvolver Front-end pela plataforma @DevQuest, e estou aplicando o conhecimento adquirido em alguns projetos, tendo sempre em mente escrever um código limpo de fácil manutenção.</P>
                    <P>🚶‍♂️Assim, está em meus planos buscar uma qualificação em uma Linguagem de Back-end e um sistema de gerenciamento de banco de dados para ter uma melhor compreensão da integração do sistema.</P>
                    <P>👨Além de tudo, sou organizado, proativo, responsável, ético, resiliente, ademais possuo facilidade com trabalho em equipe e gosto de desafios.</P>
                    <P>😃Desta forma, estou aberto para novos desafios para que possa desenvolver-me profissionalmente e pessoalmente com o intuito de ser um ativo para empresa, por fim tendo a possibilidade de construir uma carreira sólida na área.</P>
                    <div>
                        <a href="https://github.com/Eor13" target="_blank" rel="noreferrer"><Icon  icon={faGithubAlt}/></a>
                        <a href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/" target="_blank" rel="noreferrer"><Icon icon={faLinkedinIn} /></a>
                    </div>
                </div>
            </section>
            <ButtonScrollTop link='/'/>   
        </>
    )
}

const P  =(props)=>{
    const {theme} = useContext(ThemeContext)
    return <p {...props} style={{color:theme.color}}/>

}
const  Icon =(props)=>{
    const {theme} = useContext(ThemeContext)
    console.log("icon ", theme)
    return <FontAwesomeIcon style={{color:theme.color}} className="icon" {...props}/>

}
export {About};