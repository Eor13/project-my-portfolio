import { CardProject } from "../../components/cards";
import Project1 from "../../images/project-pokemon-api.png";
import Project2 from "../../images/project-github-api.gif";
import Project3 from "../../images/project-my-portfolio.gif";
import Project4 from "../../images/spider-man-multiverso.png";
import Project5 from "../../images/project-notes.jpg";
import { ButtonScrollTop } from "../../components/buttons";
import { ContainerProjects, Intro, ListCardProjects, Title } from "./style";


const Projects =() =>{
    return(
        <>
            <ContainerProjects>
                <Title>Projetos</Title>
                <Intro >Estes são alguns projetos desenvolvidos onde aplico algumas tecnicas e tecnologias de desenvolvimentos aprendidas durante durente meu aprendizado como programador.</Intro>
                
                <ListCardProjects>
                    <CardProject title ='Notes' image={Project5} description ='O projeto é uma aplicação front-end responsiva de notas, que deixa o usuário criar e excluir notas de maneira simples e intuitiva, além disso está disponível a gravação de notas por áudio e a persistência de dados.' techs={['React','React', 'Tailwind CSS', 'Redis', 'Vercel']} link='https://project-notes-nlw-expert.vercel.app/'/>  

                    <CardProject title ='Spider-Man Multiverso' image={Project4} description ='Projeto realizado com HTML, CSS e Javascript com intuito de concluir o Desafio do projeto da @DIO.' techs={['HTML','CSS','Javascript']} link='https://eor13.github.io/project-spider-man/'/>  
                    
                    <CardProject title ='My Portfolio' image={Project3} description ='Projeto realizado para prática de conceitos com objetivo acadêmico e junto com a apresentação das minhas habilidades técnicas  na área, projeto idealizado por mim.' techs={['Javascript', 'React', 'Styled Components', 'Vercel', 'ForSubmit']} link='https://project-my-portfolio-eor13.vercel.app/'/>  
                    
                    <CardProject title ='Pokedex - consumo API em React' image={Project1} description ='Projeto realizado para prática de conceitos com objetivo acadêmico, projeto proposto pelo cruso @DevQuest para simular um teste Técnico. O objetivo da Quest foi construir em React uma lista com 10 pokémons retirado do PokeAPI com seus nomes e imagens, podendo ser buscado + 10 pokemons a cada click realizado no botão posicionado ao final da lista.' link='https://quest-react-avancado-eor13.vercel.app/' techs={['Javascript', 'React', 'Styled Components', 'Vercel']}/>  

                    <CardProject title ='GitHub Api data search page' image={Project2} description ='Projeto realizado para Desafio do Curso DevQuest tendo o objetivo de cria uma página que consuma a API do GitHub, onde conseguimos buscar um usuário e rotornar seu Nome, Perfil, Ultimos repositórios alterados, eventos, etc... ' techs= {['HTML', 'CSS', 'Javascript']} link='https://eor13.github.io/projeto-api-github-mundo-real-com-fetch/'/>    
                    
                        
                    
                </ListCardProjects>
            </ContainerProjects>
            <ButtonScrollTop link=''/>     
        </>
    );
};

export { Projects };