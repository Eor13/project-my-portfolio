import { faGithub, faHtml5, faCss3Alt, faJsSquare, faReact, faJava, faFigma, faGitAlt} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import faStyledComponent from "../../images/styled-components.svg";
import faSpringboot from "../../images/springboot.svg";
import { ButtonScrollTop } from '../../components/buttons';
import { BoxHabilits, ContainerCurriculum, Nota, TitlePrincipal, TitleSecondary, Text, Ul, HabilitsTec, Logos, ImgSpring, ImgStyled } from './syle';



const Curriculum =() =>{
    return(
        <>
            <ContainerCurriculum>

                <TitlePrincipal>Currículo</TitlePrincipal>

                <TitleSecondary>OBJETIVO</TitleSecondary>
                <Text>Estou à procura da minha primeira oportunidade como desenvolver Front-End Júnior. Estou em transição de carreira para área de tecnologia no momento, venho da área administrativa de empresas na qual sempre tiver facilidade em entender a lógica por trás dos programas e seus funcionamentos, dessa maneira despertou-me o interesse na área de Tech.</Text>

                <TitleSecondary>Formação Acadêmica</TitleSecondary>
                <Text> USJT - Bacharel em Administração - linha de formação específica em administração de empresas. Conclusão em 12/2015</Text>
                <TitleSecondary>Cursos</TitleSecondary>
                <Text>DIO – Bootcamp Banco PAN Java Developer - Conclusão em 05/2023</Text>
                <Text>DIO – Trabalhando com Banco de Dados SQL e NoSQL - Conclusão em 04/2023</Text>
                <Text>DIO – Curso de Trabalhando em Equipes Ágeis - Conclusão em 02/2023</Text>
                <Text>DevQuest - Mentoria especializada - Curso de especialização para desenvolver front-end - Conclusão em 02/2023</Text>


                <TitleSecondary>Experiências Profissionais</TitleSecondary>
                <Text>26/11/2012 - 20/10/2013: Defensoria Pública de São Paulo – Estágio de Administração</Text>
                <Text>01/04/2016 - atual: Alumínio Guima Indústria e Comercio Eireli - Assistente Administrativo</Text>
                <BoxHabilits>
                    <div>
                        <TitleSecondary>Habilidades comportamentais</TitleSecondary>
                        <Ul>
                            <li>Responsável</li>
                            <li>Organizado</li>
                            <li>Proativo</li>
                            <li>Resiliente</li>
                            <li>Ético</li>
                            <li>Trabalho em equipe</li>
                        </Ul>

                    </div>
                    <div>
                        <TitleSecondary>Metodologias ÁGEIS -<Nota>Noção</Nota></TitleSecondary>
                        <Ul>
                            <li>Kanban</li>
                            <li>OKR</li>
                            <li>Extreme Programming (XP)</li>
                            <li>Framework Scrum</li>
                        </Ul>
                    </div>
                    <div>
                        <TitleSecondary>Habilidades técnicas</TitleSecondary>
                        <HabilitsTec>
                            <p><Logos icon={faHtml5}/> <br/> HTML </p>
                            <p><Logos icon={faCss3Alt}/> <br/> CSS </p>
                            <p><Logos icon={faJsSquare}/> <br/>Javascript </p>
                            <p><Logos icon={faReact}/> <br/> React </p>
                            <p><Logos icon={faCode}/> <br/>Clear Code</p>
                            <p><Logos icon={faFigma}/> <br/> Figma </p>
                            <p><Logos icon={faGitAlt}/> <br/> Git </p>
                            <p><Logos icon={faGithub}/> <br/> GitHub </p>
                            <p><Logos icon={faJava}/> <br/> Java</p>
                            <p><Logos icon={faDatabase}/> <br/> SQL</p>
                            
                            {/* Falta arrumar o Icone -- encontrar */}
                            <p><ImgSpring src={faSpringboot}/> <br/> Springboot</p>
                            <p><ImgStyled src={faStyledComponent}/> <br/> Style Componets</p>
                        </HabilitsTec>
                    </div>
                </BoxHabilits>
            </ContainerCurriculum>
            <ButtonScrollTop link=''/>   
        </>
    )
}

export {Curriculum}