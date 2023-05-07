import { CardProjects } from "../components/cardProjects";
import "./projects.css";


const Projects =() =>{
    return(
        <section className="containerProjects">
            <h1>Projetos</h1>
            <p>Estes são alguns projetos desenvolvidos onde aplico algumas tecnicas e tecnologias de desenvolvimentos aprendidas durante durente meu aprendizado de programador.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi vitae sapiente ipsa asperiores enim non magnam minus dolor quas? Rem vero dignissimos hic sapiente expedita odio necessitatibus, adipisci quibusdam illo?</p>
            <div className="cardProject">
                <CardProjects title ='Nome Projeto 1' image="http://placekitten.com/g/500/450" description ='descrição 1' link='www.google.com'/>  

                <CardProjects title ='Nome Projeto 2' image="http://placekitten.com/g/500/450" description ='descrição 2' link='www.google.com'/>    
                
                <CardProjects title ='Nome Projeto 3' image="http://placekitten.com/g/500/450" description ='descrição 3' link='www.google.com'/>    
                  
            </div>            
        </section>
    );
};

export { Projects };