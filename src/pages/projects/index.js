import { CardProject } from "../../components/cards";
import Project1 from "../../images/project-pokemon-api.png";
import Project2 from "../../images/project-github-api.gif";
import { ButtonScrollTop } from "../../components/buttons";
import { ContainerProjects, Intro, ListCardProjects, Title } from "./style";


const Projects =() =>{
    return(
        <ContainerProjects>
            <Title>Projetos</Title>
            <Intro >Estes são alguns projetos desenvolvidos onde aplico algumas tecnicas e tecnologias de desenvolvimentos aprendidas durante durente meu aprendizado de programador.</Intro>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi vitae sapiente ipsa asperiores enim non magnam minus dolor quas? Rem vero dignissimos hic sapiente expedita odio necessitatibus, adipisci quibusdam illo?</p> */}
            <ListCardProjects>
                <CardProject title ='Pokedex - consumo API em React' image={Project1} description ='O objetivo da Quest foi construir em React uma lista com 10 pokémons retirado da Pokemon API com seus nomes e imagens, podendo ser buscado + 10 pokemons a cada click realizado no botão posicionado ao final da lista. Cada quadrado que contém um pokemom pode ser clicavél, desta forma direcionando a outra página com informações especifícas(Nome, Tipo, Habiidades, ...) do pokémon clicado.' link='https://quest-react-avancado-eor13.vercel.app/'/>  

                <CardProject title ='GitHub Api data search page' image={Project2} description ='Projeto realizado para Desafio do Curso DevQuest tendo o objetivo de cria uma página que consuma a API do GitHub, onde conseguimos buscar um usuário e rotornar seu Nome, Perfil, Ultimos repositórios alterados, eventos, etc... ' link='https://eor13.github.io/projeto-api-github-mundo-real-com-fetch/'/>    
                
                <CardProject title ='Nome Projeto 3' image="http://placekitten.com/g/500/450" description ='descrição 3' link='www.google.com'/>    
                  
            </ListCardProjects>
            <ButtonScrollTop link='/projects'/>     
        </ContainerProjects>
    );
};

export { Projects };