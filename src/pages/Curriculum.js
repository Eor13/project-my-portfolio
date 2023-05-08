import './curriculum.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3Alt, faJsSquare, faReact, faJava, faFigma, faGitAlt} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faImage} from "@fortawesome/free-solid-svg-icons";


const Curriculum =() =>{
    return(
        <section className='containerCurriculum'>

            <h1>Currículo</h1>

            <h3>OBJETIVO</h3>
            <p>Estou à procura da minha primeira oportunidade como desenvolver Front-End Júnior. Estou em transição de carreira para área de tecnologia no momento, venho da área administrativa de empresas na qual sempre tiver facilidade em entender a lógica por trás de seus funcionamentos, dessa maneira despertou-me o interesse na área de Tech.</p>

            <h3>Formação Acadêmica</h3>
            <p> USJT - Bacharel em Administração - linha de formação específica em administração de empresas. Conclusão em 12/2015</p>
            <h3>Cursos</h3>
            <p>DevQuest - Mentoria especializada - Curso de especialização para desenvolver front-end - Conclusão em 01/2023</p>
            <p>DIO – Curso de Trabalhando em Equipes Ágeis - Conclusão em 02/2023</p>

            <h3>Experiências Profissionais</h3>
            <p>26/11/2012 - 20/10/2013: Defensoria Pública de São Paulo – Estágio de Administração</p>
            <p>01/04/2016 - atual: Alumínio Guima Indústria e Comercio Eireli - Assistente Administrativo</p>
            <div className='habilits'>
                <div>
                    <h3>Habilidades comportamentais</h3>
                    <ul>
                        <li>Responsável</li>
                        <li>Organizado</li>
                        <li>Proativo</li>
                        <li>Resiliente</li>
                        <li>Ético</li>
                        <li>Trabalho em equipe</li>
                    </ul>

                </div>
                <div>
                    <h3>Metodologias ÁGEIS -<span>Noção</span></h3>
                    <ul>
                        <li>Kanban</li>
                        <li>OKR</li>
                        <li>Extreme Programming (XP)</li>
                        <li>Framework Scrum</li>
                    </ul>
                </div>
                <div>
                    <h3>Habilidades técnicas</h3>
                    <div className='habilitsTec'>
                        <p><FontAwesomeIcon icon={faHtml5} className='icon'/> <br/> HTML </p>
                        <p><FontAwesomeIcon icon={faCss3Alt} className='icon'/> <br/> CSS </p>
                        <p><FontAwesomeIcon icon={faJsSquare} className='icon'/> <br/>Javascript </p>
                        <p><FontAwesomeIcon icon={faReact} className='icon'/> <br/> React </p>
                        <p><FontAwesomeIcon icon={faCode    } className='icon'/> <br/>Clear Code</p>
                        <p><FontAwesomeIcon icon={faFigma} className='icon'/> <br/> Figma </p>
                        <p><FontAwesomeIcon icon={faGitAlt} className='icon'/> <br/> Git </p>
                        <p><FontAwesomeIcon icon={faGithub} className='icon'/> <br/> GitHub </p>
                        <p><FontAwesomeIcon icon={faJava} className='icon'/> <br/> Java</p>
                        <p><FontAwesomeIcon icon={faDatabase} className='icon'/> <br/> MySQL</p>
                        
                        {/* Falta arrumar o Icone -- encontrar */}
                        <p><FontAwesomeIcon icon={faImage} className='icon'/> <br/> Springboot</p>
                        <p><FontAwesomeIcon icon={faImage} className='icon'/> <br/> Style Componets</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export {Curriculum}