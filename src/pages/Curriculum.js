import './curriculum.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faLinkedinIn, faGithub, faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faJava } from "@fortawesome/free-brands-svg-icons";


const Curriculum =() =>{
    return(
        <section className='containerCurriculum'>
            <FontAwesomeIcon icon={faYoutube}/>
            <FontAwesomeIcon icon={faLinkedin}/>
            <FontAwesomeIcon icon={faLinkedinIn}/>
            <FontAwesomeIcon icon={faGithub}/>
            <FontAwesomeIcon icon={faHtml5}/>
            <FontAwesomeIcon icon={faCss3Alt}/>
            <FontAwesomeIcon icon={faJsSquare}/>
            
            <FontAwesomeIcon icon={faReact}/>
            <FontAwesomeIcon icon={faBootstrap}/>
            <FontAwesomeIcon icon={faJava}/>

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

            <h3>Habilidades comportamentais</h3>
            <ul>
                <li>Responsável</li>
                <li>Organizado</li>
                <li>Proativo</li>
                <li>Resiliente</li>
                <li>Ético</li>
                <li>Trabalho em equipe</li>
            </ul>


        </section>
    )
}
export {Curriculum}