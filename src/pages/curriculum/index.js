import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3Alt, faJsSquare, faReact, faJava, faFigma, faGitAlt} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faImage } from "@fortawesome/free-solid-svg-icons";

import { useContext } from 'react';
import { ThemeContext } from '../../services/themeContext';
import { ButtonScrollTop } from '../../components/buttons';


const Curriculum =() =>{
    return(
        <section className='containerCurriculum'>

            <h1 className='title'>Currículo</h1>

            <h3>OBJETIVO</h3>
            <P>Estou à procura da minha primeira oportunidade como desenvolver Front-End Júnior. Estou em transição de carreira para área de tecnologia no momento, venho da área administrativa de empresas na qual sempre tiver facilidade em entender a lógica por trás de seus funcionamentos, dessa maneira despertou-me o interesse na área de Tech.</P>

            <h3>Formação Acadêmica</h3>
            <P> USJT - Bacharel em Administração - linha de formação específica em administração de empresas. Conclusão em 12/2015</P>
            <h3>Cursos</h3>
            <P>DevQuest - Mentoria especializada - Curso de especialização para desenvolver front-end - Conclusão em 01/2023</P>
            <P>DIO – Curso de Trabalhando em Equipes Ágeis - Conclusão em 02/2023</P>

            <h3>Experiências Profissionais</h3>
            <P>26/11/2012 - 20/10/2013: Defensoria Pública de São Paulo – Estágio de Administração</P>
            <P>01/04/2016 - atual: Alumínio Guima Indústria e Comercio Eireli - Assistente Administrativo</P>
            <div className='habilits'>
                <div>
                    <h3>Habilidades comportamentais</h3>
                    <ul>
                        <Li>Responsável</Li>
                        <Li>Organizado</Li>
                        <Li>Proativo</Li>
                        <Li>Resiliente</Li>
                        <Li>Ético</Li>
                        <Li>Trabalho em equipe</Li>
                    </ul>

                </div>
                <div>
                    <h3>Metodologias ÁGEIS -<span>Noção</span></h3>
                    <ul>
                        <Li>Kanban</Li>
                        <Li>OKR</Li>
                        <Li>Extreme Programming (XP)</Li>
                        <Li>Framework Scrum</Li>
                    </ul>
                </div>
                <div>
                    <h3>Habilidades técnicas</h3>
                    <div className='habilitsTec'>
                        <P><FontAwesomeIcon icon={faHtml5} className='icon'/> <br/> HTML </P>
                        <P><FontAwesomeIcon icon={faCss3Alt} className='icon'/> <br/> CSS </P>
                        <P><FontAwesomeIcon icon={faJsSquare} className='icon'/> <br/>Javascript </P>
                        <P><FontAwesomeIcon icon={faReact} className='icon'/> <br/> React </P>
                        <P><FontAwesomeIcon icon={faCode    } className='icon'/> <br/>Clear Code</P>
                        <P><FontAwesomeIcon icon={faFigma} className='icon'/> <br/> Figma </P>
                        <P><FontAwesomeIcon icon={faGitAlt} className='icon'/> <br/> Git </P>
                        <P><FontAwesomeIcon icon={faGithub} className='icon'/> <br/> GitHub </P>
                        <P><FontAwesomeIcon icon={faJava} className='icon'/> <br/> Java</P>
                        <P><FontAwesomeIcon icon={faDatabase} className='icon'/> <br/> SQL</P>
                        
                        {/* Falta arrumar o Icone -- encontrar */}
                        <P><FontAwesomeIcon icon={faImage} className='icon'/> <br/> Springboot</P>
                        <P><FontAwesomeIcon icon={faImage} className='icon'/> <br/> Style Componets</P>
                    </div>
                </div>
            </div>
            <ButtonScrollTop link='/curriculum'/>   
        </section>
    )
}


const P =(props)=>{
    const {theme} = useContext(ThemeContext)
    return <p {...props} style={{color:theme.color}}/>

}
const Li =(props)=>{
    const {theme} = useContext(ThemeContext)
    return <li {...props} style={{color:theme.color}}/>

}
export {Curriculum}