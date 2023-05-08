import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './about.css';


const About = () => {
    return(
        <section className="containerAbout">
            <div className="iAm">
                <img src="http://placekitten.com/g/500/600" alt="Everson"/>
                
            </div>
            <div className="description">  
                <h1>Olá, Seja bem-Vindo!</h1>
                <p>😀Sou Developer Front-end Junior e estou em constante aprendizado e aperfeiçoamento de minhas habilidades e conhecimentos, estou à procura da minha primeira oportunidade como desenvolver Front-end Júnior.</p>
                <p>🧠Possuo conhecimento em HTML5, CSS3, ECMAscript, React,Context API, Redux, Git , GitHub, Consumo de API, testes automatizados com JEST e deploy de aplicação via Vercel e Github.</p>
                <p>💺Estou em transição de carreira para área de tecnologia no momento, venho da área administrativa de empresas em que sempre tive contato com aplicativos, sistema de Gerenciamento, Sites e seus técnicos, no qual sempre tiver facilidade em entender a lógica por trás de seus funcionamentos, dessa maneira despertando-me interesse na área de Tech.</p>
                <p>📚Atualmente finalizei o curso de desenvolver Front-end pela plataforma @DevQuest, e estou aplicando o conhecimento adquirido em alguns projetos, tendo sempre em mente escrever um código limpo de fácil manutenção.</p>
                <p>🚶‍♂️Assim, está em meus planos buscar uma qualificação em uma Linguagem de Back-end e um sistema de gerenciamento de banco de dados para ter uma melhor compreensão da integração do sistema.</p>
                <p>👨Além de tudo, sou organizado, proativo, responsável, ético, resiliente, ademais possuo facilidade com trabalho em equipe e gosto de desafios.</p>
                <p>😃Desta forma, estou aberto para novos desafios para que possa desenvolver-me profissionalmente e pessoalmente com o intuito de ser um ativo para empresa, por fim tendo a possibilidade de construir uma carreira sólida na área.</p>
                <div>
                    <a href="https://github.com/Eor13" target="_blank"><FontAwesomeIcon className="icon" icon={faGithubAlt}/></a>
                    <a href="https://www.linkedin.com/in/everson-de-oliveira-ribeiro/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                </div>
            </div>
        </section>
    )
}

export {About};