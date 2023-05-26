import { CardProject } from "../../components/cards";
import Project1 from "../../images/project-pokemon-api.png";
import Project2 from "../../images/project-github-api.gif";
import { ButtonScrollTop } from "../../components/buttons";
import { ContainerProjects, Intro, ListCardProjects, Title } from "./style";


const Projects =() =>{
    return(
        <>
            {/* <div>
                <img src="http://placekitten.com/g/1000/300" alt="cat"/>
            </div> */}
            <ContainerProjects>
                <Title>Projetos</Title>
                <Intro >Estes são alguns projetos desenvolvidos onde aplico algumas tecnicas e tecnologias de desenvolvimentos aprendidas durante durente meu aprendizado como programador.</Intro>
                
                <ListCardProjects>
                    <CardProject title ='Pokedex - consumo API em React' image={Project1} description ='Projeto realizado para prática de conceitos com objetivo acadêmico, projeto proposto pelo cruso @DevQuest para simular um teste Técnico.' link='https://quest-react-avancado-eor13.vercel.app/' techs={['Javascript', 'React', 'Styled Components', 'Vercel']}/>  

                    <CardProject title ='GitHub Api data search page' image={Project2} description ='Projeto realizado para Desafio do Curso DevQuest tendo o objetivo de cria uma página que consuma a API do GitHub, onde conseguimos buscar um usuário e rotornar seu Nome, Perfil, Ultimos repositórios alterados, eventos, etc... ' techs= {['HTML', 'CSS', 'Javascript']} link='https://eor13.github.io/projeto-api-github-mundo-real-com-fetch/'/>    
                    
                    <CardProject title ='Nome Projeto 3' image="http://placekitten.com/g/500/450" description ='descrição 3' techs={['Javascript', 'React', 'Styled Components', 'Vercel']} link='www.google.com'/>    
                    
                </ListCardProjects>
            </ContainerProjects>
            <ButtonScrollTop link=''/>     
        </>
    );
};

export { Projects };